const problems = [
  {
    title: "Your phone rings. You're in a meeting.",
    body: "Every missed call is a missed customer. Your AI receptionist picks up, qualifies the lead, and books the appointment — before your competitor even answers.",
  },
  {
    title: "Your stock runs out. You find out from a customer.",
    body: "Manual inventory tracking means you're always reacting, never ahead. Your AI agent monitors levels and reorders before shelves go empty.",
  },
  {
    title: "Your kid's school emailed. Three days ago.",
    body: "Permission slips, pickup changes, event dates — buried in an inbox you check twice a week. Your AI agent catches it the second it lands.",
  },
];

export default function ProblemSection() {
  return (
    <section
      style={{
        paddingTop: "120px",
        paddingBottom: "120px",
        paddingLeft: "24px",
        paddingRight: "24px",
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
            maxWidth: "600px",
            marginBottom: "60px",
          }}
        >
          You don&apos;t need another dashboard. You need someone who does the
          work.
        </h2>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {problems.map((problem, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#111318",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "6px",
                padding: "28px",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#EEEEE8",
                  lineHeight: 1.3,
                  marginBottom: "16px",
                }}
              >
                {problem.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "#7A7C85",
                }}
              >
                {problem.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
