import API_URL from "@/utils/utils";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { content, rating, productId } = await request.json();

    const accessToken = request.cookies.get("accessTokenUser");
    if (!accessToken) {
        return NextResponse.json({ message: "User not logged in" }, { status: 401 });
    }

    try {
        await axios.get(`${API_URL}/user`, {
            headers: {
                Authorization: `Bearer ${accessToken.value}`,
            },
        });
    } catch (error) {
        return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    try {
        const response = await axios.post(`${API_URL}/comment/create`, {
            content,
            rating,
            productId
        }, {
            headers: {
                Authorization: `Bearer ${accessToken.value}`,
            },
        });
        return NextResponse.json(response.data);
    } catch (error) {
        if (error instanceof axios.AxiosError) {
            return NextResponse.json(error.response?.data);
        }
        return NextResponse.error();
    }
} 