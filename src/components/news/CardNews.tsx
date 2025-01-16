'use client';
// import React, { useEffect } from 'react'
import { Button } from '../ui/button';
import News from './News';
import Image from 'next/image';


interface CardNewsProps {
  newsItem: News;
}

function CardNews({newsItem}:CardNewsProps) {
  const { title,  urlFile, urlImage,teaser } = newsItem;


  return (
    <div className='basic bg-white md:w-56 w-56 border-black border flex flex-col items-center p-2 rounded-md'>
      <div className='image text-sm '>
      {urlImage ? (
          <Image src={urlImage} alt={title}></Image>
        ) : (
          <span>No Image Available</span>
        )}
      </div>
      <div className='content text-primaryBlueNavy gap-2 flex flex-col '>
        <div className="title text-primaryBlueNavy font-bold text-xl">
          <h2>{title}A</h2>
        </div>
        <div className="teaser text-sm mb-4">
          <p>{teaser}</p>
        </div>
        <div className='button w-full flex justify-end'>
          <a href={urlFile} target="_blank" className="w-full"><Button className="text-white w-full">Read more</Button></a>
        </div>
      </div>
      </div>
  )
}


CardNews.displayName = "CardNews";
export default CardNews;
