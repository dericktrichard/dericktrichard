import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getAdjacentProjects,
  getProject,
  projectOrder,
} from "../project-data";
import { ProjectGallery } from "../components/project-gallery";
import { ProjectNavigation } from "../components/project-navigation";
import { ProjectVisual } from "../components/project-visual";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projectOrder.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} | Derick Richard Tsumah`,
    description: project.shortDescription,
  };
}

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

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="action-secondary"
    >
      {children}
      <ArrowIcon />
    </a>
  );
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <main className="project-page overflow-x-clip">
      <header className="project-header">
        <Link
          href="/"
          className="project-brand"
          aria-label="Return to Derick Richard home"
        >
          DR<span className="text-accent">.</span>
        </Link>

        <Link href="/#work" className="project-back">
          <span aria-hidden="true">←</span>
          All work
        </Link>
      </header>

      <article>
        <section className="project-hero">
          <div className="project-hero-copy">
            <p className="project-eyebrow">
              {project.category}
              <span aria-hidden="true">/</span>
              {project.year}
            </p>

            <h1>{project.title}</h1>

            <p className="project-lede">
              {project.description}
            </p>
          </div>

          <div className="project-case-hero-image">
            <ProjectVisual project={project} hero />
          </div>
        </section>

        <section
          aria-labelledby="project-overview-title"
          className="project-overview"
        >
          <div className="project-section-label">
            <span id="project-overview-title">Overview</span>
          </div>

          <div className="project-overview-grid">
            <div className="project-overview-copy">
              <p className="project-description">
                {project.description}
              </p>

              <div className="project-role">
                <span className="project-small-label">My role</span>
                <p>{project.role}</p>
              </div>
            </div>

            <aside className="project-facts">
              <div>
                <span className="project-small-label">Technologies</span>

                <ul className="project-stack">
                  {project.stack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>

              <ExternalLink href={project.repository}>
                View repository
              </ExternalLink>
            </aside>
          </div>
        </section>

        <section
          aria-labelledby="project-story-title"
          className="project-story"
        >
          <div className="project-section-label">
            <span id="project-story-title">The project</span>
          </div>

          <div className="project-story-list">
            {project.sections.map((section) => (
              <section
                key={section.title}
                className="project-story-row"
              >
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        </section>

        <ProjectGallery images={project.gallery} />

        <ProjectNavigation previous={previous} next={next} />
      </article>

      <footer className="project-footer">
        <span>Derick Richard Tsumah</span>
        <Link href="/#contact">Get in touch</Link>
      </footer>
    </main>
  );
}