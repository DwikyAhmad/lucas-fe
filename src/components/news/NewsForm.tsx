'use client';
import React, {  } from 'react'
import HeaderNews from './HeaderNews'

import { Button } from '../ui/button';
// import myStorage  from '@/firebase/storage';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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
import API_URL from "@/utils/utils";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
// import Link from "next/link";


function NewsForm() {
  


  const formSchema = z
  .object({
      title: z
          .string()
          .min(1, { message: "Title must be at least 1 characters." })
          .max(50),
      writer: z
          .string()
          .min(1, { message: "Writer must be at least 1 characters." })
          .max(50),
    newsPoster: z
      .instanceof(File)
      .refine(
        (file) =>
          file.type.startsWith("image/") &&
          ["image/jpeg", "image/png", "image/webp"].includes(file.type),
        {
          message: "Only image files (JPEG, PNG, WebP) are allowed.",
        }
      ), // URL validation
      newsFile: z
        .instanceof(File)
        .refine((file) => file.type === "application/pdf", {
          message: "Only PDF files are allowed.",
        })
      
      


  });
const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    title: "",
    writer: "",
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

    if (values.newsPoster) {
      formData.append("newsPoster", values.newsPoster);
    }
    if (values.newsFile) {
      formData.append("newsFile", values.newsFile);
    } 
    console.log("Form data : "+formData)
      const myPromise = axios.post(`${API_URL}/news/create`, {
          title: values.title,
          writer: values.writer,
          newsPoster: values.newsPoster,
          newsFile: values.newsFile,
  
      });
      await toast.promise(myPromise, {
          loading: "Uploading...",
          success: "Succesfully Uploading News",
          error: "Failed To Upload News",
      });
      router.push("/news");
  } catch (error) {
      if (error instanceof axios.AxiosError) {
          toast.error(error.response?.data.message);
      }
  }
};
  return (
    <>
      <div className=' bg-primaryBlueNavy w-full  mb-4  p-4 '>
          <HeaderNews pageTitle={'ADD NEWS'}   />
        <div className='flex gap-x-2 gap-y-4  flex-wrap items-center justify-center align-middle'>
        </div>
        <div className="file-inputh-full w-full bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 p-4">
        <Toaster />
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-y-2"
                >
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>News Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="News Title" {...field} />
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
                                        <FormControl >
                                            <Input placeholder="News Author" {...field} />
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
                                  <FormLabel>Upload PDF File</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="file"
                                      accept="application/pdf"
                                      onChange={(e) => field.onChange(e.target.files?.[0])}
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
                                    onChange={(e) => field.onChange(e.target.files?.[0])}
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
  )
}

export default NewsForm;