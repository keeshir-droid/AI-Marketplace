"use client";

import { useState } from "react";
import { Agent } from "@/lib/agents";

interface AgentCardProps {
  agent: Agent;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

export default function AgentCard({ agent, isSelected, onToggle }: AgentCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="agent-card"
      style={{
        background: isSelected
          ? "linear-gradient(135deg, rgba(129,140,248,0.14) 0%, rgba(236,72,153,0.06) 100%)"
          : "linear-gradient(145deg, rgba(34,211,238,0.04) 0%, rgba(129,140,248,0.06) 100%)",
        border: isSelected ? "1.5px solid #818CF8" : "1px solid rgba(129, 140, 248, 0.15)",
        borderRadius: "12px",
        padding: "24px",
        position: "relative",
        userSelect: "none",
        boxShadow: isSelected
          ? "0 0 0 3px rgba(129, 140, 248, 0.12)"
          : "0 1px 3px rgba(99, 102, 241, 0.06)",
      }}
      onMouseEnter={(e) => {
        if (!isSelected) {
          e.currentTarget.style.background = "linear-gradient(145deg, rgba(34,211,238,0.08) 0%, rgba(129,140,248,0.1) 100%)";
          e.currentTarget.style.borderColor = "rgba(129, 140, 248, 0.28)";
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(129, 140, 248, 0.12)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected) {
          e.currentTarget.style.background = "linear-gradient(145deg, rgba(34,211,238,0.04) 0%, rgba(129,140,248,0.06) 100%)";
          e.currentTarget.style.borderColor = "rgba(129, 140, 248, 0.15)";
          e.currentTarget.style.boxShadow = "0 1px 3px rgba(99, 102, 241, 0.06)";
        }
      }}
    >
      {/* Top row: tag + select */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <span style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase" as const,
          color: "#818CF8",
          backgroundColor: "rgba(129, 140, 248, 0.1)",
          padding: "4px 10px",
          borderRadius: "4px",
        }}>
          {agent.tag}
        </span>

        {isSelected && (
          <div style={{
            width: "20px",
            height: "20px",
            background: "linear-gradient(135deg, #818CF8, #EC4899)",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <svg width="11" height="9" viewBox="0 0 12 10" fill="none">
              <path d="M1 5L4.5 8.5L11 1.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>

      {/* Name */}
      <h3 style={{
        fontFamily: "var(--font-display), sans-serif",
        fontSize: "19px",
        fontWeight: 700,
        color: "#0F1629",
        marginBottom: "8px",
        lineHeight: 1.2,
      }}>
        {agent.name}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: "var(--font-body), sans-serif",
        fontSize: "14px",
        lineHeight: 1.6,
        color: "#64748B",
        marginBottom: "16px",
      }}>
        {agent.description}
      </p>

      {/* Expandable details */}
      <div style={{
        maxHeight: expanded ? "400px" : "0",
        overflow: "hidden",
        transition: "max-height 0.3s ease",
      }}>
        <div style={{
          borderTop: "1px solid rgba(129, 140, 248, 0.12)",
          paddingTop: "14px",
          marginBottom: "14px",
        }}>
          <ul style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginBottom: "14px",
          }}>
            {agent.details.map((d, i) => (
              <li key={i} style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "13px",
                lineHeight: 1.5,
                color: "#475569",
                paddingLeft: "14px",
                position: "relative",
              }}>
                <span style={{
                  position: "absolute",
                  left: 0,
                  top: "7px",
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  backgroundColor: "#818CF8",
                }} />
                {d}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px" }}>
            {agent.integrations.map((int) => (
              <span key={int} style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                color: "#64748B",
                backgroundColor: "rgba(99, 102, 241, 0.08)",
                padding: "3px 8px",
                borderRadius: "3px",
              }}>
                {int}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row: price, details toggle, CTA */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap" as const,
        gap: "10px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "12px",
            color: "#6366F1",
            backgroundColor: "rgba(99,102,241,0.1)",
            padding: "4px 10px",
            borderRadius: "4px",
            fontWeight: 500,
          }}>
            {agent.price}
          </span>
          <button
            onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              color: "#818CF8",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              textDecoration: "underline",
              textUnderlineOffset: "2px",
            }}
          >
            {expanded ? "Less" : "Details"}
          </button>
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); onToggle(agent.id); }}
          className={isSelected ? "" : "btn-gradient"}
          style={{
            ...(isSelected ? {
              backgroundColor: "transparent",
              color: "#818CF8",
              border: "1.5px solid #818CF8",
            } : {}),
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "13px",
            fontWeight: 600,
            padding: "8px 18px",
            borderRadius: "6px",
            cursor: "pointer",
            whiteSpace: "nowrap" as const,
            transition: "opacity 0.15s ease, transform 0.15s ease",
          }}
        >
          {isSelected ? "Selected" : "Add to waitlist"}
        </button>
      </div>
    </div>
  );
}
