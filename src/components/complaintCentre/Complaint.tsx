"use client";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { useRef } from "react";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const formSchema = z.object({
    description: z.string().min(5, {
        message: "Description must be at least 5 characters",
    }),
    productId: z.string().min(1, {
        message: "Please select a product",
    }),
    anonymous: z.boolean(),
});

interface product {
    id: string;
    name: string;
    price: number;
    stock: number;
    type: string;
    composition: string[];
    image: string;
    categoryName: string[];
    prescription: boolean;
}

interface props {
    products: product[];
}

export default function Complaint({ products }: props) {
    const formRef = useRef(null);
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            description: "",
            productId: "",
            anonymous: false,
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try { 
            const myPromise = axios.post(`/api/complaint/create`, {
                ...values,
            })
            await toast.promise(myPromise, {
                loading: "Submitting...",
                success: (response) => {
                    if (response.data.code === 200) {
                        return "Complaint submitted successfully";
                    } else {
                        throw new Error(response.data.message);
                    }
                },
                error: (error) => error.message,
            })
            if ((await myPromise).data.code === 200) {
                form.reset();
            }
        } catch (error) {
            toast.error("Unknown error occured");
        }
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const titleVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { 
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div 
            className="min-h-[calc(100vh-365px)] font-poppins text-[#292929]"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <Toaster />
            <motion.div variants={titleVariants}>
                <h1 className="font-bold text-2xl lg:text-5xl text-center mt-10">
                    PHARMACOVILIENCE
                </h1>
                <div className="w-full flex justify-center mt-2 px-12">
                    <motion.div 
                        className="bg-primaryRed h-1"
                        initial={{ width: 0 }}
                        animate={{ width: "200px", transition: { duration: 0.8, delay: 0.3 } }}
                        whileInView={{ width: ["0px", "200px", "400px"] }}
                        viewport={{ once: true }}
                    ></motion.div>
                </div>
            </motion.div>
            <motion.div 
                className="px-4 md:px-8 mt-10 mb-10 w-full lg:w-[800px] mx-auto"
                variants={itemVariants}
            >
                <motion.div 
                    className="border-2 rounded-lg border-[#292929] w-full h-min-[300px] p-5"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}
                >
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4"
                            ref={formRef}
                        >
                            <motion.div variants={itemVariants}>
                                <FormField
                                    control={form.control}
                                    name="anonymous"
                                    render={({ field }) => (
                                        <FormItem className="flex items-center gap-2">
                                            <FormLabel htmlFor="anon">
                                                Send as anonymous
                                            </FormLabel>
                                            <FormControl className="!m-0">
                                                <Switch
                                                    id="anon"
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    ref={field.ref}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <FormField
                                    control={form.control}
                                    name="productId"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel
                                                htmlFor="product"
                                                className="text-2xl font-semibold"
                                            >
                                                Product
                                            </FormLabel>
                                            <FormControl>
                                                <Select
                                                    onValueChange={field.onChange}
                                                    value={field.value}
                                                >
                                                    <SelectTrigger
                                                        className="w-full bg-white text-black"
                                                        id="product"
                                                    >
                                                        <SelectValue placeholder="Select Product" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            {products &&
                                                                products.map(
                                                                    (
                                                                        item,
                                                                        index
                                                                    ) => (
                                                                        <SelectItem
                                                                            value={
                                                                                item.id
                                                                            }
                                                                            key={
                                                                                index
                                                                            }
                                                                        >
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </SelectItem>
                                                                    )
                                                                )}
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Textarea
                                                    className="h-[200px]"
                                                    placeholder="Enter your complaint here"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </motion.div>
                            <motion.div 
                                className="flex gap-2"
                                variants={itemVariants}
                            >
                                <Button
                                    className="text-white"
                                    variant={"destructive"}
                                >
                                    Back
                                </Button>
                                <Button 
                                    className="text-white"
                                >
                                    Submit
                                </Button>
                            </motion.div>
                        </form>
                    </Form>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
