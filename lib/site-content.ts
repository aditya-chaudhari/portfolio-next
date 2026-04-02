/** Single source for portfolio copy (Profile-1.pdf LinkedIn export + canonical resume + GitHub). */

export const urls = {
  linkedIn: "https://www.linkedin.com/in/aditya-chaudhari5899/",
  gitHub: "https://github.com/aditya-chaudhari",
  leetCode: "https://leetcode.com",
  site: "https://adityachaudhari.com",
} as const;

export const contact = {
  primaryEmail: "hello@adityachaudhari.com",
  linkedInEmail: "aditya.chaudhari5899@gmail.com",
} as const;

export const canonicalResumePath = "/aditya_chaudhari_resume.pdf";

export const profile = {
  name: "Aditya Chaudhari",
  headline:
    "Senior Software Engineer @ Newfold Digital — agentic AI, orchestration & cloud-native platforms",
  subheadline:
    "LLM agents & workflows — promptfoo evals for orchestrators, plus Kubernetes and platform delivery at scale.",
  locationProfile: "Bengaluru, Karnataka, India",
  locationRolesNote:
    "Role locations: Mumbai, Maharashtra (and Surat for early roles); profile location per LinkedIn: Bengaluru.",
} as const;

export const hero = {
  /** Single hero blurb — metrics also appear as stat tiles where relevant */
  impactLead:
    "Built eval suites with promptfoo for agentic AI orchestrators and workflows; production LLM agents via MCP/Python + Spring Boot. Same role: monolith → Kubernetes + Spring Boot (deploys ~1h → ~5m), libraries across 4+ teams / 10+ services, 10K+ SSE, 20K-user identity migration, ~30% AWS savings, $25M+ consolidation; mentored engineers.",
  brands:
    "Scope: Bluehost, HostGator, Domain.com, Network Solutions, Register.com, BigRock.",
  learning:
    "promptfoo · LLM/agent orchestration · Python · B.Tech IT, Nirma University.",
} as const;

export type TimelineEntry = {
  period: string;
  title: string;
  company: string;
  location: string;
  summary: string;
  intern?: boolean;
};

/** Chronological order (early → current). */
export const experienceTimeline: TimelineEntry[] = [
  {
    period: "Jun 2018 – Jul 2018",
    title: "Android Developer",
    company: "Lembark Solutions",
    location: "Surat, India",
    summary:
      "Built calculator and photo-editing Android apps with Java; foundation in shipping mobile UX.",
    intern: true,
  },
  {
    period: "Jun 2020 – Jul 2020",
    title: "Software Developer",
    company: "Endurance International Group",
    location: "India",
    summary:
      "Subnet-based internal user detection; JUnit 5 modernization; Robot Framework API tests in CI/CD.",
    intern: true,
  },
  {
    period: "Jan 2021 – May 2021",
    title: "Full Stack Engineer",
    company: "Endurance International Group",
    location: "Mumbai, India",
    summary:
      "Billing modernization (~10% engagement); CRUD APIs for site configuration (~40% feature adoption); React debouncing.",
  },
  {
    period: "Jun 2021 – May 2023",
    title: "Software Engineer → Full Stack Engineer",
    company: "Newfold Digital",
    location: "Mumbai, India",
    summary:
      "MFE architecture (Webpack Module Federation, Jenkins, S3); ~75% faster local builds and ~40% faster CI; SSE microservice (~30% UX lift) at scale; ~30%+ AWS/monitoring savings (e.g. Fargate Spot); Datadog, CloudWatch, MTTR improvements.",
  },
  {
    period: "Mar 2023 – Apr 2024",
    title: "Software Development Engineer II",
    company: "Newfold Digital",
    location: "Mumbai, India",
    summary:
      "$25M+ unified stack (Bluehost, HostGator, Domain.com); monolith → Kubernetes microservices (~20% velocity); shared library ~30% less boilerplate; mentored three engineers.",
  },
  {
    period: "Apr 2024 – Present",
    title: "Senior Software Engineer",
    company: "Newfold Digital",
    location: "Mumbai, India",
    summary:
      "promptfoo evals for agentic orchestrators/workflows; MCP (FastMCP, Python) + Spring Boot for agentic chatbot (~10% support reduction); ~8% upsell via conditional catalog; Struts → Spring Boot on Kubernetes (1h → 5m deploys); dynamic UI config (Oracle, Cloudflare) without frontend redeploys.",
  },
];

export type WorkProject = {
  title: string;
  desc: string;
  href?: string;
  linkLabel?: string;
  /** Highlights this item in the asymmetric projects grid. */
  featured?: boolean;
};

export const workProjects: WorkProject[] = [
  {
    title: "Agentic support & growth (MCP)",
    desc: "Evaluation harnesses with promptfoo for agent orchestration and workflows; MCP tooling with FastMCP (Python) and Spring Boot APIs for an agentic chatbot (~10% fewer support requests). Conditional catalog for ~8% upsell lift by domain ownership and eligibility.",
    featured: true,
  },
  {
    title: "Legacy modernization & dynamic UI",
    desc: "Phased migration from Apache Struts monolith to Kubernetes-hosted Spring Boot microservices with reusable service templates (deploy ~1 hour → ~5 minutes). Dynamic UI configuration service (Spring Boot, Oracle DB, Cloudflare) for runtime UI changes without frontend release cycles.",
  },
  {
    title: "Unified hosting platform ($25M+)",
    desc: "Consolidation of Bluehost, HostGator, and Domain.com into a unified technology stack with minimal customer disruption and major cost savings.",
  },
  {
    title: "Real-time notifications & identity",
    desc: "Scalable notification service using Node.js, SSE, and Redis Pub/Sub across three microservices (10K+ concurrent connections). Okta → on-prem Keycloak for 20K+ users in four weeks with encrypted password handling and zero-downtime Spring Security flows.",
  },
  {
    title: "MFE standards & platform efficiency",
    desc: "Organization-wide micro-frontend standards (Webpack 5 / Module Federation) with versioned CI/CD. Build and pipeline optimization (~75% local, ~40% CI) and AWS cost discipline (~30% lower environments via Fargate Spot and Aurora tuning).",
    href: "https://github.com/aditya-chaudhari/MFE-demo",
    linkLabel: "MFE demo (GitHub)",
  },
  {
    title: "Insignia loyalty (Mini-InnoJam)",
    desc: "Runner-up: loyalty microservice APIs with gamification and rewards workflows. Related product narrative includes strong engagement lift with Earn & Burn strategies (internal initiative).",
  },
];

export const openSourceProjects: WorkProject[] = [
  {
    title: "MFE-demo",
    desc: "Micro-frontend exploration in JavaScript.",
    href: "https://github.com/aditya-chaudhari/MFE-demo",
  },
  {
    title: "design-patterns",
    desc: "Design patterns in Java.",
    href: "https://github.com/aditya-chaudhari/design-patterns",
  },
  {
    title: "library-management",
    desc: "Library management sample in Java.",
    href: "https://github.com/aditya-chaudhari/library-management",
  },
  {
    title: "tic-tac-toe",
    desc: "Tic-tac-toe with a CPU player (Java).",
    href: "https://github.com/aditya-chaudhari/tic-tac-toe",
  },
];

export const skillsLinkedInTop = [
  "DevOps",
  "Java Development",
  "Engineering",
] as const;

export const skillsTechnical = [
  "Java",
  "Python",
  "TypeScript",
  "JavaScript",
  "SQL",
  "Bash",
  "Spring Boot",
  "Spring",
  "Hibernate",
  "Node.js",
  "Express",
  "React",
  "FastAPI",
  "Webpack",
  "Oracle DB",
  "MySQL",
  "MongoDB",
  "Redis",
  "DynamoDB",
  "AWS (EC2, Fargate, S3, Aurora)",
  "Kubernetes",
  "Docker",
  "OpenShift",
  "Jenkins",
  "CI/CD",
  "Git",
  "Cloudflare",
  "Nginx",
  "Datadog",
  "Sentry",
  "Grafana",
  "OpenTelemetry",
  "Liquibase",
  "Veracode",
  "Postman",
  "XMatters",
] as const;

export const skillsLearning = ["promptfoo", "agent orchestration", "Python"] as const;

export const certifications = [
  "Node.js: Security",
  "Node.js: Design Patterns",
  "Google Cloud Fundamentals: Core Infrastructure",
  "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
  "React: Design Patterns",
] as const;

export const honorsAwards = [
  "Best Performer of the Quarter — APAC — Q1 2023",
  "Best Performer of the Quarter — APAC — Q1 2022",
  "Hackathon winner — Org — Oct 2021",
  "Hackathon winner — APAC — Apr 2021",
] as const;

export const education = [
  {
    school: "Nirma University",
    detail: "B.Tech, Information Technology — 2018–2021 (graduated May 2021)",
    location: "Ahmedabad area",
  },
  {
    school: "Dr. S. & S. S. Gandhi College of Engineering & Technology",
    detail: "Diploma, Information Technology — 2015–2018",
    location: "Surat",
  },
] as const;

export const siteMetaDescription =
  "Aditya Chaudhari — Senior Software Engineer at Newfold Digital. Agentic AI: promptfoo evals for LLM orchestrators/workflows, MCP/Python agents, Kubernetes & Spring Boot, SSE at scale, $25M+ platform work. B.Tech IT, Nirma University. Bengaluru / Mumbai.";

export const siteKeywords = [
  "Aditya Chaudhari",
  "Senior Software Engineer",
  "Newfold Digital",
  "microservices",
  "Kubernetes",
  "Spring Boot",
  "AWS",
  "MCP",
  "FastMCP",
  "Python",
  "SSE",
  "Keycloak",
  "React",
  "TypeScript",
  "DevOps",
  "Nirma University",
  "Bluehost",
  "HostGator",
  "portfolio",
  "agent orchestration",
  "LLM workflows",
  "promptfoo",
  "LLM evals",
].join(", ");

export const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: urls.site,
  jobTitle: "Senior Software Engineer",
  workLocation: {
    "@type": "Place",
    name: `${profile.locationProfile}; roles based in Mumbai`,
  },
  worksFor: {
    "@type": "Organization",
    name: "Newfold Digital",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Nirma University",
  },
  email: contact.primaryEmail,
  knowsAbout: [
    "Microservices",
    "Kubernetes",
    "AWS",
    "Spring Boot",
    "Python",
    "React",
    "Node.js",
    "Platform engineering",
    "Observability",
    "Agent orchestration",
    "LLM agent workflows",
    "promptfoo",
    "LLM evaluation",
  ],
  sameAs: [urls.linkedIn, urls.gitHub],
} as const;
