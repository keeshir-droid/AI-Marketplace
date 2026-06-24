"use client";

interface HeroProps {
  onBrowseClick: () => void;
}

export default function Hero({ onBrowseClick }: HeroProps) {
  return (
    <section
      style={{
        paddingTop: "100px",
        paddingBottom: "80px",
        paddingLeft: "24px",
        paddingRight: "24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: "-100px", left: "-60px",
        width: "420px", height: "420px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-80px", right: "-40px",
        width: "360px", height: "360px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center", position: "relative" }}>
        <h1 style={{
          fontFamily: "var(--font-display), sans-serif",
          fontSize: "clamp(38px, 5.5vw, 62px)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          color: "#0F1629",
          marginBottom: "24px",
        }}>
          AI agents that actually{" "}
          <span className="gradient-text">do the work</span>
        </h1>

        <p style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "17px",
          lineHeight: 1.7,
          color: "#64748B",
          maxWidth: "480px",
          margin: "0 auto 40px",
        }}>
          They plug into your tools, run 24/7, and handle the tasks
          you keep putting off. Pick the ones you need.
        </p>

        <button
          onClick={onBrowseClick}
          className="btn-gradient"
          style={{
            fontSize: "15px",
            fontWeight: 600,
            fontFamily: "var(--font-body), sans-serif",
            padding: "13px 32px",
            borderRadius: "8px",
          }}
        >
          Browse agents
        </button>
      </div>
    </section>
  );
}
