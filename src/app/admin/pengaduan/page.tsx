import AdminPengaduan from "@/components/adminPengaduan/AdminPengaduan";
import API_URL from "@/utils/utils";
import axios from "axios";
import { cookies } from "next/headers";

export default async function page() {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessTokenAdmin")?.value;
    let complaint;

    try {
        const response = await axios.get(`${API_URL}/complaint`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        complaint = response.data.complaints;
    } catch (error) {
        if (error instanceof axios.AxiosError) {
            console.log(error.response?.data);
        }
    }

    const categories = (await axios.get(`${API_URL}/category`)).data.categories;

    return (
        <div>
            <AdminPengaduan complaints={complaint} categories={categories} />
        </div>
    );
}
