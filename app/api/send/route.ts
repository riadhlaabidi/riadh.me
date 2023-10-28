import { NextResponse, type NextRequest, userAgent } from "next/server";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: process.env.NEXT_TRANSPORT_HOST,
  port: Number(process.env.NEXT_TRANSPORT_PORT) || 578,
  auth: {
    user: process.env.NEXT_TRANSPORT_USERNAME,
    pass: process.env.NEXT_TRANSPORT_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  const { firstname, lastname, email, message } = await request.json();
  const ua = userAgent(request);

  try {
    await transport.sendMail({
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
              <p><strong>Name:</strong> ${firstname} ${lastname}</p>
              <p><strong>Email:</strong> ${email}</p>
              <h3>Message:</h3>
              <p>${message}</p>
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
              <small><strong>IP Address:</strong>${request.headers.get(
                "x-forwarded-for"
              )} ${request.headers.get("x-real-ip")}</small>
              <br>
              <small><strong>Country:</strong> ${request.geo?.country}</small>
              <br>
              <small><strong>Region:</strong> ${request.geo?.region}</small>
              <br>
              <small><strong>City:</strong> ${request.geo?.city}</small>
          </div>
      </body>
      </html>`,
    });

    return NextResponse.json(
      { message: "Email is sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
