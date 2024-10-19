"use client";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
import {
  slideInFromTop,
} from "@/utils/motion";

import { sendEmail } from "@/lib/providers/send-email";

import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import SparklesBox from "@/components/reuse-comp/sparkles-box";

const Contact = () => {

  const router = useRouter();
  const { toast } = useToast();
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleTimeString();
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`flex flex-col items-center justify-center mt-20 px-20 w-full h-full z-[20]`}
    >
      <SparklesBox button_name="Contact" />
      <motion.div
        variants={slideInFromTop(0.5)}
      >
      <form
        className="mt-10 flex flex-col w-[20rem]"
        action = {async(formData) => {
          await sendEmail(formData);
          router.push("/intro");
          toast({
            title: "Email sent",
            description: `Your email has been sent successfully at ${formattedTime}`,
            duration: 3000,
          });
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