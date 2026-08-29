import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Search,
  ShoppingBag,
  Zap,
  Youtube,
  Target,
  Users,
  CheckCircle2,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title:
          "Google Ads Services | Search, Shopping, PMax, YouTube — Amjid Kurmywal",
      },
      {
        name: "description",
        content:
          "End-to-end Google Ads services: Search, Shopping, Performance Max, YouTube, Remarketing, and Lead Generation.",
      },
      { property: "og:title", content: "Google Ads Services" },
      {
        property: "og:description",
        content: "Full-funnel Google Ads management built for ROI.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Search,
    name: "Search Ads",
    desc: "Capture buyers at the moment of intent with tightly themed keywords, compelling ad copy, and conversion-optimized landing pages.",
    who: "Service businesses, SaaS, and eCommerce wanting high-intent traffic.",
    benefits: [
      "Lower CPA via SKAGs/STAGs",
      "Conversion tracking done right",
      "Continuous A/B testing",
    ],
    process: [
      "Keyword research & negatives",
      "Build ads & extensions",
      "Optimize weekly",
    ],
    result: "30–60% lower CPA in 60 days",
  },
  {
    icon: ShoppingBag,
    name: "Shopping Ads",
    desc: "Profitable feed-driven campaigns that put your products in front of ready-to-buy shoppers with the right title, price, and image.",
    who: "eCommerce stores on Shopify, WooCommerce or custom carts.",
    benefits: [
      "Optimized product feed",
      "Smart bidding strategy",
      "ROAS-first structure",
    ],
    process: [
      "Audit & feed cleanup",
      "Launch standard + smart",
      "Scale winners",
    ],
    result: "3–6x ROAS on profitable SKUs",
  },
  {
    icon: Zap,
    name: "Performance Max",
    desc: "Google's AI-powered campaign type — done right. Custom asset groups, audience signals, and feed strategy to actually win, not just spend.",
    who: "DTC brands ready to scale across all Google channels.",
    benefits: [
      "Asset group strategy",
      "Audience signal stacking",
      "Channel-level reporting",
    ],
    process: ["Asset & signal setup", "Launch & gather data", "Optimize & scale"],
    result: "Predictable scaling beyond standard Shopping",
  },
  {
    icon: Youtube,
    name: "YouTube Ads",
    desc: "Skippable, in-stream, and shorts campaigns built for both brand recall and direct response — with creative that actually converts.",
    who: "Brands with strong creative wanting demand & awareness.",
    benefits: [
      "Creative briefing",
      "Audience layering",
      "View-through tracking",
    ],
    process: [
      "Strategy & briefs",
      "Launch test creatives",
      "Scale top performers",
    ],
    result: "10–40% lift in branded search demand",
  },
  {
    icon: Target,
    name: "Remarketing",
    desc: "Recover lost revenue with smart remarketing across Display, YouTube, and Search — segmented by funnel stage and recency.",
    who: "Any site with traffic that doesn't convert on first visit.",
    benefits: [
      "Audience segmentation",
      "Dynamic remarketing",
      "Frequency capping",
    ],
    process: [
      "Audit audiences",
      "Build segments & creatives",
      "Launch & optimize",
    ],
    result: "10–25% incremental revenue",
  },
  {
    icon: Users,
    name: "Lead Generation",
    desc: "Quality leads, not vanity clicks. From form strategy to CRM hand-off, every step is optimized for sales-qualified pipeline.",
    who: "Service businesses, agencies, B2B SaaS, real estate.",
    benefits: [
      "Lead form optimization",
      "Offline conversion import",
      "CRM-ready tracking",
    ],
    process: [
      "Define SQL criteria",
      "Launch lead campaigns",
      "Feed quality back to Google",
    ],
    result: "30–60% lower CPL with higher quality",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="End-to-end Google Ads, built for revenue"
        subtitle="From quick wins to full-scale management — pick the engagement that fits your stage."
      />

      <section className="px-5 sm:px-6 lg:px-8 pb-20">
        <div className="mx-auto max-w-7xl space-y-8">
          {services.map((s, i) => (
            <div
              key={s.name}
              className="rounded-3xl border border-border/50 bg-background/30 backdrop-blur-sm p-6 md:p-10 grid md:grid-cols-2 gap-10 items-start"
            >
              {/* LEFT */}
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                {/* icon + name */}
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-accent/25">
                    <s.icon className="h-6 w-6 text-primary-glow" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Service 0{i + 1}
                  </span>
                </div>

                <h2 className="mt-5 text-2xl md:text-3xl font-bold">{s.name}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>

                {/* who */}
                <div className="mt-5 flex items-start gap-2 text-sm">
                  <span className="text-primary-glow font-semibold shrink-0">
                    Who it's for:
                  </span>
                  <span className="text-muted-foreground">{s.who}</span>
                </div>

                {/* result pill */}
                <div className="mt-5 inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-4 py-2.5">
                  <span className="text-xs uppercase tracking-wider text-primary-glow font-semibold">
                    Expected result
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {s.result}
                  </span>
                </div>

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                  >
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* RIGHT */}
              <div className={`grid gap-4 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                {/* benefits */}
                <div className="rounded-2xl border border-border/40 bg-background/40 p-5">
                  <div className="text-xs uppercase tracking-wider text-primary-glow font-semibold mb-3">
                    Key benefits
                  </div>
                  <ul className="space-y-2.5">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary-glow mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* process */}
                <div className="rounded-2xl border border-border/40 bg-background/40 p-5">
                  <div className="text-xs uppercase tracking-wider text-primary-glow font-semibold mb-3">
                    How it works
                  </div>
                  <ol className="space-y-3">
                    {s.process.map((p, idx) => (
                      <li key={p} className="flex items-start gap-3 text-sm">
                        <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/25 to-accent/25 text-primary-glow text-xs font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-muted-foreground pt-0.5">{p}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}