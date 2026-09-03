import { ThemeToggle } from "./theme-toggle";
import { Navigation } from "./components/navigation";

const focusAreas = [
  "Data Analytics",
  "Software Foundations",
  "AI-Aware Systems",
];

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen overflow-x-hidden bg-background font-(family-name:--font-geist-sans) text-foreground">
        <section
          aria-labelledby="hero-title"
          className="relative isolate mx-auto grid min-h-screen w-full max-w-[100rem] content-center px-[clamp(1.25rem,4vw,5rem)] py-[clamp(2rem,8svh,6rem)]"
        >
          <div className="absolute right-[clamp(1.25rem,4vw,5rem)] top-[clamp(1rem,3vw,2rem)] z-10">
            <ThemeToggle />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-[8%] left-[clamp(1.25rem,4vw,5rem)] hidden w-px bg-border md:block"
          />

          <div className="grid items-end gap-[clamp(3rem,7vw,7rem)] lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.48fr)]">
            <div className="max-w-272 md:pl-[clamp(2rem,5vw,5rem)]">
              <p className="mb-[clamp(1.5rem,3vw,2.5rem)] max-w-fit border-b border-foreground pb-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-muted">
                Computer Technology graduate
              </p>

              <h1
                id="hero-title"
                className="max-w-[12ch] text-[clamp(3.85rem,13vw,12.5rem)] font-semibold leading-[0.82] tracking-[-0.055em] text-balance"
              >
                Derick Richard
              </h1>

              <div className="mt-[clamp(1.5rem,4vw,3rem)] max-w-216">
                <p className="text-[clamp(1.35rem,2.6vw,3rem)] font-medium leading-[1.08] tracking-[-0.035em] text-foreground">
                  Data analytics specialist with a software and AI foundation.
                </p>

                <p className="mt-5 max-w-172 text-[clamp(1rem,1.3vw,1.25rem)] leading-8 text-muted">
                  I turn structured information into clear analysis, practical
                  systems, and decisions teams can reason about.
                </p>
              </div>
            </div>

            <aside
              aria-label="Professional focus"
              className="w-full border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-[clamp(2rem,4vw,4rem)]"
            >
              <dl className="grid gap-7 sm:grid-cols-3 lg:grid-cols-1">
                {focusAreas.map((area, index) => (
                  <div key={area} className="min-w-0">
                    <dt className="font-(family-name:--font-geist-mono) text-xs text-muted">
                      0{index + 1}
                    </dt>
                    <dd className="mt-2 border-t border-border pt-3 text-[clamp(1rem,1.4vw,1.2rem)] font-medium leading-6">
                      {area}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-10 max-w-md text-sm leading-7 text-muted">
                Positioned around analytics first, with enough technical range to
                work across databases, software workflows, and applied AI tools.
              </p>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
