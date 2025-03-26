import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { Session } from "next-auth";

interface CustomUser {
    id: string;
    name: string | null;
    email: string;
    role: string;
    token?: string;
}

interface CustomSession extends Session {
    user: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
        role?: string;
    };
    accessToken?: string;
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: 'jwt'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            allowDangerousEmailAccountLinking: true,
        }),
        CredentialsProvider({
            id: "Credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    console.error("Missing email or password");
                    return null;
                }

                const user = await db.user.findUnique({
                    where: { email: credentials.email },
                });

                if (!user) {
                    console.error("User not found");
                    return null;
                }

                if (!user.password) {
                    console.error("User not found");
                    return null;
                }

                const isPasswordValid = await compare(credentials.password, user.password);
                if (!isPasswordValid) {
                    console.error("Invalid credentials");
                    return null;
                }

                if (!process.env.PRIVATE_KEY) {
                    console.error("Invalid Token Key");
                    return null;
                }


                const token = jwt.sign(
                    { name: user.name, role: user.role, email: user.email, id: user.id },
                    process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
                    { algorithm: 'RS256', expiresIn: '7d' }
                );

                return {
                    id: `${user.id}`,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    token
                };
            },
        }),
    ],
    pages: {
        signIn: '/login',
        error: '/auth/error'
    },
    callbacks: {
        async signIn({ account, profile }) {
            if (account?.provider === "google") {
                if (!profile?.email) {
                    console.error("Google sign-in failed: No email received");
                    return false;
                }

                let user = await db.user.findUnique({
                    where: { email: profile.email },
                });

                if (user) {
                    // If the user already exists, update their social ID
                    await db.user.update({
                        where: { email: profile.email },
                        data: { socialId: account.providerAccountId, socialIdType: 'GOOGLE' },
                    });
                } else {
                    user = await db.user.create({
                        data: {
                            name: profile.name ?? "Google User",
                            email: profile.email,
                            socialId: account.providerAccountId,
                            socialIdType: 'GOOGLE',
                            password: "",
                        },
                    });
                }

                if (!process.env.PRIVATE_KEY) {
                    console.error("Invalid Token Key");
                    return false;
                }


                const token = jwt.sign(
                    { name: user.name, role: user.role, email: user.email, id: user.id },
                    process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
                    { algorithm: 'RS256', expiresIn: '7d' }
                );
                account.access_token = token;
                return true;
            }
            return true;
        },

        async jwt(props) {
            const { token, user, account } = props;
            if (user) {
                const customUser = user as CustomUser;
                token.email = customUser?.email;
                token.role = customUser?.role;
                token.name = token.name;
                token.accessToken = customUser?.token;
            }
            if (account?.provider === "google" && account.access_token) {
                token.accessToken = account.access_token;
                token.email = token.email;
                token.name = token.name;
                token.role = token.role || "user";
            }
            return token;
        },

        async session(props) {
            const { session, token } = props;
            const customSession = session as CustomSession;
        
            customSession.user = {
                email: token.email as string | undefined,
                name: token.name as string | undefined,
                role: token.role as string | undefined, 
            };
        
            customSession.accessToken = token.accessToken as string | undefined; // ✅ Fix: Type assertion added
        
            return customSession;
        }

    },
};
