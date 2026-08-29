import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTASection({
  title = "Ready to Grow Your Business?",
  subtitle = "Let's audit your Google Ads account for free and uncover hidden growth opportunities.",
  primaryLabel = "Get My Free Audit Now",
  primaryTo = "/free-audit",
  secondaryLabel = "Book a Call",
  secondaryTo = "/contact",
}) {
  return (
    <section className="relative px-5 sm:px-6 lg:px-8 py-20">
      <div className="mx-auto max-w-7xl">
        
        {/* Gradient border wrapper (new) */}
        <div className="rounded-3xl p-[1px] bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40">
          
          <div className="relative overflow-hidden rounded-3xl bg-background/70 backdrop-blur-xl p-8 md:p-14 text-center">

            {/* Soft glow background */}
            <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {title}
                </span>
              </h2>

              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">

                {/* Primary Button (simple + smooth hover) */}
                <Link
                  to={primaryTo}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:translate-y-[-1px] active:translate-y-0 shadow-none"
                >
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                {/* Secondary Button */}
                <Link
                  to={secondaryTo}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-transparent px-6 py-3 font-semibold text-foreground transition-all duration-200 hover:bg-secondary hover:translate-y-[-1px] active:translate-y-0 shadow-none"
                >
                  {secondaryLabel}
                </Link>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}