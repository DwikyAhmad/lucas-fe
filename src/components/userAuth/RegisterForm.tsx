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

export default function RegisterForm() {
    const formSchema = z
        .object({
            username: z
                .string()
                .min(2, { message: "Username must be at least 2 characters." })
                .max(50),
            address: z
                .string()
                .min(2, { message: "Address must be at least 2 characters." })
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
        defaultValues: { username: "", address: "", password: "", confirmPassword: "" },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
        console.log("Submitted");
    };

    return (
        <div className="bg-white w-full sm:w-[500px] px-4 rounded-lg min-h-screen flex flex-col justify-center">
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
                    <p className="text-center text-sm">Already have an account? <span className="underline font-semibold">Sign in</span></p>
                </form>
            </Form>
        </div>
    );
}
