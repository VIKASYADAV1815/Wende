import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingLanguageToggle from "@/components/layout/FloatingLanguageToggle";
import { LanguageProvider } from "@/components/providers/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wende Goundi Med Dx | Care • Diagnose • Heal",
  description: "Improving healthcare infrastructure and diagnostic capacity across Burkina Faso and West Africa.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <LanguageProvider>
          <Header />
          <main className="grow pt-24 md:pt-24 lg:pt-28">
            {children}
          </main>
          <Footer />
          <FloatingLanguageToggle />
        </LanguageProvider>
      </body>
    </html>
  );
}
