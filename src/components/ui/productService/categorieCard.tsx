'use client';
import React, { forwardRef } from 'react'
import Image from 'next/image';


interface CategorieCardProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  title: string;
  description: string;
  tags: string[];
}



const CategorieCard = forwardRef<HTMLDivElement, CategorieCardProps>(
  ({ src, alt, width = 600, height = 600, title, description, tags, ...props }, ref) => {

      return (
        <div className="flex flex-col align-top justify-center content-center items-center w-full p-4" ref={ref} {...props}     >
          <div className="flex border-2 bg-white hover:bg-gray-200 w-[60%] justify-center text-black round-xl p-6 rounded-2xl items-center" style={{ cursor: 'pointer' }} {...props} >
            <div className="img-categoreis w-fit h-fit mr-10" >
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="rounded-2xl"
                {...props}
    />
            </div>
            <div className="content flex flex-col w-full content-start items-start mb-4" >
              <div className="title font-poppins text-5xl font-bold text-primaryRed">{title}</div>
              <div className="desc font-poppins text-xl text-justify w-[80%]">
                {description}
              </div>
              <div className="cateogryTag flex flex-row gap-3 mt-4 p-2">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className={`text-md font-poppins p-2 rounded-full font-medium ${
                      tag === 'Generic'
                        ? 'bg-orange'
                        : 'bg-primaryBlueNavy text-white'
                    }`}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  );


CategorieCard.displayName = 'CategorieCard';
export default CategorieCard;


