export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        paddingTop: "48px",
        paddingBottom: "48px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <div
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "18px",
                fontWeight: 700,
                color: "#EEEEE8",
                marginBottom: "8px",
                letterSpacing: "-0.02em",
              }}
            >
              AgentOS
            </p>
            <a
              href="mailto:support@agentos.co"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "14px",
                color: "#7A7C85",
                textDecoration: "none",
              }}
            >
              support@agentos.co
            </a>
          </div>

          {/* Links */}
          <div
            style={{
              display: "flex",
              gap: "32px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "20px" }}>
              <a
                href="#"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "14px",
                  color: "#7A7C85",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#EEEEE8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#7A7C85")}
              >
                Twitter/X
              </a>
              <a
                href="#"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "14px",
                  color: "#7A7C85",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#EEEEE8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#7A7C85")}
              >
                LinkedIn
              </a>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <a
                href="#"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "14px",
                  color: "#7A7C85",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#EEEEE8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#7A7C85")}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "14px",
                  color: "#7A7C85",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#EEEEE8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#7A7C85")}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "13px",
            color: "#4A4C54",
          }}
        >
          © 2026 AgentOS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
