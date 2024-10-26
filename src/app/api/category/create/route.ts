import API_URL from "@/utils/utils";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { name } = await request.json();
    const accessToken = request.cookies.get("accessTokenAdmin");
    if (!accessToken) {
        return NextResponse.error();
    }
    try {
        const response = await axios.post(
            `${API_URL}/category/create`,
            {
                name,
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken.value}`,
                },
            }
        );
        return NextResponse.json(response.data);
    } catch (error) {
        if (error instanceof axios.AxiosError) {
            return NextResponse.json(error.response?.data);
        } else {
            return NextResponse.error();
        }
    }
}
