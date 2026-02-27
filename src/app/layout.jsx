import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import "../styles/global.css";

export const metadata = {
  title: "MITRAY EXIM – Vegetable Import & Export",
  description:
    "MITRAY EXIM exports fresh vegetables, fruits, spices, rice and wheat from India to Gulf countries including Dubai, UAE, Qatar, Oman, and Saudi Arabia. APEDA & FSSAI certified exporter.",
  keywords:
    "Vegetable Exporter from India, Onion Exporter India, Fresh Vegetables Export India to Dubai, Indian Vegetable Supplier UAE, Export Quality Vegetables India",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.mitrayexim.com",
    siteName: "MITRAY EXIM",
    title: "MITRAY EXIM – Vegetable Import & Export",
    description:
      "MITRAY EXIM exports fresh vegetables, fruits, spices, rice and wheat from India to Gulf countries including Dubai, UAE, Qatar, Oman, and Saudi Arabia. APEDA & FSSAI certified exporter.",
    images: [
      {
        url: "https://www.mitrayexim.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MITRAY EXIM – Vegetable Exporter from India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mitrayexim",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MITRAY EXIM",
              url: "https://www.mitrayexim.com",
              logo: "https://www.mitrayexim.com/logo.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91 XXXXXXXXXX",
                  contactType: "customer service",
                  email: "info@mitrayexim.com",
                  areaServed: ["IN", "AE", "QA", "OM", "SA"],
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Street Name, City, Gujarat",
                postalCode: "380001",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.linkedin.com/company/mitray-exim",
                "https://www.facebook.com/mitrayexim",
                "https://www.instagram.com/mitrayexim",
              ],
            }),
          }}
        />
        <div className="fixed left-0 top-0 h-10 w-full bg-brand-navy-dark text-brand-gold-light text-xs text-center flex items-center justify-center z-50 border-b border-brand-navy-light">
          <span className="flex items-center space-x-2">
            <svg className="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            <span>Exporting Fresh Vegetables from India to International Markets</span>
          </span>
        </div>
        <Header />
        <div className="flex-1 pt-10">{children}</div>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
