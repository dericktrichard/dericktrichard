import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getAdjacentProjects,
  getProject,
  projectOrder,
} from "../../data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projectOrder.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found | Derick Richard",
    };
  }

  return {
    title: `${project.title} | Derick Richard`,
    description: project.description,
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
    <main className="project-page">
      <header className="project-page-header">
        <Link
          href="/"
          className="project-page-mark"
          aria-label="Return home"
        >
          DR<span>.</span>
        </Link>

        <Link
          href="/" className="project-page-back"
        >
          <span aria-hidden="true">←</span>
          All work
        </Link>
      </header>

      <div className="project-page-content">
        <section className="project-page-hero">
          <div className="eyebrow">
            {project.category} · {project.year}
          </div>

          <h1>{project.title}</h1>

          <p>{project.description}</p>

          {project.hero && (
            <div className="project-case-hero-image">
              <Image
                src={project.hero.src}
                alt={project.hero.alt}
                fill
                priority
                sizes="(max-width: 767px) 92vw, 52rem"
                className="object-contain"
              />
            </div>
          )}
        </section>

        <section className="project-overview">
          <div className="eyebrow">Overview</div>

          <div className="project-overview-grid">
            <div>
              <p className="project-overview-description">
                {project.description}
              </p>

              <div className="project-role">
                <span>My role</span>
                <p>{project.role}</p>
              </div>
            </div>

            <aside className="project-tech">
              <span>Technologies</span>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology} className="technology-tag">
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="action-secondary project-repository-link"
              >
                View repository
                <ArrowIcon />
              </a>
            </aside>
          </div>
        </section>

        <section className="project-story">
          <div className="eyebrow">The project</div>

          <div className="project-story-list">
            {project.sections.map((section) => (
              <article
                key={section.title}
                className="project-story-row"
              >
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </article>
            ))}
          </div>
        </section>

        {project.gallery.length > 0 && (
          <section className="project-gallery-section">
              <div className="project-section-heading">
              <span className="eyebrow">Visual record</span>
              <span className="project-image-count">
                {String(project.gallery.length).padStart(2, "0")} images
              </span>
            </div>

            <div className="project-gallery">
              {project.gallery.map((image) => (
                <figure
                  key={image.src}
                  className={
                    image.aspect === "wide"
                      ? "project-gallery-feature"
                      : image.aspect === "portrait"
                        ? "project-gallery-portrait"
                        : undefined
                  }
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 767px) 90vw, min(56rem, 78vw)"
                    className="object-contain"
                  />
                </figure>
              ))}
            </div>
          </section>
        )}

        <nav aria-label="Project navigation" className="project-navigation">
          {previous && (
            <Link
              href={`/work/${previous.slug}`}
              className="project-navigation-item"
            >
              <span className="project-navigation-label">
                Previous project
              </span>
              <span className="project-navigation-title">
                {previous.title}
              </span>
              <span aria-hidden="true">←</span>
            </Link>
          )}

          {next && (
            <Link
              href={`/work/${next.slug}`}
              className="project-navigation-item project-navigation-next"
            >
              <span className="project-navigation-label">
                Next project
              </span>
              <span className="project-navigation-title">
                {next.title}
              </span>
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </nav>
      </div>

      <footer className="project-page-footer">
        <span>Derick Richard Tsumah</span>

        <Link href="/">
          Back to portfolio
        </Link>
      </footer>
    </main>
  );
}