import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Using Inter font to match the new Bento Grid design
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Riyasudeen Farook | IT Operations Manager",
  description: "Senior IT Operations Manager based in Riyadh, Saudi Arabia. Specializing in Nutanix HCI, Microsoft 365, and Enterprise Security Automation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body className="min-h-screen relative antialiased selection:bg-accent selection:text-slate-900 bg-primary text-textMain">
        
        {/* CRITICAL: These 3 divs create the "Glowing Grid" background. 
           If you remove them, the site will look flat and boring.
        */}
        <div className="fixed inset-0 pointer-events-none z-0 bg-grid"></div>
        <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none z-0"></div>
        <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none z-0"></div>
        
        {/* Main Layout Structure */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <header>
            <Navbar />
          </header>
          
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer is global*/}
          <Footer />
        </div>

        {/* Vercel Analytics & Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}