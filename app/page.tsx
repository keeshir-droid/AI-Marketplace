"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import AgentGrid from "@/components/AgentGrid";
import FloatingCart from "@/components/FloatingCart";
import EmailModal from "@/components/EmailModal";
import WaitlistOffer from "@/components/WaitlistOffer";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { enterpriseAgents, personalAgents } from "@/lib/agents";

export default function HomePage() {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [showModal, setShowModal] = useState(false);

  const toggleAgent = useCallback((id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const scrollToAgents = () => {
    const el = document.getElementById("enterprise-agents");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTryNow = () => {
    if (selectedIds.size === 0) {
      scrollToAgents();
    } else {
      setShowModal(true);
    }
  };

  return (
    <div style={{ backgroundColor: "#08090D", minHeight: "100vh" }}>
      <Navbar onCtaClick={handleTryNow} />

      <main>
        <Hero onBrowseClick={scrollToAgents} />
        <ProblemSection />
        <HowItWorks />
        <AgentGrid
          sectionId="enterprise-agents"
          agents={enterpriseAgents}
          selectedIds={selectedIds}
          onToggle={toggleAgent}
          eyebrow="For Your Business"
          headline="Agents that replace full-time roles."
          columns={3}
        />
        <AgentGrid
          sectionId="personal-agents"
          agents={personalAgents}
          selectedIds={selectedIds}
          onToggle={toggleAgent}
          eyebrow="For You"
          headline="Agents that handle the life admin you keep postponing."
          columns={3}
        />
        <WaitlistOffer onCtaClick={handleTryNow} />
        <FAQ />
      </main>

      <Footer />

      <FloatingCart count={selectedIds.size} onTryNow={() => setShowModal(true)} />

      {showModal && (
        <EmailModal
          selectedCount={selectedIds.size}
          selectedIds={Array.from(selectedIds)}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
