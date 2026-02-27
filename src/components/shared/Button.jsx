export function Button({ children, variant = "primary", className = "", ...props }) {
  const base = "rounded-xl font-medium shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500",
    secondary:
      "bg-white text-brand-navy-dark hover:bg-gray-50 focus:ring-blue-500 border border-blue-900",
    outline:
      "bg-transparent border border-blue-900 text-brand-navy-dark hover:bg-brand-gold/10 focus:ring-blue-500",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
