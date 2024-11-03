import Navbar from "@/components/Navbar";
import Hero from "../components/homepage/hero";
import Ceritificate from "../components/homepage/ceritificate";
import Aboutus from "../components/homepage/aboutus";
import Products from "../components/homepage/products";
import Clients from "../components/homepage/clients";
import Qna from "../components/homepage/qna";
import Footer from "../components/footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Ceritificate />
            <Aboutus />
            <Products />
            <Clients />
            <Qna />
            <Footer />
        </>
    );
}
