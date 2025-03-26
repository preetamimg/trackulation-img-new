import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { verifyToken } from "../../helper/verifyToken";

interface AuthRequest extends Request {
    auth?: { id?: string };
}


export const GET = async (req: AuthRequest) => {
    try {
        const authResponse = verifyToken(req);
        if (authResponse) return authResponse;

        const userId = req.auth?.id;

        const newDetails = await db.user.findUnique({
            where: {
                id: userId,
            },
        });

        if (!newDetails) {
            return NextResponse.json({
                success: false,
                status: 404,
                message: 'User not found',
            }, { status: 404 });
        }

        const result = {
            status: 200,
            success: true,
            message: 'Details fetch successfully',
            user: { id: newDetails.id, name: newDetails.name, email: newDetails.email, role: newDetails.role },
        }
        return NextResponse.json(result);

    } catch (error) {
        console.log(error instanceof Error ? error.message : error);
        return NextResponse.json({ success: false, status: 500, message: "Something went wrong" }, { status: 500 });
    }
};
