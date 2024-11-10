"use client";

import { Button } from "../ui/button";
import Link from "next/link";

import { MoreHorizontal } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./DataTable";
import { useRouter } from "next/navigation";

interface product {
    id: string;
    name: string;
    price: number;
    stock: number;
    type: string;
    composition: string[];
    image: string;
    categoryName: string[];
}

interface PropData {
    products: product[];
}

export default function ListProducts({ products }: PropData) {
    const router = useRouter();
    const columns: ColumnDef<product>[] = [
        {
            accessorKey: "name",
            header: "Product Name",
        },
        {
            accessorKey: "type",
            header: "Type",
        },
        {
            accessorKey: "categoryName",
            header: "Categories",
        },
        {
            accessorKey: "price",
            header: "Price",
            cell: ({ row }) => {
                const price: number = row.getValue("price");
                return <div>Rp{price}</div>;
            },
        },
        {
            id: "actions",
            cell: ({ row }) => {
                const product = row.original;

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() =>
                                    router.push(`/admin/edit/product/${product.id}`)
                                }
                            >
                                Edit Product
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() =>
                                    navigator.clipboard.writeText(product.id)
                                }
                            >
                                Delete Product
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Manage Variant</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ];

    return (
        <div className="font-poppins bg-darkRed px-4 min-h-screen">
            <h1 className="text-center font-semibold text-2xl pt-4 pb-6 sm:pb-4">
                LIST PRODUCT
            </h1>
            <div className="flex gap-2 flex-wrap text-black sm:justify-center">
                <div className="w-full sm:w-min flex justify-end absolute right-4 top-14 sm:top-4">
                    <Button variant={"destructive"}>
                        <Link href={"/admin/dashboard"}>Back to dashboard</Link>
                    </Button>
                </div>
            </div>
            <div className="mt-4 lg:mt-0 flex justify-center">
                <div className="flex flex-col gap-4 w-full lg:w-[900px]">
                    <DataTable columns={columns} data={products} />
                </div>
            </div>
        </div>
    );
}
