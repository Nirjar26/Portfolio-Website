import type { Metadata } from "next";
import { Inter, Outfit, Plus_Jakarta_Sans, Figtree } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
});

const display = Figtree({
  variable: "--font-display",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-headline",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-accent",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nirjar Goswami | Associate Cloud Engineer",
  description: "Portfolio of Nirjar Goswami, an Associate Cloud Engineer specializing in software development, cloud architecture, and security engineering.",
};

import Navbar from "@/components/Navbar";
import LenisProvider from "@/components/LenisProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${outfit.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LenisProvider>
          <Navbar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
