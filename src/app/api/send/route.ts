import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const response = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "phong.28.retzka@gmail.com",
            subject: "Hello World",
            html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
        });
        const { data } = response;
        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
