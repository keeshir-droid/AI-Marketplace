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
    name: "AI Voice Receptionist",
    tag: "Calls",
    description:
      "Answers calls 24/7, qualifies leads, books appointments, routes urgent calls to you.",
    details: [
      "Picks up within 2 rings and greets callers by your business name",
      "Qualifies leads with custom question flows you define",
      "Books appointments directly into Google Calendar or Calendly",
      "Routes urgent calls to your phone with full caller context",
      "Sends post-call summaries via email or WhatsApp",
    ],
    integrations: ["Twilio", "Google Calendar", "Calendly", "WhatsApp"],
    price: "$11.99/mo + $0.12/min",
    category: "enterprise",
  },
  {
    id: "e2",
    name: "AI Inventory Reorder Agent",
    tag: "Stock",
    description:
      "Monitors stock in real time, auto-generates purchase orders to suppliers before you run out.",
    details: [
      "Syncs with your Shopify or WooCommerce inventory every 15 minutes",
      "Triggers alerts when SKUs hit custom reorder thresholds you set",
      "Auto-generates purchase orders and sends to suppliers via email",
      "Tracks supplier lead times to order at exactly the right moment",
      "Weekly stock health report with slow-mover flagging",
    ],
    integrations: ["Shopify", "WooCommerce", "Gmail", "Google Sheets"],
    price: "$17.99/mo",
    category: "enterprise",
  },
  {
    id: "e3",
    name: "AI HR Onboarding Agent",
    tag: "People",
    description:
      "Sends onboarding docs, chases signatures, provisions app access, schedules first day.",
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
    name: "AI Ad Performance Agent",
    tag: "Marketing",
    description:
      "Monitors Meta and Google ads live, pauses losers, scales winners, sends daily reports.",
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
    name: "AI Review & Reputation Agent",
    tag: "Reputation",
    description:
      "Monitors Google and Trustpilot for reviews, drafts responses, tracks sentiment trends.",
    details: [
      "Scans Google Business and Trustpilot for new reviews every hour",
      "Drafts on-brand responses for your approval before posting",
      "Flags negative reviews immediately for fast response",
      "Tracks average rating and sentiment trends week over week",
      "Monthly reputation report with actionable insights",
    ],
    integrations: ["Google Business", "Trustpilot", "Slack", "Email"],
    price: "$14.99/mo",
    category: "enterprise",
  },
  {
    id: "p1",
    name: "AI Social Circle Agent",
    tag: "Social",
    description:
      "Tracks last contact with people you care about, detects life events, suggests check-ins at the right time.",
    details: [
      "Monitors your Gmail and WhatsApp for messages from marked contacts",
      "Tracks how long it's been since you last connected with each person",
      "Detects life events like birthdays, job changes, and moves",
      "Sends you a gentle nudge when a relationship needs attention",
      "Lets you respond or snooze directly from the notification",
    ],
    integrations: ["Gmail", "WhatsApp", "Google Contacts"],
    price: "$5.99/mo",
    category: "personal",
  },
  {
    id: "p2",
    name: "AI Concierge Agent",
    tag: "Gifts",
    description:
      "Tracks birthdays and anniversaries, suggests personalized gifts in advance, orders on your approval.",
    details: [
      "Pulls important dates from your contacts and Google Calendar",
      "Surfaces gift suggestions 3-4 weeks before each occasion",
      "Learns preferences based on past gifts and contact details",
      "Searches options across Amazon and curated vendors",
      "Places the order with one tap once you approve",
    ],
    integrations: ["Google Calendar", "Google Contacts", "Gmail"],
    price: "$5.99/mo",
    category: "personal",
  },
  {
    id: "p3",
    name: "AI Parenting Coordinator",
    tag: "Family",
    description:
      "Syncs school events, permission slips, pickups, and extracurriculars into one family calendar with alerts.",
    details: [
      "Monitors school email accounts for events, forms, and schedule changes",
      "Adds everything automatically to a shared family Google Calendar",
      "Tracks unsigned permission slips and flags them before deadlines",
      "Sends pickup and drop-off reminders to the right parent",
      "Weekly family schedule digest delivered every Sunday evening",
    ],
    integrations: ["Gmail", "Google Calendar", "WhatsApp"],
    price: "$5.99/mo",
    category: "personal",
  },
  {
    id: "p4",
    name: "AI Document & Deadline Vault",
    tag: "Docs",
    description:
      "Scans email for passports, insurance, tax deadlines, and renewals. Alerts you weeks before expiry.",
    details: [
      "Scans your inbox for documents and attachments with expiry dates",
      "Extracts dates from PDFs and images using OCR",
      "Sends reminders 90, 30, and 7 days before each deadline",
      "Stores all document metadata in an organized Google Sheet",
      "Links directly to renewal portals where available",
    ],
    integrations: ["Gmail", "Google Sheets", "Google Drive"],
    price: "$4.99/mo",
    category: "personal",
  },
  {
    id: "p5",
    name: "AI Home Admin Agent",
    tag: "Home",
    description:
      "Tracks warranties, service schedules, and bills from your inbox. Alerts before anything expires or breaks.",
    details: [
      "Reads appliance warranties and service docs from your email",
      "Sends maintenance reminders based on manufacturer schedules",
      "Monitors utility bill emails and flags unusual spikes",
      "Tracks subscription renewals and upcoming cancellation windows",
      "Monthly home admin summary with everything due that month",
    ],
    integrations: ["Gmail", "Google Sheets", "Google Calendar"],
    price: "$4.99/mo",
    category: "personal",
  },
];

export const enterpriseAgents = agents.filter((a) => a.category === "enterprise");
export const personalAgents = agents.filter((a) => a.category === "personal");

export const WAITLIST_PRICE = 1.99;
