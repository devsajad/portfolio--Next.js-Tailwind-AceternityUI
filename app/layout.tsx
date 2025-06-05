import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/compsData";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
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
    <html lang="en" data-theme="dark">
      <body className={`${inter.variable} antialiased`}>
        <nav>
          <FloatingNav navItems={navItems} />
        </nav>
        {children}
      </body>
    </html>
  );
}
