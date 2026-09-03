"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M20.1 14.7A8.2 8.2 0 0 1 9.3 3.9 8.2 8.2 0 1 0 20.1 14.7Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.8v2M12 19.2v2M4.4 4.4l1.4 1.4M18.2 18.2l1.4 1.4M2.8 12h2M19.2 12h2M4.4 19.6l1.4-1.4M18.2 5.8l1.4-1.4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const isLight = mounted && theme === "light";

  return (
    <button
      aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
      aria-pressed={isLight}
      className="group relative grid h-10 w-[5.25rem] grid-cols-2 items-center rounded-full border border-(--border) bg-(--toggle-track) p-1 text-(--toggle-inactive) outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--background) motion-reduce:transition-none"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      type="button"
    >
      <span
        aria-hidden="true"
        className="absolute left-1 top-1 h-8 w-9 rounded-full bg-(--toggle-indicator) transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
        style={{ transform: isLight ? "translateX(2rem)" : "translateX(0)" }}
      />
      <span
        className={`relative z-10 grid place-items-center transition-colors duration-300 motion-reduce:transition-none ${
          isLight ? "" : "text-(--toggle-indicator-foreground)"
        }`}
      >
        <MoonIcon />
      </span>
      <span
        className={`relative z-10 grid place-items-center transition-colors duration-300 motion-reduce:transition-none ${
          isLight ? "text-(--toggle-indicator-foreground)" : ""
        }`}
      >
        <SunIcon />
      </span>
    </button>
  );
}
