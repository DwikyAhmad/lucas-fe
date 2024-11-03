import React, { forwardRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


interface headerProps   extends React.HTMLAttributes<HTMLDivElement> {
  pageTitle: string
  
}


const HeaderProduct = forwardRef<HTMLDivElement, headerProps>((props, ref) => {
  const { pageTitle,...restProps} = props
  return (
    <div>
      
      <div className="bg-primaryBlueNavy w-full  py-4 flex flex-col justify-center align-middle " ref={ref}  {...restProps}>
                <div className='header flex md:mb-6 mb-2'>
                    <div className="flex flex-col w-full align-middle  items-center space-x-2 justify-center g-4 ">
                        <div className="flex flex-col items-center justify-center align-middle title w-max   " {...restProps}>
                          <h2 className='md:text-4xl font-black  sm:text-2xl text-xl  ' >{pageTitle}</h2>
                          <div className=" xl:w-[50%] w-full mb-6  h-1 mt-4 bg-primaryRed">
                            <br />
                          </div>
                        </div>
                        <div className="searchbar md:w-96 w-full   flex">
                            <Input type="input" placeholder="Search here... " className='text-primaryBlueNavy border-b-primaryBlack border-4 bg-white font-poppins mx-2 h-12 rounded-xl' />
                            <Button type="submit" className='h-full rounded-xl hover:brightness-75 shadow-lg sm:w-min sm:p-2'>Search</Button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )

})
  
  
  
HeaderProduct.displayName = 'HeaderProduct';
export default HeaderProduct
