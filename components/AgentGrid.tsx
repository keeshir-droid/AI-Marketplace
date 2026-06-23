"use client";

import { Agent } from "@/lib/agents";
import AgentCard from "./AgentCard";

interface AgentGridProps {
  agents: Agent[];
  selectedIds: Set<string>;
  onToggle: (id: string) => void;
  eyebrow: string;
  headline: string;
  sectionId?: string;
  columns?: number;
}

export default function AgentGrid({
  agents,
  selectedIds,
  onToggle,
  eyebrow,
  headline,
  sectionId,
  columns = 3,
}: AgentGridProps) {
  const gridCols =
    columns === 2
      ? "repeat(auto-fit, minmax(340px, 1fr))"
      : "repeat(auto-fit, minmax(300px, 1fr))";

  return (
    <section
      id={sectionId}
      style={{
        paddingTop: "120px",
        paddingBottom: "120px",
        paddingLeft: "24px",
        paddingRight: "24px",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#D4A843",
            marginBottom: "16px",
          }}
        >
          {eyebrow}
        </p>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(28px, 3.5vw, 40px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            color: "#EEEEE8",
            marginBottom: "48px",
          }}
        >
          {headline}
        </h2>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: gridCols,
            gap: "20px",
          }}
        >
          {agents.map((agent) => (
            <AgentCard
              key={agent.id}
              agent={agent}
              isSelected={selectedIds.has(agent.id)}
              onToggle={onToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
