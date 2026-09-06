/* ==========================================================
   SITE CONTENT — single source of truth
   ==========================================================
   Edit values here to update the live site. This file only
   controls the REPEATING blocks (stats, experience, skills,
   education, contact) — the ones that are painful to hand-edit
   in HTML because entries get added/removed over time.

   Headline copy (hero title, about paragraphs) stays directly
   in index.html since it's edited rarely and benefits from
   being visible to search engines with zero JavaScript.

   After editing this file, just reload the page — script.js
   rebuilds the sections below automatically.
   ========================================================== */

const siteContent = {

  resume: {
    file: "Dipsinh_Yadav_Resume.pdf",
  },

  stats: [
    { value: "6+", label: "years in team leadership" },
    { value: "3", label: "industries — BPO, manufacturing, B2B sales" },
    { value: "Next", label: "Senior Manager, client & operations leadership", target: true },
  ],

  experience: [
    {
      dateRange: "Nov 2019 — Present",
      title: "Team Leader",
      org: "Etech Global Services LLC · Ahmedabad, India",
      bullets: [
        "Lead and coach a team of customer experience professionals, setting performance goals and ensuring SLA adherence, productivity, and quality standards.",
        "Conduct performance reviews and give constructive feedback, driving measurable improvements in productivity and customer satisfaction.",
        "Manage day-to-day client interactions and resolve escalations promptly, strengthening long-term relationships.",
        "Monitor and analyze operational KPIs via dashboards to spot trends and bottlenecks, informing data-backed decisions for leadership.",
        "Drive continuous process improvement, standardizing workflows and leading change management across cross-functional teams.",
      ],
    },
    {
      dateRange: "Oct 2018 — Sep 2019",
      title: "Sales Engineer",
      org: "Hi-Tech Investment Castings Ltd. · Gujarat, India",
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
      bullets: [
        "Oversaw daily floor operations and shift personnel, ensuring compliance with strict safety and quality standards.",
        "Maintained accurate shift logs and monitored machine output to identify bottlenecks and improve daily throughput.",
        "Coordinated with procurement and supply chain vendors to avoid production downtime.",
      ],
    },
  ],

  skills: [
    {
      title: "People management & leadership",
      description: "Team coaching & mentoring, performance monitoring & feedback, conflict resolution, shift management, change management.",
    },
    {
      title: "Sales & client relations",
      description: "Client escalation resolution, B2B account & vendor management, relationship building, cross-functional coordination.",
    },
    {
      title: "Data & analytics",
      description: "Advanced MS Excel (formulas, pivot tables, lookups), KPI dashboards & reporting, ad-hoc MIS reporting, trend & root-cause analysis.",
    },
  ],

  education: [
    {
      title: "B.E., Mechanical Engineering",
      detail: "G.E.C. Bhavnagar, Gujarat Technological University · 2013 – 2017 · CGPA 7.1/10",
    },
    {
      title: "Software & tools",
      detail: "MS Office Suite (Excel, Word, PowerPoint) · CRM Systems · MIS Dashboards · Database Fundamentals (SQL Basics)",
    },
    {
      title: "Certifications & training",
      detail: "AI Tools & Productivity Workshop (Be10x, 2025) · NC Programming & Industrial Automation · IELTS Exam Appeared",
    },
    {
      title: "Languages",
      detail: "English (fluent, professional working proficiency) · Hindi · Gujarati",
    },
  ],

  contact: [
    { label: "Email", value: "dipsinhyadav@gmail.com", href: "mailto:dipsinhyadav@gmail.com" },
    { label: "Phone", value: "+91 96247 67691", href: "tel:+919624767691" },
    { label: "LinkedIn", value: "/in/dipsinh-yadav-5b867a148", href: "https://www.linkedin.com/in/dipsinh-yadav-5b867a148/", external: true },
    { label: "Location", value: "Ahmedabad, Gujarat, India" },
  ],

};
