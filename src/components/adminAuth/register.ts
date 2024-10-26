import toast from "react-hot-toast";
import API_URL from "@/utils/utils";
import axios from "axios";

interface RegisterParams {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
}

export default async function register({
    email,
    username,
    password,
    confirmPassword,
}: RegisterParams) {
    try {
        if (password.length < 8) {
            toast.error("Password must be at least 8 characters", {
                className: "text-sm",
            });
            return false;
        }
        if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
            toast.error("Invalid email format", {
                className: "text-sm",
            });
            return false;
        }
        if (!username || !email || !password || !confirmPassword) {
            toast.error("All fields are required", {
                className: "text-sm",
            });
            return false;
        }
        if (password !== confirmPassword) {
            toast.error("Password and confirm password does not match", {
                className: "text-sm",
            });
            return false;
        }
        const myPromise = axios.post(`${API_URL}/auth/register/admin`, {
            username,
            email,
            password,
        });
        const response = await toast.promise(myPromise, {
            loading: "Loading",
            success: "Admin successfully registered",
            error: "Error when fetching",
        });
        console.log(response.data);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
