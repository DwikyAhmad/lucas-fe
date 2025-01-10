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
import { useRef, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { ScrollArea } from "@/components/ui/scroll-area"

interface Product {
    id: string;
    name: string;
    price: number;
    type: string;
    stock: number;
    composition: string[];
    image: string;
    categoryName: string[];
}

interface Category {
    id: string;
    name: string;
}
interface ProductFormProps {
    products: Product[];
    categories: Category[];
}

export default function VariantForm({
    categories,
    products,
}: ProductFormProps) {
    const [productId, setProductId] = useState("");
    const [parentProductCategory, setParentProductCategory] = useState([""]);
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
    const inputFile = useRef<HTMLInputElement>(null);
    const [selectedProduct, setSelectedProduct] = useState("");
    const [needPrescription, setNeedPrescription] = useState(false);

    const handleValueChange = (value: string) => {
        setSelectedProduct(value);
        const selectedProduct = products.find(
            (product) => product.id === value
        );
        if (selectedProduct) {
            setParentProductCategory(selectedProduct.categoryName);
            setProductId(value);
            setCategoryId(categories.filter((category) => selectedProduct.categoryName.includes(category.name)).map((category) => category.id));
        }
    };

    const handleCategoryChange = (category: Category, isChecked: boolean) => {
        if (isChecked) {
            setCategoryId([...categoryId, category.id]);
            setParentProductCategory([...parentProductCategory, category.name]);
        } else {
            setCategoryId(categoryId.filter((id) => id !== category.id));
            setParentProductCategory(parentProductCategory.filter((name) => name !== category.name));
        }
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("productId", productId);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price);
        if (image) {
            formData.append("image", image);
        }
        formData.append("type", type);
        const filteredComposition = composition.filter((item) => item !== "");
        formData.append("composition", JSON.stringify(filteredComposition));
        formData.append("stock", stock);
        formData.append("productBy", productBy);
        formData.append("packaging", packaging);
        const filteredCategoryId = categoryId.filter((id) => id !== "");
        formData.append("categoryId", JSON.stringify(filteredCategoryId));
        formData.append("prescription", needPrescription.toString());

        try {
            const myPromise = axios.post(`/api/variant/create`, formData);
            await toast.promise(myPromise, {
                loading: "Creating variant...",
                success: (res) => {
                    if (res.status === 200) {
                        return "Variant created successfully";
                    } else {
                        throw new Error(res.data.message);
                    }
                },
                error: (err) => err.message,
            });
            setName("");
            setImage(undefined);
            setDescription("");
            setPackaging("");
            setStock("");
            setPrice("");
            setComposition(["", ""]);
            setProductBy("");
            setCategoryId([""]);
            setType("");
            setParentProductCategory([""]);
            setProductId("");
            setSelectedProduct("");
            setNeedPrescription(false);
            if (inputFile.current) {
                inputFile.current.value = "";
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="text-black font-poppins min-h-screen pb-10 bg-darkRed flex flex-col items-center">
            <Toaster />
            <h1 className="text-white text-3xl font-semibold pt-8 text-center">
                ADD VARIANT
            </h1>
            <div className="bg-white w-[280px] sm:w-[630px] p-5 mt-8 rounded-lg flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <Label className="font-semibold">Parent Product</Label>
                    <Select value={selectedProduct} onValueChange={handleValueChange}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Parent Product" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Parent Product</SelectLabel>
                                {products &&
                                    products.map((product, index) => (
                                        <SelectItem
                                            key={index}
                                            value={product.id}
                                        >
                                            {product.name}
                                        </SelectItem>
                                    ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex gap-5 justify-between flex-wrap">
                    <Label
                        className="text-nowrap self-center font-semibold"
                        htmlFor="productName"
                    >
                        Variant Name
                    </Label>
                    <Input
                        className="w-[450px]"
                        type="text"
                        id="variantName"
                        name="variantName"
                        placeholder="Variant Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex gap-5 justify-between flex-wrap">
                    <Label
                        className="text-nowrap self-center font-semibold"
                        htmlFor="productImage"
                    >
                        Variant Image
                    </Label>
                    <Input
                        className="w-[240px] sm:w-[450px] h-[32px]"
                        type="file"
                        id="variantImage"
                        name="variantImage"
                        placeholder="Variant Name"
                        ref={inputFile}
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
                            placeholder="Variant Packaging (dus, ml, etc)"
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
                        Variant Type
                    </Label>
                    <Input
                        className="w-[450px]"
                        type="text"
                        id="variantType"
                        name="variantType"
                        placeholder="Variant Type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </div>
                <div className="flex gap-5 justify-between flex-wrap">
                    <Label
                        className="text-nowrap self-center font-semibold"
                        htmlFor="prescription"
                    >
                        Prescription
                    </Label>
                    <div className="w-[450px] flex items-center">
                        <Switch
                            className="data-[state=checked]:bg-darkRed"
                            id="prescription"
                            checked={needPrescription}
                            onCheckedChange={(isChecked) => setNeedPrescription(isChecked)}
                        />
                    </div>
                </div>
                <div className="flex gap-5 justify-between flex-wrap">
                    <Label
                        className="text-nowrap font-semibold "
                        htmlFor="categories"
                    >
                        Categories
                    </Label>
                    <ScrollArea className="w-[450px] h-[300px] rounded-md border p-2">
                        <div className="flex gap-3 flex-col">
                            {categories &&
                                categories.map((category, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-2"
                                    >
                                        <Switch
                                            className="data-[state=checked]:bg-darkRed"
                                            id={category.id}
                                            checked={categoryId.includes(category.id)}
                                            onCheckedChange={(isChecked) =>
                                                handleCategoryChange(
                                                    category,
                                                    isChecked
                                                )
                                            }
                                        />
                                        <Label htmlFor={category.id} className="cursor-pointer">
                                            {category.name}
                                        </Label>
                                    </div>
                                ))}
                        </div>
                    </ScrollArea>
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
                        <Button onClick={handleSubmit}>Create Variant</Button>
                        <Link href="/admin/add/product">
                            <Button variant={"outline"}>Add Product</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
