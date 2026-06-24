"use client";

import { WAITLIST_PRICE } from "@/lib/agents";

interface FloatingCartProps {
  count: number;
  onTryNow: () => void;
}

export default function FloatingCart({ count, onTryNow }: FloatingCartProps) {
  const total = (count * WAITLIST_PRICE).toFixed(2);
  const isVisible = count > 0;

  return (
    <>
      {/* Mobile: full-width bar */}
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
          backgroundColor: "#FFFFFF",
          borderTop: "1px solid rgba(129, 140, 248, 0.15)",
          gap: "16px",
          boxShadow: "0 -4px 20px rgba(99, 102, 241, 0.1)",
        }}
        className="flex md:hidden"
      >
        <div>
          <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "14px", fontWeight: 600, color: "#0F1629" }}>
            {count} agent{count !== 1 ? "s" : ""} selected
          </p>
          <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "12px", color: "#818CF8", marginTop: "2px" }}>
            ${total} total
          </p>
        </div>
        <button
          onClick={onTryNow}
          className="btn-gradient"
          style={{ fontSize: "13px", fontWeight: 600, fontFamily: "var(--font-body), sans-serif", padding: "10px 20px", borderRadius: "6px", whiteSpace: "nowrap" as const, flexShrink: 0 }}
        >
          Continue
        </button>
      </div>

      {/* Desktop: floating bottom-right */}
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 100,
          transform: isVisible ? "translateY(0)" : "translateY(calc(100% + 24px))",
          transition: "transform 0.3s ease",
          alignItems: "center",
          gap: "16px",
          padding: "12px 18px",
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(129, 140, 248, 0.15)",
          borderRadius: "10px",
          boxShadow: "0 8px 32px rgba(99, 102, 241, 0.14)",
        }}
        className="hidden md:flex"
      >
        <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "14px", fontWeight: 600, color: "#0F1629", whiteSpace: "nowrap" as const }}>
          {count} agent{count !== 1 ? "s" : ""}{" / "}
          <span className="gradient-text">${total}</span>
        </p>
        <button
          onClick={onTryNow}
          className="btn-gradient"
          style={{ fontSize: "13px", fontWeight: 600, fontFamily: "var(--font-body), sans-serif", padding: "9px 18px", borderRadius: "6px", whiteSpace: "nowrap" as const }}
        >
          Continue
        </button>
      </div>
    </>
  );
}
