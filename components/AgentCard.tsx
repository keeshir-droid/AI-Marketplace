"use client";

import { Agent } from "@/lib/agents";

interface AgentCardProps {
  agent: Agent;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

export default function AgentCard({
  agent,
  isSelected,
  onToggle,
}: AgentCardProps) {
  return (
    <div
      className="agent-card"
      onClick={() => onToggle(agent.id)}
      style={{
        backgroundColor: isSelected
          ? "rgba(212, 168, 67, 0.05)"
          : "#111318",
        border: isSelected
          ? "1px solid #D4A843"
          : "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "6px",
        padding: "28px",
        position: "relative",
        cursor: "pointer",
        userSelect: "none",
      }}
      onMouseEnter={(e) => {
        if (!isSelected) {
          e.currentTarget.style.backgroundColor = "#191D25";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected) {
          e.currentTarget.style.backgroundColor = "#111318";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
        }
      }}
    >
      {/* Checkmark */}
      {isSelected && (
        <div
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            width: "22px",
            height: "22px",
            backgroundColor: "#D4A843",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5L4.5 8.5L11 1.5"
              stroke="#08090D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {/* Icon */}
      <div
        style={{
          fontSize: "28px",
          marginBottom: "16px",
          lineHeight: 1,
        }}
      >
        {agent.icon}
      </div>

      {/* Name */}
      <h3
        style={{
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontSize: "18px",
          fontWeight: 600,
          color: "#EEEEE8",
          marginBottom: "10px",
          lineHeight: 1.3,
          paddingRight: isSelected ? "30px" : "0",
        }}
      >
        {agent.name}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "14px",
          lineHeight: 1.6,
          color: "#7A7C85",
          marginBottom: "20px",
        }}
      >
        {agent.description}
      </p>

      {/* Price */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "12px",
            color: "#4A4C54",
            backgroundColor: "#1A1D26",
            padding: "4px 10px",
            borderRadius: "4px",
          }}
        >
          {agent.price} at launch
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggle(agent.id);
          }}
          style={{
            backgroundColor: isSelected ? "transparent" : "#D4A843",
            color: isSelected ? "#D4A843" : "#08090D",
            border: isSelected ? "1px solid #D4A843" : "none",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "13px",
            fontWeight: 600,
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.15s ease, transform 0.15s ease",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            if (!isSelected) {
              e.currentTarget.style.backgroundColor = "#E8BC52";
              e.currentTarget.style.transform = "translateY(-1px)";
            }
          }}
          onMouseLeave={(e) => {
            if (!isSelected) {
              e.currentTarget.style.backgroundColor = "#D4A843";
              e.currentTarget.style.transform = "translateY(0)";
            }
          }}
        >
          {isSelected ? "Selected ✓" : "Try — $1.99"}
        </button>
      </div>
    </div>
  );
}
