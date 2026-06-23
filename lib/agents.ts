export type Agent = {
  id: string;
  name: string;
  icon: string;
  description: string;
  price: string;
  category: "enterprise" | "personal";
};

export const agents: Agent[] = [
  {
    id: "e1",
    name: "AI Voice Receptionist",
    icon: "📞",
    description:
      "Answers calls 24/7, qualifies leads, books appointments, routes urgent calls to you",
    price: "$11.99/mo + $0.12/min",
    category: "enterprise",
  },
  {
    id: "e2",
    name: "AI Inventory Reorder Agent",
    icon: "📦",
    description:
      "Monitors stock in real time, auto-generates purchase orders to suppliers before you run out",
    price: "$17.99/mo",
    category: "enterprise",
  },
  {
    id: "e3",
    name: "AI HR Onboarding Agent",
    icon: "🧑‍💼",
    description:
      "Sends onboarding docs, chases signatures, provisions app access, schedules first day",
    price: "$17.99/mo",
    category: "enterprise",
  },
  {
    id: "e4",
    name: "AI Ad Performance Agent",
    icon: "📊",
    description:
      "Monitors Meta + Google ads live, pauses losers, scales winners, sends daily reports",
    price: "$17.99/mo",
    category: "enterprise",
  },
  {
    id: "e5",
    name: "AI Review & Reputation Agent",
    icon: "⭐",
    description:
      "Monitors Google + Trustpilot for reviews, drafts responses, tracks sentiment trends",
    price: "$14.99/mo",
    category: "enterprise",
  },
  {
    id: "p1",
    name: "AI Social Circle Agent",
    icon: "💬",
    description:
      "Tracks relationships, detects life events, nudges you to check in at the right time",
    price: "$5.99/mo",
    category: "personal",
  },
  {
    id: "p2",
    name: "AI Concierge Agent",
    icon: "🎁",
    description:
      "Tracks birthdays + anniversaries, suggests personalized gifts, orders on approval",
    price: "$5.99/mo",
    category: "personal",
  },
  {
    id: "p3",
    name: "AI Parenting Coordinator",
    icon: "👨‍👩‍👧",
    description:
      "Syncs school events, pickups, deadlines into one family calendar + alerts",
    price: "$5.99/mo",
    category: "personal",
  },
  {
    id: "p4",
    name: "AI Document & Deadline Vault",
    icon: "📄",
    description:
      "Scans email for passport, insurance, tax deadlines — alerts before expiry",
    price: "$4.99/mo",
    category: "personal",
  },
  {
    id: "p5",
    name: "AI Home Admin Agent",
    icon: "🏠",
    description:
      "Tracks warranties, service schedules, bills — alerts before anything expires or breaks",
    price: "$4.99/mo",
    category: "personal",
  },
];

export const enterpriseAgents = agents.filter((a) => a.category === "enterprise");
export const personalAgents = agents.filter((a) => a.category === "personal");

export const WAITLIST_PRICE = 1.99;
