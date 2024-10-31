let API_URL = process.env.NEXT_PUBLIC_API_URL

if (!API_URL) { 
    API_URL = 'http://127.0.0.1:5000';
} 

export default API_URL;