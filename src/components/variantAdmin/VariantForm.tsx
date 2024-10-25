import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "../ui/button";
import Link from "next/link";

export default function VariantForm() {
    return (
        <div className="text-black font-poppins min-h-screen pb-10 bg-darkRed flex flex-col items-center">
            <h1 className="text-white text-3xl font-semibold pt-8 text-center">
                ADD VARIANT
            </h1>
            <div className="bg-white w-[280px] sm:w-[630px] p-5 mt-8 rounded-lg flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <Label className="font-semibold">Parent Product</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Paracetamol" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Paracetamol</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">
                                    Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">
                                    Pineapple
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex gap-5 justify-between flex-wrap">
                    <Label
                        className="text-nowrap self-center font-semibold"
                        htmlFor="productName"
                    >
                        Product Name
                    </Label>
                    <Input
                        className="w-[450px]"
                        type="text"
                        id="productName"
                        name="productName"
                        placeholder="Product Name"
                    />
                </div>
                <div className="flex gap-5 justify-between flex-wrap">
                    <Label
                        className="text-nowrap font-semibold"
                        htmlFor="description"
                    >
                        Description
                    </Label>
                    <Textarea
                        id="description"
                        className="w-[450px]"
                        name="description"
                        placeholder="Description"
                    />
                </div>
                <div className="flex gap-5 justify-between flex-wrap">
                    <Label
                        className="text-nowrap font-semibold self-center"
                        htmlFor="size"
                    >
                        Size
                    </Label>
                    <div className="flex gap-4">
                        <Input
                            id="size"
                            name="size"
                            placeholder="Product Size"
                        />
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="ml" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">
                                        Banana
                                    </SelectItem>
                                    <SelectItem value="blueberry">
                                        Blueberry
                                    </SelectItem>
                                    <SelectItem value="grapes">
                                        Grapes
                                    </SelectItem>
                                    <SelectItem value="pineapple">
                                        Pineapple
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex gap-5 justify-between flex-wrap">
                    <Label
                        className="text-nowrap self-center font-semibold"
                        htmlFor="productType"
                    >
                        Product Type
                    </Label>
                    <Input
                        className="w-[450px]"
                        type="text"
                        id="productType"
                        name="productType"
                        placeholder="Product Type"
                    />
                </div>
                <div className="flex gap-5 justify-between flex-wrap">
                    <Label
                        className="text-nowrap font-semibold self-center"
                        htmlFor="categories"
                    >
                        Categories
                    </Label>
                    <div className="flex gap-3 flex-wrap">
                        <div className="flex items-center space-x-2">
                            <Switch
                                className="data-[state=checked]:bg-darkRed"
                                id="general"
                            />
                            <Label htmlFor="general">General</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Switch
                                className="data-[state=checked]:bg-darkRed"
                                id="TCO"
                            />
                            <Label htmlFor="TCO">TCO</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Switch
                                className="data-[state=checked]:bg-darkRed"
                                id="Alergen"
                            />
                            <Label htmlFor="Alergen">Alergen</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Switch
                                className="data-[state=checked]:bg-darkRed"
                                id="Salep"
                            />
                            <Label htmlFor="Salep">Salep</Label>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 justify-between flex-wrap">
                    <Label
                        className="text-nowrap font-semibold"
                        htmlFor="composition"
                    >
                        Composition
                    </Label>
                    <Textarea
                        id="composition"
                        className="w-[450px]"
                        name="composition"
                        placeholder="Product Composition"
                    />
                </div>
                <div className="flex gap-5 justify-between flex-wrap">
                    <Label
                        className="text-nowrap font-semibold self-center"
                        htmlFor="price"
                    >
                        Price
                    </Label>
                    <div className="flex gap-4">
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Rp" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">
                                        Banana
                                    </SelectItem>
                                    <SelectItem value="blueberry">
                                        Blueberry
                                    </SelectItem>
                                    <SelectItem value="grapes">
                                        Grapes
                                    </SelectItem>
                                    <SelectItem value="pineapple">
                                        Pineapple
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Input
                            id="price"
                            name="price"
                            placeholder="Product Price"
                        />
                    </div>
                </div>
                <div className="flex gap-5 justify-between flex-wrap">
                    <Label
                        className="text-nowrap self-center font-semibold"
                        htmlFor="companyName"
                    >
                        Company Name
                    </Label>
                    <Input
                        className="w-[450px]"
                        type="text"
                        id="companyName"
                        name="companyName"
                        placeholder="Company Name"
                    />
                </div>
                <div className="flex justify-between flex-wrap gap-y-4 max-sm:justify-end max-sm:flex-wrap-reverse">
                    <div>
                    <Link href={'/admin/dashboard'}><Button variant={"destructive"}>Back</Button></Link>
                    </div>
                    <div className="flex gap-4 flex-wrap max-sm:justify-end">
                        <Button>Create Variant</Button>
                        <Link href="/admin/add/product">
                            <Button variant={"outline"}>Add Product</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
