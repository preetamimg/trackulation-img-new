import { db } from '@/lib/db';
import { compare, hash } from 'bcryptjs';
import { NextResponse } from 'next/server';
import { isOTPExpired } from '@/utils/otp';
import * as z from 'zod';

const FormSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
        .string()
        .min(1, 'Password is required')
        .min(8, 'Password must have than 8 characters'),
    otp: z.string().min(6, 'OTP is required').min(6, 'OTP must have than 6 characters'),
});

export const PUT = async (req: Request) => {
    try {
        const body = await req.json();
        const { email, password, otp } = FormSchema.parse(body);

        const storedOTP = await db.otp.findUnique({ where: { email: email } });

        if (!storedOTP || isOTPExpired(storedOTP.expiresAt)) {
            return NextResponse.json({ success: false, status: 400, message: "Invalid or expired OTP" }, { status: 400 });
        }

        const isOtpValid = await compare(otp, storedOTP.otp);
        if (!isOtpValid) {
            return NextResponse.json({ success: false, status: 400, message: "Invalid OTP" }, { status: 400 });
        }
        // **Delete OTP from Database**
        await db.otp.delete({ where: { email: email } });

        const hashedPassword = await hash(password, 10);

        const user = await db.user.update({
            where: { email: email },
            data: { password: hashedPassword },
        });

        if (!user) {
            return NextResponse.json({
                success: false,
                status: 400,
                message: 'User does not exist !!'
            }, { status: 400 });
        }

        return NextResponse.json({
            success: true,
            message: "Password updated successfully !! Please login",
        });
    } catch (error) {
        console.log(error instanceof Error ? error.message : error);
        return NextResponse.json({ success: false, status: 500, message: "Something went wrong" }, { status: 500 });
    }
};
