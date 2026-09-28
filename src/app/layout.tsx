import type { Metadata } from "next";
import { Archivo, Barlow } from "next/font/google";
import "./globals.css";
import { SITE } from "@/config/site";
import EmergencyBar from "@/components/EmergencyBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallBar from "@/components/CallBar";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// On Vercel the production URL is provided automatically; set SITE_URL for any other host.
const siteUrl =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${SITE.name} | Licensed, fixed-price, 24/7`,
  description: SITE.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${barlow.variable} antialiased`}>
        <EmergencyBar />
        <Header />
        {children}
        <Footer />
        <CallBar />
      </body>
    </html>
  );
}
