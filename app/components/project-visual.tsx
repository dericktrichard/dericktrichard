import Image from "next/image";

import type { ProjectVisual } from "../data/projects";

function SentryVisual() {
  return (
    <div className="project-visual project-visual-sentry">
      <div className="project-sentry-mark">
        <div className="project-sentry-icon">
          <span />
          <span />
          <span />
        </div>

        <div className="project-sentry-name">SENTRY</div>

        <div className="project-sentry-subtitle">
          Grounded AI / Cybersecurity
        </div>
      </div>

      <div className="project-visual-index">01 / SYSTEM</div>
    </div>
  );
}

function PsoVisual() {
  return (
    <div className="project-visual project-visual-pso">
      <svg
        viewBox="0 0 800 420"
        fill="none"
        aria-hidden="true"
        className="h-full w-full"
      >
        <g stroke="currentColor" strokeOpacity=".08">
          <path d="M0 84h800M0 168h800M0 252h800M0 336h800" />
          <path d="M100 0v420M200 0v420M300 0v420M400 0v420M500 0v420M600 0v420M700 0v420" />
        </g>

        <path
          d="M70 322C145 286 174 144 270 177S361 332 451 270s117-143 276-109"
          stroke="currentColor"
          strokeOpacity=".28"
          strokeWidth="2"
        />

        <path
          d="M70 322C145 286 174 144 270 177S361 332 451 270s117-143 276-109"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeDasharray="6 12"
          className="project-route-line"
        />

        <g fill="currentColor">
          <circle cx="70" cy="322" r="4" />
          <circle cx="170" cy="277" r="3.5" />
          <circle cx="270" cy="177" r="4" />
          <circle cx="361" cy="332" r="3.5" />
          <circle cx="451" cy="270" r="4" />
          <circle cx="570" cy="189" r="3.5" />
          <circle cx="727" cy="161" r="5" fill="var(--accent)" />
        </g>
      </svg>

      <div className="project-visual-label">Route optimisation</div>
      <div className="project-visual-index">02 / PSO</div>
    </div>
  );
}

function SeiaVisual() {
  return (
    <div className="project-visual project-visual-seia">
      <div className="project-seia-main">
        <Image
          src="/projects/seia/seiahome.jpeg"
          alt="SEIA application home feed"
          width={1600}
          height={1000}
          sizes="(max-width: 767px) 72vw, 28vw"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="project-seia-side">
        <Image
          src="/projects/seia/seiaprofile.jpeg"
          alt="SEIA application profile"
          width={1000}
          height={1000}
          sizes="(max-width: 767px) 18vw, 10vw"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="project-visual-index">03 / SEIA</div>
    </div>
  );
}

export function ProjectVisual({
  visual,
}: {
  visual: ProjectVisual;
}) {
  switch (visual) {
    case "sentry":
      return <SentryVisual />;
    case "pso":
      return <PsoVisual />;
    case "seia":
      return <SeiaVisual />;
  }
}