'use client';

import Navbar from '@/components/Navbar'
import React, {  useEffect, useState } from 'react'

import HeaderProduct from '@/components/ui/productService/productCategoriesHeader';
import ProductCard from '@/components/ui/productService/categorieCard';
import Footer from '@/components/footer';
import { useRouter } from 'next/navigation';
import API_URL from '@/utils/utils';
import axios from 'axios';



const ProductService = () => {
    interface Category {
        id: string;
        name: string;
        description: string;
        // add other fields here if there are any, like `description`, `imageUrl`, etc.
      }
    interface Product {
        id: string;
        name: string;
      description: string;
      categoryName: string;
        // add other fields here if there are any, like `description`, `imageUrl`, etc.
      }

      const [categories,setCategories] = useState<Category[]>([]);
      const [products,setProducts] = useState<Product[]>([]);
      const [isLoading, setLoading] = useState<boolean>(true);
      const [categoryCount, setCategoryCount] = useState<{ [key: string]: number }>({});
      const newCategoryCount: { [key: string]: number } = {};
      const [search, setSearch] = useState("")
      const handleSearch = (searchTerm: string) => {
        setSearch(searchTerm);
      };
    
  const getCategories = async () => {
        try {
          const responseProduct = await axios.get(`${API_URL}/product`);
          const productsResponse = responseProduct.data.products
          setProducts(productsResponse);
          setLoading(false);
        } catch (error) {
            console.error(error);
        }
  }
  
  const countCategoryItems = async () => { 
    const response = await axios.get(`${API_URL}/category`);
    const category = response.data.categories;
    setCategories(category);
    products.forEach((prod) => {
      categories.forEach((cat) => {
        if (prod.categoryName.includes(cat.name.toUpperCase())) { 
          newCategoryCount[cat.name] = (newCategoryCount[cat.name] || 0) + 1;
          setCategoryCount(newCategoryCount);
        }
      })
    })

  }
    useEffect(() => {
      getCategories();
      countCategoryItems();
    },[])
      const router = useRouter();
      const toDetailPage = (filter: string) => {
          router.push(`/products?filter=${filter}`);
    };

    return (
        <>
        <Navbar />
        <HeaderProduct pageTitle={'PRODUCTS CATEGORIES'} search={search} onSearch={handleSearch }/>
        {isLoading ? (
              <div className = "animate-pulse" >
              <ProductCard
                src="https://i.pinimg.com/enabled_lo/564x/36/a1/ce/36a1ceede11c2234f40147d17c4d031c.jpg"
                alt="Deskripsi gambar"
                width={500}
                height={500}
                title="Cataegory" // Dynamic name for each category
                description="Loading.."
                amount={0}
              />
              </div>
        ):(  <div className="bg-primaryBlueNavy h-full" >
            {categories.map((cat) => (
              <div key={cat.id} onClick={() => toDetailPage(cat.name)}>
                <ProductCard
                    src="https://i.pinimg.com/enabled_lo/564x/36/a1/ce/36a1ceede11c2234f40147d17c4d031c.jpg"
                    alt="Deskripsi gambar"
                    width={500}
                    height={500}
                    title={cat.name} // Dynamic name for each cat
                    description="Sejak tahun 2003, Lucas group adalah satu-satunya perusahaan swasta  swasta yang ditunjuk untuk mensuplai kebutuhan obat nasional, selain  selain tiga BUMN. Sampai dengan saat ini Lucas Group sudah  bergabung ke dalam Kimia Farma Group dan masih aktif mengi- kuti  tender e catalog untuk memasok kebutuhan obat obatan generic ke  seluruh wilayah Indonesia."
                    amount={ categoryCount[cat.name]} />
              </div>
              ))}
        </div>)}
            <Footer />
        </>
    )
}

export default ProductService
