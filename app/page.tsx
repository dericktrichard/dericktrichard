import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./components/navigation";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="h-3.5 w-3.5"
    >
      <path
        d="M3 13L13 3M6 3H13V10"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5"
    >
      <path
        d="M15 22v-3.4c.03-.84-.33-1.65-1-2.2
        3.3-.37 6.76-1.62 6.76-7.3
        0-1.62-.57-2.95-1.52-3.99
        .15-.38.66-1.9-.15-3.95
        0 0-1.24-.4-4.07 1.52
        A14.1 14.1 0 0 0 12 2.18
        c-1.02 0-2.04.14-3.02.5
        C6.14-.76 4.9 1.16 4.9 1.16
        c-.81 2.05-.3 3.57-.15 3.95
        A5.8 5.8 0 0 0 3.23 9.1
        c0 5.66 3.45 6.94 6.74 7.3
        -.66.54-1.02 1.31-1 2.2V22"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5"
    >
      <path
        d="M6 9v9M6 6.2v.1M10 18v-5.1
        a3 3 0 0 1 6 0V18M10 9v9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5"
    >
      <path
        d="M20 11.7a8 8 0 0 1-11.9 7
        L4 20l1.3-4A8 8 0 1 1 20 11.7Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M8.4 8.3c.2-.3.4-.3.7-.3h.5c.2 0
        .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6
        c.6 1.1 1.5 1.9 2.7 2.5l.5-.5
        c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5v.5
        c0 .3-.1.5-.3.7-.4.3-1 .5-1.5.4
        -1.5-.3-3.1-1.2-4.4-2.5
        -1.3-1.3-2.2-2.9-2.5-4.4
        -.1-.6.1-1.1.4-1.5Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M4 19V5M4 19h16"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="m7 15 3-4 3 2 5-7"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="m9 7-5 5 5 5M15 7l5 5-5 5M14 4l-4 16"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IntelligenceIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle
        cx="5"
        cy="7"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle
        cx="19"
        cy="7"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle
        cx="5"
        cy="17"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle
        cx="19"
        cy="17"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="m6.3 7.8 3.2 2.6M17.7 7.8l-3.2 2.6M6.3 16.2l3.2-2.6M17.7 16.2l-3.2-2.6"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  );
}

function DataVisual() {
  return (
    <div className="hero-visual relative mx-auto aspect-square w-full max-w-136">
      <svg
        viewBox="0 0 500 500"
        fill="none"
        className="h-full w-full"
        aria-hidden="true"
      >
        <circle
          cx="250"
          cy="250"
          r="205"
          stroke="currentColor"
          strokeOpacity=".13"
        />

        <circle
          cx="250"
          cy="250"
          r="150"
          stroke="currentColor"
          strokeOpacity=".22"
          className="visual-orbit"
        />

        <circle
          cx="250"
          cy="250"
          r="95"
          stroke="currentColor"
          strokeOpacity=".32"
          className="visual-orbit visual-orbit-delay"
        />

        <path
          d="M250 45v410M45 250h410"
          stroke="currentColor"
          strokeOpacity=".08"
        />

        <path
          d="M105 365 175 292l61 38 83-119 78 67"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M105 365 175 292l61 38 83-119 78 67"
          stroke="var(--accent)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="10 14"
          className="visual-orbit-slow"
        />

        <circle
          cx="105"
          cy="365"
          r="5"
          fill="var(--accent)"
          className="visual-point"
        />

        <circle
          cx="175"
          cy="292"
          r="4"
          fill="currentColor"
          className="visual-point-delay"
        />

        <circle
          cx="236"
          cy="330"
          r="4"
          fill="currentColor"
          className="visual-point"
        />

        <circle
          cx="319"
          cy="211"
          r="5"
          fill="var(--accent)"
          className="visual-point-delay"
        />

        <circle
          cx="397"
          cy="278"
          r="4"
          fill="currentColor"
          className="visual-point"
        />

        <circle
          cx="250"
          cy="250"
          r="9"
          fill="var(--background)"
          stroke="var(--accent)"
          strokeWidth="2"
        />

        <circle
          cx="250"
          cy="250"
          r="3"
          fill="var(--accent)"
        />
      </svg>

      <div className="absolute left-[10%] top-[18%] font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
        DATA
      </div>

      <div className="absolute bottom-[18%] right-[8%] font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
        SYSTEM
      </div>
    </div>
  );
}

function PsoVisual() {
  return (
    <div className="relative aspect-16/10 overflow-hidden bg-surface">
      <svg
        viewBox="0 0 800 500"
        fill="none"
        className="h-full w-full"
        aria-hidden="true"
      >
        <g stroke="currentColor" strokeOpacity=".1">
          <path d="M0 100h800M0 200h800M0 300h800M0 400h800" />
          <path d="M100 0v500M200 0v500M300 0v500M400 0v500M500 0v500M600 0v500M700 0v500" />
        </g>

        <path
          d="M90 370C180 325 175 180 285 215S380 380 475 300s105-170 225-125"
          stroke="currentColor"
          strokeOpacity=".3"
          strokeWidth="2"
        />

        <path
          d="M90 370C180 325 175 180 285 215S380 380 475 300s105-170 225-125"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeDasharray="8 12"
          className="visual-orbit-slow"
        />

        <g fill="currentColor">
          <circle cx="90" cy="370" r="6" />
          <circle cx="180" cy="320" r="5" />
          <circle cx="285" cy="215" r="6" />
          <circle cx="380" cy="350" r="5" />
          <circle cx="475" cy="300" r="6" />
          <circle cx="590" cy="205" r="5" />
          <circle cx="700" cy="175" r="7" fill="var(--accent)" />
        </g>

        <path
          d="M90 420h610"
          stroke="currentColor"
          strokeOpacity=".18"
        />
      </svg>

      <div className="absolute left-5 top-5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
        Route optimisation
      </div>

      <div className="absolute bottom-5 right-5 font-mono text-[9px] uppercase tracking-[0.16em] text-accent">
        PSO / 01
      </div>
    </div>
  );
}

function SeiaVisual() {
  return (
    <div className="grid aspect-16/10 grid-cols-[1.35fr_.65fr] gap-2 overflow-hidden bg-surface">
      <div className="relative overflow-hidden">
        <Image
          src="/projects/seia/seiahome.jpeg"
          alt="SEIA application home screen"
          fill
          sizes="(max-width: 768px) 90vw, 55vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
        />
      </div>

      <div className="grid grid-rows-2 gap-2">
        <div className="relative overflow-hidden">
          <Image
            src="/projects/seia/seiaprofile.jpeg"
            alt="SEIA application profile screen"
            fill
            sizes="(max-width: 768px) 30vw, 20vw"
            className="object-cover"
          />
        </div>

        <div className="relative overflow-hidden">
          <Image
            src="/projects/seia/seialogin.jpeg"
            alt="SEIA application login screen"
            fill
            sizes="(max-width: 768px) 30vw, 20vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "SENTRY",
    category: "Grounded AI / Cybersecurity",
    year: "2025 / 2026",
    description:
      "A cybersecurity training system combining grounded generative AI, retrieval, analytics, Android and robotics.",
    href: "https://github.com/SENTRY-Pepper/sentry-system",
    visual: "sentry",
  },
  {
    title: "PSO Logistics Optimizer",
    category: "Optimisation / Data",
    year: "2026",
    description:
      "An interactive Particle Swarm Optimization system for exploring logistics routing and constrained vehicle movement.",
    href: "https://github.com/dericktrichard/pso-logistics-optimizer",
    visual: "pso",
  },
  {
    title: "SEIA",
    category: "Product / Android",
    year: "2025",
    description:
      "A social discovery concept for sharing places, experiences, costs and plans with other travellers and communities.",
    href: "https://github.com/dericktrichard/SEIA",
    visual: "seia",
  },
];

const capabilities = [
  {
    icon: ChartIcon,
    title: "Data",
    description:
      "Data cleaning, analysis, management, reporting and visualisation with Excel and Power BI.",
  },
  {
    icon: CodeIcon,
    title: "Software",
    description:
      "Web and Android development across TypeScript, JavaScript, Kotlin, Python, SQL and modern application stacks.",
  },
  {
    icon: IntelligenceIcon,
    title: "Applied AI",
    description:
      "Grounded generative AI, retrieval systems, robotics, prompt engineering and practical AI integration.",
  },
];

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Navigation />

      <div className="site-atmosphere" aria-hidden="true" />

      <main id="main-content" className="site-content overflow-x-clip">
        {/* HERO */}
        <section className="flex min-h-svh items-center px-page pb-12 pt-28">
          <div className="mx-auto grid w-full max-w-[118rem] items-center gap-14 lg:grid-cols-[1.15fr_.85fr] lg:gap-8">
            <div>
              <div className="portfolio-reveal eyebrow">
                Computer Technology · Data Analytics · Kenya
              </div>

              <div className="mt-8 overflow-hidden">
                <h1 className="display-title portfolio-reveal portfolio-reveal-delay-1 max-w-5xl">
                  Derick
                  <br />
                  <span className="text-muted">Richard</span>
                </h1>
              </div>

              <p className="portfolio-reveal portfolio-reveal-delay-2 mt-8 max-w-2xl text-[clamp(1.05rem,1.8vw,1.4rem)] leading-[1.35] tracking-[-0.02em]">
                Software developer building practical systems where
                <span className="text-accent"> data</span>, software and
                <span className="text-accent"> intelligent technology</span>
                meet.
              </p>

              <div className="portfolio-reveal portfolio-reveal-delay-3 mt-8 flex flex-wrap gap-2 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted">
                <span className="border border-border px-3 py-2">
                  Analysis
                </span>
                <span className="border border-border px-3 py-2">
                  Systems
                </span>
                <span className="border border-border px-3 py-2">
                  Applied Intelligence
                </span>
              </div>

              <div className="portfolio-reveal portfolio-reveal-delay-4 mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="/resume/Derick%20Richard%20Tsumah_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="action-primary"
                >
                  View CV
                  <ArrowIcon />
                </a>

                <Link href="#contact" className="action-secondary">
                  Contact
                  <ArrowIcon />
                </Link>
              </div>

              <div className="portfolio-reveal portfolio-reveal-delay-4 mt-8 flex flex-wrap gap-2">
                <a
                  href="https://github.com/dericktrichard"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <GithubIcon />
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/derickrichards"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <LinkedinIcon />
                  LinkedIn
                </a>

                <a
                  href="https://wa.me/254758415989"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <WhatsappIcon />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="portfolio-reveal portfolio-reveal-delay-2 hidden lg:block">
              <DataVisual />
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section
          id="about"
          className="px-page py-section"
        >
          <div className="mx-auto grid max-w-[118rem] gap-12 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
            <div>
              <div className="eyebrow">About</div>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
              <div>
                <h2 className="section-title max-w-4xl">
                  I build with technology. I am increasingly interested in
                  what the data can tell us.
                </h2>

                <div className="mt-8 grid gap-5 text-[1rem] leading-7 text-muted md:grid-cols-2 md:gap-10">
                  <p>
                    My foundation is in Computer Technology, where software,
                    systems and problem solving meet. That has taken me across
                    web development, Android, databases, AI and technical
                    projects.
                  </p>

                  <p>
                    My direction is moving toward Data Analytics and the
                    systems behind good decisions. I want to understand not
                    just how software works, but how information can be
                    structured, analysed and turned into something useful.
                  </p>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-md">
                <div className="about-glow absolute -inset-8 rounded-full bg-[color-mix(in_srgb,var(--accent)_5%,transparent)] blur-3xl" />

                <div className="relative grid grid-cols-[1.2fr_.8fr] gap-2">
                  <div className="relative aspect-4/5 overflow-hidden bg-surface">
                    <Image
                      src="/projects/sentry/pepperfull.jpg"
                      alt="Pepper robot used in the SENTRY project"
                      fill
                      sizes="(max-width: 1024px) 60vw, 25vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="grid gap-2">
                    <div className="relative aspect-square overflow-hidden bg-surface">
                      <Image
                        src="/projects/seia/seiaprofile.jpeg"
                        alt="SEIA application profile interface"
                        fill
                        sizes="(max-width: 1024px) 35vw, 15vw"
                        className="object-cover"
                      />
                    </div>

                    <div className="flex aspect-square items-end border border-border bg-surface p-4">
                      <div>
                        <div className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-muted">
                          Current direction
                        </div>
                        <div className="mt-2 text-lg tracking-tight">
                          Data + Software
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between font-mono text-[0.55rem] uppercase tracking-[0.14em] text-muted">
                  <span>Build / Analyse / Improve</span>
                  <span>Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section
          id="work"
          className="px-page py-section"
        >
          <div className="mx-auto max-w-[118rem]">
            <div className="flex flex-col justify-between gap-5 border-b border-border pb-6 md:flex-row md:items-end">
              <div>
                <div className="eyebrow">Work</div>
                <h2 className="section-title mt-5">
                  Selected projects.
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-6 text-muted">
                Systems built across software development, optimisation,
                data and applied AI.
              </p>
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-3 lg:gap-6">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card group block"
                  aria-label={`View ${project.title} project`}
                >
                  <div className="project-card-image relative">
                    {project.visual === "sentry" && (
                      <Image
                        src="/projects/sentry/sentry.png"
                        alt="SENTRY project interface"
                        width={1600}
                        height={1000}
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="aspect-16/10 w-full object-cover"
                      />
                    )}

                    {project.visual === "pso" && <PsoVisual />}

                    {project.visual === "seia" && <SeiaVisual />}
                  </div>

                  <div className="py-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl tracking-tight">
                          {project.title}
                        </h3>

                        <p className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted">
                          {project.category}
                        </p>
                      </div>

                      <span className="font-mono text-[0.55rem] text-muted">
                        {project.year}
                      </span>
                    </div>

                    <p className="mt-5 max-w-md text-sm leading-6 text-muted">
                      {project.description}
                    </p>

                    <div className="project-card-meta mt-6 flex items-center gap-2 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted">
                      View project
                      <ArrowIcon />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section
          className="px-page py-section"
        >
          <div className="mx-auto max-w-[118rem]">
            <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
              <div>
                <div className="eyebrow">Capabilities</div>
              </div>

              <div>
                <h2 className="section-title max-w-3xl">
                  One technical foundation. Several ways to use it.
                </h2>

                <div className="mt-10">
                  {capabilities.map((capability) => {
                    const Icon = capability.icon;

                    return (
                      <div
                        key={capability.title}
                        className="capability-row grid gap-5 py-7 md:grid-cols-[3rem_0.45fr_1fr] md:items-start"
                      >
                        <div className="text-muted">
                          <Icon />
                        </div>

                        <h3 className="text-xl tracking-tight">
                          {capability.title}
                        </h3>

                        <p className="max-w-xl text-sm leading-6 text-muted">
                          {capability.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="px-page py-section"
        >
          <div className="mx-auto max-w-[118rem]">
            <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
              <div>
                <div className="eyebrow">Experience</div>
              </div>

              <div>
                <div className="border-t border-border">
                  <div className="grid gap-3 border-b border-border py-7 md:grid-cols-[1fr_1.3fr_.8fr] md:items-center">
                    <div className="text-lg">Administrative Assistant</div>
                    <div className="text-sm text-muted">
                      Zydus Lifesciences Ltd
                    </div>
                    <div className="font-mono text-[0.58rem] uppercase tracking-widest text-muted md:text-right">
                      2024 to 2025
                    </div>
                  </div>

                  <div className="grid gap-3 border-b border-border py-7 md:grid-cols-[1fr_1.3fr_.8fr] md:items-center">
                    <div className="text-lg">
                      Administrative Assistant Attaché
                    </div>
                    <div className="text-sm text-muted">
                      Zydus Lifesciences Ltd
                    </div>
                    <div className="font-mono text-[0.58rem] uppercase tracking-widest text-muted md:text-right">
                      2025
                    </div>
                  </div>

                  <div className="grid gap-3 border-b border-border py-7 md:grid-cols-[1fr_1.3fr_.8fr] md:items-center">
                    <div className="text-lg">Web Developer</div>
                    <div className="text-sm text-muted">
                      AFRAKEN / JHUB Africa
                    </div>
                    <div className="font-mono text-[0.58rem] uppercase tracking-widest text-muted md:text-right">
                      2024
                    </div>
                  </div>
                </div>

                <div className="mt-12 grid gap-4 md:grid-cols-2">
                  <div className="border border-border bg-surface p-6">
                    <div className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted">
                      Education
                    </div>

                    <h3 className="mt-5 text-xl tracking-tight">
                      B.Sc. Computer Technology
                    </h3>

                    <p className="mt-2 text-sm text-muted">
                      Jomo Kenyatta University of Agriculture and Technology
                    </p>
                  </div>

                  <div className="border border-border bg-surface p-6">
                    <div className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted">
                      Foundation
                    </div>

                    <h3 className="mt-5 text-xl tracking-tight">
                      Software · Data · AI
                    </h3>

                    <p className="mt-2 text-sm text-muted">
                      A technical foundation now moving deeper into
                      analytics and intelligent systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="px-page pb-12 pt-section"
        >
          <div className="mx-auto max-w-[118rem]">
            <div className="border-t border-border pt-8">
              <div className="grid gap-12 lg:grid-cols-[1fr_.45fr] lg:items-end">
                <div>
                  <div className="eyebrow">Contact</div>

                  <h2 className="section-title mt-6 max-w-4xl">
                    Let&apos;s talk about the work.
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-7 text-muted">
                    Whether it is a software project, data problem,
                    collaboration or opportunity, I am open to meaningful
                    technical conversations.
                  </p>

                  <a
                    href="mailto:dericktrichard@gmail.com"
                    className="mt-8 inline-flex items-center border-b border-foreground pb-1 text-lg tracking-[-0.02em] transition-colors duration-300 hover:text-accent"
                  >
                    dericktrichard@gmail.com
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 lg:justify-end">
                  <a
                    href="https://github.com/dericktrichard"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                  >
                    <GithubIcon />
                    GitHub
                  </a>

                  <a
                    href="https://linkedin.com/in/derickrichards"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                  >
                    <LinkedinIcon />
                    LinkedIn
                  </a>

                  <a
                    href="https://wa.me/254758415989"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                  >
                    <WhatsappIcon />
                    WhatsApp
                  </a>

                  <a
                    href="/resume/Derick%20Richard%20Tsumah_CV.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="action-primary"
                  >
                    View CV
                    <ArrowIcon />
                  </a>
                </div>
              </div>

              <div className="signal-line mt-16" />

              <footer className="flex flex-col gap-3 py-6 font-mono text-[0.55rem] uppercase tracking-[0.12em] text-muted sm:flex-row sm:items-center sm:justify-between">
                <span>Derick Richard Tsumah</span>
                <span>Computer Technology / Data / Software</span>
                <span>© {new Date().getFullYear()}</span>
              </footer>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}