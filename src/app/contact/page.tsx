"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Resend } from "resend";
import { motion } from "framer-motion";
import { slideInFromTop } from "../../utils/motion";
import { useUpdatePath } from "@/lib/providers/path-provider";
import { SparklesIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const resend = new Resend(`re_b2veLBkB_NdDt1Y3uYny491N9SzAs6oEn`);

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Your email is required",
  }),
  title: z.string().min(2, {
    message: "Your title is required",
  }),
  message: z.string().min(2, {
    message: "Your message is required",
  }),
});

const Contact = () => {
  const { setPath } = useUpdatePath();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      title: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    try {
      await resend.emails.send({
        from: values.email,
        to: ["fcmunchen1901@gmail.com"],
        subject: values.title,
        text: values.message,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`flex flex-col items-center justify-center mt-20 px-20 w-full z-[20]`}
    >
      <motion.div
        variants={slideInFromTop(0.5)}
        className={`Welcome-box py-2 px-4 border border-green-500 opacity-[0.9]`}
      >
        <SparklesIcon className={`h-5 w-5 text-green-500 inline-block mr-2`} />
        <h1 className={`text-[14px] text-washed-blue-400`}>Contacts</h1>
      </motion.div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mt-8 relative w-1/2 items-center justify-center"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your E-mail" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Your Title" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your message" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className={`hover:before:bg-redborder-red-500 relative h-10 w-20 overflow-hidden border border-green-500 bg-black px-3 text-green-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-300 hover:text-white hover:shadow-green-500 hover:bg-black hover:before:left-0 hover:before:w-full 
            `}
          >
            <span
              className={`group-hover:${"hidden"} text-white group-hover:text-black relative z-10`}
            >
              Send
            </span>
          </Button>
        </form>
      </Form>
    </motion.div>
  );
};

export default Contact;
