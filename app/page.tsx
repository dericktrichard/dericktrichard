import Image from "next/image";
import Link from "next/link";

import { Navigation } from "./components/navigation";
import { ProjectCard } from "./components/project-card";
import { projects } from "./data/projects";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="h-3.5 w-3.5"
    >
      <path
        d="M3 13 13 3M6 3h7v7"
        stroke="currentColor"
        strokeWidth="1.2"
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
        d="M20 11.7a8 8 0 0 1-11.9 7L4 20l1.3-4A8 8 0 1 1 20 11.7Z"
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
      <circle cx="5" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="19" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="5" cy="17" r="1.5" stroke="currentColor" strokeWidth="1.2" />
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
      <Navigation />

      <div className="site-atmosphere" aria-hidden="true" />

      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <main id="main-content" className="site-content overflow-x-clip">
        {/* HERO */}
        <section
          aria-labelledby="hero-title"
          className="flex min-h-svh items-center px-page pb-10 pt-20"
        >
          <div className="mx-auto grid w-full max-w-[118rem] items-center gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-8">
            <div className="hero-copy">
              <div className="portfolio-reveal hero-meta font-mono text-[0.52rem] uppercase tracking-[0.14em] text-muted">
                Computer Technology · Data Analytics · Kenya
              </div>

              <div className="mt-5 overflow-hidden">
                <h1
                  id="hero-title"
                  className="display-title portfolio-reveal portfolio-reveal-delay-1 max-w-4xl"
                >
                  <span className="hero-name-line">Derick</span>
                  <span className="hero-name-line text-muted">RICHARD</span>
                </h1>
              </div>

              <p className="portfolio-reveal portfolio-reveal-delay-2 mt-4 max-w-2xl text-[clamp(0.82rem,1.25vw,1.05rem)] leading-[1.4] tracking-[-0.02em]">
                Software developer building practical systems where
                <span className="text-accent"> DATA</span>,
                <span className="text-accent"> SOFTWARE</span> and
                <span className="text-accent"> INTELLIGENT TECHNOLOGY</span>{" "}
                meet.
              </p>

              <div className="portfolio-reveal portfolio-reveal-delay-3 mt-4 flex flex-wrap gap-2 font-mono text-[0.56rem] uppercase tracking-[0.12em] text-muted">
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

              <div className="portfolio-reveal portfolio-reveal-delay-4 mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="/resume/Derick%20Richard%20Tsumah_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
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

              <div className="portfolio-reveal portfolio-reveal-delay-4 mt-7 flex flex-wrap gap-2">
                <a
                  href="https://github.com/dericktrichard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <GithubIcon />
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/derickrichards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <LinkedinIcon />
                  LinkedIn
                </a>

                <a
                  href="https://wa.me/254758415989"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <WhatsappIcon />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="profile-image-frame mx-auto">
              <Image
                src="/profile/profileimage.png"
                alt="Derick Richard"
                width={600}
                height={900}
                priority
                sizes="(max-width: 767px) 90vw, 19rem"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="px-page py-section">
          <div className="mx-auto max-w-[118rem]">
            <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
              <div>
                <div className="eyebrow">Experience</div>
              </div>

              <div>
                <div className="border-t border-border">
                  <div className="experience-row">
                    <div>Administrative Assistant</div>
                    <div>Zydus Lifesciences Ltd</div>
                    <div>2024 to 2025</div>
                  </div>

                  <div className="experience-row">
                    <div>Administrative Assistant Attaché</div>
                    <div>Zydus Lifesciences Ltd</div>
                    <div>2025</div>
                  </div>

                  <div className="experience-row">
                    <div>Web Developer</div>
                    <div>AFRAKEN / JHUB Africa</div>
                    <div>2024</div>
                  </div>
                </div>

                <div className="mt-9 grid gap-3 md:grid-cols-2">
                  <div className="education-card">
                    <span className="education-card-label">Education</span>
                    <h3>B.Sc. Computer Technology</h3>
                    <p>
                      Jomo Kenyatta University of Agriculture and Technology.
                    </p>
                  </div>
                  
                  <div className="education-card">
                    <span className="education-card-label">Foundation</span>
                    <h3>Software · Data · AI</h3>
                    <p>
                      A technical foundation now moving deeper into analytics and intelligent systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="px-page py-section">
          <div className="mx-auto max-w-[118rem]">
            <div className="work-heading">
              <div>
                <div className="eyebrow">Work</div>

                <h2 className="section-title mt-4">PROJECTS</h2>
              </div>

              <p className="work-heading-copy">
                Systems built across software, optimisation, data and applied
                AI.
              </p>
            </div>

            <div className="project-carousel" aria-label="Selected projects">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>

            <div className="project-carousel-footer">
              <span>Scroll to explore</span>

              <div className="project-carousel-rule" aria-hidden="true">
                <span />
              </div>

              <span>{projects.length} selected</span>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="px-page py-section">
          <div className="mx-auto max-w-[118rem]">
            <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
              <div>
                <div className="eyebrow">Capabilities</div>
              </div>

              <div>
                <h2 className="section-title max-w-3xl">
                  One technical foundation. Several ways to use it.
                </h2>

                <div className="mt-9">
                  {capabilities.map((capability) => {
                    const Icon = capability.icon;

                    return (
                      <div
                        key={capability.title}
                        className="capability-row grid gap-4 py-6 md:grid-cols-[2.5rem_0.4fr_1fr] md:items-start"
                      >
                        <div className="text-muted">
                          <Icon />
                        </div>

                        <h3 className="text-[0.92rem] tracking-tight">
                          {capability.title}
                        </h3>

                        <p className="max-w-xl text-[0.66rem] leading-6 text-muted">
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

        {/* ABOUT */}
        <section id="about" className="px-page py-section">
          <div className="mx-auto grid max-w-[118rem] gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
            <div>
              <div className="eyebrow">About</div>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
              <div>
                <h2 className="section-title max-w-4xl">
                  I build with technology. I am increasingly interested in what
                  the data can tell us.
                </h2>

                <div className="mt-7 grid max-w-4xl gap-5 text-[0.72rem] leading-6 text-muted md:grid-cols-2 md:gap-9">
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

              <div className="relative mx-auto w-full max-w-100">
                <div className="about-glow absolute -inset-8 rounded-full bg-[color-mix(in_srgb,var(--accent)_5%,transparent)] blur-3xl" />

                <div className="relative grid grid-cols-[1.15fr_.85fr] gap-1.5">
                  <div className="about-image-frame relative aspect-4/5 overflow-hidden bg-surface">
                    <Image
                      src="/projects/sentry/pepperfull.jpg"
                      alt="Pepper robot used in the SENTRY project"
                      fill
                      sizes="(max-width: 767px) 48vw, 20vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="grid gap-1.5">
                    <div className="about-image-frame relative aspect-square overflow-hidden bg-surface">
                      <Image
                        src="/projects/seia/seiaprofile.jpeg"
                        alt="SEIA application profile"
                        width={1000}
                        height={1000}
                        sizes="(max-width: 767px) 90vw, 18vw"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="about-signal flex aspect-square items-end border border-border bg-surface p-3">
                      <div>
                        <div className="font-mono text-[0.5rem] uppercase tracking-[0.14em] text-muted">
                          Current direction
                        </div>

                        <div className="mt-1.5 text-base tracking-tight">
                          Data + Software
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between font-mono text-[0.5rem] uppercase tracking-[0.14em] text-muted">
                  <span>Build / Analyse / Improve</span>
                  <span>Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-page pb-12 pt-section">
          <div className="mx-auto max-w-[118rem]">
            <div className="border-t border-border pt-8">
              <div className="grid gap-10 lg:grid-cols-[1fr_.45fr] lg:items-end">
                <div>
                  <div className="eyebrow">Contact</div>

                  <h2 className="section-title contact-heading mt-5 max-w-4xl">
                    Let&apos;s talk about the work.
                  </h2>

                  <p className="mt-5 max-w-xl text-[0.72rem] leading-6 text-muted">
                    Whether it is a software project, data problem,
                    collaboration or opportunity, I am open to meaningful
                    technical conversations.
                  </p>

                  <a
                    href="mailto:dericktrichard@gmail.com"
                    className="contact-email mt-7 inline-flex text-[0.82rem] tracking-[-0.02em]"
                  >
                    dericktrichard@gmail.com
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 lg:justify-end">
                  <a
                    href="https://github.com/dericktrichard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <GithubIcon />
                    GitHub
                  </a>

                  <a
                    href="https://linkedin.com/in/derickrichards"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <LinkedinIcon />
                    LinkedIn
                  </a>

                  <a
                    href="https://wa.me/254758415989"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <WhatsappIcon />
                    WhatsApp
                  </a>

                  <a
                    href="/resume/Derick%20Richard%20Tsumah_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-primary"
                  >
                    View CV
                    <ArrowIcon />
                  </a>
                </div>
              </div>

              <div className="signal-line mt-12" />

              <footer className="flex flex-col gap-3 py-5 font-mono text-[0.5rem] uppercase tracking-[0.12em] text-muted sm:flex-row sm:items-center sm:justify-between">
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