export function Timeline() {
  return (
    <div className="bg-slate-50 p-8 rounded-lg border-2 border-slate-200">
      <h2 className="text-xl font-semibold mb-4 text-brand-navy">Delivery Timeline</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Typical shipment from Indian ports to international destinations:
      </p>
      <ul className="space-y-2 text-slate-700">
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Gulf Countries (UAE, Qatar, Oman, Saudi Arabia): 15-20 days</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Europe & UK: 25-30 days</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>USA: 30-35 days</span>
        </li>
      </ul>
    </div>
  );
}
