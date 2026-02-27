export function SectionHeading({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
