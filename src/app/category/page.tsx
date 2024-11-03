'use client';

import Navbar from '@/components/Navbar'
import React from 'react'

import HeaderProduct from '@/components/ui/productService/productCategoriesHeader';
import ProductCard from '@/components/ui/productService/categorieCard';
import Footer from '@/components/footer';
import { useRouter } from 'next/navigation';


const productService = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const toDetailPage = (filer:string) => {
      router.push(`/products?filter=${filer}`);
    };

    return (
        <>
            <Navbar />
            <HeaderProduct pageTitle={'PRODUCTS CATEGORIES'}  />
            <div className="bg-primaryBlueNavy h-full" onClick={() => toDetailPage("generic")}>
                {/* for each products */}
                <ProductCard
                src="https://i.pinimg.com/enabled_lo/564x/36/a1/ce/36a1ceede11c2234f40147d17c4d031c.jpg"
                alt="Deskripsi gambar"
                width={500}
                height={500}
                title="Generic Product"
                description="Sejak tahun 2003, Lucas group adalah satu-satunya perusahaan swasta  swasta yang ditunjuk untuk mensuplai kebutuhan obat nasional, selain  selain tiga BUMN. Sampai dengan saat ini Lucas Group sudah  bergabung ke dalam Kimia Farma Group dan masih aktif mengi- kuti  tender e catalog untuk memasok kebutuhan obat obatan generic ke  seluruh wilayah Indonesia."
                tags={['Generic', 'Antibiotik']}
                
/>  

               
            </div>
            <Footer />

        
            
            
            
            
        </>
    )
}

export default productService
