"use client";

import { Button } from "../ui/button";
import Link from "next/link";

import { MoreHorizontal } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./DataTable";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";


interface Variant {
    id: string;
    name: string;
    productName: string;
    productId: string;
    price: number;
    stock: number;
    type: string;
    composition: string[];
    image: string;
    categoryName: string[];
}

interface PropData {
    variants: Variant[];
 }

export default function ListVariants({ variants }: PropData) {
    const router = useRouter();

    const handleDelete = async (id: string) => {
        try {
            const myPromise = axios.delete(`/api/variant/delete/${id}`);
            await toast.promise(myPromise, {
                loading: "Deleting variant...",
                success: (res) => {
                    if (res.data.code === 200) {
                        return "Variant deleted successfully";
                    } else {
                        console.log(res.data)
                        throw new Error(res.data.message);
                    }
                },
                error: (err) => err.message,
            });
            router.refresh();
        } catch (error) {
            console.error(error);
        }
    };

    const columns: ColumnDef<Variant>[] = [
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
                const variant = row.original;

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
                            <DropdownMenuItem className="cursor-pointer">
                                <Link
                                    href={`/admin/edit/variant/${variant.id}`}
                                >
                                    Edit Variant
                                </Link>
                            </DropdownMenuItem>
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button
                                        className="px-2 py-1.5 w-full justify-start"
                                        variant={"ghost"}
                                    >
                                        Delete Variant
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent className="bg-white">
                                    <AlertDialogHeader>
                                        <AlertDialogTitle className="text-black">
                                            Are you absolutely sure?
                                        </AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This
                                            will permanently delete your variant
                                            data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel className="text-black">
                                            Cancel
                                        </AlertDialogCancel>
                                        <AlertDialogAction
                                            onClick={() =>
                                                handleDelete(variant.id)
                                            }
                                        >
                                            Delete
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ];

    return (
        <div className="font-poppins bg-darkRed px-4 min-h-screen">
            <Toaster />
            <h1 className="text-center font-semibold text-2xl pt-4 pb-6 sm:pb-4">
                LIST VARIANT
            </h1>
            <div className="flex gap-2 flex-wrap text-black sm:justify-center">
                <div className="w-full sm:w-min flex justify-end absolute right-4 top-14 sm:top-4">
                    <Button variant={"destructive"} asChild>
                        <Link href={"/admin/products"}>Back to Products</Link>
                    </Button>
                </div>
            </div>
            <div className="mt-4 lg:mt-0 flex justify-center">
                <div className="flex flex-col gap-4 w-full lg:w-[900px]">
                    <DataTable columns={columns} data={variants} />
                </div>
            </div>
        </div>
    );
}
