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
    <section style={{
      paddingTop: "80px",
      paddingBottom: "80px",
      paddingLeft: "24px",
      paddingRight: "24px",
      background: "linear-gradient(135deg, rgba(34,211,238,0.06) 0%, rgba(129,140,248,0.09) 50%, rgba(236,72,153,0.06) 100%)",
    }}>
      <div style={{
        maxWidth: "640px",
        margin: "0 auto",
        textAlign: "center",
      }}>
        <h2 style={{
          fontFamily: "var(--font-display), sans-serif",
          fontSize: "clamp(26px, 3.5vw, 36px)",
          fontWeight: 700,
          letterSpacing: "-0.025em",
          lineHeight: 1.15,
          color: "#0F1629",
          marginBottom: "16px",
        }}>
          $1.99 per agent to get in first
        </h2>

        <p style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "14px",
          color: "#64748B",
          marginBottom: "32px",
        }}>
          Fully refundable if we don&apos;t launch by July 7th, 2026.
        </p>

        <ul style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "36px",
          textAlign: "left",
          maxWidth: "340px",
          margin: "0 auto 36px",
        }}>
          {benefits.map((benefit, i) => (
            <li key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "14px",
              color: "#0F1629",
            }}>
              <span style={{
                flexShrink: 0,
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                backgroundColor: "#818CF8",
              }} />
              {benefit}
            </li>
          ))}
        </ul>

        <button
          onClick={onCtaClick}
          className="btn-gradient"
          style={{
            fontSize: "15px",
            fontWeight: 600,
            fontFamily: "var(--font-body), sans-serif",
            padding: "13px 36px",
            borderRadius: "8px",
          }}
        >
          Get started
        </button>
      </div>
    </section>
  );
}
