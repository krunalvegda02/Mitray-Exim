export function StatsSection() {
  const stats = [
    { value: "10+", label: "Countries" },
    { value: "500+", label: "Shipments" },
    { value: "50+", label: "Products" },
    { value: "100%", label: "Compliance" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="text-center p-6 bg-white rounded-lg border-2 border-slate-200"
        >
          <div className="text-3xl font-bold text-brand-navy-dark mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-slate-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
