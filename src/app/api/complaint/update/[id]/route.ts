import API_URL from "@/utils/utils";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    const siteUrl = new URL(request.url);
    const id = siteUrl.pathname.split("/").pop();

    // Check if the user is authenticated
    const accessToken = request.cookies.get("accessTokenAdmin");
    if (!accessToken) {
        return NextResponse.error();
    }

    // Check if the user is verified
    try {
        const response = await axios.get(`${API_URL}/admin`, {
            headers: {
                Authorization: `Bearer ${accessToken.value}`,
            },
        });
        const isVerified = response.data.admin.isVerified;
        if (!isVerified) {
            return NextResponse.error();
        }
    } catch (error) {
        return NextResponse.error();
    }

    try {
        const response = await axios.patch(
            `${API_URL}/complaint/update/${id}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${accessToken.value}`,
                },
            }
        );
        console.log(response);
        return NextResponse.json(response.data);
    } catch (error) {
        if (error instanceof axios.AxiosError) {
            console.log(error.response?.data);
            return NextResponse.json(error.response?.data);
        }
        return NextResponse.error();
    }
}
