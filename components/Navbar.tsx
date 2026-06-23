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
        backgroundColor: "rgba(8, 9, 13, 0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
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
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "20px",
            fontWeight: 700,
            color: "#EEEEE8",
            letterSpacing: "-0.02em",
          }}
        >
          AgentOS
        </span>

        <button
          onClick={onCtaClick}
          style={{
            backgroundColor: "#D4A843",
            color: "#08090D",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            padding: "8px 18px",
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
    </nav>
  );
}
