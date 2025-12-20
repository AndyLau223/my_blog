"use client";

export function ThemeToggle() {
  const toggle = () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="px-3 py-2 rounded-full border transition"
    >
      🌗
    </button>
  );
}
