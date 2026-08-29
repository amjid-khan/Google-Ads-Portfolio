import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles, Sun, Moon } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/free-audit", label: "Free Audit" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-3 sm:px-4 py-3 transition-all duration-300 ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent glow-soft">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-bold text-sm tracking-tight">
                Amjid Kurmywal
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Google Ads Expert
              </span>
            </span>
          </Link>

          {/* Desktop Nav (SHOW on lg and above) */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-2.5 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                activeProps={{
                  className:
                    "px-2.5 py-1.5 rounded-lg text-sm text-foreground bg-secondary/80",
                }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="hidden lg:inline-flex items-center justify-center rounded-xl bg-background p-2.5 text-foreground ring-1 ring-foreground/20 hover:bg-secondary/70 transition-colors"
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              title={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            {/* CTA */}
            <Link
              to="/free-audit"
              className="hidden lg:inline-flex items-center gap-2 rounded-xl bg-background px-4 py-2 text-sm font-semibold text-foreground ring-1 ring-foreground/60 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:ring-0 transition-all duration-300"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-primary ring-2 ring-primary/30" />
              Free Audit
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-foreground hover:bg-secondary/60"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="lg:hidden mt-2 rounded-2xl glass-strong p-3">
            <div className="flex flex-col gap-1">
              <button
                onClick={toggleTheme}
                className="mb-1 inline-flex items-center justify-center self-start rounded-lg p-2 text-foreground bg-secondary/60 hover:bg-secondary/80 transition-colors"
                aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                title={theme === "dark" ? "Light mode" : "Dark mode"}
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>

              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  activeProps={{
                    className:
                      "px-3 py-2 rounded-lg text-sm text-foreground bg-secondary/80",
                  }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
