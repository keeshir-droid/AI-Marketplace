const CASHFREE_BASE =
  process.env.CASHFREE_ENV === "production"
    ? "https://api.cashfree.com/pg/links"
    : "https://sandbox.cashfree.com/pg/links";

export interface CreatePaymentLinkParams {
  email: string;
  name?: string;
  agentIds: string[];
  amount: number;
}

export interface CashfreePaymentLink {
  link_id: string;
  link_url: string;
  link_expiry_time: string;
}

export async function createPaymentLink(
  params: CreatePaymentLinkParams
): Promise<CashfreePaymentLink> {
  const linkId = `waitlist_${Date.now()}_${Math.random()
    .toString(36)
    .slice(2, 8)}`;

  const payload = {
    link_id: linkId,
    link_amount: params.amount,
    link_currency: "USD",
    link_purpose: `AgentOS Waitlist: ${params.agentIds.join(", ")}`,
    customer_details: {
      customer_email: params.email,
      customer_name: params.name || "Waitlist Member",
      customer_phone: "9999999999",
    },
    link_meta: {
      return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/thank-you?payment_id=${linkId}`,
    },
    link_notify: {
      send_email: false,
      send_sms: false,
    },
  };

  const response = await fetch(CASHFREE_BASE, {
    method: "POST",
    headers: {
      "x-api-version": "2023-08-01",
      "x-client-id": process.env.CASHFREE_APP_ID!,
      "x-client-secret": process.env.CASHFREE_SECRET_KEY!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Cashfree API error: ${error}`);
  }

  const data = await response.json();
  return {
    link_id: data.link_id,
    link_url: data.link_url,
    link_expiry_time: data.link_expiry_time,
  };
}
