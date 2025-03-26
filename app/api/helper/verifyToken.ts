import jwt from "jsonwebtoken";
import { getToken } from "next-auth/jwt";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

interface AuthRequest extends Request {
    auth?: { [key: string]: unknown };
    accessToken?: string; // Change type to string (not object)
}

// Function to handle authentication
export const getAuthToken = async (req: NextRequest) => {
    const headersResult = await headers(); // Await is necessary

    const nextRequest = new NextRequest(req.url, {
        headers: Object.fromEntries(headersResult.entries()),
    });

    const tokenData = await getToken({ req: nextRequest });

    const accessToken = tokenData?.accessToken as string | undefined;

    if (!accessToken) {
        return NextResponse.json({
            success: false,
            status: 401,
            message: "Unauthorized: No token found",
        }, { status: 401 });
    }

    const authReq: AuthRequest = Object.assign(req, { accessToken });

    return verifyToken(authReq);
};

export const verifyToken = (req: AuthRequest) => {

    // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', req.accessToken)
    const token = req.accessToken;

    if (!token || typeof token !== "string") {
        return NextResponse.json({
            success: false,
            status: 403,
            message: "A token is required for authentication",
        }, { status: 403 });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.PUBLIC_KEY as string, { algorithms: ["RS256"] });
        req.auth = decoded as { [key: string]: unknown };

        return null; // Authentication successful, no error response

    } catch (error) {
        console.log(error instanceof Error ? error.message : error);
        return NextResponse.json({
            success: false,
            status: 401,
            message: "Invalid Token",
        }, { status: 401 });
    }
};

export const userRole = (req: AuthRequest) => {
    try {
        const userRole = req.auth?.role;

        if (userRole !== "ADMIN") {
            return NextResponse.json({ success: false, status: 401, message: "User does not have access for this action" }, { status: 401 });
        }
        return null;

    } catch (error) {
        console.log(error instanceof Error ? error.message : error);
        return NextResponse.json({
            success: false,
            status: 401,
            message: "Invalid User",
        }, { status: 401 });
    }
}