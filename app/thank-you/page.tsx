import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You're in | Luce",
};

export default function ThankYouPage() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, rgba(34,211,238,0.06) 0%, rgba(129,140,248,0.09) 50%, rgba(236,72,153,0.06) 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "480px" }}>
        <p
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: "24px",
            fontWeight: 700,
            color: "#0F1629",
            marginBottom: "48px",
          }}
        >
          Luce
        </p>

        <h1
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: "clamp(36px, 5vw, 52px)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#0F1629",
            marginBottom: "20px",
          }}
        >
          You&apos;re in.
        </h1>

        <p
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "16px",
            lineHeight: 1.6,
            color: "#64748B",
            marginBottom: "48px",
          }}
        >
          We&apos;ll email you when your agents are ready. You&apos;re on the priority list.
        </p>

        <div
          style={{
            borderTop: "1px solid rgba(129, 140, 248, 0.12)",
            marginBottom: "40px",
          }}
        />

        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid rgba(129, 140, 248, 0.15)",
            borderRadius: "12px",
            padding: "28px",
            marginBottom: "32px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              color: "#0F1629",
              marginBottom: "8px",
            }}
          >
            Join the founding members community
          </p>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "13px",
              color: "#64748B",
              marginBottom: "20px",
            }}
          >
            Get updates, vote on features, and connect with other early members.
          </p>
          <a
            href="#"
            className="btn-gradient"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              padding: "10px 20px",
              borderRadius: "6px",
              textDecoration: "none",
            }}
          >
            Join WhatsApp Group
          </a>
        </div>

        <Link
          href="/"
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "13px",
            color: "#818CF8",
            textDecoration: "none",
          }}
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
