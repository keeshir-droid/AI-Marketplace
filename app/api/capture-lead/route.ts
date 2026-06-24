import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, agentIds } = body as {
      email: string;
      name?: string;
      agentIds: string[];
    };

    if (!email) {
      return NextResponse.json({ error: "email is required" }, { status: 400 });
    }

    await supabase.from("leads").upsert(
      {
        email,
        name: name || null,
        agent_ids: agentIds ?? [],
      },
      { onConflict: "email" }
    );

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error("[capture-lead]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
