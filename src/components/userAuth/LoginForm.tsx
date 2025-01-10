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
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Link from "next/link";
import { redirectPage } from "./authServerAction";

export default function LoginForm() {
    const formSchema = z.object({
        email: z
            .string()
            .email({ message: "Invalid email address." })
            .min(2, { message: "Email must be at least 2 characters." })
            .max(50),
        password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters." })
            .max(50),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const myPromise = axios.post(`/api/auth/login/user`, {
                email: values.email,
                password: values.password,
            });
            await toast.promise(myPromise, {
                loading: "Signing in...",
                success: (response) => {
                    if (response.data.code === 200) {
                        return "Login successful";
                    } else {
                        throw new Error(response.data.message);
                    }
                },
                error: (error) => error.message,
            });
            if ((await myPromise).data.code === 200) {
                redirectPage();
            }
        } catch (error) {
            toast.error("Unknown error occured");
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
                    Sign in
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
                    <div className="flex justify-center mt-4">
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </div>
                    <p className="text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/register">
                            <span className="underline font-semibold">
                                Register
                            </span>
                        </Link>
                    </p>
                </form>
            </Form>
        </div>
    );
}
