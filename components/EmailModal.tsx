"use client";

import { useState } from "react";
import { WAITLIST_PRICE } from "@/lib/agents";

interface EmailModalProps {
  selectedCount: number;
  selectedIds: string[];
  onClose: () => void;
}

export default function EmailModal({
  selectedCount,
  selectedIds,
  onClose,
}: EmailModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const total = (selectedCount * WAITLIST_PRICE).toFixed(2);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: name || undefined, agentIds: selectedIds }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      if (data.paymentLink) {
        window.location.href = data.paymentLink;
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#08090D",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    borderRadius: "4px",
    padding: "12px 14px",
    fontFamily: "var(--font-inter), sans-serif",
    fontSize: "15px",
    color: "#EEEEE8",
    outline: "none",
    transition: "border-color 0.15s ease",
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "rgba(8, 9, 13, 0.85)",
        backdropFilter: "blur(8px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "440px",
          backgroundColor: "#111318",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "6px",
          padding: "36px",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "28px" }}>
          <div>
            <h2
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "24px",
                fontWeight: 700,
                color: "#EEEEE8",
                marginBottom: "6px",
              }}
            >
              Almost there
            </h2>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "14px", color: "#7A7C85" }}>
              {selectedCount} agent{selectedCount !== 1 ? "s" : ""} · ${total} total
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "#4A4C54",
              cursor: "pointer",
              fontSize: "20px",
              lineHeight: 1,
              padding: "4px",
            }}
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label
              style={{
                display: "block",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                color: "#7A7C85",
                marginBottom: "8px",
              }}
            >
              Email address *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(212, 168, 67, 0.5)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)")}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                color: "#7A7C85",
                marginBottom: "8px",
              }}
            >
              Name{" "}
              <span style={{ color: "#4A4C54", fontWeight: 400 }}>(optional)</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(212, 168, 67, 0.5)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)")}
            />
          </div>

          {error && (
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", color: "#F87171" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: loading ? "#B8922B" : "#D4A843",
              color: "#08090D",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              padding: "13px 24px",
              borderRadius: "4px",
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
              marginTop: "4px",
              transition: "background-color 0.15s ease, transform 0.15s ease",
              opacity: loading ? 0.8 : 1,
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.currentTarget.style.backgroundColor = "#E8BC52";
                e.currentTarget.style.transform = "translateY(-1px)";
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.currentTarget.style.backgroundColor = "#D4A843";
                e.currentTarget.style.transform = "translateY(0)";
              }
            }}
          >
            {loading ? "Creating payment..." : `Pay $${total} →`}
          </button>

          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "12px", color: "#4A4C54", textAlign: "center" }}>
            Secured by Cashfree. Full refund if we don&apos;t launch by Q4 2026.
          </p>
        </form>
      </div>
    </div>
  );
}
