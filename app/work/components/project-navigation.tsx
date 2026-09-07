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
        <Link href={`/work/${previous.slug}`} className="project-nav-item">
          <span className="project-nav-direction">
            <Arrow direction="left" />
            Previous project
          </span>
          <span className="project-nav-title">{previous.title}</span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/work/${next.slug}`}
          className="project-nav-item project-nav-item-next"
        >
          <span className="project-nav-direction">
            Next project
            <Arrow direction="right" />
          </span>
          <span className="project-nav-title">{next.title}</span>
        </Link>
      ) : null}
    </nav>
  );
}