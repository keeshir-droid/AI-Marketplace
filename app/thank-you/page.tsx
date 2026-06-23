import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You're in — AgentOS",
};

export default function ThankYouPage() {
  return (
    <div
      style={{
        backgroundColor: "#08090D",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "520px" }}>
        {/* Brand */}
        <p
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "16px",
            fontWeight: 700,
            color: "#D4A843",
            letterSpacing: "-0.02em",
            marginBottom: "48px",
          }}
        >
          AgentOS
        </p>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "#EEEEE8",
            marginBottom: "20px",
          }}
        >
          You&apos;re in.
        </h1>

        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "17px",
            lineHeight: 1.6,
            color: "#7A7C85",
            marginBottom: "48px",
          }}
        >
          We&apos;ll email you when your agents are ready to launch. You&apos;re
          on the priority list.
        </p>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            marginBottom: "40px",
          }}
        />

        {/* Community CTA */}
        <div
          style={{
            backgroundColor: "#111318",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "6px",
            padding: "28px",
            marginBottom: "32px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "18px",
              fontWeight: 600,
              color: "#EEEEE8",
              marginBottom: "12px",
            }}
          >
            Join the founding members community
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "14px",
              color: "#7A7C85",
              marginBottom: "20px",
            }}
          >
            Get behind-the-scenes updates, vote on features, and connect with
            other early members.
          </p>
          <a
            href="#"
            style={{
              display: "inline-block",
              backgroundColor: "#D4A843",
              color: "#08090D",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              padding: "10px 20px",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "background-color 0.15s ease",
            }}
          >
            Join WhatsApp Group →
          </a>
        </div>

        <Link
          href="/"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "14px",
            color: "#4A4C54",
            textDecoration: "none",
            transition: "color 0.15s ease",
          }}
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
