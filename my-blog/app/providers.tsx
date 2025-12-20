"use client";

import { useEffect } from "react";

function applyTheme(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function applySystemTheme() {
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(systemDark ? "dark" : "light");
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;

    if (saved) {
      applyTheme(saved);
    } else {
      applySystemTheme();
    }
  }, []);

  return <>{children}</>;
}
