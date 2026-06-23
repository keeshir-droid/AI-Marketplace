"use client";

import { WAITLIST_PRICE } from "@/lib/agents";

interface FloatingCartProps {
  count: number;
  onTryNow: () => void;
}

const btnStyle: React.CSSProperties = {
  backgroundColor: "#D4A843",
  color: "#08090D",
  fontFamily: "var(--font-inter), sans-serif",
  fontSize: "14px",
  fontWeight: 600,
  padding: "10px 20px",
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
  whiteSpace: "nowrap",
  transition: "background-color 0.15s ease, transform 0.15s ease",
  flexShrink: 0,
};

export default function FloatingCart({ count, onTryNow }: FloatingCartProps) {
  const total = (count * WAITLIST_PRICE).toFixed(2);
  const isVisible = count > 0;

  const handleBtnEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "#E8BC52";
    e.currentTarget.style.transform = "translateY(-1px)";
  };
  const handleBtnLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "#D4A843";
    e.currentTarget.style.transform = "translateY(0)";
  };

  return (
    <>
      {/* Mobile: full-width sticky bar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transform: isVisible ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.3s ease",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 20px",
          backgroundColor: "#111318",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          gap: "16px",
        }}
        className="flex md:hidden"
      >
        <div>
          <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "15px", fontWeight: 600, color: "#EEEEE8" }}>
            {count} agent{count !== 1 ? "s" : ""} selected
          </p>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", color: "#D4A843", marginTop: "2px" }}>
            ${total} total
          </p>
        </div>
        <button onClick={onTryNow} style={btnStyle} onMouseEnter={handleBtnEnter} onMouseLeave={handleBtnLeave}>
          Try Now →
        </button>
      </div>

      {/* Desktop: floating bottom-right pill */}
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 100,
          transform: isVisible ? "translateY(0)" : "translateY(calc(100% + 24px))",
          transition: "transform 0.3s ease",
          alignItems: "center",
          gap: "20px",
          padding: "14px 20px",
          backgroundColor: "#111318",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: "6px",
        }}
        className="hidden md:flex"
      >
        <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "15px", fontWeight: 600, color: "#EEEEE8", whiteSpace: "nowrap" }}>
          {count} agent{count !== 1 ? "s" : ""} selected — ${total}
        </p>
        <button onClick={onTryNow} style={btnStyle} onMouseEnter={handleBtnEnter} onMouseLeave={handleBtnLeave}>
          Try Now →
        </button>
      </div>
    </>
  );
}
