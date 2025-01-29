'use client';

import React, { forwardRef } from 'react'

  
interface titleProps extends React.HTMLAttributes<HTMLDivElement> {
    title : string
}


const HeaderCategoriesName = forwardRef<HTMLDivElement, titleProps>(({ title, ...props }, ref) => {
    
    return (
            <div className='bg-primaryBlack w-full h-10% p-4 flex items-center text-center justify-center mb-4 rounded-t-lg' {...props} ref={ref}>
                <div className='bg-primaryRed h-full p-2 md:px-28 px-10 text-center w-full rounded-full items-center align-middle flex'>
                    <div className='lg:text-3xl justify-center md:text-xl sm:text-lg  w-full   text-nowrap  flex font-medium items-center'>{title}</div>
                </div>
            </div>
    )
    


})
HeaderCategoriesName.displayName = 'HeaderCategoriesName';
export default HeaderCategoriesName
