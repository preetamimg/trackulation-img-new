import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { CompanySchema } from "../../helper/validations";
import { getAuthToken } from '../../helper/verifyToken';

interface AuthRequest extends NextRequest {
    auth?: { id?: string };
    accessToken?: string;
}

// Get Single Company by ID
export async function GET(req: AuthRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const authResponse = await getAuthToken(req);
        if (authResponse) return authResponse;

        const id = (await params).id
        const company = await db.company.findUnique({
            where: { id },
            include: { companyDetails: true },
        });

        if (!company) {
            return NextResponse.json({ success: false, message: "Company not found." }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: "List all companies.", data: company }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Error fetching company." }, { status: 500 });
    }
}

// Update Company
export async function PUT(req: AuthRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const authResponse = await getAuthToken(req);
        if (authResponse) return authResponse;

        const id = (await params).id

        const body = await req.json();
        const { companyName, companyType, companySize, companyTnc } = body;
        const userId = req.auth?.id;
        const addedBy = userId;

        const validation = CompanySchema.safeParse({
            companyName,
            companyType,
            companySize,
            companyTnc,
            addedBy
        });

        if (!validation.success) {
            return NextResponse.json({ success: false, message: validation.error.format() }, { status: 400 });
        }

        const validatedData = validation.data;

        const updatedCompany = await db.company.update({
            where: { id },
            data: validatedData,
        });
        

        return NextResponse.json({ success: true, message: "Company updated successfully.", data: updatedCompany }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Error updating company." }, { status: 500 });
    }
}

// Delete Company
export async function DELETE(req: AuthRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const authResponse = await getAuthToken(req);
        if (authResponse) return authResponse;
        const id = (await params).id
        await db.company.delete({ where: { id } });
        return NextResponse.json({ success: true, message: "Company deleted successfully" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Error deleting company." }, { status: 500 });
    }
}
