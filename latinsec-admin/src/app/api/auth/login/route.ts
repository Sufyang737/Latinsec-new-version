import { connectMongoDB } from "@/libs/mongodb";
import User, { IUser } from "@/models/User";
import { messages } from "@/utils/messages";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest){
    try {
        await connectMongoDB();

        const body: IUser = await request.json();
        const { email, password } = body;

        //validar que se envien todos los campos
        if (!email || !password) {
            return NextResponse.json(
                {
                    message: messages.error.needProps,
                },
                {
                    status: 400,
                }
            );
        }

        const userFind = await User.findOne({ email  });

        //validar que exita el usuario con el email
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

        const isCorrect: boolean = await bcrypt.compare(
            password,
            userFind.password
        )

        //validar que la contraseña sea la correcta
        if (!isCorrect) {
            return NextResponse.json(
                {
                    messages: messages.error.incorrectPassword
                },
                {
                    status: 400
                }
            )
        }

        
        const { password: userPass, ...rest } = userFind._doc;

        const token = jwt.sign({ data: rest }, "secreto", {
            expiresIn: 86400,
        });

        const response = NextResponse.json(
            {userLogged: rest, messages: messages.success.userlogged},
            { status: 200 } 
        );
        
        response.cookies.set("auth_cookie", token, {
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 86400,
            path: "/",
        });

        return response;

    } catch (error) {
        return NextResponse.json(
            { message: messages.error.default, error },
            { status: 500 }
        );
    }
}