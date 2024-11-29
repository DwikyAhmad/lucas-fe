import React, { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";

interface headerProps extends React.HTMLAttributes<HTMLDivElement> {
    pageTitle: string;
    search: string;
    onSearch: (searchTerm: string) => void;
}

const HeaderProduct = forwardRef<HTMLDivElement, headerProps>((props, ref) => {
    const { pageTitle, onSearch, search, ...restProps } = props;
    return (
        <div>
            <div
                className="bg-primaryBlueNavy w-full py-3 flex flex-col justify-center align-middle "
                ref={ref}
                {...restProps}
            >
                <div className="header flex md:mb-6 mb-2">
                    <div className="flex flex-col w-full align-middle items-center justify-center g-4 ">
                        <div
                            className="flex flex-col items-center justify-center align-middle title w-max   "
                            {...restProps}
                        >
                            <h2 className="md:text-4xl font-black sm:text-2xl text-xl mt-4">
                                {pageTitle}
                            </h2>
                            <div className=" xl:w-[50%] w-full mb-6  h-1 mt-4 bg-primaryRed">
                                <br />
                            </div>
                        </div>
                        <div className="searchbar md:w-96 w-full flex gap-2 px-5">
                            <Input
                                type="input"
                                placeholder="Search here... "
                                value={search}
                                onChange={(e) => onSearch(e.target.value)}
                                className="text-primaryBlueNavy bg-white font-poppins"
                            />
                            <Button
                                type="submit"
                                className="h-full rounded-xl hover:brightness-75 shadow-lg sm:w-min sm:p-2"
                            >
                                <IoSearch className="mx-1" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

HeaderProduct.displayName = "HeaderProduct";
export default HeaderProduct;
