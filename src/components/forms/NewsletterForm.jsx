"use client";

import { Button } from "@/components/shared/Button";

import { useState } from "react";
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, DEFAULT_TO_EMAIL } from "@/lib/emailjs";

export function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          title: 'Newsletter Subscription',
          name: 'Newsletter Subscriber',
          from_name: 'Newsletter Subscriber',
          email: formData.get('email'),
          from_email: formData.get('email'),
          reply_to: formData.get('email'),
          message: 'New newsletter subscription request.',
          to_email: DEFAULT_TO_EMAIL
        },
        EMAILJS_PUBLIC_KEY
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
