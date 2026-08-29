import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";

// Replace with real images when ready:
// import bloomImg from "@/assets/bloom-results.png";
// import fitfuelImg from "@/assets/fitfuel-results.png";
// import quickfixImg from "@/assets/quickfix-results.png";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | Real Google Ads Results — Amjid Kurmywal" },
      {
        name: "description",
        content:
          "Real campaign case studies: ROAS, CTR, CPA and revenue results across eCommerce, SaaS and local businesses.",
      },
      { property: "og:title", content: "Google Ads Case Studies" },
      {
        property: "og:description",
        content: "Before vs after performance from real client campaigns.",
      },
    ],
  }),
  component: CaseStudiesPage,
});

const cases = [
  {
    industry: "eCommerce · Apparel",
    client: "Bloom Boutique",
    image: "https://i.pinimg.com/736x/0c/d5/e7/0cd5e76f3f5e6d005100e5a2602b1a66.jpg",
    problem: "Wasted spend on broad keywords, no conversion tracking, declining ROAS for 3 quarters.",
    strategy: "Account restructure, server-side conversion tracking, PMax with curated assets, audience layering.",
    execution: [
      "Rebuilt account into themed ad groups",
      "Launched PMax with 3 asset groups",
      "Added remarketing & RLSA",
    ],
    metrics: [
      { label: "ROAS", value: "5.6x" },
      { label: "CTR", value: "5.0%" },
      { label: "CPA", value: "Rs 410" },
      { label: "Revenue", value: "+312%" },
    ],
    before: { ROAS: "1.2x", Revenue: "Rs 380k", CPA: "Rs 1,240" },
    after: { ROAS: "5.6x", Revenue: "Rs 1.56M", CPA: "Rs 410" },
  },
  {
    industry: "SaaS · B2B",
    client: "FitFuel SaaS",
       image: "https://i.pinimg.com/736x/0c/d5/e7/0cd5e76f3f5e6d005100e5a2602b1a66.jpg",
    problem: "High CPL with low sales-qualified rate. Sales team complaining about lead quality.",
    strategy: "Defined SQL criteria, offline conversion import, lead form optimization, ICP-targeted Search.",
    execution: [
      "Set up Salesforce → GAds offline import",
      "Tightened keyword themes",
      "Killed broad match leakage",
    ],
    metrics: [
      { label: "CTR", value: "7.2%" },
      { label: "CPL", value: "Rs 880" },
      { label: "SQL Rate", value: "31%" },
      { label: "CPL Drop", value: "-62%" },
    ],
    before: { CPL: "Rs 2,310", "SQL Rate": "8%", "MQL/mo": "42" },
    after: { CPL: "Rs 880", "SQL Rate": "31%", "MQL/mo": "138" },
  },
  {
    industry: "Local · Home Services",
    client: "QuickFix Plumbing",
       image: "https://i.pinimg.com/736x/0c/d5/e7/0cd5e76f3f5e6d005100e5a2602b1a66.jpg",
    problem: "Low call volume despite high spend. Untracked phone calls and bad geo targeting.",
    strategy: "Call tracking, hyperlocal radius bidding, ad copy aligned to emergency intent.",
    execution: [
      "Implemented call extensions + tracking",
      "Tightened to 12-mile radius",
      "Launched call-only ads",
    ],
    metrics: [
      { label: "ROAS", value: "4.2x" },
      { label: "CTR", value: "9.1%" },
      { label: "CPA", value: "Rs 320" },
      { label: "Revenue", value: "+220%" },
    ],
    before: { Calls: "48/mo", "Cost per Call": "Rs 980", Revenue: "Rs 420k" },
    after: { Calls: "186/mo", "Cost per Call": "Rs 320", Revenue: "Rs 1.34M" },
  },
];

function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Real campaigns. Real numbers."
        subtitle="A look at how I diagnose, rebuild, and scale Google Ads accounts — across industries."
      />

      <section className="px-5 sm:px-6 lg:px-8 pb-20">
        <div className="mx-auto max-w-7xl grid gap-8">
          {cases.map((c, idx) => (
            <article
              key={c.client}
              className="rounded-2xl border border-border/50 bg-background/30 backdrop-blur-sm overflow-hidden"
            >
              {/* ── HEADER ── */}
              <div className="px-6 md:px-8 pt-6 pb-5 border-b border-border/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="h-3.5 w-px bg-border/60" />
                  <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 text-primary-glow px-2.5 py-0.5 text-xs font-medium">
                    {c.industry}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold">{c.client}</h2>
                </div>

                {/* metric pills */}
                <div className="flex flex-wrap gap-2">
                  {c.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-lg border border-border/50 bg-background/50 px-3 py-1.5 text-center"
                    >
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        {m.label}
                      </div>
                      <div className="text-sm font-bold gradient-text">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── BODY: Image left + Content right ── */}
              <div className="grid md:grid-cols-5 gap-0">

                {/* Image — left col */}
                <div className="md:col-span-2 relative border-b md:border-b-0 md:border-r border-border/40">
                  <img
                    src={c.image}
                    alt={`${c.client} Google Ads results`}
                    className="w-full h-48 md:h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center rounded-full bg-background/70 border border-border/50 backdrop-blur-sm px-2.5 py-1 text-[10px] text-muted-foreground">
                      Campaign Screenshot
                    </span>
                  </div>
                </div>

                {/* Content — right col */}
                <div className="md:col-span-3 p-6 md:p-8 grid gap-5">

                  {/* Problem + Strategy */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-primary-glow font-semibold mb-1.5">
                        Problem
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{c.problem}</p>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-primary-glow font-semibold mb-1.5">
                        Strategy
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{c.strategy}</p>
                    </div>
                  </div>

                  {/* Execution + Before/After side by side */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Execution */}
                    <div className="rounded-xl border border-border/40 bg-background/40 p-4">
                      <div className="text-xs uppercase tracking-wider text-primary-glow font-semibold mb-2">
                        Execution
                      </div>
                      <ul className="space-y-2">
                        {c.execution.map((e) => (
                          <li key={e} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary-glow mt-0.5 shrink-0" />
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Before vs After */}
                    <div className="rounded-xl border border-border/40 bg-background/40 p-4">
                      <div className="text-xs uppercase tracking-wider text-primary-glow font-semibold flex items-center gap-1.5 mb-2">
                        <TrendingUp className="h-3.5 w-3.5" /> Before vs After
                      </div>
                      <div className="space-y-2">
                        {Object.keys(c.before).map((k) => (
                          <div key={k} className="flex items-center gap-2 text-sm">
                            <span className="text-muted-foreground w-20 shrink-0 text-xs">{k}</span>
                            <span className="text-muted-foreground line-through text-xs">{c.before[k]}</span>
                            <ArrowRight className="h-3 w-3 text-primary-glow shrink-0" />
                            <span className="font-semibold gradient-text text-xs">{c.after[k]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── FOOTER ── */}
              <div className="px-6 md:px-8 py-4 border-t border-border/40 flex items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">Ready to get similar results?</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  Let's Talk <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}