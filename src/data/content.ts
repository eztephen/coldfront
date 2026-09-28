// Page copy lives here so a new client can be set up without touching components.
// Wrap words in *asterisks* to render them on a hi-vis highlight.

export const NAV = [
  { href: "#services", label: "Services" },
  { href: "#areas", label: "Service areas" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Reviews" },
];

export const EMERGENCY = {
  full: "No power or no cooling? We run a 24/7 callout —",
  short: "24/7 emergency callout —",
};

export const HERO = {
  headline: "Cool again by *Thursday*. Guaranteed in writing.",
  sub: "Licensed aircon and electrical work across the northern suburbs. Fixed prices agreed before we start, and no call-out fee if you go ahead with the job.",
  badges: ["Licensed electricians", "$20m public liability", "6-year workmanship warranty", "Police-checked techs"],
};

export const QUOTE_FORM = {
  jobs: [
    "Air conditioning — not working",
    "Air conditioning — new install",
    "Air conditioning — service or clean",
    "Electrical — fault or no power",
    "Electrical — switchboard upgrade",
    "Electrical — lights, fans or power points",
    "Hot water",
    "Something else",
  ],
  urgency: ["Today — it's urgent", "Within 48 hours", "This week", "Just getting a price"],
};

export const PROOF = [
  { figure: "18", caption: "years trading" },
  { figure: "4.8", caption: "★ from 1,240 reviews" },
  { figure: "$0", caption: "call-out if you proceed" },
  { figure: "24/7", caption: "emergency line" },
];

export type ServiceIcon = "aircon" | "bolt" | "service" | "clipboard";

export const SERVICES: { icon: ServiceIcon; title: string; body: string; points: string[]; price: string }[] = [
  {
    icon: "aircon",
    title: "Air conditioning",
    body: "Split systems, ducted and multi-head. Supply and install, or repair what you've got.",
    points: ["Same-day breakdown repairs", "New installs, most done in a day", "Annual service and deep clean", "All major brands, parts in the van"],
    price: "Repairs from $180",
  },
  {
    icon: "bolt",
    title: "Electrical",
    body: "Fault-finding, switchboards, and everything that trips at the worst possible moment.",
    points: ["No power / tripping circuits", "Switchboard and safety switch upgrades", "Power points, lighting, ceiling fans", "Smoke alarm compliance"],
    price: "Call-out from $145",
  },
  {
    icon: "service",
    title: "Service plans",
    body: "A yearly clean keeps a split system running at the efficiency you paid for — and keeps the warranty valid.",
    points: ["Annual filter and coil clean", "Gas pressure and drainage check", "Priority booking in summer", "10% off any repair"],
    price: "$19/month per unit",
  },
  {
    icon: "clipboard",
    title: "Landlords & agencies",
    body: "We work with fourteen local property managers. Compliance jobs, tenant scheduling and consolidated monthly invoicing.",
    points: ["We book directly with the tenant", "Photo report on every job", "Smoke alarm and safety compliance", "One invoice per month, per portfolio"],
    price: "Account terms available",
  },
];

// Keys are matched case-insensitively. Values are the next standard slot shown to the visitor.
export const SERVICE_AREAS: Record<string, string> = {
  Northgate: "Thursday morning",
  Ashcroft: "Thursday morning",
  Belmont: "Wednesday afternoon",
  Riverton: "Wednesday afternoon",
  Kingsway: "Thursday morning",
  Fernbrook: "Friday morning",
  "Old Quarter": "Wednesday afternoon",
  Highvale: "Friday morning",
  Marleston: "Friday afternoon",
  "Weston Park": "Friday afternoon",
  Brookfield: "Thursday afternoon",
  Eastwood: "Friday morning",
};

export const SERVICE_POSTCODES: Record<string, string> = {
  "4011": "Thursday morning",
  "4012": "Wednesday afternoon",
  "4013": "Friday morning",
};

export const STEPS = [
  { title: "You call or book online", body: "Tell us what's happening. We'll often diagnose it over the phone and tell you if it's something you can fix yourself." },
  { title: "We give you a window", body: "A two-hour arrival window, not “sometime Tuesday”. You get a text with the technician's name and photo when they set off." },
  { title: "Fixed price, agreed first", body: "The technician quotes the whole job before touching a tool. You approve it on the spot — or you don't, and there's nothing to pay." },
  { title: "Done, tested, warranted", body: "We test it in front of you, clean up, and email the invoice with a six-year workmanship warranty attached." },
];

export const PRICING = [
  { item: "Call-out and diagnosis", detail: "Waived entirely if you go ahead with the repair", amount: "$145" },
  { item: "Call-out, if you proceed with the job", detail: "Every single time — it's not a promotion", amount: "$0", free: true },
  { item: "Split system repair", detail: "Typical range, quoted fixed before we start", amount: "$180 – $620" },
  { item: "Split system supply & install", detail: "2.5kW back-to-back, single storey, includes electrical", amount: "from $1,890" },
  { item: "Annual service & deep clean", detail: "Per indoor unit. Two or more, $110 each.", amount: "$140" },
  { item: "Switchboard upgrade with safety switches", detail: "Standard residential board, includes certificate", amount: "from $1,250" },
  { item: "After-hours and weekend emergency", detail: "Applied to the call-out only, not the labour", amount: "+$95" },
];

export const PRICING_NOTE =
  "Prices include GST. Payment plans available on installs over $1,500 — four fortnightly instalments, no interest.";

export const REVIEWS = [
  {
    stars: 5,
    body: "Aircon died on the hottest day of the year with a newborn in the house. Rang at 7am, Dan was here by 10:30, fixed by noon. Quoted $340, charged $340.",
    name: "Priya M.",
    suburb: "Northgate",
    job: "Split system repair · January",
  },
  {
    stars: 5,
    body: "Got three quotes for a switchboard. Coldfront weren't the cheapest but they were the only ones who explained why the cheap one wouldn't pass. Turned up when they said, left the place spotless.",
    name: "Gareth L.",
    suburb: "Belmont",
    job: "Switchboard upgrade · March",
  },
  {
    stars: 4,
    body: "Install ran into the second day because of a wiring issue in the wall — not their fault, 1970s house. They didn't charge me for the extra day, which I wasn't expecting. Four stars only because I'd have liked a heads-up earlier.",
    name: "Sandra K.",
    suburb: "Old Quarter",
    job: "Ducted install · November",
  },
];
