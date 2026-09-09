import { Link, createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Sparkles, MessageCircle, Mail } from "lucide-react";

export const Route = createFileRoute("/thank-you")({
  validateSearch: (search) => ({
    type: (search.type ?? "contact").toString(),
  }),
  head: () => ({
    meta: [
      { title: "Thank You | Amjid Kurmywal" },
      { name: "description", content: "Your message has been received successfully. We'll get back to you soon." },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  const { type } = Route.useSearch();

  const isContact = type === "contact";

  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-border/60 bg-background/80 shadow-[0_20px_80px_rgba(168,85,247,0.12)] backdrop-blur-sm">
        <div className="relative overflow-hidden px-6 py-10 md:px-14 md:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.18),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.15),_transparent_35%)]" />
          <div className="relative text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20">
              <CheckCircle2 className="h-10 w-10" />
            </div>

            <Sparkles className="mx-auto mt-6 h-6 w-6 text-primary-glow" />

            <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Thank You!
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              {isContact
                ? "Your message has been received successfully. I’ll get back to you within 24 hours with the next steps."
                : "Your request has been received successfully. I’ll review it and follow up shortly."}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-primary-foreground glow-primary"
              >
                Back to Home <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 font-semibold text-foreground transition-colors hover:bg-secondary/60"
              >
                Send Another Message
              </Link>
            </div>

            <div className="mt-10 grid gap-3 text-left sm:grid-cols-2">
              <a
                href="https://wa.me/923119091924"
                className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/60 p-4 transition-colors hover:border-primary/30 hover:bg-secondary/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366] text-white">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Quick Contact</div>
                  <div className="font-semibold">WhatsApp</div>
                </div>
              </a>

              <a
                href="mailto:amjidkurmywal170@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/60 p-4 transition-colors hover:border-primary/30 hover:bg-secondary/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email Me</div>
                  <div className="font-semibold">amjidkurmywal170@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
