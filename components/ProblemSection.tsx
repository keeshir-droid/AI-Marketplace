const problems = [
  {
    icon: "📞",
    title: "Your phone rings. You're in a meeting.",
    body: "Every missed call is a missed customer. Your AI receptionist picks up, qualifies the lead, and books the appointment — before your competitor even answers.",
    color: "#22D3EE",
    bg: "rgba(34, 211, 238, 0.07)",
  },
  {
    icon: "📦",
    title: "Your stock runs out. You find out from a customer.",
    body: "Manual inventory tracking means you're always reacting, never ahead. Your AI agent monitors levels and reorders before shelves go empty.",
    color: "#818CF8",
    bg: "rgba(129, 140, 248, 0.07)",
  },
  {
    icon: "📬",
    title: "Your kid's school emailed. Three days ago.",
    body: "Permission slips, pickup changes, event dates — buried in an inbox you check twice a week. Your AI agent catches it the second it lands.",
    color: "#EC4899",
    bg: "rgba(236, 72, 153, 0.07)",
  },
];

export default function ProblemSection() {
  return (
    <section style={{
      paddingTop: "120px",
      paddingBottom: "120px",
      paddingLeft: "24px",
      paddingRight: "24px",
      background: "linear-gradient(180deg, rgba(34,211,238,0.05) 0%, rgba(245,247,255,0) 100%)",
    }}>
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        <h2 style={{
          fontFamily: "var(--font-display), sans-serif",
          fontSize: "clamp(28px, 3.5vw, 40px)",
          fontWeight: 700,
          letterSpacing: "-0.025em",
          lineHeight: 1.2,
          color: "#0F1629",
          maxWidth: "600px",
          marginBottom: "60px",
        }}>
          You don&apos;t need another dashboard. You need someone who does the work.
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}>
          {problems.map((p, i) => (
            <div key={i} style={{
              background: p.bg,
              border: "1px solid rgba(99, 102, 241, 0.1)",
              borderRadius: "10px",
              padding: "28px",
              borderTop: `3px solid ${p.color}`,
            }}>
              <div style={{ fontSize: "28px", marginBottom: "16px" }}>{p.icon}</div>
              <h3 style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "18px",
                fontWeight: 600,
                color: "#0F1629",
                lineHeight: 1.3,
                marginBottom: "12px",
              }}>
                {p.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "15px",
                lineHeight: 1.6,
                color: "#64748B",
              }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
