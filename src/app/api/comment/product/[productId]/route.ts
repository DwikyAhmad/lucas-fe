import API_URL from "@/utils/utils";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const siteUrl = new URL(request.url);
    const productId = siteUrl.pathname.split("/").pop();

    try {
        const response = await axios.get(`${API_URL}/comment/product/${productId}`);
        return NextResponse.json(response.data);
    } catch (error) {
        if (error instanceof axios.AxiosError) {
            return NextResponse.json(error.response?.data);
        }
        return NextResponse.error();
    }
} 