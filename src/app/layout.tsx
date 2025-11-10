import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VerticalCallButton from "@/components/VerticalCallButton";
import DiscountBanner from "@/components/DiscountBanner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pest Free Victoria - Professional Pest Control Services",
  description: "Your trusted partner for professional pest control services across Victoria. Residential and commercial pest management solutions.",
  keywords: "pest control, Victoria, pest management, residential pest control, commercial pest control",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Google Ads conversion tag ID - can be overridden with NEXT_PUBLIC_GOOGLE_TAG_ID env variable
  const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleTagId}');
          `}
        </Script>
        {/* Google Tag (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${googleTagId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <DiscountBanner />
        <Navbar />
        <div className="">
          {children}
        </div>
        <Footer />
        <WhatsAppButton />
        <VerticalCallButton />
      </body>
    </html>
  );
}
