"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Sync state with localStorage and <html> class
  useEffect(() => {
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (theme === "dark" || (!theme && prefersDark)) {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
      }
      // Listen to storage changes (multi-tab sync)
      const onStorage = (e: StorageEvent) => {
        if (e.key === "theme") {
          if (e.newValue === "dark") {
            document.documentElement.classList.add("dark");
            setIsDark(true);
          } else {
            document.documentElement.classList.remove("dark");
            setIsDark(false);
          }
        }
      };
      window.addEventListener("storage", onStorage);
      return () => window.removeEventListener("storage", onStorage);
    }
  }, []);

  const toggleTheme = () => {
    if (typeof window !== "undefined") {
      const html = document.documentElement;
      const nowDark = !html.classList.contains("dark");
      if (nowDark) {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDark(true);
      } else {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setIsDark(false);
      }
    }
  };

  return (
    <button
      id="theme-toggle"
      className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      title="Toggle dark mode"
      aria-pressed={isDark}
      onClick={toggleTheme}
    >
      <span className="sr-only">Toggle dark mode</span>
      <svg
        className="w-5 h-5 text-gray-700 dark:text-gray-200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M12 3v1m0 16v1m8.66-12.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 4.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </button>
  );
}
