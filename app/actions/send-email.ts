'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';

const transport = nodemailer.createTransport({
  host: process.env.NEXT_TRANSPORT_HOST,
  port: Number(process.env.NEXT_TRANSPORT_PORT) || 578,
  auth: {
    user: process.env.NEXT_TRANSPORT_USERNAME,
    pass: process.env.NEXT_TRANSPORT_PASSWORD,
  },
});

const schema = z.object({
  name: z
    .string()
    .max(100, { message: "Oops, that's way too long to remember! 🙁" })
    .min(1, { message: 'You forgot your name! 🤔' }),
  email: z.string().email({
    message: 'Looks like this email address is invalid 😬',
  }),
  message: z
    .string()
    .max(1000, {
      message: "That's a very long message, You could have just emailed 😅",
    })
    .min(1, { message: 'Empty message! Are you sure? 😅' }),
});

export async function sendEmail(prevState: any, formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  const validatedFields = schema.safeParse({
    name,
    email,
    message,
  });

  if (!validatedFields.success) {
    return {
      sent: false,
      errors: validatedFields.error.formErrors.fieldErrors,
    };
  }

  try {
    await transport.sendMail({
      to: process.env.NEXT_CONTACT_TO,
      from: process.env.NEXT_CONTACT_FROM,
      subject: 'New contact request from your portfolio!',
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New contact request</title>
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
          <div style="background-color: #fff; border-radius: 5px; padding: 20px; font-size: 1rem;">
              <h1>Contact request</h1>
              <p>You have received a message from your potfolio contact form:</p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <h3>Message:</h3>
              <p>${message}</p>
          </div>
      </body>
      </html>`,
    });

    return {
      sent: true,
    };
  } catch (error) {
    return {
      sent: false,
    };
  }
}
