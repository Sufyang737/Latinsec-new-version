import { connectMongoDB } from "@/libs/mongodb";
import User, { IUser } from "@/models/User";
import { messages } from "@/utils/messages";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    try {
        await connectMongoDB()

        const user = await User.find()
        return NextResponse.json(
            { user },
            {status: 200}
        )

    } catch (error) {
        return NextResponse.json(
            { message: messages.error.default, error },
            { status: 500 }
        );
    } 
}