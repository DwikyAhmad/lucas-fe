import axios from "axios";
import API_URL from "@/utils/utils";
import CardNews from "@/components/news/CardNews";


export default async function page() {
    let news = [];
    try {
        const response = await axios.get(`${API_URL}/news`);
        news = response.data.news;
    } catch (error) {
        console.log(error);
    }

    return <CardNews newsItem={news} />;
}
