import API_URL from "@/utils/utils";
import axios from "axios";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    if (
        pathname.startsWith("/admin") &&
        pathname !== "/admin" &&
        pathname !== "/admin/login" &&
        pathname !== "/admin/register"
    ) {
        const accessToken = request.cookies.get("accessTokenAdmin");
        if (!accessToken) {
            return NextResponse.redirect(new URL("/admin", request.url));
        } else {
            try {
                const response = await axios.get(`${API_URL}/admin`, {
                    headers: {
                        Authorization: `Bearer ${accessToken.value}`,
                    },
                });
                const isVerified = response.data.admin.isVerified;
                if (!isVerified) {
                    return NextResponse.redirect(
                        new URL("/admin", request.url)
                    );
                }
                return NextResponse.next();
            } catch (error) {
                return NextResponse.redirect(new URL("/admin", request.url));
            }
        }
    }

    if (pathname.startsWith("/complaint")) {
        const accessToken = request.cookies.get("accessTokenUser");
        if (!accessToken) {
            return NextResponse.redirect(new URL("/login", request.url));
        }

        try {
            await axios.get(`${API_URL}/user`, {
                headers: {
                    Authorization: `Bearer ${accessToken.value}`,
                },
            });
            return NextResponse.next();
        } catch (error) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }
}
