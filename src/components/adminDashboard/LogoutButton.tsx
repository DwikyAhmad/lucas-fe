'use client'

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import axios from "axios";
import toaster, { Toaster } from "react-hot-toast";

export default function Logout() {

    const router = useRouter();

    const handleLogout = async () => {
        try {
            const myPromise = axios.get("/api/auth/logout/admin");
            await toaster.promise(myPromise, {
                loading: "Logging out...",
                success: (response) => { 
                    if (response.data.statusCode >= 400) {
                        throw new Error(response.data.message);
                    }
                    return "Successfully logged out";
                },
                error: (error) => error.message,
            });
            router.push("/admin");
        } catch (error) {
            console.log(error);
            router.push("/admin");
        }
    };

    return (
        <div>
            <Toaster />
            <Button
                variant={"destructive"}
                className="bg-[#C44536] w-24"
                onClick={handleLogout}
            >
                Logout
            </Button>
        </div>
    );
}
