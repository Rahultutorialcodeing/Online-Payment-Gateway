import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    // Parse URL-encoded form data
    const formData = new URLSearchParams(await request.text());
    const data = Object.fromEntries(formData.entries());

    let { razorpay_payment_id, razorpay_order_id, razorpay_signature } = data;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.API_SECRET!)
      .update(body.toString())
      .digest("hex");

    const isAuthotic = razorpay_signature === expectedSignature;
    if (!isAuthotic) {
      return NextResponse.json({
        success: false,
        message: "You are not authorize",
      });
    }
    return NextResponse.redirect(
      new URL(`/paymentsuccess/${razorpay_payment_id}`, request.url)
    );
  } catch (error) {
    console.error("Error parsing data:", error);
    return NextResponse.json({
      success: false,
      message: "Invalid format",
    });
  }
}
