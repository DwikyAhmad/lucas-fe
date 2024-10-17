import Navbar from "@/components/navbar";
import Hero from "./hero";
import Ceritificate from "./ceritificate";
import Aboutus from "./aboutus";
import Products from "./products";
import Clients from "./clients";
import Qna from "./qna";
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
