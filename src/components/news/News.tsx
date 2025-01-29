'use client';
import React, {  } from 'react'
import HeaderNews from './HeaderNews'
import CardNews from './CardNews'
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"
import NewsForm from "./NewsForm"

interface News {
  title:string;
  writer: string;
  urlFile :string;
  urlImage: string;
  teaser: string;
  createdAt: Date;
}

interface newsProps{
  listOfNews:News[] 
}



function News({listOfNews}:newsProps) {



  return (
    <>
    <Navbar />
      <div className=' bg-primaryBlueNavy w-full  mb-4  p-4 '>
          <HeaderNews pageTitle={'NEWS'}   />
        <div className='w-full flex gap-x-2 gap-y-4  flex-wrap items-center justify-center align-middle'>
        {listOfNews.map((newsItem: News, index: React.Key | null | undefined) => (
          <CardNews key={index} newsItem={newsItem} />
          
          ))}
          <NewsForm />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default News