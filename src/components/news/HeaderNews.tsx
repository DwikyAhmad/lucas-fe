import React, { forwardRef } from "react";


interface headerProps extends React.HTMLAttributes<HTMLDivElement> {
    pageTitle: string;
}

const HeaderNews = forwardRef<HTMLDivElement, headerProps>((props, ref) => {
    const { pageTitle} = props;
    return (
        <div>
            <div
                className="bg-primaryBlueNavy w-full py-3 flex flex-col justify-center align-middle "
                ref={ref}
            >
                <div className="header flex md:mb-6 mb-2">
                    <div className="flex flex-col w-full align-middle items-center justify-center g-4 ">
                        <div
                            className="flex flex-col items-center justify-center align-middle title w-max   "
                        >
                            <h2 className="md:text-4xl font-black sm:text-2xl text-xl mt-4">
                                {pageTitle}
                            </h2>
                            <div className=" xl:w-[50%] w-full mb-6  h-1 mt-4 bg-primaryRed">
                                <br />
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
});

HeaderNews.displayName = "HeaderNews";
export default HeaderNews;
