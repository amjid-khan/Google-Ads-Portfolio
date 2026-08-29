import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, ShieldCheck, Clock, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { submitAudit } from "@/lib/api";

export const Route = createFileRoute("/free-audit")({
  head: () => ({
    meta: [
      { title: "Free Google Ads Audit | Amjid Kurmywal" },
      { name: "description", content: "Get a free Google Ads audit: account structure analysis, wasted spend report, quick wins, competitor insight, and growth strategy." },
      { property: "og:title", content: "Free Google Ads Audit" },
      { property: "og:description", content: "Find hidden issues, wasted spend & growth opportunities — for free." },
    ],
  }),
  component: AuditPage,
});

const benefits = [
  "Account structure analysis",
  "Wasted spend report",
  "Quick-win recommendations",
  "Competitor insight",
  "Custom growth strategy",
];

function AuditPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <>
      <PageHero
        eyebrow="Free Audit"
        title="Get Your Free Google Ads Audit"
        subtitle="Find hidden issues, wasted spend & growth opportunities — completely free."
      />

      <section className="px-5 sm:px-6 lg:px-8 pb-10">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl glass p-8 md:p-10">
            <h2 className="text-2xl font-bold">What you'll get</h2>
            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary-glow mt-0.5 shrink-0" />
                  <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl glass-strong p-5 flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary-glow mt-0.5 shrink-0" />
              <div>
                <div className="font-semibold">Only 5 free audits available this month</div>
                <p className="text-sm text-muted-foreground mt-1">
                  Audits take 2–3 hours to deliver properly — that's why I limit them.
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary-glow" /> No spam. No commitment. 100% free.
            </div>
          </div>

          <div className="rounded-3xl glass-strong p-8 md:p-10 glow-soft">
            {submitted ? (
              <div className="text-center py-12">
                <Sparkles className="h-10 w-10 mx-auto text-primary-glow" />
                <h3 className="mt-4 text-2xl font-bold gradient-text">Request received!</h3>
                <p className="mt-3 text-muted-foreground">
                  I'll review your account and email your audit within 48 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setError("");
                  setLoading(true);
                  try {
                    const fd = new FormData(e.currentTarget);
                    await submitAudit({
                      name: String(fd.get("name") ?? ""),
                      email: String(fd.get("email") ?? ""),
                      phone: String(fd.get("phone") ?? ""),
                      website: String(fd.get("website") ?? ""),
                      budget: String(fd.get("budget") ?? ""),
                      source: "audit-page",
                    });
                    setSubmitted(true);
                    e.currentTarget.reset();
                  } catch (err) {
                    setError("Something went wrong. Please try again in a minute.");
                  } finally {
                    setLoading(false);
                  }
                }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold">Claim your audit</h2>
                <FormField label="Full Name" name="name" required />
                <FormField label="Email" name="email" type="email" required />
                <FormField label="Phone / WhatsApp" name="phone" type="tel" required />
                <FormField label="Website URL" name="website" type="url" placeholder="https://" required />
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">Monthly Ad Budget</label>
                  <select
                    name="budget"
                    required
                    className="mt-1.5 w-full rounded-xl bg-input/40 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select range</option>
                    <option>{"< $500"}</option>
                    <option>$500 – $2,000</option>
                    <option>$2,000 – $10,000</option>
                    <option>$10,000+</option>
                  </select>
                </div>
                {error ? (
                  <div className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-foreground">
                    {error}
                  </div>
                ) : null}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 font-semibold text-primary-foreground glow-primary hover:scale-[1.01] transition-transform"
                >
                  {loading ? "Sending..." : "Get My Free Audit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required,
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 w-full rounded-xl bg-input/40 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
