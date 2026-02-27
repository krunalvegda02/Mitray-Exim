"use client";

export function InquiryForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry submitted. We will get back to you.");
  };

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-blue-50 rounded-3xl"></div>
      <div className="relative bg-white rounded-3xl border-2 border-slate-200 p-8 md:p-12 shadow-xl">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-2 bg-brand-gold/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-brand-navy-dark">Get Started</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Request a Quotation
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Fill out the form below and our export team will contact you within 24 hours
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all"
                placeholder="Your Company"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Phone Number *
              </label>
              <input
                type="text"
                required
                className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all"
                placeholder="+91 XXXXXXXXXX"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Product Requirements *
            </label>
            <textarea
              rows={4}
              required
              className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all"
              placeholder="Please specify products and quantities you need..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-navy rounded-lg font-semibold hover:from-zinc-800 hover:to-zinc-900 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <span>Submit Inquiry</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
