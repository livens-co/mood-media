import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { ToasterProvider } from "@/providers/toast-provider";
import CookiesConsent from "@/components/CookiesConsent";
import GoogleAnalytics from "./GoogleAnalytics";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Mood Media",
  description: "Mood Media",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr">
      <body className={font.className}>
        <ToasterProvider />
        <CookiesConsent />
        <GoogleAnalytics />
        <Navbar />
        <div className="mainLayout">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
