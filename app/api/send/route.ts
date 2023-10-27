import { NextResponse, NextRequest, userAgent } from "next/server";
import sendEmail from "./_send-email";

export async function POST(request: NextRequest) {
  const data = await request.json();

  try {
    await sendEmail({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      message: data.message,
      request: request,
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
