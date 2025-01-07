import { NextRequest, NextResponse } from "next/server";
import API_URL from "@/utils/utils";
import axios from "axios";

export async function GET(request: NextRequest) {
    const accessToken = request.cookies.get("accessTokenUser");

    if (!accessToken) {
        return NextResponse.error();
    }

    try {
        const response = await axios.get(`${API_URL}/user`, {
            headers: {
                Authorization: `Bearer ${accessToken.value}`,
            },
        });
        const user = response.data.user;
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.error();
    }
}
