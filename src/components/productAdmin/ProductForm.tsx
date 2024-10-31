"use client";

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
import { useState } from "react";
import axios from "axios";

interface Category {
    id: string;
    name: string;
}
interface ProductFormProps {
    categories: Category[];
}

export default function ProductForm({ categories }: ProductFormProps) {
    const [name, setName] = useState("");
    const [image, setImage] = useState<File>();
    const [description, setDescription] = useState("");
    const [packaging, setPackaging] = useState("");
    const [stock, setStock] = useState("");
    const [price, setPrice] = useState("");
    const [composition, setComposition] = useState(["", ""]);
    const [productBy, setProductBy] = useState("");
    const [categoryId, setCategoryId] = useState([""]);
    const [type, setType] = useState("");

    const handleCategoryChange = (category: string, isChecked: boolean) => {
        if (isChecked) {
            setCategoryId([...categoryId, category]);
        } else {
            setCategoryId(categoryId.filter((id) => id !== category));
        }
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price);
        if (image) {
            formData.append("image", image);
        }
        formData.append("type", type);
        formData.append("composition", JSON.stringify(composition));
        formData.append("stock", stock);
        formData.append("productBy", productBy);
        formData.append("packaging", packaging);
        const filteredCategoryId = categoryId.filter((id) => id !== "");
        formData.append("categoryId", JSON.stringify(filteredCategoryId));

        try {
            const response = await axios.post(`/api/product/create`, formData);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="text-black font-poppins min-h-screen pb-10 bg-darkRed flex flex-col items-center">
            <h1 className="text-white text-3xl font-semibold pt-8 text-center">
                ADD PRODUCT
            </h1>
            <div className="bg-white w-[280px] sm:w-[630px] p-5 mt-8 rounded-lg flex flex-col gap-5">
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex gap-5 justify-between flex-wrap">
                    <Label
                        className="text-nowrap self-center font-semibold"
                        htmlFor="productImage"
                    >
                        Product Image
                    </Label>
                    <Input
                        className="w-[240px] sm:w-[450px] h-[32px]"
                        type="file"
                        id="productImage"
                        name="productImage"
                        placeholder="Product Name"
                        onChange={(e) => {
                            const files = e.target.files;
                            if (files && files.length > 0) {
                                setImage(files[0]);
                            }
                        }}
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
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="flex gap-5 justify-between flex-wrap">
                    <Label
                        className="text-nowrap font-semibold self-center"
                        htmlFor="size"
                    >
                        Packaging
                    </Label>
                    <div className="flex gap-4 w-[450px]">
                        <Input
                            id="size"
                            name="size"
                            placeholder="Product Packaging (dus, ml, etc)"
                            value={packaging}
                            onChange={(e) => setPackaging(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex gap-5 justify-between flex-wrap">
                    <Label
                        className="text-nowrap font-semibold self-center"
                        htmlFor="price"
                    >
                        Stock
                    </Label>
                    <Input
                        id="Stock"
                        name="Stock"
                        className="w-[450px]"
                        type="number"
                        value={stock}
                        placeholder="Product Stock"
                        onChange={(e) => setStock(e.target.value)}
                    />
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
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </div>
                <div className="flex gap-5 justify-between flex-wrap">
                    <Label
                        className="text-nowrap font-semibold "
                        htmlFor="categories"
                    >
                        Categories
                    </Label>
                    <div className="flex gap-3 flex-wrap justify-end w-[450px]">
                        {categories &&
                            categories.map((category, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-2"
                                >
                                    <Switch
                                        className="data-[state=checked]:bg-darkRed"
                                        id={category.id}
                                        onCheckedChange={(isChecked) =>
                                            handleCategoryChange(
                                                category.id,
                                                isChecked
                                            )
                                        }
                                    />
                                    <Label htmlFor={category.id}>
                                        {category.name}
                                    </Label>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="flex gap-5 justify-between flex-wrap">
                    <Label
                        className="text-nowrap font-semibold"
                        htmlFor="composition"
                    >
                        Composition
                    </Label>
                    <div className="flex flex-col gap-y-2 items-end w-[450px]">
                        {composition.map((item, index) => (
                            <div key={index} className="flex gap-2 w-full">
                                <Input
                                    key={index}
                                    className=""
                                    type="text"
                                    value={item}
                                    placeholder="Product Composition"
                                    onChange={(e) => {
                                        const newComposition = [...composition];
                                        newComposition[index] = e.target.value;
                                        setComposition(newComposition);
                                    }}
                                />
                                <Button
                                    onClick={() => {
                                        const newComposition = [...composition];
                                        newComposition.splice(index, 1);
                                        setComposition(newComposition);
                                    }}
                                >
                                    Delete
                                </Button>
                            </div>
                        ))}
                        <Button
                            className="w-full"
                            onClick={() => setComposition([...composition, ""])}
                        >
                            Add new composition
                        </Button>
                    </div>
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
                                    <SelectLabel>Harga</SelectLabel>
                                    <SelectItem value="Rp">Rp</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Input
                            id="price"
                            name="price"
                            placeholder="Product Price"
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
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
                        value={productBy}
                        onChange={(e) => setProductBy(e.target.value)}
                    />
                </div>
                <div className="flex justify-between flex-wrap gap-y-4 max-sm:justify-end max-sm:flex-wrap-reverse">
                    <div>
                        <Link href={"/admin/dashboard"}>
                            <Button variant={"destructive"}>Back</Button>
                        </Link>
                    </div>
                    <div className="flex gap-4 flex-wrap max-sm:justify-end">
                        <Button onClick={handleSubmit}>Create Product</Button>
                        <Link href="/admin/add/variant">
                            <Button variant={"outline"}>Add Variant</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
