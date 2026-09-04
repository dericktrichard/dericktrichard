import Link from "next/link";
import { Navigation } from "./components/navigation";
import { ProjectImage } from "./components/project-image";

const experience = [
  {
    period: "2024 — 2025",
    role: "Administrative Assistant",
    organisation: "Zydus Lifesciences",
  },
  {
    period: "2024",
    role: "Web Developer",
    organisation: "AFRAKEN / JHUB Africa",
  },
];

const technicalAreas = [
  {
    number: "01",
    title: "Data",
    items: "Excel · SQL · Power BI · Python",
  },
  {
    number: "02",
    title: "Build",
    items: "TypeScript · React · APIs · Git",
  },
  {
    number: "03",
    title: "Intelligence",
    items: "AI integration · GenAI · Automation",
  },
];

function DataVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-square w-full overflow-hidden border border-border bg-foreground/2.5"
    >
      <div className="absolute inset-[12%] rounded-full border border-border/70" />
      <div className="absolute inset-[23%] rounded-full border border-border/50" />
      <div className="absolute inset-[34%] rounded-full border border-border/35" />

      <div className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 bg-border" />
      <div className="absolute left-1/2 top-1/2 h-[72%] w-px -translate-y-1/2 bg-border" />

      <div className="absolute left-[27%] top-[28%] h-2 w-2 rounded-full bg-foreground" />
      <div className="absolute left-[67%] top-[24%] h-1.5 w-1.5 rounded-full bg-foreground" />
      <div className="absolute left-[72%] top-[63%] h-2.5 w-2.5 rounded-full bg-foreground" />
      <div className="absolute left-[32%] top-[70%] h-1.5 w-1.5 rounded-full bg-foreground" />

      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <path
          d="M108 112 C164 165 236 98 286 96 C329 94 294 215 288 252 C280 307 181 299 128 280 C78 262 94 164 108 112Z"
          stroke="currentColor"
          strokeWidth="1"
          className="text-foreground/45"
        />
        <path
          d="M92 198 C142 146 183 190 222 218 C255 241 303 201 315 164"
          stroke="currentColor"
          strokeWidth="1"
          className="text-foreground/25"
        />
      </svg>

      <div className="absolute bottom-5 left-5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">
        Data / Signal / Structure
      </div>

      <div className="absolute right-5 top-5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">
        01
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen overflow-x-clip bg-background font-sans text-foreground">
        {/* HERO */}
        <section
          aria-labelledby="hero-title"
          className="mx-auto flex min-h-svh w-full max-w-[118rem] flex-col justify-between px-page pb-[clamp(2rem,5vw,5rem)] pt-[clamp(7rem,12vw,10rem)]"
        >
          <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.38fr)]">
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                Computer Technology · Data Analytics · Kenya
              </p>

              <h1
                id="hero-title"
                className="mt-[clamp(2rem,5vw,4.5rem)] max-w-[9ch] text-[clamp(4.5rem,13vw,14rem)] font-semibold leading-[0.78] tracking-[-0.065em]"
              >
                Derick
                <br />
                Richard
              </h1>

              <div className="mt-[clamp(2.5rem,5vw,5rem)] max-w-4xl">
                <p className="max-w-3xl text-[clamp(1.4rem,2.8vw,3.2rem)] font-medium leading-[1.05] tracking-[-0.04em]">
                  Data analytics is the direction. Software is the foundation.
                  AI is another way to solve the problem.
                </p>

                <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                  <span>Analysis</span>
                  <span>Systems</span>
                  <span>Applied Intelligence</span>
                </div>
              </div>
            </div>

            <div className="w-full max-w-md justify-self-end">
              <DataVisual />
            </div>
          </div>

          <div className="mt-16 flex items-end justify-between border-t border-border pt-4">
            <p className="max-w-md text-sm leading-6 text-muted">
              Computer Technology graduate building deeper expertise in data
              while continuing to work across software and applied AI.
            </p>

            <Link
              href="#work"
              className="hidden font-mono text-xs uppercase tracking-[0.16em] transition-transform duration-300 hover:translate-y-1 sm:block"
            >
              Scroll to work ↓
            </Link>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto w-full max-w-[118rem] px-page">
          <div className="border-t border-border py-section">
            <div className="grid gap-10 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                  01 / About
                </p>
              </div>

              <div>
                <h2 className="max-w-5xl text-[clamp(2.4rem,5.8vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
                  I build with technology, but I am increasingly interested
                  in what the data can tell us.
                </h2>

                <div className="mt-12 grid gap-8 border-t border-border pt-8 md:grid-cols-2">
                  <p className="max-w-xl text-base leading-7 text-muted">
                    My foundation is in Computer Technology, giving me a broad
                    understanding of software, systems and digital tools. My
                    current direction is Data Analytics, where I am developing
                    stronger skills in analysis, data management and business
                    intelligence.
                  </p>

                  <p className="max-w-xl text-base leading-7 text-muted">
                    Software engineering remains an important part of how I
                    work. AI adds another practical capability for automation,
                    experimentation and solving problems in new ways.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section
          id="work"
          className="mx-auto max-w-[100rem] px-page py-section"
        >
          <div className="mb-16 flex items-end justify-between gap-8">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                Selected work
              </p>

              <h2 className="max-w-3xl text-[clamp(2.5rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.055em]">
                Proof before
                <br />
                decoration.
              </h2>
            </div>

            <span className="hidden font-mono text-xs text-muted sm:block">
              01 — 03
            </span>
          </div>

          <div className="space-y-24">
            {/* SENTRY */}
            <article className="group">
              <div className="mb-6 flex items-baseline justify-between gap-6">
                <div>
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    AI · Robotics · HRI
                  </p>

                  <h3 className="text-[clamp(2rem,4vw,4rem)] font-medium tracking-[-0.04em]">
                    SENTRY
                  </h3>
                </div>

                <span className="font-mono text-xs text-muted">01</span>
              </div>

              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.34fr)] lg:items-end">
                <ProjectImage
                  src="/projects/sentry/sentry.png"
                  alt="SENTRY system interface"
                  priority
                />

                <div className="max-w-sm">
                  <p className="text-lg leading-relaxed text-muted">
                    A research prototype exploring grounded generative AI,
                    human-robot interaction, and a RAG-based system for Pepper.
                  </p>

                  <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                    FastAPI · RAG · PostgreSQL · Android
                  </p>
                </div>
              </div>
            </article>

            {/* PSO */}
            <article className="group">
              <div className="mb-6 flex items-baseline justify-between gap-6">
                <div>
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    Optimisation · Data
                  </p>

                  <h3 className="text-[clamp(2rem,4vw,4rem)] font-medium tracking-[-0.04em]">
                    PSO Logistics Optimizer
                  </h3>
                </div>

                <span className="font-mono text-xs text-muted">02</span>
              </div>

              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.34fr)] lg:items-end">
                <div className="flex aspect-16/10 items-center justify-center bg-surface">
                  <div className="text-center">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                      Visual documentation
                    </p>

                    <p className="mt-3 text-sm text-muted">
                      Project interface coming into the portfolio
                    </p>
                  </div>
                </div>

                <div className="max-w-sm">
                  <p className="text-lg leading-relaxed text-muted">
                    An interactive exploration of Particle Swarm Optimization
                    applied to logistics routing.
                  </p>

                  <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                    React · TypeScript · Optimisation
                  </p>
                </div>
              </div>
            </article>

            {/* ZYSA */}
            <article className="group">
              <div className="mb-6 flex items-baseline justify-between gap-6">
                <div>
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    Mobile · Software
                  </p>

                  <h3 className="text-[clamp(2rem,4vw,4rem)] font-medium tracking-[-0.04em]">
                    ZYSA
                  </h3>
                </div>

                <span className="font-mono text-xs text-muted">03</span>
              </div>

              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.34fr)] lg:items-end">
                <div className="flex aspect-16/10 items-center justify-center bg-surface">
                  <div className="text-center">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                      Visual documentation
                    </p>

                    <p className="mt-3 text-sm text-muted">
                      Project interface coming into the portfolio
                    </p>
                  </div>
                </div>

                <div className="max-w-sm">
                  <p className="text-lg leading-relaxed text-muted">
                    An Android application developed for employee performance
                    evaluation.
                  </p>

                  <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                    Kotlin · Android
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>


        {/* TECHNICAL */}
        <section className="mx-auto w-full max-w-[118rem] px-page">
          <div className="border-t border-border py-section">
            <div className="grid gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                03 / Capabilities
              </p>

              <div>
                <h2 className="max-w-4xl text-[clamp(2.5rem,5vw,5.8rem)] font-semibold leading-[0.9] tracking-tighter">
                  Three areas. One technical foundation.
                </h2>

                <div className="mt-14">
                  {technicalAreas.map((area) => (
                    <div
                      key={area.number}
                      className="grid grid-cols-[3rem_1fr] gap-5 border-t border-border py-7 md:grid-cols-[4rem_0.8fr_1fr]"
                    >
                      <span className="font-mono text-xs text-muted">
                        {area.number}
                      </span>

                      <h3 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                        {area.title}
                      </h3>

                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.13em] text-muted md:pt-1">
                        {area.items}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="mx-auto w-full max-w-[118rem] px-page"
        >
          <div className="border-t border-border py-section">
            <div className="grid gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                04 / Experience
              </p>

              <div>
                {experience.map((item) => (
                  <div
                    key={`${item.organisation}-${item.period}`}
                    className="grid gap-3 border-t border-border py-7 md:grid-cols-[0.28fr_0.42fr_0.3fr]"
                  >
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.13em] text-muted">
                      {item.period}
                    </p>

                    <p className="text-xl font-medium tracking-[-0.02em]">
                      {item.role}
                    </p>

                    <p className="text-base text-muted md:text-right">
                      {item.organisation}
                    </p>
                  </div>
                ))}

                <div className="mt-8 border-t border-border pt-7">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted">
                    Education
                  </p>

                  <div className="mt-4 flex flex-col justify-between gap-2 md:flex-row">
                    <p className="text-xl font-medium">
                      B.Sc. Computer Technology
                    </p>
                    <p className="text-base text-muted">
                      JKUAT · Second Class Upper
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
          className="mx-auto w-full max-w-[118rem] px-page"
        >
          <div className="border-t border-border pb-10 pt-[clamp(5rem,12vw,12rem)]">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
              05 / Contact
            </p>

            <h2 className="mt-8 max-w-6xl text-[clamp(3.5rem,10vw,12rem)] font-semibold leading-[0.8] tracking-[-0.065em]">
              Let&apos;s talk about the work.
            </h2>

            <div className="mt-16 flex flex-col justify-between gap-8 border-t border-border pt-5 md:flex-row">
              <p className="max-w-md text-sm leading-6 text-muted">
                Interested in data analytics, software development and
                practical applications of AI.
              </p>

              <div className="flex gap-8 font-mono text-[0.65rem] uppercase tracking-[0.15em]">
                <Link href="#" className="transition-opacity hover:opacity-60">
                  GitHub
                </Link>
                <Link href="#" className="transition-opacity hover:opacity-60">
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}