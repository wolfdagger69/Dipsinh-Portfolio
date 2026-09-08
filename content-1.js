/* ==========================================================
   SITE CONTENT — single source of truth
   ==========================================================
   Edit values here to update the live site. This file controls
   the REPEATING blocks (stats, experience, projects, skills,
   education, contact) — the ones that are painful to hand-edit
   in HTML because entries get added/removed over time.

   Headline copy (hero title, about paragraphs) stays directly
   in index.html since it's edited rarely.

   After editing this file, just reload the page — script.js
   rebuilds the sections below automatically.
   ========================================================== */

const siteContent = {

  profile: {
    name: "Dipsinh Yadav",
    title: "Team Leader, Sales & Client Operations",
    location: "Ahmedabad, Gujarat, India",
    summary: "Team Leader with 6+ years running customer and sales operations teams in fast-paced, target-driven environments. Targeting a Senior Manager role in client operations, sales, and team leadership.",
  },

  resume: {
    file: "Dipsinh_Yadav_Resume.pdf",
  },

  stats: [
    { value: "6+", label: "years in team leadership", icon: "users" },
    { value: "200+", label: "FTEs scaled from pilot batch, 2 processes", icon: "layers" },
    { value: "Next", label: "Senior Manager, client & operations leadership", icon: "target", target: true },
  ],

  experience: [
    {
      dateRange: "Nov 2019 — Present",
      title: "Team Leader",
      org: "Etech Global Services LLC · Ahmedabad, India",
      icon: "users",
      current: true,
      bullets: [
        "Took charge of 2 brand-new client processes from pilot batch through to a 200+ FTE operation, owning recruitment testing, quality audit/QC forms, and SOP documentation and training modules built from scratch off client guidelines.",
        "Cut client escalations from 4% to 0.20% — well inside the client's ≤1.00% target — by designing and rolling out audit checkpoints, quality frameworks, and process SOPs for both processes.",
        "Ran root-cause analysis on stalled CSAT, traced it to weak connect and objection-handling on calls, then coached the team live with real call examples — lifting CSAT from 79% to 86% and sales conversion from 11.50% to 15.20%.",
        "Manage day-to-day client interactions and resolve escalations promptly, strengthening long-term relationships.",
        "Monitor and analyze operational KPIs via dashboards to spot trends and bottlenecks, informing data-backed decisions for leadership.",
        "Drive continuous process improvement, standardizing workflows and leading change management across cross-functional teams.",
      ],
    },
    {
      dateRange: "Oct 2018 — Sep 2019",
      title: "Sales Engineer",
      org: "Hi-Tech Investment Castings Ltd. · Gujarat, India",
      icon: "briefcase",
      bullets: [
        "Managed end-to-end B2B customer, vendor, and supplier communications on specifications, documentation, and order fulfillment.",
        "Addressed order-level variances and coordinated cross-departmentally with production and logistics to protect on-time delivery.",
        "Conducted market data analysis and generated status reports and presentations to support management review and business development decisions.",
      ],
    },
    {
      dateRange: "Oct 2017 — Sep 2018",
      title: "Shift In-Charge, Production Engineer",
      org: "Signor Polymers Pvt. Ltd. · Gujarat, India",
      icon: "wrench",
      bullets: [
        "Oversaw daily floor operations and shift personnel, ensuring compliance with strict safety and quality standards.",
        "Maintained accurate shift logs and monitored machine output to identify bottlenecks and improve daily throughput.",
        "Coordinated with procurement and supply chain vendors to avoid production downtime.",
      ],
    },
  ],

  // Self-built tools. Add a new object to this array for each project —
  // keep `highlights` to 3-4 short punchy lines, not one long paragraph,
  // so the card stays a consistent, tidy size.
  projects: [
    {
      status: "Live",
      title: "WBR Command Center",
      tagline: "Ditched the spreadsheet. Built a live business review, instead.",
      description: "Every leader has sat through the same WBR/QBR ritual — hours spent stitching together a spreadsheet or a deck that's already stale by the time it hits the screen. I used AI-assisted development to design and ship a live, browser-based command center instead: one self-contained HTML file that turns a half-day of manual prep into a single click, walk-in-and-run-the-call ready.",
      highlights: [
        "Tracks orders, productivity, client error %, and SA% by line of business — live, not last-updated-Tuesday",
        "Auto-flags most-improved and most-declined team members, no manual scan required",
        "Surfaces quality-focus and attrition-risk agents before they show up as a problem on the call",
        "Rolls into a print-ready view a director can run the call from cold",
      ],
      tags: ["HTML/CSS/JS", "No backend", "Self-directed", "AI-assisted"],
      icon: "chart",
      demoUrl: "wbr-dashboard.html",
      demoLabel: "View live demo",
      note: "A QBR version is next.",
    },
  ],

  skills: [
    {
      title: "People management & leadership",
      description: "Coaching & mentoring, performance feedback, conflict resolution, shift management, change management.",
      icon: "users",
    },
    {
      title: "Sales & client relations",
      description: "Escalation resolution, B2B account & vendor management, relationship building, cross-functional coordination.",
      icon: "briefcase",
    },
    {
      title: "Data & analytics",
      description: "Advanced MS Excel, KPI dashboards & reporting, ad-hoc MIS reporting, trend & root-cause analysis.",
      icon: "chart",
    },
  ],

  education: [
    {
      title: "B.E., Mechanical Engineering",
      detail: "G.E.C. Bhavnagar, Gujarat Technological University · 2013 – 2017 · CGPA 7.1/10",
      icon: "award",
    },
    {
      title: "Software & tools",
      detail: "MS Office Suite (Excel, Word, PowerPoint) · CRM Systems · MIS Dashboards · Database Fundamentals (SQL Basics)",
      icon: "code",
    },
    {
      title: "Certifications & training",
      detail: "AI Tools & Productivity Workshop (Be10x, 2025) · NC Programming & Industrial Automation · IELTS Exam Appeared",
      icon: "book",
    },
    {
      title: "Languages",
      detail: "English (fluent, professional working proficiency) · Hindi · Gujarati",
      icon: "globe",
    },
  ],

  contact: [
    { label: "Email", value: "dipsinhyadav@gmail.com", href: "mailto:dipsinhyadav@gmail.com", icon: "mail" },
    { label: "Phone", value: "+91 96247 67691", href: "tel:+919624767691", icon: "phone" },
    { label: "LinkedIn", value: "/in/dipsinh-yadav-5b867a148", href: "https://www.linkedin.com/in/dipsinh-yadav-5b867a148/", external: true, icon: "linkedin" },
    { label: "Location", value: "Ahmedabad, Gujarat, India", icon: "pin" },
  ],

};
