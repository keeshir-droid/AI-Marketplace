"use client";

import { useState } from "react";
import { WAITLIST_PRICE } from "@/lib/agents";

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill: { email: string; name?: string };
  theme: { color: string };
  handler: (response: RazorpayResponse) => void;
  modal?: { ondismiss?: () => void };
}

interface RazorpayInstance {
  open: () => void;
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

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
      // Capture lead immediately — before Razorpay opens
      fetch("/api/capture-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: name || undefined, agentIds: selectedIds }),
      }).catch(() => {});

      const res = await fetch("/api/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: name || undefined,
          agentIds: selectedIds,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      const options: RazorpayOptions = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: "Luce",
        description: `Waitlist: ${selectedCount} agent${selectedCount !== 1 ? "s" : ""}`,
        order_id: data.orderId,
        prefill: { email, name: name || undefined },
        theme: { color: "#818CF8" },
        handler: async (response: RazorpayResponse) => {
          try {
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });

            if (verifyRes.ok) {
              window.location.href = `/thank-you?payment_id=${response.razorpay_payment_id}`;
            } else {
              setError("Payment verification failed. Please contact support.");
              setLoading(false);
            }
          } catch {
            setError("Payment verification failed. Please contact support.");
            setLoading(false);
          }
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setError(message);
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#F5F7FF",
    border: "1px solid rgba(129, 140, 248, 0.18)",
    borderRadius: "6px",
    padding: "11px 14px",
    fontFamily: "var(--font-body), sans-serif",
    fontSize: "14px",
    color: "#0F1629",
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
        backgroundColor: "rgba(15, 22, 41, 0.5)",
        backdropFilter: "blur(6px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(129, 140, 248, 0.15)",
          borderRadius: "12px",
          padding: "32px",
          boxShadow: "0 20px 60px rgba(15, 22, 41, 0.15)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "24px",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "24px",
                fontWeight: 700,
                color: "#0F1629",
                marginBottom: "4px",
              }}
            >
              Almost there
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "13px",
                color: "#64748B",
              }}
            >
              {selectedCount} agent{selectedCount !== 1 ? "s" : ""} / ${total}
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "#94A3B8",
              cursor: "pointer",
              fontSize: "18px",
              lineHeight: 1,
              padding: "4px",
            }}
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <div>
            <label
              style={{
                display: "block",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                color: "#64748B",
                marginBottom: "6px",
              }}
            >
              Email *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              style={inputStyle}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "rgba(129, 140, 248, 0.5)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "rgba(129, 140, 248, 0.18)")
              }
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                color: "#64748B",
                marginBottom: "6px",
              }}
            >
              Name{" "}
              <span style={{ color: "#94A3B8", fontWeight: 400 }}>
                (optional)
              </span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              style={inputStyle}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "rgba(129, 140, 248, 0.5)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "rgba(129, 140, 248, 0.18)")
              }
            />
          </div>

          {error && (
            <p
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "13px",
                color: "#F87171",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={loading ? "" : "btn-gradient"}
            style={{
              background: loading ? "rgba(129, 140, 248, 0.4)" : undefined,
              color: "#FFFFFF",
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              padding: "12px 24px",
              borderRadius: "6px",
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
              marginTop: "4px",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Processing..." : `Pay $${total}`}
          </button>

          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "11px",
              color: "#94A3B8",
              textAlign: "center",
            }}
          >
            Secured by Razorpay. Full refund if we don&apos;t launch by July 7th, 2026.
          </p>
        </form>
      </div>
    </div>
  );
}
