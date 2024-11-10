
import axios from "axios";
import API_URL from "@/utils/utils";
import EditProductForm from "@/components/productAdmin/EditProductForm";


export default async function page() {
    let categories = [];
    try {
        const response = await axios.get(`${API_URL}/category`);
        categories = response.data.categories;
    } catch (error) {
        console.log(error);
    }

    return <EditProductForm categories={categories} />;
}
