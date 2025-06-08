import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/app/_components/ui/FloatingNav";
import { navItems } from "@/app/_data/compsData";
import { Footer } from "@/app/_components/Footer";
import { BodyLightsStars } from "./_components/ui/BodyLightsStars";

export const metadata: Metadata = {
  title: "Sajjad Zarepour Portfolio",
  description:
    "Discover Sajjad Zarepour’s portfolio, including personal projects, resume, skills, and frontend development work using React and Next.js.",
  keywords: [
    "Sajad zarepour",
    "Sajad zarepur",
    "Sajjad zarepur",
    "Sajjad Zarepour",
    "Frontend Developer",
    "Portfolio",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "UI Developer",
    "Frontend Engineer",
    "Resume",
    "Projects",
  ],
  authors: [{ name: "Sajjad Zarepour", url: "https://devsajjad.ir" }],
  creator: "Sajjad Zarepour",
  publisher: "Sajjad Zarepour",
  metadataBase: new URL("https://devsajjad.ir"),

  alternates: {
    canonical: "https://devsajjad.ir",
  },

  openGraph: {
    title: "Sajjad Zarepour Portfolio",
    description:
      "Explore Sajjad Zarepour's web development projects, resume, and portfolio showcasing skills in React, Next.js, and modern frontend tools.",
    url: "https://devsajjad.ir",
    siteName: "Sajjad Zarepour Portfolio",
    images: [
      {
        url: "https://devsajjad.ir/og-image.png", // Customize the OG image
        width: 1200,
        height: 630,
        alt: "Sajjad Zarepour Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "technology",
};

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="overflow-x-hidden">
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
