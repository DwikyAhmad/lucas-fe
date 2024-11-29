import ProductCategories from "@/components/productCategories/ProductCategories";
import API_URL from "@/utils/utils";
import axios from "axios";

type CategoryCount = {
    [key: string]: number;
};

export default async function page() {
    const products = (await axios.get(`${API_URL}/product`)).data.products;
    const categories = (await axios.get(`${API_URL}/category`)).data.categories;
    const categoryCount: CategoryCount = {};

    for (const product of products) {
        for (const category of product.categoryName) {
            categoryCount[category] = (categoryCount[category] || 0) + 1;
        }
    }

    return (
        <div>
            <ProductCategories
                categories={categories}
                categoryCount={categoryCount}
            />
        </div>
    );
}
