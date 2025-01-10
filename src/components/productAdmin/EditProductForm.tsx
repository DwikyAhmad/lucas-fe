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
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Category {
    id: string;
    name: string;
}

interface product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    composition: string[];
    image: string;
    type: string;
    productBy: string;
    packaging: string;
    categoryNames: string[];
    prescription: boolean;
}

interface ProductFormProps {
    categories: Category[];
    product: product;
}

export default function EditProductForm({
    categories,
    product,
}: ProductFormProps) {

    const router = useRouter();
    const getCategoryId = (categoryName: string) => {
        const category = categories.find(
            (category) => category.name === categoryName
        );
        return category ? category.id : "";
    };

    const categoryIdList = product.categoryNames.map((categoryName) =>
        getCategoryId(categoryName)
    );

    const [name, setName] = useState(product.name);
    const [image, setImage] = useState<File>();
    const [description, setDescription] = useState(product.description);
    const [packaging, setPackaging] = useState(product.packaging);
    const [stock, setStock] = useState(product.stock.toString());
    const [price, setPrice] = useState(product.price.toString());
    const [composition, setComposition] = useState(product.composition);
    const [productBy, setProductBy] = useState(product.productBy);
    const [categoryId, setCategoryId] = useState(categoryIdList);
    const [type, setType] = useState(product.type);
    const inputFile = useRef<HTMLInputElement>(null);
    const [needPrescription, setNeedPrescription] = useState(product.prescription);

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
        } else {
            formData.append("image", "");
        }
        formData.append("imageUrl", product.image);
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
            const myPromise = axios.put(`/api/product/update/${product.id}`, formData);
            await toast.promise(myPromise, {
                loading: "Updating product...",
                success: (res) => {
                    if (res.data.code === 200) {
                        return "Product updated successfully";
                    } else {
                        throw new Error(res.data.message);
                    }
                },
                error: (err) => err.message,
            });
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="text-black font-poppins min-h-screen pb-10 bg-darkRed flex flex-col items-center">
            <Toaster />
            <h1 className="text-white text-3xl font-semibold pt-8 text-center">
                EDIT PRODUCT
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
                <div className="flex justify-between flex-wrap">
                    <Label
                        className="text-nowrap font-semibold"
                        htmlFor="previewImage"
                    >
                        Image Preview
                    </Label>
                    <Image
                        src={product.image}
                        alt="Product Image Not Found"
                        className="text-sm"
                        width={300}
                        height={200}
                    />
                </div>
                <div className="flex gap-5 justify-between flex-wrap">
                    <Label
                        className="text-nowrap self-center font-semibold sm:leading-5"
                        htmlFor="productImage"
                    >
                        Product Image <br className="hidden sm:flex"/>(Optional)
                    </Label>
                    <Input
                        className="w-[240px] sm:w-[450px] h-[32px] self-center"
                        type="file"
                        id="productImage"
                        name="productImage"
                        placeholder="Product Name"
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
                                            checked={categoryId.includes(
                                                category.id
                                            )}
                                            onCheckedChange={(isChecked) =>
                                                handleCategoryChange(
                                                    category.id,
                                                    isChecked
                                                )
                                            }
                                        />
                                        <Label
                                            htmlFor={category.id}
                                            className="cursor-pointer"
                                        >
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
                        <Link href={"/admin/products"}>
                            <Button variant={"destructive"}>Back</Button>
                        </Link>
                    </div>
                    <div className="flex gap-4 flex-wrap max-sm:justify-end">
                        <Button onClick={handleSubmit}>Save Changes</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
