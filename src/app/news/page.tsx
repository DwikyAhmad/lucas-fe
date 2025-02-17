import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import News from "@/components/news/News";
import API_URL from "@/utils/utils";
import axios from "axios";
import React from "react";

export default async function page() {
    const news = (await axios.get(`${API_URL}/news`)).data.news;

    return (
        <>
            <Navbar />
            <News listOfNews={news} />
            <Footer />
        </>
    );
}
