"use client";

import { useState } from "react";

const faqs = [
  { question: "When do agents launch?", answer: "Agents launch by July 7th, 2026. Waitlist members get first access, prioritized by sign-up date." },
  { question: "Which agent should I pick?", answer: "Waitlist for whichever agents solve your biggest pain point. Your $1.99 applies to each agent separately. You can waitlist for as many as you want." },
  { question: "What tools do they connect to?", answer: "Gmail, Google Calendar, Shopify, WooCommerce, Meta Ads, Google Ads, WhatsApp, Twilio, DocuSign, Google Business, Trustpilot, and more. Each agent page will list exact integrations at launch." },
  { question: "Can I get a refund?", answer: "Yes. If we haven't launched your agent by July 7th, 2026, you get a full refund. No questions asked." },
  { question: "Is my data safe?", answer: "Agents connect to your tools via official OAuth. We never see your passwords. All data is encrypted in transit and at rest." },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid rgba(129, 140, 248, 0.1)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "16px",
        }}
      >
        <span style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "15px",
          fontWeight: 600,
          color: "#0F1629",
          lineHeight: 1.4,
        }}>
          {question}
        </span>
        <span style={{
          color: "#818CF8",
          fontSize: "14px",
          flexShrink: 0,
          transition: "transform 0.25s ease",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          display: "inline-block",
          fontWeight: 300,
        }}>
          +
        </span>
      </button>

      <div style={{
        maxHeight: open ? "300px" : "0",
        overflow: "hidden",
        transition: "max-height 0.3s ease",
      }}>
        <p style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "14px",
          lineHeight: 1.7,
          color: "#64748B",
          paddingBottom: "18px",
        }}>
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section style={{
      paddingTop: "80px",
      paddingBottom: "80px",
      paddingLeft: "24px",
      paddingRight: "24px",
    }}>
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>
        <h2 style={{
          fontFamily: "var(--font-display), sans-serif",
          fontSize: "clamp(24px, 3vw, 32px)",
          fontWeight: 700,
          letterSpacing: "-0.025em",
          color: "#0F1629",
          marginBottom: "32px",
        }}>
          Questions
        </h2>

        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
