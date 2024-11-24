import API_URL from "@/utils/utils";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { deleteFile } from "@/firebase/storage";

export async function DELETE(request: NextRequest) {
    const siteUrl = new URL(request.url);
    const id = siteUrl.pathname.split("/").pop();
    const product = (await axios.get(`${API_URL}/variant/${id}`)).data;
    const imageUrl = product.image;

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

    // Delete the product image from the storage
    console.log("IMAGE URL: ", imageUrl);
    try {
        await deleteFile(imageUrl);
    } catch (error) {
        // do nothing
    }

    try {
        const response = await axios.delete(`${API_URL}/variant/delete/${id}`,
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
        }
        return NextResponse.error();
    }
}
