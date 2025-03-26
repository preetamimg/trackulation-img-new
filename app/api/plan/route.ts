import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import * as z from 'zod';
import { getAuthToken, userRole } from '../helper/verifyToken';
import { deleteImage, getImageUrl, ImageUpload } from "@/utils/uploadFiles";
import { v4 as uuidv4 } from 'uuid';
// import path from 'path';
// import fs from 'fs';

interface AuthRequest extends NextRequest {
    accessToken?: string;
}

// Zod Schema Validation
const FormSchema = z.object({
    id: z.string().optional(),
    planName: z.string().min(1, 'Name is required').max(100, 'Plan name must be at most 100 characters'),
    popular: z.string().optional(),
    discount: z.number().int().min(0, 'Discount cannot be negative').optional(),
    monthlyPrice: z.number().int().min(0, 'Monthly price cannot be negative').optional(),
    yearlyPrice: z.number().int().min(0, 'Yearly price cannot be negative').optional(),
    userAccessLimit: z.string().max(255, 'User access limit should not exceed 255 characters').optional(),
    websiteAccessLimit: z.string().max(255, 'Website access limit should not exceed 255 characters').optional(),
    conversions: z.string().optional(),
    addons: z.array(z.string()).optional(),
    imageUrl: z.union([z.string(), z.array(z.string())]).optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
});

// GET Request - Fetch All Plans
export const GET = async (req: AuthRequest) => {
    try {
        const authResponse = await getAuthToken(req);
        if (authResponse) return authResponse;

        const roleResponse = userRole(req);
        if (roleResponse) return roleResponse;

        const plans = await db.plan.findMany();
        const formattedPlans = plans.map((plan) => ({
            ...plan,
            imageUrl: getImageUrl('plans', plan.imageUrl),
            addons: Array.isArray(plan.addons)
                ? plan.addons.map((addon) => ({
                    id: uuidv4(),
                    value: addon,
                }))
                : [],
        }));

        return NextResponse.json({
            success: true,
            message: "List all plans.",
            plans: formattedPlans,
        });
    } catch (error) {
        console.error("Error:", error instanceof Error ? error.message : error);
        return NextResponse.json(
            { success: false, status: 500, message: "Internal Server Error" },
            { status: 500 }
        );
    }
};


// POST Request - Create a New Plan
export const POST = async (req: NextRequest) => {
    try {
        const authResponse = await getAuthToken(req);
        if (authResponse) return authResponse;

        const roleResponse = userRole(req);
        if (roleResponse) return roleResponse;

        const form = await req.formData();
        const addons = [];
        for (let i = 0; ; i++) {
            const addon = form.get(`addOns[${i}]`);
            if (!addon) break;
            addons.push(addon);
        }

        const file = form.get("imageUrl");
        const imageUrl = file instanceof File ? await ImageUpload(file, "plans") : null;
        // const imageUrl = file ? await ImageUpload(file, "plans") : null;

        const validatedData = {
            planName: form.get("planName"),
            monthlyPrice: Number(form.get("monthlyPrice")),
            yearlyPrice: Number(form.get("yearlyPrice")),
            userAccessLimit: form.get("userAccessLimit"),
            websiteAccessLimit: form.get("websiteAccessLimit"),
            popular: form.get("popular"),
            discount: Number(form.get("discount")),
            conversions: form.get("conversions"),
            addons,
            imageUrl
        };

        const parsedData = FormSchema.parse(validatedData);

        // const newPlan = await db.plan.create({ data: parsedData });
        const newPlan = await db.plan.create({
            data: {
                planName: parsedData.planName,
                monthlyPrice: parsedData.monthlyPrice,
                yearlyPrice: parsedData.yearlyPrice,
                userAccessLimit: parsedData.userAccessLimit,
                websiteAccessLimit: parsedData.websiteAccessLimit,
                popular: parsedData.popular === "true",
                discount: parsedData.discount,
                conversions: parsedData.conversions === "true",
                addons: parsedData.addons,
                imageUrl: Array.isArray(parsedData.imageUrl) ? parsedData.imageUrl[0] : parsedData.imageUrl ?? null,
            }
        });

        return NextResponse.json({ success: true, message: "Plan created successfully.", plan: newPlan });
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            success: false,
            status: error instanceof z.ZodError ? 400 : 500,
            message: error instanceof z.ZodError
                ? "Validation error: " + error.errors.map(e => e.message).join(", ")
                : "Something went wrong! Please try again later."
        }, { status: error instanceof z.ZodError ? 400 : 500, });
    }
};

// PUT Request - Update Existing Plan
export const PUT = async (req: NextRequest) => {
    try {
        const authResponse = await getAuthToken(req);
        if (authResponse) return authResponse;

        const roleResponse = userRole(req);
        if (roleResponse) return roleResponse;

        const form = await req.formData();
        const addons = [];
        for (let i = 0; ; i++) {
            const addon = form.get(`addOns[${i}]`);
            if (!addon) break;
            addons.push(addon);
        }

        const planId = form.get("id") as string;

        if (!planId) return NextResponse.json({ success: false, status: 400, message: "Plan ID is required." }, { status: 404 });

        const existingPlan = await db.plan.findUnique({ where: { id: planId } });

        if (!existingPlan) return NextResponse.json({ success: false, status: 404, message: "Plan not found." }, { status: 404 });

        let imageUrl = existingPlan.imageUrl;
        const file = form.get("imageUrl");

        if (file instanceof File) {
            if (existingPlan.imageUrl) {
                await deleteImage(`/plans/${existingPlan.imageUrl}`);
            }
            const uploadedImage = await ImageUpload(file, "plans");
            imageUrl = Array.isArray(uploadedImage) ? uploadedImage[0] : uploadedImage;
        }

        const updatedData: unknown = {
            planName: form.get("planName") || existingPlan.planName,
            monthlyPrice: form.get("monthlyPrice") ? Number(form.get("monthlyPrice")) : existingPlan.monthlyPrice,
            yearlyPrice: form.get("yearlyPrice") ? Number(form.get("yearlyPrice")) : existingPlan.yearlyPrice,
            discount: form.get("discount") ? Number(form.get("discount")) : existingPlan.discount,
            userAccessLimit: form.get("userAccessLimit") || existingPlan.userAccessLimit,
            websiteAccessLimit: form.get("websiteAccessLimit") || existingPlan.websiteAccessLimit,
            popular: form.get("popular") || existingPlan.popular,
            conversions: form.get("conversions") || existingPlan.conversions,
            addons,
            imageUrl
        };

        const parsedData = FormSchema.partial().parse(updatedData);

        const updatedPlan = await db.plan.update({
            where: { id: planId }, data: {
                planName: parsedData.planName,
                popular: parsedData.popular === "true" ? true : parsedData.popular === "false" ? false : !!parsedData.popular,
                discount: parsedData.discount ?? 0,
                monthlyPrice: parsedData.monthlyPrice,
                yearlyPrice: parsedData.yearlyPrice,
                userAccessLimit: parsedData.userAccessLimit,
                websiteAccessLimit: parsedData.websiteAccessLimit,
                conversions: parsedData.conversions === "true" ? true : parsedData.conversions === "false" ? false : !!parsedData.conversions,
                addons: parsedData.addons,
                imageUrl: Array.isArray(parsedData.imageUrl) ? parsedData.imageUrl[0] : parsedData.imageUrl ?? null,
            }
        });

        return NextResponse.json({ success: true, message: "Plan updated successfully.", plan: updatedPlan });
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            success: false,
            status: error instanceof z.ZodError ? 400 : 500,
            message: error instanceof z.ZodError
                ? "Validation error: " + error.errors.map(e => e.message).join(", ")
                : "Something went wrong! Please try again later."
        }, { status: error instanceof z.ZodError ? 400 : 500, });
    }
};

// DELETE Request - Delete a Plan
export const DELETE = async (req: NextRequest) => {
    try {
        const authResponse = await getAuthToken(req);
        if (authResponse) return authResponse;

        const roleResponse = userRole(req);
        if (roleResponse) return roleResponse;

        // const { id } = await req.json();
        const searchParams = req.nextUrl.searchParams
        const id = searchParams.get('id') ?? undefined;

        if (!id) {
            return NextResponse.json({ success: false, status: 401, message: "ID is required" }, { status: 401 });
        }

        const existingPlan = await db.plan.delete({ where: { id } });

        if (existingPlan.imageUrl) await deleteImage(`/plans/${existingPlan.imageUrl}`);

        return NextResponse.json({ success: true, message: "Plan deleted successfully." });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, status: 500, message: "Internal Server Error" }, { status: 500 });
    }
};
