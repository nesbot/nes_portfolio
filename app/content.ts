// All site content lives here. Edit this file to update the portfolio.

export type Role = {
  title: string;
  dates: string;
  location?: string;
  bullets?: string[];
};

export type Company = {
  name: string;
  url?: string;
  roles: Role[];
};

export type Item = {
  title: string;
  subtitle?: string;
  dates: string;
  url?: string;
  note?: string;
};

export const profile = {
  name: "Nes Lopez",
  headline: "Technology & Ecommerce · AI Implementation & Automation",
  location: "San Diego, California",
  photo: "/profile.jpg",
  about: [
    "I help small businesses put AI and automation to work. My background spans more than 20 years in technology, ecommerce and client services, from running Linux servers to directing a $2.5M enterprise ecommerce portfolio.",
    "Today I run RLS, a San Diego consultancy that designs AI-powered applications, workflow automations and systems integrations. The approach is practical: understand how a team actually operates, then build tools with n8n, Python, LLMs and APIs that remove the manual work.",
  ],
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/neslopez/" },
    { label: "rlsdigital.co", url: "https://rlsdigital.co" },
  ],
};

export const experience: Company[] = [
  {
    name: "RLS",
    url: "https://rlsdigital.co",
    roles: [
      {
        title: "Consultant",
        dates: "2025 — Now",
        location: "San Diego",
        bullets: [
          "Design and implement AI-powered applications, workflow automations, and systems integrations to streamline business operations and reduce manual processes.",
          "Develop custom solutions using n8n, Python, JavaScript, LLMs, and APIs, connecting business systems, CRM platforms, and external data sources.",
          "Provide technology consulting focused on process optimization, digital transformation, and practical adoption of emerging technologies.",
        ],
      },
    ],
  },
  {
    name: "Mira Commerce",
    url: "https://miracommerce.com",
    roles: [
      {
        title: "Engagement Manager, Ecommerce Solutions",
        dates: "2025 — 2026",
        location: "Remote",
        bullets: [
          "Supported business development and pre-sales initiatives, engaging prospective clients at industry events and trade shows and contributing to solution proposals.",
          "Managed ongoing client engagements and strategic technology partnerships, identifying growth opportunities and supporting long-term account success.",
          "Worked with project managers, UX/UI designers, and technical leads to define requirements, scope solutions, write statements of work, and coordinate delivery.",
        ],
      },
    ],
  },
  {
    name: "Togetherwork",
    url: "https://www.togetherwork.com",
    roles: [
      {
        title: "Group Account Director, Recreation & Leisure",
        dates: "2024 — 2025",
        location: "Remote",
        bullets: [
          "Led strategic client engagements across the Recreation & Leisure division, overseeing key account relationships, retention, and growth.",
          "Coordinated client initiatives with account managers across multiple product groups to align priorities and keep service delivery consistent.",
          "Partnered with product, customer success, and technical support teams on complex client challenges and platform adoption.",
        ],
      },
    ],
  },
  {
    name: "Miva, Inc.",
    url: "https://www.miva.com",
    roles: [
      {
        title: "Director of Strategic Accounts",
        dates: "2021 — 2023",
        location: "Remote",
        bullets: [
          "Directed a $2.5M enterprise ecommerce client portfolio, owning account P&L, renewals, upsells, and new business while maintaining 100% Net Revenue Retention.",
          "Led Account Management, Project Management, and UX/UI Design teams, aligning professional services delivery, resourcing, and client objectives.",
          "Partnered with executive leadership on strategic planning, Professional Services revenue growth, and operational performance.",
        ],
      },
      {
        title: "Account Director",
        dates: "2020 — 2021",
        bullets: [
          "Recruited, mentored, and developed the Account Management team.",
          "Drove ecommerce initiatives focused on conversion rate, average order value, and customer lifetime value.",
          "Established operating procedures and cross-functional agreements between Account Management, Professional Services, and internal teams.",
        ],
      },
      {
        title: "Senior Account Manager",
        dates: "2018 — 2020",
        bullets: [
          "Managed strategic relationships with enterprise ecommerce clients, improving platform adoption and long-term retention.",
          "Coordinated Professional Services engagements, including solution scoping, statements of work, and quarterly business reviews.",
        ],
      },
    ],
  },
  {
    name: "Pacific",
    url: "https://www.pacific.co",
    roles: [
      {
        title: "Account Manager",
        dates: "2018",
        location: "San Diego",
        bullets: [
          "Managed the Expedia Group account across North America and Australia/New Zealand, supporting six lines of business.",
          "Coordinated SEO, digital marketing, and advertising initiatives with project managers, designers, and copywriters.",
        ],
      },
    ],
  },
  {
    name: "Miva, Inc.",
    url: "https://www.miva.com",
    roles: [
      {
        title: "Account Manager",
        dates: "2015 — 2018",
        bullets: [
          "Managed some of Miva’s most strategic enterprise ecommerce accounts, driving retention, growth, and long-term partnerships.",
          "Owned complex ecommerce implementations, coordinating cross-functional teams to deliver solutions and keep projects moving.",
        ],
      },
    ],
  },
  {
    name: "Santex",
    url: "https://santexgroup.com",
    roles: [
      {
        title: "Account Manager",
        dates: "2013 — 2015",
        bullets: [
          "Managed a $2M+ portfolio of technical services accounts, driving business development, retention, and revenue growth.",
          "Sold and managed software development engagements staffed with developers, tech leads, QA engineers, UX/UI designers, and project managers.",
        ],
      },
      {
        title: "Project Manager, Technical Ops Lead & Linux Sysadmin",
        dates: "2008 — 2012",
        bullets: [
          "Administered Linux servers and VMware environments, including Git/SVN, PHP, MySQL, domains, and SSL.",
          "Managed web projects on Drupal, WordPress, osCommerce, and custom PHP/MySQL, coordinating technical teams and delivery.",
        ],
      },
      {
        title: "Product Manager & Product Owner, SantexQ",
        dates: "2007 — 2010",
        bullets: [
          "Started as a web developer, then took ownership of SantexQ, a SaaS project management app, from internal tool through closed beta to public launch.",
          "Defined the product roadmap with senior stakeholders and coordinated releases, enhancements, and user support.",
        ],
      },
    ],
  },
];

export type Client = { name: string; note?: string; url?: string };
export type ClientGroup = { company: string; clients: Client[] };

export const clientGroups: ClientGroup[] = [
  {
    company: "Mira Commerce",
    clients: [
      { name: "Aimpoint" },
      { name: "Trijicon" },
      { name: "Nightforce Optics" },
      { name: "Griot’s Garage" },
    ],
  },
  {
    company: "Togetherwork",
    clients: [
      { name: "National Veterinary Associates" },
      { name: "Pet Paradise" },
      { name: "Movement Climbing Gyms" },
      { name: "Central Rock Gym" },
    ],
  },
  {
    company: "Miva",
    clients: [
      { name: "Taylor Swift Official Store" },
      { name: "Kauai Coffee", note: "Massimo Zanetti Beverage" },
      { name: "Segafredo Zanetti", note: "Massimo Zanetti Beverage" },
      { name: "Hills Bros. Coffee", note: "Massimo Zanetti Beverage" },
      { name: "Chock full o’Nuts", note: "Massimo Zanetti Beverage" },
      { name: "Farmer Bros.", note: "Coffee brands" },
      { name: "NHS Skate Direct", note: "Santa Cruz, Independent, OJ Wheels & more" },
      { name: "BTO Sports" },
      { name: "XDP", note: "Xtreme Diesel Performance" },
      { name: "Three Rivers Archery" },
      { name: "Borsheims", note: "A Berkshire Hathaway company" },
      { name: "The Paper Store" },
      { name: "Rally House" },
      { name: "Cintas First Aid" },
    ],
  },
  {
    company: "Pacific",
    clients: [{ name: "Expedia Group" }],
  },
  {
    company: "Santex",
    clients: [
      { name: "Nestlé", note: "via Accenture" },
      { name: "Macy’s", note: "via Accenture" },
      { name: "Red Bull", note: "via Accenture" },
      { name: "Telstra", note: "via Accenture" },
      { name: "Vistage" },
      { name: "Coldwell Banker Preferred" },
      { name: "U.S. Dept. of Transportation (RITA)" },
      { name: "Jessop Jewelers" },
      { name: "MaraNatha Foods" },
      { name: "Broker’s International" },
    ],
  },
];

export const talks: Item[] = [
  { title: "Panelist", subtitle: "Camp Miva 2022 · San Diego, CA", dates: "2022" },
  { title: "Choosing the Right Ecommerce Ecosystem", subtitle: "MivaCon 2019 · San Diego, CA", dates: "2019" },
  { title: "Miva Merchant 9 Admin: Optimizing Your Daily Workflow", subtitle: "MivaCon 2016 · San Diego, CA", dates: "2016" },
  { title: "Mobile Design and UX Trends", subtitle: "MivaCon 2016 · San Diego, CA", dates: "2016" },
];

export const education: Item[] = [
  {
    title: "University of San Diego",
    subtitle: "M.S. Innovation, Technology and Entrepreneurship",
    dates: "2023 — 2025",
  },
  {
    title: "Universidad Autónoma de Baja California",
    subtitle: "B.S. Electronic Engineering",
    dates: "2000 — 2005",
  },
];

export const certifications: Item[] = [
  { title: "n8n102 — Integrations: APIs and Connected Workflows", subtitle: "n8n", dates: "2026" },
  { title: "n8n101 — Essentials: Your First Workflows", subtitle: "n8n", dates: "2026" },
  { title: "Klaviyo Practitioner Certificate", subtitle: "Klaviyo", dates: "2026" },
  { title: "Klaviyo Sales Certificate", subtitle: "Klaviyo", dates: "2026" },
  { title: "Generative AI for Business Leaders", subtitle: "LinkedIn Learning", dates: "2025" },
  { title: "Google Prompting Essentials", subtitle: "Google", dates: "2025" },
  { title: "Explore Emerging Tech", subtitle: "IBM", dates: "2025" },
];

export const volunteering: Item[] = [
  { title: "Reading Room Assistant", subtitle: "Museum of Contemporary Art San Diego", dates: "2015" },
  { title: "Internet Start-up Mentor", subtitle: "Incutex Company Builder", dates: "2014 — 2015" },
  { title: "Mobile Pet Adoption", subtitle: "San Diego Humane Society", dates: "2012" },
];
