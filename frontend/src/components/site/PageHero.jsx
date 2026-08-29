export function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-primary/25 blur-3xl animate-orb" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full glass px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-primary-glow">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-balance">
          <span className="gradient-text">{title}</span>
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
