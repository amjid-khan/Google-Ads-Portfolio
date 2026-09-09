import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTASection({
  title = "Ready to Grow Your Business?",
  subtitle = "Let's talk about your goals and build a smarter Google Ads strategy for your brand.",
  primaryLabel = "Book a Strategy Call",
  primaryTo = "/contact",
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

              {/* Button */}
              <div className="mt-8 flex items-center justify-center">

                {/* Primary Button */}
                <Link
                  to={primaryTo}
                  className="group relative overflow-hidden inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors duration-500 shadow-none before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-accent before:transition-all before:duration-500 hover:before:w-full"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {primaryLabel}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
