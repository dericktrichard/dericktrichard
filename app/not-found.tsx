import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="eyebrow">404 / Not found</div>

      <h1>That project does not exist.</h1>

      <p>
        The page you requested could not be found.
      </p>

      <Link
        href="/"
        className="action-primary"
      >
        Return home
      </Link>
    </main>
  );
}