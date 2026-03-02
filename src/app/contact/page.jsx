"use client";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitStatus("success");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    setIsSubmitting(false);
    
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageHero 
        badge="GET IN TOUCH"
        title="Contact Us"
        description="Let's discuss your export requirements and build a successful partnership"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' }
        ]}
      />

      <div className="bg-gradient-to-b from-white via-slate-50 to-white py-12 sm:py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10">
            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/30 via-brand-navy/30 to-brand-gold/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-700"></div>
                
                <div className="relative bg-gradient-to-br from-white via-slate-50/30 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-slate-200 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-brand-gold/20 to-brand-gold/10 rounded-xl flex items-center justify-center shadow-lg border-2 border-brand-gold/30">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">Send us a Message</h2>
                  </div>
                  
                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl flex items-center gap-3 animate-fade-in">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-green-800 font-medium">Thank you! We'll contact you soon.</p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="group/input">
                        <label className="block text-sm font-bold text-brand-navy mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 outline-none transition-all bg-white hover:border-slate-300"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="group/input">
                        <label className="block text-sm font-bold text-brand-navy mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 outline-none transition-all bg-white hover:border-slate-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="group/input">
                        <label className="block text-sm font-bold text-brand-navy mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 outline-none transition-all bg-white hover:border-slate-300"
                          placeholder="+1 234 567 8900"
                        />
                      </div>

                      <div className="group/input">
                        <label className="block text-sm font-bold text-brand-navy mb-2">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 outline-none transition-all bg-white hover:border-slate-300"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="group/input">
                      <label className="block text-sm font-bold text-brand-navy mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 outline-none transition-all resize-none bg-white hover:border-slate-300"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group/btn relative w-full px-6 py-4 text-base font-bold bg-gradient-to-r from-brand-gold to-brand-gold-light text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-brand-navy-dark opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Info - 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Details */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-navy/30 to-brand-gold/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-white via-brand-navy/5 to-white rounded-2xl p-6 sm:p-8 border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-all">
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-6">Contact Information</h3>
                  
                  <div className="space-y-5">
                    <a href="tel:+919876543210" className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all group/item">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-gold/20 to-brand-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform shadow-md border border-brand-gold/20">
                        <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-navy mb-1">Phone</h4>
                        <p className="text-slate-600 text-sm sm:text-base hover:text-brand-gold transition-colors">+91 98765 43210</p>
                      </div>
                    </a>

                    <a href="mailto:info@mitrayexim.com" className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all group/item">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-navy/20 to-brand-navy/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform shadow-md border border-brand-navy/20">
                        <svg className="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-navy mb-1">Email</h4>
                        <p className="text-slate-600 text-sm sm:text-base hover:text-brand-navy transition-colors">info@mitrayexim.com</p>
                      </div>
                    </a>

                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-xl hover:bg-green-50 transition-all group/item">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform shadow-md border border-green-200">
                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-navy mb-1">WhatsApp</h4>
                        <p className="text-slate-600 text-sm sm:text-base hover:text-green-600 transition-colors">+91 98765 43210</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-4 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md border border-red-200">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-navy mb-1">Address</h4>
                        <p className="text-slate-600 text-sm sm:text-base">Mumbai, Maharashtra, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-gold/30 to-brand-navy/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-white via-brand-gold/5 to-white rounded-2xl p-6 sm:p-8 border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-all">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-navy/20 to-brand-navy/10 rounded-lg flex items-center justify-center shadow-md border border-brand-navy/20">
                      <svg className="w-5 h-5 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy">Business Hours</h3>
                  </div>
                  <div className="space-y-3 text-sm sm:text-base">
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-slate-50 to-transparent rounded-lg">
                      <span className="text-slate-600 font-medium">Monday - Friday</span>
                      <span className="font-bold text-brand-navy">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-slate-50 to-transparent rounded-lg">
                      <span className="text-slate-600 font-medium">Saturday</span>
                      <span className="font-bold text-brand-navy">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-red-50 to-transparent rounded-lg border border-red-100">
                      <span className="text-slate-600 font-medium">Sunday</span>
                      <span className="font-bold text-red-600">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
