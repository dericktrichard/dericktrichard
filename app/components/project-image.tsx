import Image from "next/image";

type ProjectImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export function ProjectImage({
  src,
  alt,
  priority = false,
}: ProjectImageProps) {
  return (
    <div className="relative aspect-16/10 overflow-hidden bg-surface">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 65vw"
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-5 right-5 translate-y-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
      >
        View project ↗
      </div>
    </div>
  );
}