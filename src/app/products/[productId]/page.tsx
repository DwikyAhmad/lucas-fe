import ProductDetail from "@/components/ProductDetail";
import API_URL from "@/utils/utils";
import axios from "axios";

export default async function Page({ params }: { params: { productId: string } }) {
    const { productId } = params;
    let product = null;
    try {
        const response = await axios.get(`${API_URL}/product/${productId}`);
        product = response.data.product;
    } catch (error) {
        product = null;
    }
    return (
        <ProductDetail product={product} />
    );
}
