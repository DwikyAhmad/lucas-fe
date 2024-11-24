import axios from "axios";
import API_URL from "@/utils/utils";
import EditVariantForm from "@/components/productAdmin/EditVariantForm";

export default async function page({
    params,
}: {
    params: Promise<{ id: string }>;
    }) {
    
    const id = (await params).id;
    console.log("ID: ", id);

    let variant;
    let categories;
    try {
        const response = await axios.get(`${API_URL}/category`);
        categories = response.data.categories;
    } catch (error) {
        console.log(error);
    }

    try {
        const response = await axios.get(`${API_URL}/variant/${id}`);
        variant = response.data;
        console.log("VARIANT: ", variant);
    } catch (error) {
        console.error(error);
    }

    return <EditVariantForm categories={categories} variant={variant}/>;
}
