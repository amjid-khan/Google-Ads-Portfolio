import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Dumbbell,
  GraduationCap,
  Home,
  Laptop,
  LineChart,
  Shirt,
  Sofa,
  Sparkles,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Counter } from "@/components/site/Counter";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results | Google Ads Performance Numbers — Amjid Kurmywal" },
      {
        name: "description",
        content:
          "Aggregated Google Ads performance: ROAS, CTR, CPA, conversion rate, and industry breakdowns.",
      },
      { property: "og:title", content: "Google Ads Results" },
      {
        property: "og:description",
        content:
          "Real numbers across industries — ROAS, CTR, CPA, conversion rate.",
      },
    ],
  }),
  component: ResultsPage,
});

const headline = [
  { v: 4.8, l: "Avg ROAS", s: "x", d: 1, sub: "Across all active accounts" },
  { v: 6.4, l: "Avg CTR", s: "%", d: 1, sub: "vs 3.1% industry average" },
  { v: 38, l: "Lower CPA", s: "%", d: 0, sub: "After account rebuild" },
  { v: 12.8, l: "Conv. Rate", s: "%", d: 1, sub: "Post-optimization avg" },
];

const beforeAfter = [
  ["Monthly Revenue", "Rs 320k", "Rs 1.2M"],
  ["ROAS", "1.4x", "5.2x"],
  ["CPA", "Rs 1,180", "Rs 410"],
  ["Conversion Rate", "1.8%", "7.6%"],
  ["CTR", "2.1%", "6.4%"],
  ["Wasted Spend", "42%", "8%"],
];

const miniResults = [
  { industry: "Apparel", k: "ROAS", v: "5.6x", icon: Shirt },
  { industry: "Real Estate", k: "Cost / Lead", v: "Rs 480", icon: Home },
  { industry: "B2B SaaS", k: "MQL Volume", v: "+228%", icon: Laptop },
  { industry: "Plumbing", k: "Calls/mo", v: "186", icon: Wrench },
  { industry: "Beauty DTC", k: "Revenue", v: "+312%", icon: Sparkles },
  { industry: "EdTech", k: "Enrollments", v: "+184%", icon: GraduationCap },
  { industry: "Furniture", k: "ROAS", v: "4.7x", icon: Sofa },
  { industry: "Fitness App", k: "Installs", v: "+260%", icon: Dumbbell },
];

const industries = [
  { name: "eCommerce", pct: 38 },
  { name: "SaaS", pct: 22 },
  { name: "Local Services", pct: 18 },
  { name: "Real Estate", pct: 10 },
  { name: "Education", pct: 7 },
  { name: "Health & Wellness", pct: 5 },
];

const chartData = [
  { month: "Jan", v: 18, revenue: "Rs 2.1M" },
  { month: "Feb", v: 26, revenue: "Rs 3.4M" },
  { month: "Mar", v: 35, revenue: "Rs 5.2M" },
  { month: "Apr", v: 48, revenue: "Rs 8.1M" },
  { month: "May", v: 64, revenue: "Rs 13.6M" },
  { month: "Jun", v: 92, revenue: "Rs 21.8M" },
];

function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="The numbers that matter"
        subtitle="Aggregated performance across active and historical client accounts."
      />

      {/* ── HEADLINE STATS ── */}
      <section className="px-5 sm:px-6 lg:px-8 pb-10">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-4">
          {headline.map((h) => (
            <div
              key={h.l}
              className="rounded-2xl border border-border/50 bg-background/30 backdrop-blur-sm p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                <Counter end={h.v} suffix={h.s} decimals={h.d ?? 0} />
              </div>
              <div className="mt-1.5 text-sm font-medium">{h.l}</div>
              <div className="mt-1 text-xs text-muted-foreground">{h.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BEFORE VS AFTER ── */}
      <section className="px-5 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          eyebrow="Before vs After"
          title="What changes when an account is rebuilt right"
        />
        <div className="mt-10 mx-auto max-w-3xl rounded-2xl border border-border/50 bg-background/30 backdrop-blur-sm overflow-hidden">
          {/* table header */}
          <div className="grid grid-cols-3 px-6 py-3.5 border-b border-border/50 bg-background/40">
            <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Metric
            </div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Before
            </div>
            <div className="text-xs uppercase tracking-wider text-primary-glow font-medium">
              After
            </div>
          </div>
          {beforeAfter.map((row, i) => (
            <div
              key={row[0]}
              className={`grid grid-cols-3 px-6 py-4 border-b border-border/40 last:border-0 items-center ${
                i % 2 === 0 ? "bg-background/20" : ""
              }`}
            >
              <div className="text-sm font-medium">{row[0]}</div>
              <div className="text-sm text-muted-foreground line-through">
                {row[1]}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold gradient-text">{row[2]}</span>
                <TrendingUp className="h-3.5 w-3.5 text-primary-glow" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INDUSTRY WINS ── */}
      <section className="px-5 sm:px-6 lg:px-8 py-16">
        <SectionHeader eyebrow="Snapshots" title="Wins across industries" />
        <div className="mt-10 mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {miniResults.map((m) => (
            <div
              key={m.industry + m.k}
              className="rounded-2xl border border-border/50 bg-background/30 backdrop-blur-sm p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/40 to-accent/40 glow-soft">
                  <m.icon className="h-5 w-5 text-primary-glow" />
                </div>
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {m.industry}
                </span>
              </div>
              <div className="text-2xl font-bold gradient-text">{m.v}</div>
              <div className="mt-0.5 text-sm text-muted-foreground">{m.k}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CHART ── */}
      <section className="px-5 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          eyebrow="Performance"
          title="Sample 6-month account growth"
        />
        <div className="mt-10 mx-auto max-w-7xl rounded-2xl border border-border/50 bg-background/30 backdrop-blur-sm p-6 md:p-10">
          {/* chart legend */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-sm">
              <LineChart className="h-4 w-4 text-primary-glow" />
              <span className="font-medium">Revenue Growth</span>
            </div>
            <span className="text-xs text-muted-foreground border border-border/50 rounded-full px-3 py-1">
              Jan – Jun 2024
            </span>
          </div>

          {/* bars */}
          <div className="h-52 flex items-end gap-3">
            {chartData.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div className="relative w-full">
                  {/* tooltip on hover */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] whitespace-nowrap bg-background border border-border/60 rounded px-2 py-1 text-foreground">
                    {d.revenue}
                  </div>
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-primary to-accent transition-all duration-300"
                    style={{ height: `${(d.v / 92) * 208}px` }}
                  />
                </div>
                <div className="text-[11px] text-muted-foreground">{d.month}</div>
              </div>
            ))}
          </div>

          {/* summary row */}
          <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border/40 pt-6">
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-1">Total Spend</div>
              <div className="font-bold text-lg">Rs 4.2M</div>
            </div>
            <div className="text-center border-x border-border/40">
              <div className="text-xs text-muted-foreground mb-1">Total Revenue</div>
              <div className="font-bold text-lg gradient-text">Rs 21.8M</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-1">Blended ROAS</div>
              <div className="font-bold text-lg gradient-text">5.2x</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="px-5 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          eyebrow="Industries"
          title="Where these results come from"
        />
        <div className="mt-10 mx-auto max-w-7xl grid md:grid-cols-2 gap-10 items-start">
          {/* progress bars */}
          <div className="rounded-2xl border border-border/50 bg-background/30 backdrop-blur-sm p-6 md:p-8 space-y-5">
            {industries.map((ind) => (
              <div key={ind.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">{ind.name}</span>
                  <span className="text-primary-glow font-semibold">
                    {ind.pct}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-secondary/50 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    style={{ width: `${ind.pct}%` }}
                  />
                </div>
              </div>
            ))}
            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
              <BarChart3 className="h-3.5 w-3.5 text-primary-glow" />
              Distribution of managed accounts
            </div>
          </div>

          {/* summary callout */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-border/50 bg-background/30 backdrop-blur-sm p-6">
              <h3 className="font-semibold text-lg mb-2">
                Why industry mix matters
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Different industries have different average CPCs, conversion
                cycles, and ROAS benchmarks. Working across all these verticals
                means I bring cross-industry signals and tested playbooks to
                every account.
              </p>
            </div>

            <div className="rounded-2xl border border-border/50 bg-background/30 backdrop-blur-sm p-6">
              <h3 className="font-semibold text-lg mb-2">
                eCommerce is the largest vertical
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                38% of accounts are DTC or marketplace eCommerce — Shopping,
                PMax, and dynamic remarketing drive the bulk of revenue here.
                SaaS and local services follow with strong CPL-focused results.
              </p>
            </div>

            <Link
              to="/case-studies"
              className="flex items-center justify-between rounded-2xl border border-primary/30 bg-primary/5 px-6 py-4 group transition-colors hover:bg-primary/10"
            >
              <div>
                <div className="font-semibold text-sm">See detailed case studies</div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  Real before/after breakdowns per client
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-primary-glow group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}