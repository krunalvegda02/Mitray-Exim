"use client";

import { Button } from "@/components/shared/Button";

export function NewsletterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <div className="bg-brand-navy text-white p-8 rounded-lg">
      <h3 className="text-xl font-semibold mb-3">Subscribe to Our Newsletter</h3>
      <p className="text-slate-300 mb-6">
        Get updates on export regulations, product availability, and industry insights.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="email"
          placeholder="Your email address"
          required
          className="flex-1 px-4 py-3 rounded-lg bg-brand-navy-light border-2 border-slate-700 text-white placeholder-slate-400 focus:border-amber-500 outline-none"
        />
        <Button type="submit" className="px-6 py-3">
          Subscribe
        </Button>
      </form>
    </div>
  );
}
