"use client";

import { useState } from "react";

const faqs = [
  {
    question: "When do agents launch?",
    answer:
      "We're rolling out agents in batches starting Q3 2026. Waitlist members get first access, prioritized by sign-up date.",
  },
  {
    question: "Which agent should I pick?",
    answer:
      "Waitlist for whichever agents solve your biggest pain point. Your $1.99 applies to each agent separately. You can waitlist for as many as you want.",
  },
  {
    question: "What tools do they connect to?",
    answer:
      "Gmail, Google Calendar, Shopify, WooCommerce, Meta Ads, Google Ads, WhatsApp, Twilio, DocuSign, Google Business, Trustpilot, and more. Each agent page will list exact integrations at launch.",
  },
  {
    question: "Can I get a refund on the waitlist payment?",
    answer:
      "Yes. If we haven't launched your agent by Q4 2026, you get a full refund. No questions asked.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Agents connect to your tools via official OAuth. We never see your passwords. All data is encrypted in transit and at rest.",
  },
  {
    question: "Can I waitlist for multiple agents?",
    answer:
      "Yes. Select as many agents as you want — it's $1.99 per agent. Each payment gets you early access and 25% off for that specific agent.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "22px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "17px",
            fontWeight: 600,
            color: "#EEEEE8",
            lineHeight: 1.4,
          }}
        >
          {question}
        </span>
        <span
          style={{
            color: "#7A7C85",
            fontSize: "18px",
            flexShrink: 0,
            transition: "transform 0.25s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            display: "inline-block",
          }}
        >
          ↓
        </span>
      </button>

      <div
        style={{
          maxHeight: open ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "15px",
            lineHeight: 1.7,
            color: "#7A7C85",
            paddingBottom: "22px",
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      style={{
        paddingTop: "120px",
        paddingBottom: "120px",
        paddingLeft: "24px",
        paddingRight: "24px",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
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
          Frequently asked questions
        </h2>

        <div style={{ maxWidth: "720px" }}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
