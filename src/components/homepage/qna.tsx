import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function Qna() {
    return (
        <div className="font-poppins bg-white mt-4">
            <div className="bg-gray-200 text-black text-center py-6">
                <h2 className="text-primaryBlueNavy text-center text-5xl font-semibold ">
                    General <span className="text-primaryRed">FAQs</span>
                </h2>
                <div className="flex justify-center mt-3">
                    <div className="border-b-4 w-[200px] border-primaryRed"></div>
                </div>
            </div>
            <div className="bg-primaryBlueNavy text-white px-12 py-2 pb-7">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-md">
                            Is it accessible?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-md">
                            Is it styled?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the
                            other components&apos; aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-md">
                            Is it animated?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes. It&apos;s animated by default, but you can
                            disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
