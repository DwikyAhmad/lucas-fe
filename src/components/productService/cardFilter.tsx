import React, { forwardRef } from 'react'

interface CardFilterProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    isChecked: boolean;
   value: string;
   onFilterClick: (value: string) => void
}
  


const CardFilter = forwardRef<HTMLDivElement, CardFilterProps>(({ name, isChecked, value, onFilterClick }, ref) => {
   
   const handleClick = () => {
      if (onFilterClick) {
        onFilterClick(value); // Kirimkan nilai value ke fungsi onClick di parent
      }
    };
   return  (
                
      <>
            <div className=" filter-item flex lg:flex-col align-middle justify-start  flex-row  items-start  gap-2  lg:overflow-hidden overflow-y-auto lg:w-full w-min  scroll-smooth" ref={ref}>

                <div className={`items flex flex-row  items-center align-middle justify-center gap-4 ${isChecked ? 'bg-primaryRed' : ''}`}>
                <input type="checkbox" id="myCheckbox" className="w-5 h-5 " value={value} onClick={handleClick}/>
                   <label htmlFor="myCheckbox" className="md:text-xl text-sm font-istokWeb ">{name}</label>
                </div>
            </div>
      
      </>
           
           
)
    

} ) 
CardFilter.displayName = 'CardFilter';

export default CardFilter
