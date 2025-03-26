import { db } from '@/lib/db';
import { compare, hash } from 'bcryptjs';
import { NextResponse } from 'next/server';
import { isOTPExpired } from '@/utils/otp';
import jwt from "jsonwebtoken";

export const POST = async (req: Request) => {
    try {
        const { email, otp, name, password } = await req.json();

        // **Find OTP in Database**
        const storedOTP = await db.otp.findUnique({ where: { email } });

        if (!storedOTP || isOTPExpired(storedOTP.expiresAt)) {
            return NextResponse.json({ success: false, status: 400, message: "Invalid or expired OTP" }, { status: 400 });
        }

        const isOtpValid = await compare(otp, storedOTP.otp);
        if (!isOtpValid) {
            return NextResponse.json({ success: false, status: 400, message: "Invalid OTP" }, { status: 400 });
        }

        // **Hash Password & Create User**
        const hashedPassword = await hash(password, 10);
        const newUser = await db.user.create({
            data: { name, email, password: hashedPassword },
        });

        // **Delete OTP from Database**
        await db.otp.delete({ where: { email } });

        if (!process.env.PRIVATE_KEY) {
            console.error("Invalid Token Key");
            return NextResponse.json({ success: false, status: 500, message: "Invalid Token Key" }, { status: 500 });
        }

        const token = jwt.sign(
            { name: newUser.name, role: newUser.role, email: newUser.email, id: newUser.id },
            process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
            { algorithm: 'RS256', expiresIn: '7d' }
        );

        return NextResponse.json({
            success: true,
            message: "Account verified and registered successfully",
            user: { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role, token: token },
        });
    } catch (error) {
        console.log(error instanceof Error ? error.message : error);
        return NextResponse.json({ success: false, status: 500, message: "Something went wrong" }, { status: 500 });
    }
};
