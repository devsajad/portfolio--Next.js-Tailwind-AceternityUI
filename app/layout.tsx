import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/app/_components/ui/FloatingNav";
import { navItems } from "@/app/_data/compsData";
import { Footer } from "@/app/_components/Footer";
import { StarsBackground } from "@/app/_components/ui/StarsBackground";
import { ShootingStars } from "@/app/_components/ui/ShootingStars";

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
    <html>
      <body
        className={`${inter.variable} antialiased relative bg-black-100`}
        style={{ fontFamily: "var(--font-inter-sans)" }}
      >
        <StarsBackground
          starDensity={0.00015}
          minTwinkleSpeed={0.2}
          className="z-10"
        />
        <ShootingStars className="z-10" />
        <nav>
          <FloatingNav navItems={navItems} />
        </nav>
        {children}

        <Footer />
      </body>
    </html>
  );
}
