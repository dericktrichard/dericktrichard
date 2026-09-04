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
        sizes="(max-width: 768px) 100vw, 70vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
}