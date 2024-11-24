import API_URL from "@/utils/utils";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { uploadFile, deleteFile } from "@/firebase/storage";

export async function PUT(request: NextRequest) {
    const data = await request.formData();
    const siteUrl = new URL(request.url);
    const id = siteUrl.pathname.split("/").pop();
    const name = data.get("name");
    const description = data.get("description");
    const price = data.get("price");
    const image = data.get("image");
    const imageUrl = data.get("imageUrl");
    const type = data.get("type");
    const composition = JSON.parse(data.get("composition") as string);
    const stock = data.get("stock");
    const productBy = data.get("productBy");
    const packaging = data.get("packaging");
    const categoryId = JSON.parse(data.get("categoryId") as string);
    const productId = data.get("productId");

    const accessToken = request.cookies.get("accessTokenAdmin");
    if (!accessToken) {
        return NextResponse.error();
    }

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

    let url;
    console.log("IMAGE URL: ", imageUrl);
    if (image instanceof File) {

        try {
            await deleteFile(imageUrl);
        } catch (error) {
            // do nothing
        }

        url = await uploadFile(image, "variant");
    } else {
        url = imageUrl;
    }

    try {
        const response = await axios.put(
            `${API_URL}/variant/update/${id}`,
            {
                name,
                description,
                price: parseFloat(price as string),
                image: url,
                type,
                composition,
                stock: parseInt(stock as string),
                productBy,
                packaging,
                categoryId,
                productId,
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
        }
        return NextResponse.error();
    }
}
