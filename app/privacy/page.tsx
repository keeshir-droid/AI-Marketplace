import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Luce",
};

const sections = [
  {
    title: "Information we collect",
    body: "When you join the waitlist, we collect your email address and optionally your name. When you complete a payment, Razorpay processes your card details — we never see or store your payment information. We also collect standard server logs (IP address, browser type, pages visited) for security and performance purposes.",
  },
  {
    title: "How we use it",
    body: "We use your email to send you launch updates, access instructions, and transactional messages related to your waitlist payment. We do not send marketing email without your consent. We do not sell, rent, or share your personal data with third parties, except as required to operate the service (payment processing via Razorpay, transactional email).",
  },
  {
    title: "Agent integrations",
    body: "When an agent goes live, connecting it to your tools (Gmail, Shopify, Google Calendar, etc.) requires OAuth authorization. We access only the scopes you explicitly grant. We never store your credentials. You can revoke access at any time from your connected account settings.",
  },
  {
    title: "Data storage",
    body: "Waitlist data is stored in Supabase with encryption at rest. All data in transit is encrypted via TLS. We retain your data for as long as your account is active. You may request deletion at any time by emailing support@luce.co.",
  },
  {
    title: "Cookies",
    body: "We use only essential session cookies required for the site to function. We do not use tracking cookies or third-party advertising pixels.",
  },
  {
    title: "Your rights",
    body: "You have the right to access, correct, or delete your personal data at any time. To exercise these rights, email support@luce.co. We will respond within 7 business days.",
  },
  {
    title: "Changes",
    body: "We may update this policy as the product evolves. Material changes will be communicated by email. Continued use of the service after changes constitutes acceptance.",
  },
];

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>

        <p style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "16px",
          lineHeight: 1.7,
          color: "#64748B",
          marginBottom: "56px",
        }}>
          Luce is committed to protecting your personal information. This policy explains what we collect, why, and how we keep it safe.
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
