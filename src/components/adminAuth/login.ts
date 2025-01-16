import axios from "axios";
import toast from "react-hot-toast";

interface LoginParams {
    email: string;
    password: string;
}

export default async function login({ email, password }: LoginParams) {
    if (!email || !password) {
        toast.error("All fields are required", {
            className: "text-sm",
        });
        return false;
    }
    const myPromise = axios.post("/api/auth/login/admin", {
        email,
        password,
    });
    const response = await toast.promise(myPromise, {
        loading: "Loading",
        success: (response) => {
            if (response.data.statusCode >= 400) {
                console.log(response.data.statusCode);
                console.log(email + " "+password);
                throw new Error(response.data.message);
            }
            return "Admin successfully logged in";
        },
        error: (error) => error.message,
    });
    console.log(response.data);
    if (response.data.statusCode >= 400) {
        return false;
    }
    return true;
}
