export type Agent = {
  id: string;
  name: string;
  tag: string;
  description: string;
  details: string[];
  integrations: string[];
  price: string;
  category: "enterprise" | "personal";
};

export const agents: Agent[] = [
  {
    id: "e1",
    name: "Voice Receptionist",
    tag: "Calls",
    description:
      "Answers calls 24/7, qualifies leads, books appointments, routes urgent calls to you.",
    details: [
      "Picks up within 2 rings, greets callers by business name",
      "Qualifies leads with custom question flows you define",
      "Books appointments directly into Google Calendar or Calendly",
      "Routes urgent calls to your phone with caller context",
      "Sends post-call summaries via email or WhatsApp",
    ],
    integrations: ["Twilio", "Google Calendar", "Calendly", "WhatsApp"],
    price: "$11.99/mo + $0.12/min",
    category: "enterprise",
  },
  {
    id: "e2",
    name: "Inventory Reorder",
    tag: "Stock",
    description:
      "Monitors stock levels in real time, auto-generates purchase orders before you run out.",
    details: [
      "Syncs with your Shopify or WooCommerce inventory every 15 minutes",
      "Triggers alerts when SKUs hit custom reorder thresholds",
      "Auto-generates purchase orders and sends to suppliers via email",
      "Tracks supplier lead times to order at the right moment",
      "Weekly stock health reports with slow-mover flagging",
    ],
    integrations: ["Shopify", "WooCommerce", "Gmail", "Google Sheets"],
    price: "$17.99/mo",
    category: "enterprise",
  },
  {
    id: "e3",
    name: "HR Onboarding",
    tag: "People",
    description:
      "Sends onboarding docs, chases signatures, provisions access, schedules day one.",
    details: [
      "Sends offer letters and policy docs via DocuSign on trigger",
      "Follows up automatically until all signatures are collected",
      "Creates Google Workspace or Slack accounts for new hires",
      "Schedules first-day meetings and sends calendar invites",
      "Tracks onboarding completion in a shared status dashboard",
    ],
    integrations: ["DocuSign", "Google Workspace", "Slack", "Google Calendar"],
    price: "$17.99/mo",
    category: "enterprise",
  },
  {
    id: "e4",
    name: "Ad Performance",
    tag: "Marketing",
    description:
      "Monitors Meta and Google ads live, pauses underperformers, scales winners, sends daily reports.",
    details: [
      "Connects to Meta Ads and Google Ads via official APIs",
      "Pauses ad sets that exceed your target CPA automatically",
      "Reallocates budget to top performers based on ROAS thresholds",
      "Sends daily performance summaries with spend and conversion data",
      "Alerts you immediately if daily spend exceeds your cap",
    ],
    integrations: ["Meta Ads", "Google Ads", "Slack", "Email"],
    price: "$17.99/mo",
    category: "enterprise",
  },
  {
    id: "e5",
    name: "Review Manager",
    tag: "Reputation",
    description:
      "Monitors Google and Trustpilot for reviews, drafts responses, tracks sentiment over time.",
    details: [
      "Scans Google Business and Trustpilot for new reviews every hour",
      "Drafts on-brand responses you approve before posting",
      "Flags negative reviews immediately for fast response",
      "Tracks average rating and sentiment trends weekly",
      "Generates monthly reputation reports with actionable insights",
    ],
    integrations: ["Google Business", "Trustpilot", "Slack", "Email"],
    price: "$14.99/mo",
    category: "enterprise",
  },
  {
    id: "p1",
    name: "Email Triage",
    tag: "Inbox",
    description:
      "Sorts your inbox by priority, drafts replies, and surfaces what actually needs your attention.",
    details: [
      "Connects to Gmail and classifies emails into priority tiers",
      "Auto-archives newsletters, promotions, and known low-priority senders",
      "Drafts short replies for routine emails you approve with one tap",
      "Surfaces action-required emails as a daily morning digest",
      "Learns your response patterns to improve over time",
    ],
    integrations: ["Gmail", "Google Calendar"],
    price: "$5.99/mo",
    category: "personal",
  },
  {
    id: "p2",
    name: "Smart Calendar",
    tag: "Schedule",
    description:
      "Optimizes your week, blocks focus time, resolves conflicts, and keeps your calendar sane.",
    details: [
      "Analyzes your calendar and suggests optimal meeting slots",
      "Auto-blocks focus time around your most productive hours",
      "Detects and resolves double-bookings with smart rescheduling",
      "Sends prep briefs before important meetings",
      "Weekly time-spend report showing where your hours actually go",
    ],
    integrations: ["Google Calendar", "Zoom", "Gmail"],
    price: "$5.99/mo",
    category: "personal",
  },
  {
    id: "p3",
    name: "Family Organizer",
    tag: "Family",
    description:
      "Syncs school events, pickups, and deadlines into one family calendar with alerts.",
    details: [
      "Monitors school email accounts for events, deadlines, and forms",
      "Adds events to a shared family Google Calendar automatically",
      "Sends pickup and drop-off reminders to the right parent",
      "Tracks permission slips and flags unsigned forms before deadlines",
      "Weekly family agenda digest sent every Sunday evening",
    ],
    integrations: ["Gmail", "Google Calendar", "WhatsApp"],
    price: "$5.99/mo",
    category: "personal",
  },
  {
    id: "p4",
    name: "Document Vault",
    tag: "Docs",
    description:
      "Scans email for passport, insurance, and tax deadlines. Alerts before anything expires.",
    details: [
      "Scans your inbox for documents with expiry dates",
      "Extracts dates from PDFs and images using OCR",
      "Sends reminders 90, 30, and 7 days before expiry",
      "Stores document metadata in an organized Google Sheet",
      "Flags renewals that need action and links to relevant portals",
    ],
    integrations: ["Gmail", "Google Sheets", "Google Drive"],
    price: "$4.99/mo",
    category: "personal",
  },
  {
    id: "p5",
    name: "Home Admin",
    tag: "Home",
    description:
      "Tracks warranties, service schedules, and bills. Alerts before anything expires or breaks.",
    details: [
      "Logs appliance warranties and service dates you enter once",
      "Sends maintenance reminders based on manufacturer schedules",
      "Monitors utility bill emails and flags unusual spikes",
      "Tracks subscription renewals and cancellation deadlines",
      "Monthly home admin summary with upcoming actions",
    ],
    integrations: ["Gmail", "Google Sheets", "Google Calendar"],
    price: "$4.99/mo",
    category: "personal",
  },
];

export const enterpriseAgents = agents.filter((a) => a.category === "enterprise");
export const personalAgents = agents.filter((a) => a.category === "personal");

export const WAITLIST_PRICE = 1.99;
