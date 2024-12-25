import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function Complaint() {
    return (
        <div className="min-h-[calc(100vh-365px)] font-poppins text-[#292929]">
            <div>
                <h1 className="font-bold text-5xl text-center mt-10">
                    SIDE EFFECT COMPLAINT CENTRE
                </h1>
                <div className="w-full flex justify-center mt-2">
                    <div className="bg-primaryRed w-[400px] h-1"></div>
                </div>
            </div>
            <div className="px-8 mt-10 mb-10 w-[800px] mx-auto">
                <div className="border-2 rounded-lg border-[#292929] w-full h-min-[300px] p-5">
                    <div className="flex items-center gap-2">
                        <Label htmlFor="anon">Send as anonymous</Label>
                        <Switch id="anon" />
                    </div>
                    <div className="mt-4 space-y-4">
                        <Label
                            className="text-2xl font-semibold"
                            htmlFor="product"
                        >
                            Product
                        </Label>
                        <Select>
                            <SelectTrigger
                                className="w-full bg-white text-black"
                                id="product"
                            >
                                <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="all">All</SelectItem>
                                    <SelectItem value="apple">
                                        Generik
                                    </SelectItem>
                                    <SelectItem value="banana">
                                        Antihistamin
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Textarea className="h-[200px]" placeholder="Enter your complaint here"/>
                        <div className="flex gap-2">
                            <Button className="text-white" variant={'destructive'}>
                                Back
                            </Button>
                            <Button className="text-white">
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
