"use client";

import React from "react";

import { Button } from "../ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function NewsForm() {
    const formSchema = z.object({
        title: z
            .string()
            .min(1, { message: "Title must be at least 1 characters." })
            .max(50),
        writer: z
            .string()
            .min(1, { message: "Writer must be at least 1 characters." })
            .max(50),
        teaser: z
            .string()
            .min(1, { message: "Teaser must be at least 1 characters." })
            .max(200),
        newsPoster: z
            .instanceof(File)
            .refine(
                (file) =>
                    file.type.startsWith("image/") &&
                    ["image/jpeg", "image/png", "image/webp"].includes(
                        file.type
                    ),
                {
                    message: "Only image files (JPEG, PNG, WebP) are allowed.",
                }
            ), // URL validation
        newsFile: z
            .instanceof(File)
            .refine((file) => file.type === "application/pdf", {
                message: "Only PDF files are allowed.",
            }),
    });
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            writer: "",
            teaser: "",
            newsPoster: undefined as unknown as File,
            newsFile: undefined as unknown as File,
        },
    });

    const router = useRouter();

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const formData = new FormData();
            formData.append("title", values.title);
            formData.append("writer", values.writer);
            formData.append("teaser", values.teaser);

            if (values.newsPoster) {
                formData.append("newsPoster", values.newsPoster);
            }
            if (values.newsFile) {
                formData.append("newsFile", values.newsFile);
            }

            const myPromise = axios.post('/api/news/create', formData);
            await toast.promise(myPromise, {
                loading: "Uploading...",
                success: (response) => { 
                    if (response.data.statusCode) { 
                        throw new Error(response.data.message);
                    }
                    return response.data.message;
                },
                error: (error) => error.message,
            });
            router.refresh();
        } catch (error) {
            if (error instanceof axios.AxiosError) {
                toast.error(error.response?.data.message);
            }
        }
    };
    return (
        <>
            <div className="bg-darkRed w-full min-h-screen p-4 font-poppins flex flex-col items-center text-black">
                <Toaster />
                <h1 className="text-center mb-4 py-4 text-3xl font-semibold text-white">
                    Add News
                </h1>
                <div className="sm:w-[600px] lg:w-[700px] bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md border border-white p-4">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="flex flex-col gap-y-2 "
                        >
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>News Title</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="News Title"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="w-full">
                                <FormField
                                    control={form.control}
                                    name="writer"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Writer</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="News Author"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="w-full">
                                <FormField
                                    control={form.control}
                                    name="teaser"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Teaser</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="News Teaser"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="w-full ">
                                <FormField
                                    control={form.control}
                                    name="newsFile"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Upload PDF File
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="file"
                                                    accept="application/pdf"
                                                    onChange={(e) =>
                                                        field.onChange(
                                                            e.target.files?.[0]
                                                        )
                                                    }
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="w-full">
                                <FormField
                                    control={form.control}
                                    name="newsPoster"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>News Poster</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) =>
                                                        field.onChange(
                                                            e.target.files?.[0]
                                                        )
                                                    }
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex justify-center mt-4">
                                <Button type="submit" className="w-full">
                                    SUBMIT
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </>
    );
}
