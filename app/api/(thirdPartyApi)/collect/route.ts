import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

type TrackingData = {
    event: string;
    user_id: string;
    url: string;
    referrer: string;
    user_agent: string;
    ip_address: string;
    timestamp: number;
    screen_resolution: string;
};

export async function GET(req: NextRequest): Promise<NextResponse> {
    try {
        const cookieStore = await cookies();
        let userId: string | undefined = (await cookieStore).get("user_id")?.value;

        // If no user_id cookie exists, generate a new one
        if (!userId) {
            userId = crypto.randomUUID();
            (await cookieStore).set("user_id", userId, {
                httpOnly: true,
                secure: true,
                maxAge: 31536000, // 1 year
                sameSite: "lax",
                path: "/",
            });
        }

        // Parse incoming request data
        const body: { url?: string; referrer?: string; screen_resolution?: string } = await req.json();
        const trackingData: TrackingData = {
            event: "page_view",
            user_id: userId,
            url: body.url || "",
            referrer: body.referrer || "",
            user_agent: req.headers.get("user-agent") || "",
            ip_address: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "",
            timestamp: Date.now(),
            screen_resolution: body.screen_resolution || "",
        };

        return NextResponse.json({ success: true, message: "Tracking successful", user_id: userId, data: JSON.stringify(trackingData) });
    } catch (error) {
        console.error("Tracking Error:", error);
        return NextResponse.json({ success: false, message: "Tracking failed" }, { status: 500 });
    }
}
