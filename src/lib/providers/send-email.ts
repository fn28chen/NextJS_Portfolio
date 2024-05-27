"use server"
import { Resend } from 'resend'
import { validateString } from '../utils';

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const sender = formData.get("senderEmail");
    const title = formData.get("title");
    const message = formData.get("message");

    if(!validateString(sender, 500)) {
        throw new Error('Invalid sender');
    }
    if(!validateString(title, 500)) {
        throw new Error('Invalid title');
    }
    if(!validateString(message, 5000)) {
        throw new Error('Invalid message');
    }
    try {
        const { data, error } = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>", 
            to: ['phong.28.retzka@gmail.com'],
            subject: title as string,
            reply_to: sender as string,
            text: message as string,
        })
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}