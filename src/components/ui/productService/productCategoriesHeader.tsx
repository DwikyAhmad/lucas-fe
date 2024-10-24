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
                <div className='header flex mb-10'>
                    <div className="flex flex-col w-full align-middle  items-center space-x-2 justify-center g-4 ">
                        <div className="flex flex-col items-center justify-center align-middle title w-full border  " {...restProps}>
                          <h2 className='text-[80px] font-black ' >{pageTitle}</h2>
                          <div className=" w-[50%] mb-11  h-1 bg-primaryRed">
                            <br />
                          </div>
                        </div>
                        <div className="searchbar w-8/12 flex">
                            <Input type="input" placeholder="Search categories here... " className='text-primaryBlueNavy border-b-primaryBlack border-4 bg-white font-poppins mx-2 h-12' />
                            <Button type="submit" className='h-full'>Search</Button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )

})
  
  
  

export default HeaderProduct
