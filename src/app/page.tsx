import Navbar from "@/components/Navbar";
import Hero from "./hero";
import Ceritificate from "./ceritificate";
import Aboutus from "./aboutus";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Ceritificate />
            <Aboutus />
        </>
    );
}
