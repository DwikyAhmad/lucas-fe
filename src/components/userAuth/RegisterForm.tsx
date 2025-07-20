"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import API_URL from "@/utils/utils";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function RegisterForm() {
    const formSchema = z
        .object({
            email: z
                .string()
                .email({ message: "Invalid email address." })
                .min(2, { message: "Email must be at least 2 characters." })
                .max(50),
            username: z
                .string()
                .min(2, { message: "Username must be at least 2 characters." })
                .max(50),
            address: z
                .string()
                .min(2, { message: "Address must be at least 2 characters." })
                .max(50),
            firstName: z
                .string()
                .min(2, { message: "First Name must be at least 2 characters." })
                .max(50),
            lastName: z
                .string()
                .min(2, { message: "Last Name must be at least 2 characters." })
                .max(50),
            password: z
                .string()
                .min(8, { message: "Password must be at least 8 characters." })
                .max(50),
            confirmPassword: z
                .string()
                .min(8, { message: "Password must be at least 8 characters." })
                .max(50),
        })
        .refine((data) => data.password === data.confirmPassword, {
            message: "Passwords do not match.",
            path: ["confirmPassword"],
        });
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            address: "",
            password: "",
            confirmPassword: "",
            email: "",
            firstName: "",
            lastName: "",
        },
    });

    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectUrl = searchParams.get('redirect');

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const myPromise = axios.post(`${API_URL}/auth/register`, {
                email: values.email,
                username: values.username,
                address: values.address,
                name: values.firstName + " " + values.lastName,
                password: values.password,
            });
            await toast.promise(myPromise, {
                loading: "Registering...",
                success: "Register success",
                error: "Register failed",
            });
            router.push(`/login${redirectUrl ? `?redirect=${encodeURIComponent(redirectUrl)}` : ''}`);
        } catch (error) {
            if (error instanceof axios.AxiosError) {
                toast.error(error.response?.data.message);
            }
        }
    };

    return (
        <div className="bg-white w-full sm:w-[500px] px-4 rounded-lg min-h-screen flex flex-col justify-center">
            <Toaster />
            <div className="flex justify-center mb-2">
                <p
                    className="font-semibold text-white w-min text-nowrap px-16 py-2
                rounded-xl bg-primaryBlueNavy text-lg"
                >
                    Register
                </p>
            </div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-y-2"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex gap-2">
                        <div className="w-full">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="First name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-full">
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Last name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Username" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="Address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Password"
                                        {...field}
                                        type="password"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Confirm Password"
                                        {...field}
                                        type="password"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-center mt-4">
                        <Button type="submit" className="w-full">
                            Create account
                        </Button>
                    </div>
                    <p className="text-center text-sm">
                        Already have an account?{" "}
                        <Link href={`/login${redirectUrl ? `?redirect=${encodeURIComponent(redirectUrl)}` : ''}`}><span className="underline font-semibold">Sign in</span></Link>
                    </p>
                </form>
            </Form>
        </div>
    );
}
