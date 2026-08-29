export function SectionHeader({ eyebrow, title, subtitle, align = "center" }) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-flex items-center rounded-full glass px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-primary-glow">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
