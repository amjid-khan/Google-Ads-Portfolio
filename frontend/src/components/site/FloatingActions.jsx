import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full glass-strong text-foreground hover:text-primary-glow ring-glow"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      <a
        href="https://wa.me/923000000000"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg ring-glow"
        style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
