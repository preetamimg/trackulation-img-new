import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
    try {
        const { searchParams } = new URL(req.url);
        let imageName = searchParams.get("imageName");
        let planFolder = searchParams.get("planFolder");

        if (!imageName) {
            return NextResponse.json(
                { success: false, message: "Image name is required" },
                { status: 400 }
            );
        }

        if (!planFolder) {
            return NextResponse.json(
                { success: false, message: "Folder name is required" },
                { status: 400 }
            );
        }

        // Remove leading slash if present
        imageName = imageName.replace(/^\/+/, "");
        planFolder = planFolder.replace(/^\/+/, "").replace(/\/+$/, "");

        // Ensure correct directory path (No double `public`)
        const imagePath = path.join(process.cwd(), "public", planFolder, imageName);

        if (!fs.existsSync(imagePath)) {
            return NextResponse.json(
                { success: false, message: "Image not found" },
                { status: 404 }
            );
        }

        const fileStream = fs.readFileSync(imagePath);
        const ext = path.extname(imageName).toLowerCase();

        const contentTypeMap: { [key: string]: string } = {
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
            ".webp": "image/webp",
            ".gif": "image/gif",
            ".svg": "image/svg+xml",
        };

        return new NextResponse(fileStream, {
            status: 200,
            headers: {
                "Content-Type": contentTypeMap[ext] || "application/octet-stream",
            },
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: `Server error: ${(error as Error).message}` },
            { status: 500 }
        );
    }
};
