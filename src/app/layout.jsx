import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import "../styles/global.css";

export const metadata = {
  title: "MITRAY EXIM – Premium Vegetable & Fruit Exporter from India",
  description:
    "MITRAY EXIM is a leading merchant exporter of fresh vegetables, fruits, spices, and grains from India. APEDA & FSSAI certified partner for global markets including UAE, Qatar, and Saudi Arabia.",
  keywords:
    "Vegetable Exporter India, Fresh Fruits Export, Indian Spices Supplier, Agricultural Export India, Mitray Exim, Dubai Vegetable Import",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.mitrayexim.com",
    siteName: "MITRAY EXIM",
    title: "MITRAY EXIM – Trusted Agricultural Export Partner",
    description:
      "Exporting nature's finest produce from Indian farms to global doorsteps. Quality assured, certified, and reliable.",
    images: [
      {
        url: "https://www.mitrayexim.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MITRAY EXIM – Exporting Freshness",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col bg-white antialiased text-slate-900 font-inter">
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
        <div className="fixed left-0 top-0 h-10 w-full bg-brand-navy-dark text-brand-gold-light text-xs text-center flex items-center justify-center z-50 border-b border-brand-navy-light/30 backdrop-blur-sm">
          <span className="flex items-center space-x-2 tracking-wide font-medium">
            <svg className="w-3 h-3 text-brand-gold animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            <span className="uppercase">Premium Agricultural Export Solutions from India</span>
          </span>
        </div>
        <Header />
        <main id="main-content" className="flex-1 pt-10">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}

