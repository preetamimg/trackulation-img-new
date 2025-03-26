import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { CompanyDetailSchema } from '@/app/api/helper/validations';
import { getAuthToken } from '@/app/api/helper/verifyToken';

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
        const company = await db.companyDetail.findUnique({
            where: { id }
        });

        if (!company) {
            return NextResponse.json({ success: false, message: "Company not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: "Company details found successfully.", data: company }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Error fetching company details" }, { status: 500 });
    }
}

// Update Company
export async function PUT(req: AuthRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const authResponse = await getAuthToken(req);
        if (authResponse) return authResponse;

        const id = (await params).id
        
        const body = await req.json();
        const { companyId, companyWebsite, companyWebsiteName, countryId, currency, timezone, analyticStatus, marketingStatus, extendedUrl, cookiePolicy, knowledgeConsent } = body;
        const userId = req.auth?.id;
        const addedBy = userId

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

        const updatedCompany = await db.companyDetail.update({
            where: { id },
            data: validatedData,
        });

        return NextResponse.json({ success: true, message: "Company details updated successfully.", data: updatedCompany }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Error updating company details" }, { status: 500 });
    }
}

// Delete Company
export async function DELETE(req: AuthRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const authResponse = await getAuthToken(req);
        if (authResponse) return authResponse;

        const id = (await params).id;

        await db.companyDetail.delete({ where: { id } });
        return NextResponse.json({ success: true, message: "Company details deleted successfully" });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Error deleting company details" }, { status: 500 });
    }
}
