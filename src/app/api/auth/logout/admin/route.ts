import API_URL from "@/utils/utils";
import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const accessToken = request.cookies.get('accessTokenAdmin');
    if (!accessToken) {
        return NextResponse.error();
    }
    try { 
        const response = await axios.get(`${API_URL}/auth/logout/admin`, {
            headers: {
                Authorization: `Bearer ${accessToken.value}`,
            },
        })
        console.log("berhasil fetch")
        cookies().delete('accessTokenAdmin');
        return NextResponse.json(response.data);
    } catch (error) {
        if (error instanceof axios.AxiosError) {
            return NextResponse.json(error.response?.data);
        } else {
            return NextResponse.error();
        }
    }
    
}