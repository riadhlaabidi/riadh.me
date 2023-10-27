import { NextRequest, userAgent } from "next/server";
import nodemailer from "nodemailer";

type MailData = {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
  request: NextRequest;
};

const transport = nodemailer.createTransport({
  host: process.env.NEXT_TRANSPORT_HOST,
  port: +process.env.NEXT_TRANSPORT_PORT!,
  auth: {
    user: process.env.NEXT_TRANSPORT_USERNAME,
    pass: process.env.NEXT_TRANSPORT_PASSWORD,
  },
});

export default async function sendEmail(data: MailData) {
  const ua = userAgent(data.request);
  transport.sendMail({
    to: "riadh.by.laabidi@gmail.com",
    from: "contact@riadh.me",
    subject: "New contact request from your portfolio!",
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
            <p><strong>Name:</strong> ${data.firstname} ${data.lastname}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <h3>Message:</h3>
            <p>${data.message}</p>
            <hr style="margin-top:100px;">
            <small><strong>Browser:</strong> ${ua.browser.name} ${
      ua.browser.version
    }</small>
            <br>
            <small><strong>Device:</strong> ${ua.device.model} ${
      ua.device.type
    } ${ua.device.vendor}</small>
            <br>
            <small><strong>User agent:</strong> ${ua.ua}</small>
            <br>
            <small><strong>OS:</strong> ${ua.os.name} ${ua.os.version}</small>
            <br>
            <small><strong>CPU:</strong> ${ua.cpu.architecture}</small>
            <br>
            <small><strong>Engine:</strong> ${ua.engine.name} ${
      ua.engine.version
    }</small>
            <br>
            <small><strong>isBot:</strong> ${ua.isBot}</small>
            <br>
            <small><strong>IP Address:</strong> ${data.request.headers.get(
              "x-forwarded-for"
            )}</small>
            <br>
            <small><strong>Country:</strong> ${
              data.request.geo?.country
            }</small>
            <br>
            <small><strong>Region:</strong> ${data.request.geo?.region}</small>
            <br>
            <small><strong>City:</strong> ${data.request.geo?.city}</small>
        </div>
    </body>
    </html>`,
  });
}
