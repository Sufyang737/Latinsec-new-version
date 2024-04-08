import { connectMongoDB } from "@/libs/mongodb";
import User, { IUser } from "@/models/User";
import { messages } from "@/utils/messages";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { Resend } from "resend"
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend("re_Uq8WPrfn_KgNaK3mgt71YS7CjTaWnpCFh")

export async function POST(request: NextRequest) {
    try {
        const body: {email: string} = await request.json();

        const {email} = body

        await connectMongoDB()
        const userFind = await User.findOne({ email })
        
        if (!userFind) {
            return NextResponse.json(
                {
                    messages: messages.error.userNotFound
                },
                {
                    status: 400
                }
            )
        }
        
        const tokenData = {
            email: userFind.email,
            userId: userFind._id,
        };

        const token = jwt.sign({ data: tokenData }, "secreto", {
            expiresIn: 86400,
        });

        const forgetUrl = `https://localhost:3000/change-password?token=${token}`;

        //@ts-ignore
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'syedsufyanahmed1@gmail.com',
            subject: 'Cambio de contraseña panel ADMIN LATINSEC',
            react: EmailTemplate({ buttonUrl: forgetUrl })
        })

        return NextResponse.json(
            { messages: messages.success.emailSent },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            { message: messages.error.default, error },
            { status: 500 }
        );
    }
}