import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
// import ComingSoon from "@/components/lucaShop/ComingSoon";

import LucaShop from "@/components/lucaShop/LucaShop";
import API_URL from "@/utils/utils";
import axios from "axios";

interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    type: string;
    composition: string[];
    image: string;
    categoryName: string[];
}

interface Category {
    id: string;
    name: string;
}

export const dynamic = 'force-dynamic';

export default async function page() {
    const [productsResponse, categoriesResponse] = await Promise.all([
        axios.get(`${API_URL}/product`),
        axios.get(`${API_URL}/category`)
    ]);

    const products: Product[] = productsResponse.data.products;
    const categories: Category[] = categoriesResponse.data.categories;

    return (
        <div>
            <Navbar />
            <LucaShop products={products} categories={categories} />
            <Footer />
        </div>
    );
}
