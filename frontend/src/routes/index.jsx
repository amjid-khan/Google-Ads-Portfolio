import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BadgeCheck,
  BarChart3,
  Briefcase,
  LineChart,
  MousePointerClick,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Youtube,
  Zap,
} from "lucide-react";
import React from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { Counter } from "@/components/site/Counter";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";
import { FAQ } from "@/components/site/FAQ";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Amjid Kurmywal | Google Ads Expert — Scale With High-ROI Campaigns",
      },
      {
        name: "description",
        content:
          "Freelance Google Ads specialist driving 4.8x average ROAS for eCommerce, local & SaaS brands. Get a free Google Ads audit today.",
      },
      { property: "og:title", content: "Amjid Kurmywal | Google Ads Expert" },
      {
        property: "og:description",
        content:
          "Scale your business with high-ROI Google Ads — Search, Shopping, PMax & YouTube.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Search,
    title: "Search Ads",
    desc: "High-intent traffic that converts.",
  },
  {
    icon: ShoppingBag,
    title: "Shopping Ads",
    desc: "Profitable scaling for eCommerce.",
  },
  {
    icon: Zap,
    title: "Performance Max",
    desc: "AI-driven omnichannel growth.",
  },
  {
    icon: Youtube,
    title: "YouTube Ads",
    desc: "Brand + direct response at scale.",
  },
  {
    icon: Target,
    title: "Remarketing",
    desc: "Re-engage and recover lost revenue.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    desc: "Quality leads, not vanity clicks.",
  },
];

const stats = [
  { label: "Average ROAS", value: 4.8, suffix: "x", decimals: 1 },
  { label: "More Leads", value: 300, suffix: "%" },
  { label: "Revenue Generated", value: 50, prefix: "Rs ", suffix: "M+" },
  { label: "Campaigns Managed", value: 100, suffix: "+" },
];

const testimonials = [
  {
    name: "Sara Ahmed",
    business: "Bloom Boutique",
    review:
      "Amjid turned our ad spend into a profit machine. ROAS doubled in 6 weeks. The restructuring he did on our Shopping campaigns was exactly what we needed.",
    result: "ROAS 2.1x → 5.4x",
    image:
      "https://api.dicebear.com/7.x/initials/svg?seed=Sara Ahmed&backgroundColor=7c3aed",
  },
  {
    name: "Hassan Iqbal",
    business: "FitFuel SaaS",
    review:
      "Lead quality is night and day. CPL down 62% while volume tripled. Amjid really understands how to target the right audience at the right time.",
    result: "CPL down 62%",
    image:
      "https://api.dicebear.com/7.x/initials/svg?seed=Hassan Iqbal&backgroundColor=0891b2",
  },
  {
    name: "Maria Khan",
    business: "Urban Decor",
    review:
      "Finally a marketer who reports honestly and ships results. No fluff, just clear data and consistent growth every single month.",
    result: "Revenue +320%",
    image:
      "https://api.dicebear.com/7.x/initials/svg?seed=Maria Khan&backgroundColor=be185d",
  },
  {
    name: "Usman Tariq",
    business: "TechGear PK",
    review:
      "Our Shopping campaigns were bleeding money. After Amjid restructured everything, we hit 6x ROAS within 45 days. Genuinely impressed.",
    result: "ROAS 1.4x → 6x",
    image:
      "https://api.dicebear.com/7.x/initials/svg?seed=Usman Tariq&backgroundColor=15803d",
  },
  {
    name: "Ayesha Raza",
    business: "Skin & Glow",
    review:
      "Our cost per purchase dropped by 48% while our monthly revenue scaled 2.5x. Best investment we've made in marketing so far.",
    result: "CPA down 48%",
    image:
      "https://api.dicebear.com/7.x/initials/svg?seed=Ayesha Raza&backgroundColor=b45309",
  },
  {
    name: "Bilal Chaudhry",
    business: "AutoParts Hub",
    review:
      "We were getting irrelevant clicks and zero conversions. Amjid fixed our keyword structure and now we're getting qualified buyers daily.",
    result: "Conv. Rate +220%",
    image:
      "https://api.dicebear.com/7.x/initials/svg?seed=Bilal Chaudhry&backgroundColor=7c3aed",
  },
];

const tools = [
  {
    name: "Google Ads",
    desc: "Campaign setup & bid strategy",
  },
  {
    name: "Analytics 4",
    desc: "Conversion tracking & insights",
  },
  {
    name: "Tag Manager",
    desc: "Event tagging & GTM deployment",
  },
  {
    name: "Looker Studio",
    desc: "Custom dashboards & reporting",
  },
  {
    name: "SEMrush",
    desc: "Keyword research & SEO audits",
  },
  {
    name: "Merchant Center",
    desc: "Product feed & shopping setup",
  },
];

function TestimonialSlider() {
  const [current, setCurrent] = React.useState(0);
  const total = testimonials.length;
  const visible = 3;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < visible; i++) {
      items.push(testimonials[(current + i) % total]);
    }
    return items;
  };

  return (
    <div className="mt-10 mx-auto max-w-7xl">
      <div className="grid gap-5 md:grid-cols-3">
        {getVisible().map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="rounded-2xl border border-border/60 bg-background/30 p-6 backdrop-blur-sm"
          >
            {/* Stars */}
            <div className="flex items-center gap-1 text-primary-glow">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>

            {/* Review */}
            <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
              "{t.review}"
            </p>

            {/* User info */}
            <div className="mt-5 flex items-center justify-between border-t border-border/40 pt-4">
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-9 w-9 rounded-full border border-border/50"
                />
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.business}
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-primary-glow whitespace-nowrap">
                {t.result}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Arrow controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/30 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-primary-glow" : "w-1.5 bg-border/60"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/30 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-20 md:pt-28 pb-14 md:pb-18">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          width={1920}
          height={1080}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/65 via-background/75 to-background" />
        <div className="absolute inset-0 grid-bg pointer-events-none" />

        {/* background orbs */}
        <div className="absolute top-18 -left-16 h-72 w-72 rounded-full bg-primary/35 blur-3xl animate-orb" />
        <div className="absolute -bottom-8 right-0 h-80 w-80 rounded-full bg-accent/30 blur-3xl animate-orb" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-primary-glow">
                <Sparkles className="h-3.5 w-3.5" />
                Google Ads Specialist, Pakistan
              </span>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
                Scale Your Business
                <br />
                with <span className="gradient-text">High-ROI</span>
                <br />
                <span className="gradient-text">Google Ads</span>
              </h1>

              <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg text-balance">
                I help eCommerce brands, local businesses and SaaS companies get
                more leads, sales and revenue through data-driven Google Ads
                campaigns.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-primary-foreground glow-primary hover:scale-[1.02] transition-transform"
                >
                  Book a Free Call <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/free-audit"
                  className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-semibold text-foreground hover:bg-secondary/70 transition-colors"
                >
                  Get Free Audit
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {[
                  { icon: BadgeCheck, label: "Google Ads Certified" },
                  { icon: Award, label: "5+ Years Experience" },
                  { icon: Briefcase, label: "100+ Campaigns" },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs"
                  >
                    <b.icon className="h-3.5 w-3.5 text-primary-glow" />
                    {b.label}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT DASHBOARD */}
            <div className="relative hidden lg:block">
              {/* smaller glow blobs */}
              <div className="absolute -left-4 top-8 h-40 w-40 rounded-full bg-primary/25 blur-3xl" />
              <div className="absolute right-2 top-24 h-44 w-44 rounded-full bg-accent/25 blur-3xl" />
              <div className="absolute right-10 bottom-8 h-36 w-36 rounded-full bg-primary/15 blur-3xl" />

              <div className="relative rounded-[1.5rem] border border-border/35 bg-background/25 p-4 backdrop-blur-sm shadow-[0_0_0_1px_rgba(168,85,247,0.15),0_20px_60px_-30px_rgba(168,85,247,0.6)]">
                <div className="rounded-xl glass-strong p-4">
                  {/* header */}
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Live performance
                    </p>
                    <span className="inline-flex items-center gap-1 rounded-full bg-success/20 px-2 py-0.5 text-[9px] font-semibold text-success">
                      <span className="h-1.5 w-1.5 rounded-full bg-success" />
                      Scaling
                    </span>
                  </div>

                  {/* stats */}
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="rounded-lg border border-primary/30 p-2">
                      <div className="text-[9px] text-muted-foreground">
                        Monthly spend
                      </div>
                      <div className="text-xs font-semibold">Rs 850k</div>
                    </div>

                    <div className="rounded-lg border border-accent/35 p-2">
                      <div className="text-[9px] text-muted-foreground">
                        Qualified leads
                      </div>
                      <div className="text-xs font-semibold">+312</div>
                    </div>
                  </div>

                  {/* mini stats */}
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {["5.6x", "7.4%", "Rs 410"].map((v, i) => (
                      <div
                        key={i}
                        className="rounded-lg bg-background/45 p-2 text-center"
                      >
                        <div className="text-[9px] text-muted-foreground">
                          {["ROAS", "CTR", "CPA"][i]}
                        </div>
                        <div className="text-xs font-bold gradient-text">
                          {v}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* progress */}
                  <div className="mt-3 space-y-2">
                    {[78, 62, 86, 71].map((v, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="h-2 flex-1 bg-secondary/60 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-accent"
                            style={{ width: `${v}%` }}
                          />
                        </div>
                        <span className="text-[9px]">{v}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* bottom */}
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {/* chart */}
                  <div className="rounded-xl glass p-3">
                    <p className="text-[10px] text-muted-foreground">
                      Revenue trend
                    </p>

                    <div className="mt-2 flex h-12 items-end gap-1">
                      {[28, 35, 41, 52, 67, 82].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t-sm"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* channels */}
                  <div className="rounded-xl glass p-3">
                    <p className="text-[10px] text-muted-foreground">
                      Channels
                    </p>

                    <div className="mt-2 space-y-1 text-[11px]">
                      <div>Search Ads</div>
                      <div>Shopping</div>
                      <div>YouTube</div>
                    </div>
                  </div>
                </div>

                {/* score */}
                <div className="mt-2 rounded-xl border border-primary/25 px-3 py-2 flex justify-between text-xs">
                  <span>Account health</span>
                  <span className="font-bold gradient-text">92/100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 sm:px-6 lg:px-8 py-10 relative">
        <SectionHeader
          eyebrow="What I do"
          title="Performance-driven Google Ads services"
          subtitle="From single-campaign launches to full-funnel scale — built for revenue, not vanity metrics."
        />

        <div className="mt-14 mx-auto max-w-7xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/25 via-transparent to-accent/25"
            >
              {/* inner card */}
              <div className="rounded-2xl glass p-6 h-full transition-colors duration-300 group-hover:bg-background/80">
                {/* icon */}
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-accent/25 shadow-inner transition-colors duration-300 group-hover:from-primary/40 group-hover:to-accent/40">
                  <s.icon className="h-5 w-5 text-primary-glow" />
                </div>

                {/* title */}
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {s.title}
                </h3>

                {/* description */}
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>

                {/* subtle bottom line */}
                <div className="mt-5 h-[2px] w-8 bg-gradient-to-r from-primary to-accent opacity-60 group-hover:w-12 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="px-5 sm:px-6 lg:px-8 py-10">
        <div className="mx-auto max-w-7xl rounded-3xl glass-strong p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-20 -left-10 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-5xl font-bold gradient-text">
                  <Counter
                    end={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    decimals={s.decimals ?? 0}
                  />
                </div>
                <div className="mt-2 text-xs md:text-sm uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="px-5 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          eyebrow="Featured"
          title="From 1.2x to 5.6x ROAS in 60 days"
        />
        <div className="mt-10 mx-auto max-w-7xl rounded-3xl glass p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-primary/15 text-primary-glow px-3 py-1 text-xs font-medium">
              eCommerce · Apparel
            </span>
            <h3 className="mt-4 text-2xl md:text-3xl font-bold">
              Bloom Boutique
            </h3>
            <p className="mt-3 text-muted-foreground">
              Wasted spend on broad keywords and a leaky funnel. We restructured
              the account, launched PMax with curated assets, and rebuilt
              remarketing audiences.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex gap-2">
                <TrendingUp className="h-4 w-4 text-primary-glow mt-0.5" /> 4.4x
                ROAS lift in 60 days
              </li>
              <li className="flex gap-2">
                <MousePointerClick className="h-4 w-4 text-primary-glow mt-0.5" />{" "}
                CTR up 180%
              </li>
              <li className="flex gap-2">
                <BarChart3 className="h-4 w-4 text-primary-glow mt-0.5" />{" "}
                Revenue +312%
              </li>
            </ul>
            <Link
              to="/case-studies"
              className="mt-6 inline-flex items-center gap-2 text-primary-glow font-semibold hover:gap-3 transition-all"
            >
              See full case study <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-2xl glass-strong p-6 grid grid-cols-2 gap-4">
            {[
              { l: "ROAS", b: "1.2x", a: "5.6x" },
              { l: "Revenue", b: "Rs 380k", a: "Rs 1.56M" },
              { l: "CPA", b: "Rs 1,240", a: "Rs 410" },
              { l: "CTR", b: "1.8%", a: "5.0%" },
            ].map((m) => (
              <div key={m.l} className="rounded-xl bg-background/40 p-4">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {m.l}
                </div>
                <div className="mt-1 text-sm text-muted-foreground line-through">
                  {m.b}
                </div>
                <div className="text-xl font-bold gradient-text">{m.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-5 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          eyebrow="Wall of love"
          title="Clients who scaled with me"
        />
        <TestimonialSlider />
      </section>

      {/* TRUST */}
      <section className="px-5 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
            Certified & trusted by top platforms
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {tools.map((t) => (
              <div
                key={t.name}
                className="inline-flex items-start gap-2 rounded-xl glass px-4 py-2.5 text-left"
              >
                <LineChart className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                <div>
                  <p className="text-sm font-medium leading-tight">{t.name}</p>
                  <p className="text-xs text-muted-foreground leading-tight">
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 sm:px-6 lg:px-8 py-20">
        <SectionHeader eyebrow="FAQ" title="Quick answers" />
        <div className="mt-10">
          <FAQ />
        </div>
      </section>

      <CTASection />
    </>
  );
}