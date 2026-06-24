"use client";

interface NavbarProps {
  onCtaClick: () => void;
}

export default function Navbar({ onCtaClick }: NavbarProps) {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(245, 247, 255, 0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(129, 140, 248, 0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "60px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: "22px",
            fontWeight: 700,
            color: "#0F1629",
            letterSpacing: "-0.03em",
          }}
        >
          Luce
        </span>

        <button
          onClick={onCtaClick}
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            padding: "8px 20px",
            borderRadius: "6px",
            backgroundColor: "#0F1629",
            color: "#FFFFFF",
            border: "none",
            cursor: "pointer",
            transition: "opacity 0.15s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Get started
        </button>
      </div>
    </nav>
  );
}
