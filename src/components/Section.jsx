export default function Section({ id, eyebrow, title, intro, children, className = "" }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 ${className}`}>
      <p className="font-mono text-sm text-accent">{`// ${eyebrow}`}</p>
      <h2 id={`${id}-title`} className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 max-w-2xl text-muted">{intro}</p>}
      <div className="mt-12">{children}</div>
    </section>
  );
}
