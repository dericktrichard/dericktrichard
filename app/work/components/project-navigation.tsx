import Link from "next/link";
import type { Project } from "../project-data";

type ProjectNavigationProps = {
  previous?: Project;
  next?: Project;
};

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="h-3.5 w-3.5"
    >
      {direction === "left" ? (
        <path
          d="M13 8H3M3 8l4-4M3 8l4 4"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="square"
        />
      ) : (
        <path
          d="M3 8h10M13 8l-4-4M13 8l-4 4"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="square"
        />
      )}
    </svg>
  );
}

export function ProjectNavigation({
  previous,
  next,
}: ProjectNavigationProps) {
  return (
    <nav
      aria-label="Project navigation"
      className="project-navigation"
    >
      {previous ? (
        <Link
          href={`/work/${previous.slug}`}
          className="project-navigation-item"
        >
          <span className="project-navigation-label">
            Previous project
          </span>
          <span className="project-navigation-title">{previous.title}</span>
          <Arrow direction="left" />
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/work/${next.slug}`}
          className="project-navigation-item project-navigation-next"
        >
          <span className="project-navigation-label">
            Next project
          </span>
          <span className="project-navigation-title">{next.title}</span>
          <Arrow direction="right" />
        </Link>
      ) : null}
    </nav>
  );
}