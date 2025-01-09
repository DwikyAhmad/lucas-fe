import Complaint from "@/components/complaintCentre/Complaint";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import API_URL from "@/utils/utils";
import axios from "axios";

export default async function page() {
    const product = (await axios.get(`${API_URL}/product`)).data.products;

    return (
        <div>
            <Navbar />
            <Complaint products={product}/>
            <Footer />
        </div>
    );
}
