import { getAuthToken, userRole } from '@/app/api/helper/verifyToken';
import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

interface AuthRequest extends NextRequest {
    auth?: { id?: string };
    accessToken?: string;
}

// Get Single Company by ID
export async function GET(req: AuthRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const authResponse = await getAuthToken(req);
        if (authResponse) return authResponse;

        const roleResponse = userRole(req);
        if (roleResponse) return roleResponse;

        const id = (await params).id
        const company = await db.company.findMany({
            where: { addedBy: id }
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