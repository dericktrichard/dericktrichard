import Image from "next/image";
import type { Project } from "../project-data";

type ProjectVisualProps = {
  project: Project;
  hero?: boolean;
};

function PsoVisual() {
  return (
    <div className="project-visual-pso">
      <svg
        viewBox="0 0 800 420"
        fill="none"
        aria-hidden="true"
        className="h-full w-full"
      >
        <g stroke="currentColor" strokeOpacity=".09">
          <path d="M0 84h800M0 168h800M0 252h800M0 336h800" />
          <path d="M100 0v420M200 0v420M300 0v420M400 0v420M500 0v420M600 0v420M700 0v420" />
        </g>

        <path
          d="M75 320C155 282 170 145 270 175S360 335 450 270s115-145 270-110"
          stroke="currentColor"
          strokeOpacity=".28"
          strokeWidth="2"
        />

        <path
          d="M75 320C155 282 170 145 270 175S360 335 450 270s115-145 270-110"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeDasharray="7 11"
          className="project-route-line"
        />

        <g fill="currentColor">
          <circle cx="75" cy="320" r="5" />
          <circle cx="170" cy="278" r="4" />
          <circle cx="270" cy="175" r="5" />
          <circle cx="360" cy="310" r="4" />
          <circle cx="450" cy="270" r="5" />
          <circle cx="575" cy="175" r="4" />
          <circle cx="720" cy="160" r="6" fill="var(--accent)" />
        </g>
      </svg>

      <span className="project-visual-label project-visual-label-top">
        Route optimisation
      </span>

      <span className="project-visual-label project-visual-label-bottom">
        PSO / 01
      </span>
    </div>
  );
}

function SeiaVisual() {
  return (
    <div className="project-visual-seia">
      <div className="relative overflow-hidden">
        <Image
          src="/projects/seia/seiahome.jpeg"
          alt="SEIA home feed"
          fill
          sizes="(max-width: 768px) 90vw, 55vw"
          className="object-cover"
        />
      </div>

      <div className="grid grid-rows-2 gap-1.5">
        <div className="relative overflow-hidden">
          <Image
            src="/projects/seia/seiaprofile.jpeg"
            alt="SEIA profile screen"
            fill
            sizes="(max-width: 768px) 30vw, 20vw"
            className="object-cover"
          />
        </div>

        <div className="relative overflow-hidden">
          <Image
            src="/projects/seia/seialogin.jpeg"
            alt="SEIA login screen"
            fill
            sizes="(max-width: 768px) 30vw, 20vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export function ProjectVisual({
  project,
  hero = false,
}: ProjectVisualProps) {
  if (project.slug === "pso-logistics") {
    return <PsoVisual />;
  }

  if (project.slug === "seia") {
    return <SeiaVisual />;
  }

  return (
    <Image
      src={project.hero.src}
      alt={project.hero.alt}
      fill
      priority={hero}
      sizes={
        hero
          ? "(max-width: 768px) 92vw, min(1000px, 78vw)"
          : "(max-width: 768px) 88vw, 32vw"
      }
      className="object-cover"
    />
  );
}