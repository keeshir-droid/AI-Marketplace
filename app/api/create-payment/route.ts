import { NextRequest, NextResponse } from "next/server";
import { razorpay } from "@/lib/razorpay";
import { supabase } from "@/lib/supabase";
import { WAITLIST_PRICE } from "@/lib/agents";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, agentIds } = body as {
      email: string;
      name?: string;
      agentIds: string[];
    };

    if (!email || !agentIds || agentIds.length === 0) {
      return NextResponse.json(
        { error: "email and agentIds are required" },
        { status: 400 }
      );
    }

    const amount = parseFloat((agentIds.length * WAITLIST_PRICE).toFixed(2));
    const amountInPaise = Math.round(amount * 100);

    const order = await razorpay.orders.create({
      amount: amountInPaise,
      currency: "USD",
      receipt: `waitlist_${Date.now()}`,
      notes: {
        email,
        name: name || "",
        agent_ids: agentIds.join(","),
      },
    });

    await supabase.from("waitlist_signups").insert({
      email,
      name: name || null,
      selected_agents: agentIds,
      amount_usd: amount,
      razorpay_order_id: order.id,
      status: "pending",
    });

    return NextResponse.json({
      orderId: order.id,
      amount: amountInPaise,
      currency: "USD",
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    });
  } catch (err: unknown) {
    console.error("[create-payment]", err);
    const message =
      err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
