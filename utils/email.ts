import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const sendOTPEmail = async (email: string, otp: string) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Your OTP Code",
            text: `Your OTP for registration is: ${otp}. This code is valid for 10 minutes.`,
        };

        await transporter.sendMail(mailOptions);

    } catch (error) {
        // Log any error for debugging and better error handling
        console.error('Error sending OTP email:', error);
        return NextResponse.json({
            success: false,
            status: 500,
            message: error
        });
    }
};
