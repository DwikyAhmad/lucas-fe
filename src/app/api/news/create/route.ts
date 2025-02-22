import API_URL from "@/utils/utils";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { uploadFile } from "@/firebase/storage";

export async function POST(request: NextRequest) {
    const data = await request.formData();

    const title = data.get("title");
    const writer = data.get("writer");
    const teaser = data.get("teaser");
    const newsPoster = data.get("newsPoster");
    const newsFile = data.get("newsFile");

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

    const posterUrl = await uploadFile(newsPoster, "news"); //Menyesuaikan firebase
    const fileUrl = await uploadFile(newsFile, "news"); //Menyesuaikan firebase

    try {
        const response = await axios.post(
            `${API_URL}/news/create`,
            {
                title,
                writer,
                teaser,
                imageUrl: posterUrl,
                fileUrl: fileUrl,
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
