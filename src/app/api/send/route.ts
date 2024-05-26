import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

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

export async function sendEmail(
    values: z.infer<typeof formSchema>
) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const response = await resend.emails.send({
        from: values.email,
        to: ["phong.28.retzka@gmail.com"],
        subject: values.title,
        text: values.message,
    });
    const { data } = response;
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
