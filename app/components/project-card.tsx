import Link from "next/link";

import type { Project } from "../data/projects";
import { ProjectVisual } from "./project-visual";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="h-3 w-3"
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

export function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <article className="project-slide">
      <Link
        href={`/work/${project.slug}`}
        className="project-card group"
        aria-label={`View ${project.title} case study`}
      >
        <div className="project-card-media">
          <ProjectVisual visual={project.visual} />

          <div className="project-card-corner">
            <span>{project.number}</span>
            <ArrowIcon />
          </div>
        </div>

        <div className="project-card-info">
          <div className="project-card-heading">
            <div className="min-w-0">
              <p className="project-card-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>
            </div>

            <span className="project-card-year">
              {project.year}
            </span>
          </div>

          <p className="project-card-description">
            {project.shortDescription}
          </p>

          <div className="project-card-footer">
            <span>Case study</span>

            <span className="project-card-arrow">
              <ArrowIcon />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}