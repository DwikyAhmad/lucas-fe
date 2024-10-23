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

export default function ProductForm() {
    return (
        <div className="text-black font-poppins bg-darkRed flex flex-col items-center">
            <h1 className="text-white text-3xl font-semibold pt-8 text-center">
                ADD PRODUCT
            </h1>
            <div className="bg-white w-[680px] p-5 mt-8 rounded-lg flex flex-col gap-5">
                <div className="flex gap-5 justify-between">
                    <Label
                        className="text-nowrap self-center font-semibold"
                        htmlFor="productName"
                    >
                        Product Name
                    </Label>
                    <Input
                        className="w-[500px]"
                        type="text"
                        id="productName"
                        name="productName"
                        placeholder="Product Name"
                    />
                </div>
                <div className="flex gap-5 justify-between">
                    <Label
                        className="text-nowrap font-semibold"
                        htmlFor="description"
                    >
                        Description
                    </Label>
                    <Textarea
                        id="description"
                        className="w-[500px]"
                        name="description"
                        placeholder="Description"
                    />
                </div>
                <div className="flex gap-5 justify-between">
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
                <div className="flex gap-5 justify-between">
                    <Label
                        className="text-nowrap self-center font-semibold"
                        htmlFor="productType"
                    >
                        Product Type
                    </Label>
                    <Input
                        className="w-[500px]"
                        type="text"
                        id="productType"
                        name="productType"
                        placeholder="Product Type"
                    />
                </div>
                <div className="flex gap-5 justify-between">
                    <Label
                        className="text-nowrap font-semibold self-center"
                        htmlFor="categories"
                    >
                        Categories
                    </Label>
                    <div className="flex gap-3">
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
                <div className="flex gap-5 justify-between">
                    <Label
                        className="text-nowrap font-semibold"
                        htmlFor="composition"
                    >
                        Composition
                    </Label>
                    <Textarea
                        id="composition"
                        className="w-[500px]"
                        name="composition"
                        placeholder="Product Composition"
                    />
                </div>
                <div className="flex gap-5 justify-between">
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
                <div className="flex gap-5 justify-between">
                <Label
                        className="text-nowrap self-center font-semibold"
                        htmlFor="companyName"
                    >
                        Company Name
                    </Label>
                    <Input
                        className="w-[500px]"
                        type="text"
                        id="companyName"
                        name="companyName"
                        placeholder="Company Name"
                    />
                </div>
                <div className="flex justify-between">
                    <div><Button variant={'destructive'}>Back</Button></div>
                    <div className="flex gap-4">
                        <Button>Create Product</Button>
                        <Button variant={'outline'}>Add Variant</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
