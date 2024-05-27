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
import { sendEmail } from "@/lib/providers/send-email";


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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      const formData = new FormData();
      formData.append('email', values.email);
      formData.append('title', values.title);
      formData.append('message', values.message);
      
      const response = await sendEmail(formData);
      console.log(response);
      setPath("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`flex flex-col items-center justify-center mt-20 px-20 w-full h-full z-[20]`}
    >
      <motion.div
        variants={slideInFromTop(0.5)}
        className={`Welcome-box py-2 px-4 border border-green-500 opacity-[0.9]`}
      >
        <SparklesIcon className={`h-5 w-5 text-green-500 inline-block mr-2`} />
        <h1 className={`text-[14px] text-washed-blue-400`}>Contacts</h1>
      </motion.div>
      <motion.div
        variants={slideInFromTop(0.5)}
      >
      <form
        className="mt-10 flex flex-col w-[20rem]"
        action = {async(formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          type="email"
          placeholder="Email"
          name="senderEmail"
          className="border border-gray-400 p-2 mb-4 rounded-md"
          required
          maxLength={500}
        />
        <input
          type="title"
          placeholder="Title"
          name="title"
          className="border border-gray-400 p-2 mb-4 rounded-md"
          required
          maxLength={500}
        />
        <textarea
          placeholder="Message"
          name="message"
          className="border border-gray-400 p-2 mb-4 rounded-md"
          required
          maxLength={500}
        />
        <Button
          type="submit"
          className="bg-green-500 text-white p-2 mt-4"
        >
          Send
        </Button>

      </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;