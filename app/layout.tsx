import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Providers } from "@/components/Providers";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script"; 

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Riyasudeen Farook | IT Operations Manager | Vision 2030 Compliance | Riyadh | Saudi Arabia",
  description: "Strategic IT Operations Manager based in Riyadh. Specializing in Nutanix HCI, Microsoft 365, Virtualization and NCA/NDMO cybersecurity compliance for Saudi enterprises.",
  keywords: ["IT Operations Manager Riyadh", "Nutanix HCI", "Saudi Vision 2030", "NCA compliance", "Intune MDM", "CrowdStrike", "Palo Alto", "n8n automation", "VMWare Infrastructure", "Veeam Backup & Disaster Recovery"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Riyasudeen Farook",
    "jobTitle": "IT Operations Manager",
    "url": "https://riyasudeen.me",
    "sameAs": [
      "https://linkedin.com/in/riyasudeen-p-m/", 
      "https://github.com/riyas22"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Ajlan & Bros Holding Group"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Riyadh",
      "addressCountry": "Saudi Arabia"
    },
    "knowsAbout": ["Nutanix HCI", "NCA/NDMO Compliance", "Microsoft Intune", "Zero-Trust Security", "n8n Automation"]
  };

  return (
    <html lang="en" className={`${inter.className} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body className="min-h-screen relative antialiased selection:bg-accent selection:text-primary bg-primary text-textMain">
        
        {/* Inject JSON-LD Schema */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />

        <Providers>
          <div className="fixed inset-0 pointer-events-none z-0 bg-grid"></div>
          <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none z-0"></div>
          <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none z-0"></div>
          
          <div className="relative z-10 flex flex-col min-h-screen">
            <header>
              <Navbar />
            </header>
            
            <main className="flex-grow">
              {children}
            </main>

            <Footer />
          </div>

          {/* Vercel Insights */}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}