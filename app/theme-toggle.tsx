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
      viewBox="0 0 24 24"
      fill="none"
      className="theme-toggle-icon"
    >
      <path
        d="M20.1 14.7A8.2 8.2 0 0 1 9.3 3.9a8.25 8.25 0 1 0 10.8 10.8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="theme-toggle-icon"
    >
      <circle
        cx="12"
        cy="12"
        r="3.4"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M12 2.7v2M12 19.3v2M4.42 4.42l1.42 1.42M18.16 18.16l1.42 1.42M2.7 12h2M19.3 12h2M4.42 19.58 5.84 18.16M18.16 5.84l1.42-1.42"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
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
      type="button"
      className="theme-toggle"
      aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
      aria-pressed={isLight}
      onClick={() => setTheme(isLight ? "dark" : "light")}
    >
      <span
        className={`theme-toggle-track ${
          isLight ? "theme-toggle-track-light" : ""
        }`}
      >
        <span className="theme-toggle-option theme-toggle-moon">
          <MoonIcon />
        </span>

        <span className="theme-toggle-option theme-toggle-sun">
          <SunIcon />
        </span>

        <span
          aria-hidden="true"
          className={`theme-toggle-indicator ${
            isLight ? "theme-toggle-indicator-light" : ""
          }`}
        >
          {isLight ? <SunIcon /> : <MoonIcon />}
        </span>
      </span>
    </button>
  );
}