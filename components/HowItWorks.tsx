const steps = [
  {
    number: "01",
    title: "Pick",
    description:
      "Browse agents below. Choose the ones that solve your biggest daily headaches.",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Follow a 5-minute guided setup to link your existing tools — Gmail, Shopify, Calendar, WhatsApp, Google Ads.",
  },
  {
    number: "03",
    title: "Let It Run",
    description:
      "Your agents work 24/7 in the background. You get alerts only when you need to act.",
  },
];

export default function HowItWorks() {
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
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        {/* Headline */}
        <h2
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(28px, 3.5vw, 40px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            color: "#EEEEE8",
            marginBottom: "60px",
            textAlign: "center",
          }}
        >
          Three steps. Five minutes. Then it runs forever.
        </h2>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                backgroundColor: "#111318",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "6px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  color: "#D4A843",
                  marginBottom: "16px",
                }}
              >
                {step.number}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#EEEEE8",
                  marginBottom: "12px",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "#7A7C85",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
