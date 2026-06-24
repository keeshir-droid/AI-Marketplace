import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Luce",
};

const sections = [
  {
    title: "The service",
    body: "Luce operates an AI agent marketplace. By joining the waitlist and paying the $1.99 per-agent reservation fee, you are securing early access and a discounted subscription rate when the relevant agent launches. The fee is not a subscription charge; it is applied as a credit toward your first bill.",
  },
  {
    title: "Waitlist payment",
    body: "The $1.99 waitlist fee is charged per agent at the time of sign-up. This fee reserves your position on the waitlist and guarantees priority access at launch. It is fully refundable if the corresponding agent does not launch by July 7th, 2026.",
  },
  {
    title: "Refund policy",
    body: "If a Luce agent you have waitlisted for does not launch by July 7th, 2026, we will refund your $1.99 fee in full, no questions asked. Refunds are processed to the original payment method within 7 business days of your request. To request a refund, email support@luce.co with your payment reference.",
  },
  {
    title: "Agent subscriptions",
    body: "Upon launch, each agent will be available as a monthly subscription at the price shown on the product page at the time you join the waitlist. As a waitlist member, you receive a 25% discount on your first month. Your $1.99 reservation fee is deducted from your first invoice. You are under no obligation to subscribe after launch.",
  },
  {
    title: "Acceptable use",
    body: "You agree to use Luce agents only for lawful purposes and in accordance with applicable law. You may not use agents to harass, deceive, or cause harm to any third party. You may not attempt to reverse-engineer, resell, or create derivative products based on the Luce platform.",
  },
  {
    title: "Integrations and data access",
    body: "Agents connect to third-party services (Gmail, Shopify, Meta Ads, etc.) via OAuth. You grant Luce only the permissions required for each agent to function. You are responsible for ensuring your use of integrations complies with those third-party platforms' own terms of service.",
  },
  {
    title: "Limitation of liability",
    body: "Luce agents are provided on an 'as-is' basis. We do not guarantee uninterrupted availability or error-free operation. Luce is not liable for any indirect, incidental, or consequential damages arising from use of the service. Our total liability to you is limited to the amount you have paid to Luce in the preceding 12 months.",
  },
  {
    title: "Changes to terms",
    body: "We may update these terms as the product evolves. We will notify you by email of material changes at least 14 days before they take effect. Continued use of the service after that date constitutes acceptance of the updated terms.",
  },
  {
    title: "Governing law",
    body: "These terms are governed by the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.",
  },
];

export default function TermsPage() {
  const sectionHead: React.CSSProperties = {
    fontFamily: "var(--font-display), sans-serif",
    fontSize: "16px",
    fontWeight: 700,
    color: "#0F1629",
    marginBottom: "8px",
    letterSpacing: "-0.01em",
  };

  const sectionBody: React.CSSProperties = {
    fontFamily: "var(--font-body), sans-serif",
    fontSize: "15px",
    lineHeight: 1.75,
    color: "#475569",
  };

  return (
    <div style={{ backgroundColor: "#F5F7FF", minHeight: "100vh" }}>
      <nav style={{
        borderBottom: "1px solid rgba(129,140,248,0.1)",
        padding: "0 24px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "rgba(245,247,255,0.95)",
      }}>
        <Link href="/" style={{
          fontFamily: "var(--font-display), sans-serif",
          fontSize: "20px",
          fontWeight: 800,
          color: "#0F1629",
          textDecoration: "none",
          letterSpacing: "-0.03em",
        }}>
          Luce
        </Link>
        <Link href="/" style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "13px",
          color: "#818CF8",
          textDecoration: "none",
        }}>
          Back to home
        </Link>
      </nav>

      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "72px 24px" }}>
        <p style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "#818CF8",
          marginBottom: "16px",
        }}>
          Last updated: June 2026
        </p>

        <h1 style={{
          fontFamily: "var(--font-display), sans-serif",
          fontSize: "clamp(32px, 4vw, 44px)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          color: "#0F1629",
          marginBottom: "16px",
        }}>
          Terms of Service
        </h1>

        <p style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "16px",
          lineHeight: 1.7,
          color: "#64748B",
          marginBottom: "56px",
        }}>
          These terms govern your use of the Luce platform and any agents you access through it. By using Luce, you agree to these terms.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          {sections.map((s, i) => (
            <div key={i} style={{
              borderLeft: "3px solid rgba(129,140,248,0.3)",
              paddingLeft: "20px",
            }}>
              <p style={sectionHead}>{s.title}</p>
              <p style={sectionBody}>{s.body}</p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: "56px",
          paddingTop: "32px",
          borderTop: "1px solid rgba(129,140,248,0.1)",
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "13px",
          color: "#94A3B8",
        }}>
          Questions? Email{" "}
          <a href="mailto:support@luce.co" style={{ color: "#818CF8", textDecoration: "none" }}>
            support@luce.co
          </a>
        </div>
      </div>
    </div>
  );
}
