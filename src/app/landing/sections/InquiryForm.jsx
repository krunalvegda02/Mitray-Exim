"use client";

import { Button } from "@/components/shared/Button";

export function InquiryForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry submitted. We will contact you shortly.");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-navy mb-8">
        Get Your Quotation
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border-2 border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none"
          />
          <input
            type="text"
            placeholder="Company"
            className="w-full border-2 border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full border-2 border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none"
          />
          <input
            type="text"
            placeholder="Phone (with country code)"
            required
            className="w-full border-2 border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none"
          />
        </div>
        <textarea
          rows={4}
          placeholder="Products & quantities you need"
          className="w-full border-2 border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none"
        ></textarea>
        <div className="text-center">
          <Button type="submit" className="px-10 py-4">
            Request Quotation
          </Button>
        </div>
      </form>
    </div>
  );
}
