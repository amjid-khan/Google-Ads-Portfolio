import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much does Google Ads management cost?",
    a: "Management fees depend on your ad spend, complexity, and goals. Packages start from a custom monthly retainer — book a free call for an exact quote.",
  },
  {
    q: "How long before I see results?",
    a: "Most clients see early signals (improved CTR, lower CPC) within the first 2 weeks. Strong ROAS improvements typically show in 30–60 days as we collect data and optimize.",
  },
  {
    q: "What budget do I need to start?",
    a: "I recommend a minimum daily budget of $20–$50 for testing. eCommerce and competitive niches usually need more to gather meaningful data quickly.",
  },
  {
    q: "Is there a contract?",
    a: "No long-term lock-ins. We work month-to-month so you stay because of results, not contracts.",
  },
  {
    q: "What if my ads don't perform?",
    a: "I run a transparent diagnostic, adjust strategy, and keep testing. If campaigns aren't viable, I'll tell you honestly — no fluff.",
  },
  {
    q: "Do you offer guarantees?",
    a: "I don't guarantee specific numbers (no honest marketer can). I do guarantee a transparent, data-driven process and full ownership of your account.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="rounded-2xl glass overflow-hidden">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-medium">{f.q}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-primary-glow transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
