import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(129, 140, 248, 0.08)",
      paddingTop: "40px",
      paddingBottom: "40px",
      paddingLeft: "24px",
      paddingRight: "24px",
    }}>
      <div style={{
        maxWidth: "1140px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "16px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <span style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: "18px",
            fontWeight: 800,
            color: "#0F1629",
            letterSpacing: "-0.03em",
          }}>
            Luce
          </span>
          <span style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "12px",
            color: "#CBD5E1",
          }}>
            2026 Luce. All rights reserved.
          </span>
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <Link
            href="/privacy"
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "13px",
              color: "#94A3B8",
              textDecoration: "none",
              transition: "color 0.15s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#818CF8")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#94A3B8")}
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "13px",
              color: "#94A3B8",
              textDecoration: "none",
              transition: "color 0.15s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#818CF8")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#94A3B8")}
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
