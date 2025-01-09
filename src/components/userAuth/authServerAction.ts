"use server";

import API_URL from "@/utils/utils";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function redirectPage() {
    redirect("/");
}

export async function handleLogout() { 
    const cookieStore = cookies();
    const token = cookieStore.get('accessTokenUser')
    let success = false;

    try {
        await axios.get(`${API_URL}/auth/logout/user`, {
            headers: {
                Authorization: `Bearer ${token?.value}`,
            },
        });
        cookieStore.delete('accessTokenUser');
        success = true;
    }
    catch (error) {
        console.error(error);
    }

    return success;
}
