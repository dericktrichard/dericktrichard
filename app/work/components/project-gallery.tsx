import Image from "next/image";
import type { ProjectImage } from "../project-data";

type ProjectGalleryProps = {
  images: ProjectImage[];
};

export function ProjectGallery({ images }: ProjectGalleryProps) {
  if (!images.length) {
    return null;
  }

  return (
    <section
      aria-labelledby="visual-record-title"
      className="project-gallery-section"
    >
      <div className="project-section-label">
        <span>Visual record</span>
        <span className="project-image-count">
          {String(images.length).padStart(2, "0")} images
        </span>
      </div>

      <h2 id="visual-record-title" className="sr-only">
        Project visual record
      </h2>

      <div className="project-gallery">
        {images.map((image, index) => (
          <a
            key={image.src}
            href={image.src}
            target="_blank"
            rel="noopener noreferrer"
            className={
              image.aspect === "wide"
                ? "project-gallery-feature"
                : image.aspect === "portrait"
                  ? "project-gallery-portrait"
                  : undefined
            }
            aria-label={`Open project image ${index + 1}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 88vw, 46vw"
              className="object-cover"
            />
          </a>
        ))}
      </div>
    </section>
  );
}