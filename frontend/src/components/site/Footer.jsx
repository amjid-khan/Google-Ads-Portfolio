import { Link } from "@tanstack/react-router";
import { Sparkles, Mail, MessageCircle, MapPin, Linkedin, Instagram, Facebook, Star, ShieldCheck } from "lucide-react";

const pages = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/results", label: "Results" },
  { to: "/industries", label: "Industries" },
  { to: "/pricing", label: "Pricing" },
  { to: "/free-audit", label: "Free Audit" },
  { to: "/contact", label: "Contact" },
];

const services = [
  "Search Ads",
  "Shopping Ads",
  "Performance Max",
  "YouTube Ads",
  "Remarketing",
  "Lead Generation",
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/60">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent glow-soft">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </span>
              <div className="leading-tight">
                <div className="font-bold">Amjid Kurmywal</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Google Ads Expert
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Google Ads Expert | Driving Real Results for eCommerce, Local & SaaS brands.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full glass px-2.5 py-1 text-[11px]">
                <ShieldCheck className="h-3.5 w-3.5 text-primary-glow" /> Google Certified
              </span>
              <span className="inline-flex items-center gap-1 rounded-full glass px-2.5 py-1 text-[11px]">
                <Star className="h-3.5 w-3.5 text-primary-glow" /> 5-Star Rated
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Quick Links
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
              {pages.map((p) => (
                <li key={p.to}>
                  <Link to={p.to} className="text-muted-foreground hover:text-foreground transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s} className="text-muted-foreground hover:text-foreground transition-colors">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary-glow" />hello@amjidkurmywal.com</li>
              <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-primary-glow" /> WhatsApp: +92 300 0000000</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary-glow" /> Pakistan</li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-lg glass hover:text-primary-glow">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-lg glass hover:text-primary-glow">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-lg glass hover:text-primary-glow">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <p>© 2025 Amjid Kurmywal. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
