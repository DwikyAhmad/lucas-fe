'use client';

import React, { forwardRef } from 'react'


interface titleProps extends React.HTMLAttributes<HTMLDivElement> {
    title : string
}


const HeaderCategoriesName = forwardRef<HTMLDivElement, titleProps>(({ title, ...props }, ref) => {
    
    return (
            <div className='bg-primaryBlack border w-full h-10% p-4 flex items-center justify-center mb-4' {...props} ref={ref}>
                <div className='bg-primaryRed h-full p-4 px-80 w-max rounded-full items-center align-middle flex'>
                    <div className='text-3xl justify-center  w-full  flex font-medium items-center'>{title}</div>
                </div>
            </div>
    )
    


})
HeaderCategoriesName.displayName = 'HeaderCategoriesName';
export default HeaderCategoriesName
