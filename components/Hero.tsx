"use client";

interface HeroProps {
  onBrowseClick: () => void;
}

export default function Hero({ onBrowseClick }: HeroProps) {
  return (
    <section
      style={{
        paddingTop: "120px",
        paddingBottom: "120px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <div
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#7A7C85",
            marginBottom: "24px",
          }}
        >
          AI Agent Marketplace
        </p>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "#EEEEE8",
            marginBottom: "24px",
            maxWidth: "760px",
            margin: "0 auto 24px",
          }}
        >
          Your Business Runs.
          <br />
          You Don&apos;t Have To.
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: 1.6,
            color: "#7A7C85",
            maxWidth: "580px",
            margin: "0 auto 40px",
          }}
        >
          AI agents that plug into your real tools and work 24/7 — answering
          calls, managing stock, tracking deadlines, and more. No coding. No
          setup headaches.
        </p>

        {/* CTA */}
        <button
          onClick={onBrowseClick}
          style={{
            backgroundColor: "#D4A843",
            color: "#08090D",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "16px",
            fontWeight: 600,
            padding: "14px 28px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.15s ease, transform 0.15s ease",
            marginBottom: "48px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#E8BC52";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#D4A843";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Browse Agents ↓
        </button>

        {/* Trust strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "14px",
            color: "#4A4C54",
          }}
        >
          <span>🔥 500+ people on the waitlist</span>
          <span
            style={{
              width: "1px",
              height: "14px",
              backgroundColor: "rgba(255,255,255,0.12)",
              display: "inline-block",
            }}
          />
          <span>🔒 Secured by Razorpay</span>
          <span
            style={{
              width: "1px",
              height: "14px",
              backgroundColor: "rgba(255,255,255,0.12)",
              display: "inline-block",
            }}
          />
          <span>10 agents, zero coding</span>
        </div>
      </div>
    </section>
  );
}
