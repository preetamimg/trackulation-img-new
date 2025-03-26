import path from 'path';
import fs from 'fs/promises';
import sharp from 'sharp';

const sanitizeFileName = (fileBaseName: string): string => {
    return fileBaseName
        .replace(/[^a-zA-Z0-9\s]/g, "")  // Remove special characters
        .replace(/\s+/g, "_");           // Replace spaces with underscores
};

export const ImageUpload = async (
    thumbs: File | File[],
    folderName: string = '',
    requiredWidth: number | null = null,
    requiredHeight: number | null = null
) => {
    const thumbPaths: string[] = [];

    const uploadDir = path.join(process.cwd(), 'public', folderName);  // Directory for storing images

    // Ensure the directory exists
    await fs.mkdir(uploadDir, { recursive: true });

    const processImage = async (thumb: File) => {
        const timestamp = Date.now();
        const originalFileName = thumb.name;
        const fileBaseName = originalFileName.substring(0, originalFileName.lastIndexOf('.')) || 'image';
        const sanitizedFileName = sanitizeFileName(fileBaseName);

        const fileName = `${folderName}_${timestamp}_${sanitizedFileName}.webp`;  // Naming format
        const filePath = path.join(uploadDir, fileName);

        const fileBuffer = await thumb.arrayBuffer();
        const imageBuffer = Buffer.from(fileBuffer);

        // Validate image size if width and height are provided
        const metadata = await sharp(imageBuffer).metadata();
        const { width, height } = metadata;

        if (requiredWidth && requiredHeight) {
            const expectedSize = `${requiredWidth}x${requiredHeight}`;
            const actualSize = `${width}x${height}`;

            if (actualSize !== expectedSize) {
                throw new Error(`Invalid image size. Expected ${expectedSize}, but got ${actualSize}`);
            }
        }

        // Convert image to webp and save it
        const sharpBuffer = await sharp(imageBuffer)
            .webp()
            .toBuffer();

        await fs.writeFile(filePath, sharpBuffer);

        return `/${fileName}`;  // Return relative path
    };

    try {
        if (Array.isArray(thumbs)) {
            for (const thumb of thumbs) {
                const path = await processImage(thumb);
                thumbPaths.push(path);
            }
        } else if (thumbs) {
            const path = await processImage(thumbs);
            thumbPaths.push(path);
        }
    } catch (error) {
        console.error(`Error processing image: ${error instanceof Error ? error.message : error}`);
        throw new Error(`${error instanceof Error ? error.message : error}`);
    }

    return thumbPaths.length === 1 ? thumbPaths[0] : thumbPaths;
};

export const deleteImage = async (imagePath: string, folderName: string = '') => {
    if (!imagePath) return;
    const fullPath = path.join(process.cwd(), 'public', folderName, imagePath);
    try {
        await fs.unlink(fullPath);
    } catch (error) {
        if (error instanceof Error) {
            if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
                console.log(`Image not found at: ${fullPath}, no action needed.`);
            } else {
                console.error(`Failed to delete image at: ${fullPath}`, error.message);
                throw new Error(error.message);
            }
        }
    }
};

export const getImageUrl = (planFolder: string | null, imageName: string | null): string | null => {
    if (!imageName || !planFolder) return null;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3737";

    // Ensure no leading slash
    const sanitizedImageName = imageName.replace(/^\/+/, "");
    const sanitizedPlanFolder = planFolder.replace(/^\/+/, "").replace(/\/+$/, "");

    return `${baseUrl}/api/allImage?planFolder=${encodeURIComponent(sanitizedPlanFolder)}&imageName=${encodeURIComponent(sanitizedImageName)}`;
};
