import React from 'react'
import HeaderNews from './HeaderNews'
import CardNews from './CardNews'
import Navbar from "@/components/Navbar"


function News() {
    // const findNews = () => {
    //     console.log()
    //   };
  return (
    <div className='text-4xl bg-primaryBlueNavy w-full h-full mb-4  p-4 '>
      <Navbar />
      
        <HeaderNews pageTitle={'NEWS'}   />
      <div className='flex gap-x-2 gap-y-4  flex-wrap items-center justify-center align-middle'>
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
      </div>
      </div>
  )
}

export default News