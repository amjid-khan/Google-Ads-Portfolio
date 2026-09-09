import { Link, createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

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
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-background/80 p-8 text-center shadow-[0_20px_80px_rgba(168,85,247,0.12)] backdrop-blur-sm md:p-14">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20">
          <CheckCircle2 className="h-10 w-10" />
        </div>

        <Sparkles className="mx-auto mt-6 h-6 w-6 text-primary-glow" />

        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
          Thank You!
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
          {isContact
            ? "Your message has been received successfully. I’ll get back to you as soon as possible."
            : "Your request has been received successfully. I’ll review it and follow up soon."}
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
      </div>
    </section>
  );
}
