import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { CompanySchema } from '../helper/validations';
import { getAuthToken } from '../helper/verifyToken';

interface AuthRequest extends NextRequest {
    auth?: { id?: string };
    accessToken?: string;
}


// Create Company
export async function POST(req: AuthRequest) {
    try {
        const authResponse = await getAuthToken(req);
        if (authResponse) return authResponse;

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

        const newCompany = await db.company.create({ data: validatedData });

        return NextResponse.json({ success: true, message: "Company created successfully.", data: newCompany }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Error creating company." }, { status: 500 });
    }
}

// Get All Companies
export async function GET(req: AuthRequest) {
    try {
        const authResponse = await getAuthToken(req);
        if (authResponse) return authResponse;

        const userId = req.auth?.id;


        const companies = await db.company.findMany({
            where: {
                addedBy: userId,
            },
            include: { companyDetails: true },
        });

        return NextResponse.json({ success: true, message: "List all companies.", data: companies }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Error fetching company." }, { status: 500 });
    }
}
