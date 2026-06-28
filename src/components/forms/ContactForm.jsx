"use client";

import { Button } from "@/components/shared/Button";

import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
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
          from_name: formData.get('name'),
          from_email: formData.get('email'),
          phone: formData.get('phone'),
          company: formData.get('company'),
          message: formData.get('message'),
          to_email: 'info@mitrayexim.com'
        },
        'J8zYYgRTPwF7rion2'
      );

      alert("Message sent successfully!");
      e.target.reset();
    } catch (error) {
      console.error('Email send failed:', error);
      alert("Failed to send message. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
            Company
          </label>
          <input
            type="text"
            name="company"
            className="w-full border border-gray-300 rounded-lg px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            required
            className="w-full border border-gray-300 rounded-lg px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          required
          className="w-full border border-gray-300 rounded-lg px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
        ></textarea>
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-8 py-3 text-sm sm:text-base disabled:opacity-50">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
