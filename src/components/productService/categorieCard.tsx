"use client";
import React, { forwardRef } from "react";
import Image from "next/image";

interface CategorieCardProps extends React.HTMLAttributes<HTMLDivElement> {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    title: string;
    description: string;
    amount: number;
}

const CategorieCard = forwardRef<HTMLDivElement, CategorieCardProps>(
    (
        {
            src,
            alt,
            width = 600,
            height = 600,
            title,
            description,
            amount,
            ...props
        },
        ref
    ) => {
        return (
            <div
                className="flex flex-col align-top justify-center content-center items-center w-full p-4"
                ref={ref}
                {...props}
            >
                <div
                    className="flex flex-row hover:Lshadow-lg hover:border-slate-400 duration-200 hover:scale-10 border-2 bg-white hover:bg-gray-100 xl:w-[70%]  w-full align-middle justify-around text-black round-xl p-6 rounded-2xl items-center lg:display-none "
                    style={{ cursor: "pointer" }}
                    {...props}
                >
                    <div className="img-categoreis w-fit h-fit mr-10 hidden sm:flex ">
                        <Image
                            src={src}
                            alt={alt}
                            width={width}
                            height={height}
                            className="rounded-2xl"
                            {...props}
                        />
                    </div>
                    <div className="content flex flex-col w-full content-start items-center mb-4 md:items-start ">
                        <div className="title font-poppins lg:text-4xl md:text-2xl text-xl font-bold text-primaryRed uppercase ">
                            {title}
                        </div>
                        <div className="desc font-poppins lg:text-lg text-pretty text-sm text-justify w-full pr-8 ">
                            {description}
                        </div>
                        <div className="cateogryTag flex md:flex-row gap-3 lg:mt-4 mt-2 p-0 ">
                            <div className="lg:text-lg font-poppins p-2 px-4 rounded-full font-medium text-sm bg-primaryYellow">
                                {amount} Items
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);

CategorieCard.displayName = "CategorieCard";
export default CategorieCard;
