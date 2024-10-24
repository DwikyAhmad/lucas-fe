'use client';

import React, { forwardRef } from 'react'


interface titleProps extends React.HTMLAttributes<HTMLDivElement> {
    title : string
}


const HeaderCategoriesName = forwardRef<HTMLDivElement, titleProps>(({ title, ...props }, ref) => {
    
    return (
            <div className='bg-primaryBlack border border-red-600 w-full h-10% p-4 flex items-center justify-center' {...props} ref={ref}>
                <div className='bg-primaryRed h-full p-2 px-80 w-[80%] rounded-full items-center align-middle flex'>
                    <div className='text-[40px] justify-center   w-full  flex font-medium items-center'>{title}</div>
                </div>
            </div>
    )
    


})

export default HeaderCategoriesName
