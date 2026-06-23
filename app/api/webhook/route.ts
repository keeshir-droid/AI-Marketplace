import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";
import { supabase } from "@/lib/supabase";

function verifyCashfreeSignature(
  payload: string,
  timestamp: string,
  signature: string
): boolean {
  const data = timestamp + payload;
  const expectedSig = createHmac("sha256", process.env.CASHFREE_SECRET_KEY!)
    .update(data)
    .digest("base64");
  return expectedSig === signature;
}

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const timestamp = req.headers.get("x-webhook-timestamp") || "";
    const signature = req.headers.get("x-webhook-signature") || "";

    if (!verifyCashfreeSignature(rawBody, timestamp, signature)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const event = JSON.parse(rawBody);
    const eventType: string = event.type;
    const data = event.data;

    if (eventType === "PAYMENT_LINK_EVENT") {
      const linkId: string = data.payment_link?.link_id;
      const paymentId: string = data.payment?.cf_payment_id;
      const paymentStatus: string = data.payment?.payment_status;

      if (paymentStatus === "SUCCESS") {
        await supabase
          .from("waitlist_signups")
          .update({
            status: "paid",
            cashfree_payment_id: paymentId,
            paid_at: new Date().toISOString(),
          })
          .eq("cashfree_link_id", linkId);
      } else if (paymentStatus === "FAILED") {
        await supabase
          .from("waitlist_signups")
          .update({ status: "failed" })
          .eq("cashfree_link_id", linkId);
      }
    }

    return NextResponse.json({ received: true });
  } catch (err: unknown) {
    console.error("[webhook]", err);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
