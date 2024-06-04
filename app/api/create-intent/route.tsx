// const Stripe = require('stripe');

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
  apiVersion: "2024-04-10"
});

export async function POST(request: any) {
  const data: any = await request.json();
  const amount = data.amount;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "USD",
    });
    return NextResponse.json(paymentIntent.client_secret, { status: 200 });

    //we never make it here
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
