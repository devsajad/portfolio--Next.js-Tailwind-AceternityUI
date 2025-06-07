import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/app/_components/ui/FloatingNav";
import { navItems } from "@/app/_data/compsData";
import { Footer } from "@/app/_components/Footer";
import { BodyLightsStars } from "./_components/ui/BodyLightsStars";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sajjad Zarepour Porfolio",
  description:
    "Sajjad Zarepour imformation like projects , resume and portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="overflow-x-hidden">
      <body
        className={`${inter.variable} antialiased relative bg-black-100 overflow-x-hidden`}
        style={{ fontFamily: "var(--font-inter-sans)" }}
      >
        <BodyLightsStars />

        <nav>
          <FloatingNav navItems={navItems} />
        </nav>
        {children}

        <Footer />
      </body>
    </html>
  );
}
