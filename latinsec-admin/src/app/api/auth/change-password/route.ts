import { connectMongoDB } from "@/libs/mongodb";
import User, { IUser } from "@/models/User";
import { messages } from "@/utils/messages";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { headers } from "next/headers";
import bcrypt from "bcryptjs"

interface BodyProps{
    newPassword: string;
    confirmPassword: string;
}

export async function POST(request: NextRequest) {
    try {
        const body: BodyProps = await request.json();
        const {newPassword, confirmPassword} = body

        //validar que esten todos los campos
        if(!newPassword || !confirmPassword) {
            return NextResponse.json(
                { messages: messages.error.needProps },
                { status: 400 } 
            )
        }

        await connectMongoDB()
        const headersList = headers()
        const token = headersList.get('token')
        
        //valiar si hay token
        if(!token) {
            return NextResponse.json(
                { messages: messages.error.notAuthorized },
                { status: 400 }
            )
        }

        try {
            const isTokenValid = jwt.verify(token, 'secreto')

            //@ts-ignore
            const { data } = isTokenValid;

            const userFind = await User.findById( data.userId )

            //validar que el usuario exita 
            if (!userFind) {
                return NextResponse.json(
                    { messages: messages.error.userNotFound },
                    { status: 400 }
                )
            }

            if (newPassword !== confirmPassword) {
                return NextResponse.json(
                    { message: messages.error.passwordsNotMatch },
                    { status: 400 }
                );
            }
            const hashedPassword = await bcrypt.hash(newPassword, 10)

            userFind.password = hashedPassword

            await userFind.save()

            return NextResponse.json(
                { message: messages.success.passwordChanged },
                { status: 200 }
            )
        }catch(error){
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