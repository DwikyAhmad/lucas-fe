import ListProducts from "@/components/productAdmin/ListProducts";
import API_URL from "@/utils/utils";
import axios from "axios";

export default async function page() {
    let products;

    try {
        const response = await axios.get(`${API_URL}/product`);
        products = response.data.products;
    } catch (error) {
        console.error(error);
    }

    return <ListProducts products={products}/>;
}
