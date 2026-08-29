import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, Mail, MessageCircle, Send, Sparkles, Facebook, Instagram, Linkedin } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { submitContact } from "@/lib/api";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Amjid Kurmywal | Let's Grow Your Business Together" },
      { name: "description", content: "Get in touch to discuss your Google Ads goals — WhatsApp, email, or book a call." },
      { property: "og:title", content: "Contact Amjid Kurmywal" },
      { property: "og:description", content: "Reach out for a free consultation or to start your Google Ads engagement." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Grow Your Business Together"
        subtitle="Tell me about your goals — I'll respond within 24 hours."
      />

      <section className="px-5 sm:px-6 lg:px-8 pb-10">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-3xl glass-strong p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-16">
                <Sparkles className="h-10 w-10 mx-auto text-primary-glow" />
                <h3 className="mt-4 text-2xl font-bold gradient-text">Thanks for reaching out!</h3>
                <p className="mt-3 text-muted-foreground">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setError("");
                  setLoading(true);
                  try {
                    const fd = new FormData(e.currentTarget);
                    await submitContact({
                      name: String(fd.get("name") ?? ""),
                      email: String(fd.get("email") ?? ""),
                      phone: String(fd.get("phone") ?? ""),
                      businessType: String(fd.get("businessType") ?? ""),
                      budget: String(fd.get("budget") ?? ""),
                      message: String(fd.get("message") ?? ""),
                      source: "contact-page",
                    });
                    setSubmitted(true);
                    e.currentTarget.reset();
                  } catch (err) {
                    setError("Something went wrong. Please try again in a minute.");
                  } finally {
                    setLoading(false);
                  }
                }}
                className="grid sm:grid-cols-2 gap-4"
              >
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone / WhatsApp" name="phone" type="tel" required />
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">Business Type</label>
                  <select
                    name="businessType"
                    required
                    className="mt-1.5 w-full rounded-xl bg-input/40 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select</option>
                    <option>eCommerce</option>
                    <option>Local Business</option>
                    <option>SaaS</option>
                    <option>Real Estate</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">Monthly Budget</label>
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
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="mt-1.5 w-full rounded-xl bg-input/40 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell me about your goals..."
                  />
                </div>
                <div className="sm:col-span-2">
                  {error ? (
                    <div className="mb-3 rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-foreground">
                      {error}
                    </div>
                  ) : null}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 font-semibold text-primary-foreground glow-primary hover:scale-[1.01] transition-transform"
                  >
                    <Send className="h-4 w-4" /> {loading ? "Sending..." : "Let's Talk"}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <a
              href="https://wa.me/923000000000"
              className="flex items-center gap-4 rounded-2xl p-5 ring-glow"
              style={{ background: "linear-gradient(135deg, rgba(37,211,102,0.18), rgba(18,140,126,0.1))", border: "1px solid rgba(37,211,102,0.35)" }}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-white" style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}>
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <div className="font-semibold">WhatsApp</div>
                <div className="text-xs text-muted-foreground">+92 300 0000000</div>
              </div>
            </a>

            <a href="mailto:hello@amjidkurmywal.com" className="flex items-center gap-4 rounded-2xl glass p-5 ring-glow">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                <Mail className="h-5 w-5 text-primary-foreground" />
              </span>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-xs text-muted-foreground">hello@amjidkurmywal.com</div>
              </div>
            </a>

            <div className="rounded-2xl glass-strong p-5">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary-glow" />
                <div className="font-semibold">Book a call</div>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Prefer to talk? Calendly embed coming soon — or use WhatsApp / email above.
              </p>
              <div className="mt-4 aspect-video rounded-xl bg-background/40 grid-bg flex items-center justify-center">
                <Calendar className="h-10 w-10 text-primary-glow/50" />
              </div>
            </div>

            <div className="rounded-2xl glass p-5">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Follow</div>
              <div className="mt-3 flex items-center gap-3">
                <a href="#" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-lg glass-strong hover:text-primary-glow"><Linkedin className="h-4 w-4" /></a>
                <a href="#" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-lg glass-strong hover:text-primary-glow"><Instagram className="h-4 w-4" /></a>
                <a href="#" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-lg glass-strong hover:text-primary-glow"><Facebook className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl bg-input/40 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
