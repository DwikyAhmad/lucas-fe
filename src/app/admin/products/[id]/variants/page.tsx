import ListVariants from "@/components/productAdmin/ListVariants";
import API_URL from "@/utils/utils";
import axios from "axios";

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;

    let variants;

    try {
        const response = await axios.get(`${API_URL}/variant/all/${id}`);
        variants = response.data;
    } catch { 
        console.error("error");
     }

    return <ListVariants variants={variants}/>;
}
