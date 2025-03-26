import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import * as z from 'zod';
import { generateOTP } from '@/utils/otp';
import { sendOTPEmail } from '@/utils/email';
import bcrypt from 'bcryptjs';

const FormSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email'),
});

export const POST = async (req: Request) => {
    try {
        const body = await req.json();
        const { email } = FormSchema.parse(body);

        const user = await db.user.findUnique({
            where: { email: email }
        });
        if (!user) {
            return NextResponse.json({
                success: false,
                status: 400,
                message: 'User does not exist !!'
            }, { status: 400 });
        }

        const existingOTP = await db.otp.findUnique({ where: { email } });
        const now = new Date();

        if (existingOTP) {
            const lastSentTime = new Date(existingOTP.updatedAt);
            const timeDiff = (now.getTime() - lastSentTime.getTime()) / 1000; // Difference in seconds

            if (timeDiff < 60) {
                return NextResponse.json({
                    success: false,
                    status: 429,
                    message: "OTP already sent. Please wait for 1 minute before requesting again.",
                }, { status: 429 });
            }
        }

        const otp = generateOTP();
        const otpExpiry = new Date(now.getTime() + 10 * 60 * 1000);

        const salt = await bcrypt.genSalt(10);
        const hashedOtp = await bcrypt.hash(otp, salt)

        await db.otp.upsert({
            where: { email },
            update: { otp: hashedOtp, expiresAt: otpExpiry, updatedAt: now },
            create: { email, otp: hashedOtp, expiresAt: otpExpiry },
        });

        await sendOTPEmail(email, otp);

        return NextResponse.json({ success: true, message: "OTP sent to your email. Please verify your account." });

    } catch (error) {
        console.log(error instanceof Error ? error.message : error);
        return NextResponse.json({
            success: false,
            status: 500,
            message: error
        }, { status: 500 });
    }
};
