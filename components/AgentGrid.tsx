"use client";

import { Agent } from "@/lib/agents";
import AgentCard from "./AgentCard";

interface AgentGridProps {
  agents: Agent[];
  selectedIds: Set<string>;
  onToggle: (id: string) => void;
  headline: string;
  sectionId?: string;
  sectionBg?: string;
}

export default function AgentGrid({ agents, selectedIds, onToggle, headline, sectionId, sectionBg }: AgentGridProps) {
  return (
    <section id={sectionId} style={{
      paddingTop: "80px",
      paddingBottom: "80px",
      paddingLeft: "24px",
      paddingRight: "24px",
      backgroundColor: sectionBg ?? "transparent",
    }}>
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        <h2 style={{
          fontFamily: "var(--font-display), sans-serif",
          fontSize: "clamp(26px, 3.5vw, 36px)",
          fontWeight: 700,
          letterSpacing: "-0.025em",
          lineHeight: 1.2,
          color: "#0F1629",
          marginBottom: "40px",
        }}>
          {headline}
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "20px",
        }}>
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
