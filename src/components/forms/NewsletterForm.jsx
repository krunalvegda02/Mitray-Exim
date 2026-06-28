"use client";

import { Button } from "@/components/shared/Button";

import { useState } from "react";
import emailjs from '@emailjs/browser';

export function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      await emailjs.send(
        'service_489ts7p',
        'template_99y4k67',
        {
          from_name: 'Newsletter Subscriber',
          from_email: formData.get('email'),
          message: 'New newsletter subscription request.',
          to_email: 'info@mitrayexim.com'
        },
        'J8zYYgRTPwF7rion2'
      );

      alert("Thank you for subscribing to our newsletter!");
      e.target.reset();
    } catch (error) {
      console.error('Subscription failed:', error);
      alert("Failed to subscribe. Please try again.");
    }

    setIsSubmitting(false);
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
          name="email"
          placeholder="Your email address"
          required
          className="flex-1 px-4 py-3 rounded-lg bg-brand-navy-light border-2 border-slate-700 text-white placeholder-slate-400 focus:border-amber-500 outline-none"
        />
        <Button type="submit" disabled={isSubmitting} className="px-6 py-3 disabled:opacity-50">
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
    </div>
  );
}
