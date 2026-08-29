import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Crown, Sparkles, Star } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { FAQ } from "@/components/site/FAQ";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Google Ads Management Packages — Amjid Kurmywal" },
      { name: "description", content: "Simple, custom-quoted Google Ads management packages — Basic, Standard, and Premium. No long-term contracts." },
      { property: "og:title", content: "Google Ads Pricing" },
      { property: "og:description", content: "Three transparent packages built for every stage of growth." },
    ],
  }),
  component: PricingPage,
});

const packages = [
  {
    name: "Basic",
    icon: Sparkles,
    bestFor: "Startups",
    features: ["Google Search Ads setup", "1 Campaign", "Conversion tracking", "Monthly reporting", "Email support"],
    featured: false,
  },
  {
    name: "Standard",
    icon: Star,
    bestFor: "Growing businesses",
    features: ["Search + Shopping Ads", "Up to 3 Campaigns", "Bi-weekly optimization", "Monthly report + call", "Priority support"],
    featured: true,
  },
  {
    name: "Premium",
    icon: Crown,
    bestFor: "Scaling brands",
    features: ["Full Google Ads management", "Unlimited campaigns", "Weekly optimization", "PMax + Remarketing", "Dedicated support"],
    featured: false,
  },
];

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple packages, custom quotes"
        subtitle="Pricing depends on your spend, complexity, and goals. Pick a tier — I'll send you a tailored quote."
      />

      <section className="px-5 sm:px-6 lg:px-8 pb-10">
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 flex flex-col ring-glow ${
                p.featured ? "glass-strong glow-primary border border-primary/40" : "glass"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
                  Most Popular
                </div>
              )}
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent glow-soft">
                <p.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">{p.name}</h3>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Best for: {p.bestFor}</div>

              <div className="mt-6">
                <div className="text-4xl font-bold gradient-text">Custom</div>
                <div className="text-xs text-muted-foreground">Quote within 24h</div>
              </div>

              <ul className="mt-6 space-y-2.5 text-sm grow">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="h-4 w-4 text-primary-glow mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition-transform hover:scale-[1.02] ${
                  p.featured
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground glow-primary"
                    : "glass text-foreground hover:bg-secondary/70"
                }`}
              >
                {p.featured ? "Start Now" : "Book a Call"}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 mx-auto max-w-7xl rounded-3xl glass p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">Need a custom plan?</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Hybrid scope, multi-account, or in-house enablement — let's design it together.
            </p>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-xl glass-strong px-5 py-3 font-semibold text-foreground ring-glow">
            Build my custom plan
          </Link>
        </div>
      </section>

      <section className="px-5 sm:px-6 lg:px-8 py-20">
        <SectionHeader eyebrow="FAQ" title="Pricing & engagement questions" />
        <div className="mt-10">
          <FAQ />
        </div>
      </section>

      <CTASection />
    </>
  );
}
