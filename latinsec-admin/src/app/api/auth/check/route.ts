import { connectMongoDB } from "@/libs/mongodb";
import User, { IUser } from "@/models/User";
import { messages } from "@/utils/messages";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { headers } from "next/headers";


export async function GET(request: NextRequest) {
    try {
       const headerList = headers()
       const token = headerList.get("token")

        if (!token) {
            return NextResponse.json(
                { messages: messages.error.notAuthorized },
                { status: 400 }
            )
        }

        try{
            const isTokenValid = jwt.verify(token, 'secreto')
            //@ts-ignore
            const { data } = isTokenValid;

            await connectMongoDB()
            const userFind = await User.findById(data._id)
            if (!userFind) {
                return NextResponse.json(
                    { messages: messages.error.userNotFound },
                    { status: 400 }
                )
            }

            return NextResponse.json(
                {isAuthorized: true, message: messages.success.authorized },
                { status: 200 }
            )

        } catch (error) {
            return NextResponse.json(
                { message: messages.error.tokenNotInvalid },
                { status: 400 }
            )
        }
    } catch (error) {
        return NextResponse.json(
            { message: messages.error.default, error },
            { status: 500 }
        );
    }
}