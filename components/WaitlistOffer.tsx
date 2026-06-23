"use client";

const benefits = [
  "Early access before public launch",
  "25% off your first month",
  "$1.99 deducted from your first bill",
  "Founding member community access",
];

interface WaitlistOfferProps {
  onCtaClick: () => void;
}

export default function WaitlistOffer({ onCtaClick }: WaitlistOfferProps) {
  return (
    <section
      style={{
        paddingTop: "120px",
        paddingBottom: "120px",
        paddingLeft: "24px",
        paddingRight: "24px",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* Left: headline + benefits */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              color: "#EEEEE8",
              marginBottom: "40px",
            }}
          >
            $1.99 gets you in before everyone else.
          </h2>

          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
            {benefits.map((benefit, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "16px",
                  color: "#EEEEE8",
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    color: "#34D399",
                    fontSize: "16px",
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: CTA card */}
        <div
          style={{
            backgroundColor: "#111318",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "6px",
            padding: "40px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#7A7C85",
              marginBottom: "12px",
            }}
          >
            Per agent
          </p>
          <p
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "48px",
              fontWeight: 700,
              color: "#D4A843",
              marginBottom: "8px",
              letterSpacing: "-0.02em",
            }}
          >
            $1.99
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "14px",
              color: "#4A4C54",
              marginBottom: "32px",
            }}
          >
            Refundable if we don&apos;t launch by Q4 2026
          </p>

          <button
            onClick={onCtaClick}
            style={{
              width: "100%",
              backgroundColor: "#D4A843",
              color: "#08090D",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              padding: "14px 24px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.15s ease, transform 0.15s ease",
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
            Try — $1.99
          </button>
        </div>
      </div>
    </section>
  );
}
