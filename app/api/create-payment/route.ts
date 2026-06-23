import { NextRequest, NextResponse } from "next/server";
import { createPaymentLink } from "@/lib/cashfree";
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

    const paymentLink = await createPaymentLink({ email, name, agentIds, amount });

    await supabase.from("waitlist_signups").insert({
      email,
      name: name || null,
      selected_agents: agentIds,
      amount_usd: amount,
      cashfree_link_id: paymentLink.link_id,
      status: "pending",
    });

    return NextResponse.json({ paymentLink: paymentLink.link_url });
  } catch (err: unknown) {
    console.error("[create-payment]", err);
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
