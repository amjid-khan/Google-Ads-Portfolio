import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BarChart3,
  BadgeCheck,
  Eye,
  Layers,
  LineChart,
  ShieldCheck,
  ShoppingBag,
  Target,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import portrait from "@/assets/amjid-portrait.jpg";
import { Counter } from "@/components/site/Counter";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Amjid Kurmywal | Google Ads Specialist" },
      {
        name: "description",
        content:
          "5+ years managing Rs 50M+ in Google Ads spend across 100+ campaigns. Data-first, ROI-focused, no long-term lock-in.",
      },
      { property: "og:title", content: "About Amjid Kurmywal" },
      {
        property: "og:description",
        content: "Google Ads specialist helping brands scale profitably.",
      },
    ],
  }),
  component: AboutPage,
});

const tools = [
  { name: "Google Ads", icon: Target },
  { name: "Analytics 4", icon: BarChart3 },
  { name: "Tag Manager", icon: Layers },
  { name: "Looker Studio", icon: LineChart },
  { name: "Merchant Center", icon: ShoppingBag },
  { name: "Search Console", icon: Eye },
];

const differentiators = [
  {
    title: "Data-first approach",
    desc: "Decisions backed by real numbers — never gut feel.",
  },
  {
    title: "Transparent reporting",
    desc: "Clear weekly dashboards. You always know what's working.",
  },
  {
    title: "ROI-focused",
    desc: "Profit > clicks. Every change is tied to revenue impact.",
  },
  {
    title: "No long-term lock-in",
    desc: "Month-to-month engagements. You stay because of results.",
  },
];

const highlights = [
  "100+ campaigns managed across diverse niches",
  "Rs 50M+ in ad spend optimized",
  "Clients in eCommerce, SaaS, and local services",
  "Weekly reporting with full account transparency",
  "Conversion tracking setup with GA4 & GTM",
  "Continuous A/B testing on ads and landing pages",
];

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-16">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="absolute top-20 right-10 h-80 w-80 rounded-full bg-primary/25 blur-3xl animate-orb" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl animate-orb" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/40 to-accent/40 blur-2xl opacity-50" />
            <div className="relative rounded-3xl overflow-hidden glass-strong p-2">
              <img
                src={portrait}
                alt="Amjid Kurmywal"
                className="rounded-2xl w-full h-[420px] md:h-[520px] object-cover"
              />
            </div>

            {/* floating stat card */}
            <div className="absolute -bottom-5 -right-4 rounded-2xl glass-strong border border-border/50 px-5 py-3 text-center">
              <div className="text-2xl font-bold gradient-text">4.8x</div>
              <div className="text-[11px] text-muted-foreground">Avg. ROAS</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-flex items-center rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-primary-glow">
              About me
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Amjid Kurmywal</span>
              <br />
              Google Ads Specialist
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              I help ambitious eCommerce, local, and SaaS brands turn ad spend
              into predictable revenue. Over the last 5+ years, I've managed
              100+ campaigns and Rs 50M+ in budget — across niches from fashion
              to fintech.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              My approach is focused on data, testing, and continuous
              optimization. Every decision is backed by performance insights —
              not guesswork. I work closely with clients to understand their
              goals, margins, and customer journey before scaling anything.
            </p>

            {/* highlights */}
            <ul className="mt-6 grid grid-cols-1 gap-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary-glow mt-0.5 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-sm">
                <BadgeCheck className="h-4 w-4 text-primary-glow" /> Google Ads Certified
              </span>
              <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-sm">
                <ShieldCheck className="h-4 w-4 text-primary-glow" /> GA4 + GTM Expert
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="px-5 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-7xl rounded-3xl glass p-8 md:p-12 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-primary-glow">My story</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold">
              From small budgets to 6-figure campaigns
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I started learning Google Ads as a freelancer, optimizing tiny
              budgets for local businesses. Within a year I was running campaigns
              for international eCommerce brands — and quickly realized that most
              accounts waste 30–50% of their spend on bad targeting, poor
              structure, or zero conversion tracking.
            </p>
            <p>
              Today, I run a focused freelance practice — managing 6-figure ad
              budgets, scaling DTC stores, and helping SaaS founders get
              qualified pipeline at predictable CPA. I bring an engineer's
              discipline to PPC: hypothesis, test, measure, scale.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-5 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { v: 5, s: "+", l: "Years experience", sub: "Full-time PPC focus" },
            { v: 100, s: "+", l: "Campaigns managed", sub: "Search, Shopping, PMax, YouTube" },
            { v: 50, p: "Rs ", s: "M+", l: "Ad spend managed", sub: "Across 20+ industries" },
          ].map((c) => (
            <div key={c.l} className="rounded-2xl border border-border/50 bg-background/30 backdrop-blur-sm p-7 text-center">
              <div className="text-4xl font-bold gradient-text">
                <Counter end={c.v} prefix={c.p} suffix={c.s} />
              </div>
              <div className="mt-1.5 text-sm font-medium">{c.l}</div>
              <div className="mt-1 text-xs text-muted-foreground">{c.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TOOLS */}
      <section className="px-5 sm:px-6 lg:px-8 py-16">
        <SectionHeader eyebrow="Stack" title="Tools & platforms I use daily" />
        <div className="mt-10 mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {tools.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-border/50 bg-background/30 backdrop-blur-sm p-4 text-center"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 mx-auto">
                <t.icon className="h-5 w-5 text-primary-glow" />
              </div>
              <div className="mt-2 text-xs font-medium">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="px-5 sm:px-6 lg:px-8 py-16">
        <SectionHeader eyebrow="Why me" title="What makes me different" />
        <div className="mt-10 mx-auto max-w-7xl grid sm:grid-cols-2 gap-5">
          {differentiators.map((d, i) => (
            <div
              key={d.title}
              className="rounded-2xl border border-border/50 bg-background/30 backdrop-blur-sm p-6 flex gap-4"
            >
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary-glow font-bold text-sm">
                0{i + 1}
              </div>
              <div>
                <h3 className="font-semibold">{d.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="px-5 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-7xl rounded-3xl glass-strong p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-accent/25 mx-auto">
              <BarChart3 className="h-6 w-6 text-primary-glow" />
            </div>
            <h3 className="mt-4 text-2xl md:text-3xl font-bold gradient-text">My mission</h3>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Make Google Ads work like a real revenue channel for every business
              I touch — with transparency, accountability, and zero fluff.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Work With Me <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}