import { db } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';
import { NextResponse } from 'next/server';
import { getImageUrl } from '@/utils/uploadFiles';

export const GET = async () => {
    try {

        const plans = await db.plan.findMany();
        const formattedPlans = plans.map((plan) => ({
            ...plan,
            imageUrl: getImageUrl('plans', plan.imageUrl),
            addons: Array.isArray(plan.addons)
                ? plan.addons.map((addon) => ({
                    id: uuidv4(),
                    value: addon,
                }))
                : [],
        }));

        return NextResponse.json({
            success: true,
            message: "List all plans.",
            plans: formattedPlans,
        });
    } catch (error) {
        console.error("Error:", error instanceof Error ? error.message : error);
        return NextResponse.json(
            { success: false, status: 500, message: "Internal Server Error" },
            { status: 500 }
        );
    }
};