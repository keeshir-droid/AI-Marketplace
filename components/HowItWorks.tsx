const steps = [
  {
    number: "1",
    title: "Pick your agents",
    description: "Browse below and select the ones that solve your biggest problems.",
    color: "#22D3EE",
  },
  {
    number: "2",
    title: "Connect your tools",
    description: "A 5-minute guided setup links Gmail, Shopify, Calendar, and more.",
    color: "#818CF8",
  },
  {
    number: "3",
    title: "Let them run",
    description: "Your agents work in the background. You get alerts only when needed.",
    color: "#EC4899",
  },
];

export default function HowItWorks() {
  return (
    <section style={{
      paddingTop: "60px",
      paddingBottom: "60px",
      paddingLeft: "24px",
      paddingRight: "24px",
    }}>
      <div style={{
        maxWidth: "1140px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "20px",
      }}>
        {steps.map((step) => (
          <div key={step.number} style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "14px",
            padding: "20px",
            backgroundColor: "rgba(129, 140, 248, 0.04)",
            borderRadius: "10px",
            border: "1px solid rgba(129, 140, 248, 0.08)",
          }}>
            <span style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "24px",
              fontWeight: 700,
              color: step.color,
              lineHeight: 1,
              flexShrink: 0,
            }}>
              {step.number}
            </span>
            <div>
              <p style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "15px",
                fontWeight: 600,
                color: "#0F1629",
                marginBottom: "4px",
              }}>
                {step.title}
              </p>
              <p style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "13px",
                lineHeight: 1.5,
                color: "#64748B",
              }}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
