import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";
import { supabase } from "@/lib/supabase";

function verifyRazorpayWebhook(
  rawBody: string,
  signature: string
): boolean {
  const expectedSig = createHmac(
    "sha256",
    process.env.RAZORPAY_WEBHOOK_SECRET!
  )
    .update(rawBody)
    .digest("hex");
  return expectedSig === signature;
}

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-razorpay-signature") || "";

    if (!verifyRazorpayWebhook(rawBody, signature)) {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 401 }
      );
    }

    const event = JSON.parse(rawBody);
    const eventType: string = event.event;

    if (eventType === "payment.captured") {
      const payment = event.payload?.payment?.entity;
      const orderId: string = payment?.order_id;
      const paymentId: string = payment?.id;

      await supabase
        .from("waitlist_signups")
        .update({
          status: "paid",
          razorpay_payment_id: paymentId,
          paid_at: new Date().toISOString(),
        })
        .eq("razorpay_order_id", orderId);
    } else if (eventType === "payment.failed") {
      const payment = event.payload?.payment?.entity;
      const orderId: string = payment?.order_id;

      await supabase
        .from("waitlist_signups")
        .update({ status: "failed" })
        .eq("razorpay_order_id", orderId);
    }

    return NextResponse.json({ received: true });
  } catch (err: unknown) {
    console.error("[webhook]", err);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
