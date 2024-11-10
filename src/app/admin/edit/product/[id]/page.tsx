import axios from "axios";
import API_URL from "@/utils/utils";
import EditProductForm from "@/components/productAdmin/EditProductForm";

export default async function page({
    params,
}: {
    params: Promise<{ id: string }>;
    }) {
    
    const id = (await params).id;

    let product;
    let categories;
    try {
        const response = await axios.get(`${API_URL}/category`);
        categories = response.data.categories;
    } catch (error) {
        console.log(error);
    }

    try {
        const response = await axios.get(`${API_URL}/product/${id}`);
        product = response.data.product;
    } catch (error) {
        console.error(error);
    }

    return <EditProductForm categories={categories} product={product}/>;
}
