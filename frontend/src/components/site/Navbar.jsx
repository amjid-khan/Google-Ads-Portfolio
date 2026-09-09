import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Sparkles,
  Sun,
  Moon,
  Linkedin,
  Facebook,
  Instagram,
  Phone,
} from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme =
      savedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);

    document.documentElement.classList.toggle(
      "dark",
      initialTheme === "dark"
    );
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);

    document.documentElement.classList.toggle(
      "dark",
      nextTheme === "dark"
    );
  };

  return (
    <>
      {/* =====================================================
          TOP SOCIAL / PHONE BAR
      ====================================================== */}
      <div className="fixed left-0 right-0 top-0 z-[60] w-full bg-background">
        <div className="mx-auto max-w-[1800px] px-7">
          <div className="flex h-9 items-center justify-between border-b border-foreground/[0.10]">
            
            {/* Social Icons */}
            <div className="flex items-center gap-1">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Facebook className="h-3.5 w-3.5" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Phone */}
            <a
              href="tel:03119091924"
              className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>0311 9091924</span>
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}
      <header
        className={`fixed left-0 right-0 top-9 z-50 w-full bg-background transition-all duration-300 ${
          scrolled
            ? "border-b border-foreground/[0.08] shadow-sm"
            : ""
        }`}
      >
        <div className="mx-auto max-w-[1800px] px-7">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? "py-2.5" : "py-4"
            }`}
          >
            {/* =================================================
                LOGO
            ================================================== */}
            <Link
              to="/"
              className="flex items-center gap-2"
            >
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent glow-soft">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </span>

              <span className="hidden flex-col leading-tight sm:flex">
                <span className="text-sm font-bold tracking-tight">
                  Amjid Kurmywal
                </span>

                <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Google Ads Expert
                </span>
              </span>
            </Link>

            {/* =================================================
                DESKTOP NAV
            ================================================== */}
            <nav className="hidden items-center gap-0.5 lg:flex">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="rounded-lg px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                  activeProps={{
                    className:
                      "px-2.5 py-1.5 rounded-lg text-sm text-foreground bg-secondary/80",
                  }}
                  activeOptions={{
                    exact: l.to === "/",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* =================================================
                RIGHT SIDE
            ================================================== */}
            <div className="flex items-center gap-2">
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="hidden h-9 w-9 items-center justify-center rounded-xl bg-background text-foreground ring-1 ring-foreground/20 transition-colors hover:bg-secondary/70 lg:inline-flex"
                aria-label={
                  theme === "dark"
                    ? "Switch to light theme"
                    : "Switch to dark theme"
                }
                title={
                  theme === "dark"
                    ? "Light mode"
                    : "Dark mode"
                }
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>

              <Link
                to="/contact"
                className="group relative hidden overflow-hidden rounded-xl bg-background px-4 py-2 text-sm font-semibold text-foreground ring-1 ring-foreground/60 transition-all duration-300 lg:inline-flex"
              >
                <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />

                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary ring-2 ring-primary/30 transition-all duration-300 group-hover:bg-white group-hover:ring-white/30" />

                  Contact
                </span>
              </Link>

              {/* Mobile Menu */}
              <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center justify-center rounded-lg p-2 text-foreground transition-colors hover:bg-secondary/60 lg:hidden"
                aria-label={
                  open ? "Close menu" : "Open menu"
                }
                aria-expanded={open}
              >
                {open ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* =================================================
              MOBILE DROPDOWN
          ================================================== */}
          {open && (
            <div className="mb-3 rounded-2xl border border-foreground/[0.08] bg-background p-3 shadow-lg lg:hidden">
              <div className="flex flex-col gap-1">

                {/* Mobile Theme */}
                <button
                  onClick={toggleTheme}
                  className="mb-1 inline-flex w-fit items-center justify-center rounded-lg bg-secondary/60 p-2 text-foreground transition-colors hover:bg-secondary/80"
                  aria-label={
                    theme === "dark"
                      ? "Switch to light theme"
                      : "Switch to dark theme"
                  }
                  title={
                    theme === "dark"
                      ? "Light mode"
                      : "Dark mode"
                  }
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </button>

                {/* Mobile Links */}
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                    activeProps={{
                      className:
                        "px-3 py-2 rounded-lg text-sm text-foreground bg-secondary/80",
                    }}
                    activeOptions={{
                      exact: l.to === "/",
                    }}
                  >
                    {l.label}
                  </Link>
                ))}

                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-2.5 text-sm font-semibold text-white"
                >
                  <span className="h-2 w-2 rounded-full bg-white" />
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}