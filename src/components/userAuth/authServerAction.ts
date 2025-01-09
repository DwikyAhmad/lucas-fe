"use server";

import { redirect } from "next/navigation";

export async function redirectPage() {
    redirect("/");
}

export async function logout() { 
    //
}
