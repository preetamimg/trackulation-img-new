import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { CompanyDetailSchema } from "../../helper/validations";
import { getAuthToken } from '../../helper/verifyToken';

interface AuthRequest extends NextRequest {
    auth?: { id?: string };
    accessToken?: string;
}


// Create Company Detail with Validation
export async function POST(req: AuthRequest) {
    try {
        const authResponse = await getAuthToken(req);
        if (authResponse) return authResponse;

        const body = await req.json();
        const { companyId, companyWebsite, companyWebsiteName, countryId, currency, timezone, analyticStatus, marketingStatus, extendedUrl, cookiePolicy, knowledgeConsent } = body;
        const userId = req.auth?.id;
        const addedBy = userId;

        const validation = CompanyDetailSchema.safeParse({
            companyId,
            companyWebsite,
            companyWebsiteName,
            countryId,
            currency,
            timezone,
            analyticStatus,
            marketingStatus,
            extendedUrl,
            cookiePolicy,
            knowledgeConsent,
            addedBy
        });

        if (!validation.success) {
            return NextResponse.json({ success: false, message: validation.error.format() }, { status: 400 });
        }

        const validatedData = validation.data;
        const lastTrackingCode = await db.companyDetail.findFirst({
            orderBy: {
                trackingCode: 'desc',
            },
            select: {
                trackingCode: true,
            },
        });

        // Get the last tracking number (TA1, TA2, etc.)
        const lastTrackingNumber = lastTrackingCode?.trackingCode ? parseInt(lastTrackingCode.trackingCode.replace('TA', '')) : 0;
        const newTrackingCode = `TA${lastTrackingNumber + 1}`;

        const newDetail = await db.companyDetail.create({
            data: {
                ...validatedData,
                trackingCode: newTrackingCode,
            }
        });
        return NextResponse.json({ success: true, message: "Tracking container created successfully.", data: newDetail }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Error creating tracking container." }, { status: 500 });
    }
}

// Get All Company Details
export async function GET(req: AuthRequest) {
    try {
        const authResponse = await getAuthToken(req);
        if (authResponse) return authResponse;

        const userId = req.auth?.id;

        const page = Number(req.nextUrl.searchParams.get('page') || 1);
        const pageSize = Number(req.nextUrl.searchParams.get('pageSize') || 10);

        const skip = (page - 1) * pageSize;
        const take = pageSize;

        const details = await db.companyDetail.findMany({
            where: {
                addedBy: userId,
            },
            skip: skip,
            take: take,
            include: {
                company: {
                    select: {
                        companyName: true,
                    },
                },
            },
        });
        const totalRecords = await db.companyDetail.count({
            where: {
                addedBy: userId,
            },
        });

        const totalPages = Math.ceil(totalRecords / take);
        return NextResponse.json({
            success: true,
            message: "List all tracking containers.",
            data: details,
            pagination: {
                page: Number(page),
                pageSize: Number(pageSize),
                totalRecords: totalRecords,
                totalPages: totalPages,
            },
        }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Error fetching tracking containers." }, { status: 500 });
    }
}
