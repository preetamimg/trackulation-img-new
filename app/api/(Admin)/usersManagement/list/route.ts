import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { getAuthToken, userRole } from '../../../helper/verifyToken';
// import path from 'path';
// import fs from 'fs';

interface AuthRequest extends NextRequest {
    auth?: { id?: string };
}

export const GET = async (req: AuthRequest) => {
    try {
        const authResponse = await getAuthToken(req);
        if (authResponse) return authResponse;

        const roleResponse = userRole(req);
        if (roleResponse) return roleResponse;

        const userId = req.auth?.id;
        const page = Number(req.nextUrl.searchParams.get('page') || 1);
        const pageSize = Number(req.nextUrl.searchParams.get('pageSize') || 10);

        const skip = (page - 1) * pageSize;
        const take = pageSize;

        const listUsers = await db.user.findMany({
            where: {
                id: {
                    not: userId,  // Exclude the current user
                },
            },
            skip: skip,
            take: take,
            select: {
                id: true,
                name: true,
                email: true,
                emailVerified: true,
                image: true,
                role: true,
                socialId: true,
                socialIdType: true,
                createdAt: true,
                updatedAt: true,
                _count: {
                    select: {
                        companyDetails: true,
                    },
                },
            },
        });



        if (!listUsers) {
            return NextResponse.json({
                success: false,
                status: 400,
                message: 'User not found',
            }, { status: 400 });
        }

        const totalRecords = await db.user.count({
            where: {
                id: {
                    not: userId,
                },
            },
        });

        const totalPages = Math.ceil(totalRecords / take);

        const result = {
            success: true,
            message: 'Details fetch successfully',
            data: listUsers,
            pagination: {
                page: Number(page),
                pageSize: Number(pageSize),
                totalRecords: totalRecords,
                totalPages: totalPages,
            },
        }
        return NextResponse.json(result, { status: 200 });

    } catch (error) {
        console.log(error instanceof Error ? error.message : error);
        return NextResponse.json({ success: false, status: 500, message: "User not found" }, { status: 500 });
    }
};