export function Badge({ children, variant = "default" }) {
  const variants = {
    default: "bg-slate-100 text-slate-700 border-slate-300",
    primary: "bg-brand-gold/10 text-brand-navy-dark border-amber-200",
    success: "bg-green-50 text-green-900 border-green-200",
    warning: "bg-orange-50 text-orange-900 border-orange-200",
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold rounded border-2 ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
