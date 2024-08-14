import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const instance = new Razorpay({
  key_id: process.env.API_KEY!,
  key_secret: process.env.API_SECRET,
});

export async function POST(request: NextRequest) {
  const { amount }: any =await request.json();
  const options = {
    amount: Number(amount*100),
    currency: "INR"
  };
  const order = await instance.orders.create(options);
  return NextResponse.json(order);
}
