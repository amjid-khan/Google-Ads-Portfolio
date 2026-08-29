import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, GraduationCap, HeartPulse, Home, Landmark, Plane, ShoppingCart, Sparkles, Store } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries Served | Google Ads for eCommerce, SaaS, Local & More" },
      { name: "description", content: "Google Ads expertise across eCommerce, local services, SaaS, real estate, education, healthcare, finance and travel." },
      { property: "og:title", content: "Industries I Serve" },
      { property: "og:description", content: "Tailored Google Ads strategies per industry." },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  { icon: ShoppingCart, name: "eCommerce", problems: ["Low ROAS on Shopping", "Wasted PMax spend"], solutions: ["Feed-first strategy", "Asset group hygiene"], result: "5.6x ROAS — Apparel DTC" },
  { icon: Store, name: "Local Business", problems: ["Untracked phone calls", "Bad geo targeting"], solutions: ["Call tracking + radius bidding", "Local landing pages"], result: "+287% calls — Plumbing" },
  { icon: Sparkles, name: "SaaS", problems: ["Bad lead quality", "High CPL"], solutions: ["Offline conversion import", "ICP-only Search"], result: "CPL -62% — B2B SaaS" },
  { icon: Home, name: "Real Estate", problems: ["Tire-kicker leads", "Long sales cycles"], solutions: ["Intent-tiered campaigns", "Pre-qualified lead forms"], result: "Cost / qualified lead Rs 480" },
  { icon: GraduationCap, name: "Education", problems: ["Low enrollment ROI", "Seasonal volatility"], solutions: ["Pre-launch demand gen", "Course-level conversion paths"], result: "+184% enrollments" },
  { icon: HeartPulse, name: "Health & Wellness", problems: ["Ad policy issues", "Trust barriers"], solutions: ["Compliance-first ad copy", "Review-driven creatives"], result: "ROAS 4.1x — Skincare" },
  { icon: Landmark, name: "Finance", problems: ["High CPC", "Strict ad policies"], solutions: ["Geo-tiered bidding", "Whitelisted landing pages"], result: "CPL -41%" },
  { icon: Plane, name: "Travel", problems: ["Demand seasonality", "Last-click attribution gaps"], solutions: ["Demand Gen + PMax mix", "Multi-touch reporting"], result: "Bookings +210%" },
];

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Strategies tailored to your sector"
        subtitle="Same fundamentals — different playbooks. I bring industry-specific levers to every account."
      />

      <section className="px-5 sm:px-6 lg:px-8 pb-10">
        <div className="mx-auto max-w-7xl grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <div key={i.name} className="rounded-2xl glass p-6 ring-glow flex flex-col">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/40 to-accent/40 glow-soft">
                  <i.icon className="h-5 w-5 text-primary-glow" />
                </div>
                <h3 className="text-lg font-bold">{i.name}</h3>
              </div>

              <div className="mt-5 text-sm">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Common problems</div>
                <ul className="mt-1 space-y-1 text-foreground/90">
                  {i.problems.map((p) => <li key={p}>• {p}</li>)}
                </ul>
              </div>

              <div className="mt-4 text-sm">
                <div className="text-xs uppercase tracking-wider text-primary-glow">My solution</div>
                <ul className="mt-1 space-y-1 text-foreground/90">
                  {i.solutions.map((s) => <li key={s}>• {s}</li>)}
                </ul>
              </div>

              <div className="mt-5 rounded-xl bg-background/40 p-3 text-sm">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Mini result: </span>
                <span className="gradient-text font-semibold">{i.result}</span>
              </div>

              <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm text-primary-glow font-semibold hover:gap-3 transition-all">
                See how I help {i.name} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-7xl rounded-2xl glass-strong p-6 text-center">
          <Building2 className="h-6 w-6 mx-auto text-primary-glow" />
          <p className="mt-3 text-sm text-muted-foreground">
            Don't see your industry? I've worked with brands across many more — let's chat.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
