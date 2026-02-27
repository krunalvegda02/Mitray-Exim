export function Documentation() {
  const docs = [
    "Commercial Invoice",
    "Packing List",
    "Bill of Lading",
    "Certificate of Origin",
    "Phytosanitary Certificate",
    "FSSAI/APEDA Compliance Reports",
  ];

  return (
    <div className="bg-white p-8 rounded-lg border-2 border-slate-200">
      <h2 className="text-xl font-semibold mb-4 text-brand-navy">Export Documentation</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        We handle all export documentation to ensure smooth customs clearance:
      </p>
      <ul className="space-y-2">
        {docs.map((doc) => (
          <li key={doc} className="flex items-start text-slate-700">
            <span className="mr-2">•</span>
            <span>{doc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
