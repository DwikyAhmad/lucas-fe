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
interface ProductPerCategory {
    [key: string]: Product[];
}

export const dynamic = 'force-dynamic';

export default async function page() {
    const products = (await axios.get(`${API_URL}/product`)).data.products;
    const categories = (await axios.get(`${API_URL}/category`)).data.categories;
    console.log(categories);

    const productsPerCategory: ProductPerCategory = {};

    for (const product of products) {
        for (const category of product.categoryName) {
            if (!productsPerCategory[category]) {
                productsPerCategory[category] = [];
            }
            productsPerCategory[category].push(product);
        }
    }

    console.log(productsPerCategory);

    return (
        <div>
            <Navbar />
            <LucaShop productsPerCategory={productsPerCategory} categories={categories} />
            
            {/* <ComingSoon /> */}
            <Footer />
        </div>
    );
}
