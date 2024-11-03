import VariantForm from "@/components/variantAdmin/VariantForm";
import API_URL from "@/utils/utils";
import axios from "axios";

export default async function page() {
    let categories = [];
    try {
        const response = await axios.get(`${API_URL}/category`);
        categories = response.data.categories;
    } catch (error) {
        console.log(error);
    }

    let products = [];
    try { 
        const response = await axios.get(`${API_URL}/product`);
        products = response.data.products;
    } catch (error) {
        console.log(error);
    }

    return <VariantForm categories={categories} products={products}/>;
}
