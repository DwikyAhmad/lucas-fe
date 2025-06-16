import axios from "axios";

let API_URL = process.env.NEXT_PUBLIC_API_URL

if (!API_URL) {
    API_URL = 'http://127.0.0.1:8080';
}

export const formatRupiah = (price) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency', currency: 'IDR', minimumFractionDigits: 0, // Tidak menampilkan angka di belakang koma
        maximumFractionDigits: 0,
    }).format(price);
};

export const getUser = async () => {
    const response = await axios.get(`/api/auth/getUser`);
    return response.data;
}

export default API_URL;