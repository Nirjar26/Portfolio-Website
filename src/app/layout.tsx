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
  keywords: [
    "Nirjar Goswami",
    "Cloud Engineer",
    "Software Developer",
    "Associate Cloud Engineer",
    "Security Engineering",
    "Portfolio",
    "Ahmedabad",
    "AegisMesh",
    "DeployLens",
    "VaultLock",
    "CI/CD",
    "IAM",
    "RBAC",
    "Git Workflow",
    "GitHub",
    "Cloud Infrastructure",
    "API Security",
    "Identity Access Management",
    "Engineering Blog"
  ],
  authors: [{ name: "Nirjar Goswami" }],
  creator: "Nirjar Goswami",
  publisher: "Nirjar Goswami",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nirjar.me"), // Replace with actual domain if different
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nirjar Goswami | Associate Cloud Engineer",
    description: "Portfolio of Nirjar Goswami, an Associate Cloud Engineer specializing in software development, cloud architecture, and security engineering.",
    url: "https://nirjar.me",
    siteName: "Nirjar Goswami Portfolio",
    images: [
      {
        url: "/og-image.png", // User needs to provide this image or I can generate a placeholder
        width: 1200,
        height: 630,
        alt: "Nirjar Goswami Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirjar Goswami | Associate Cloud Engineer",
    description: "Portfolio of Nirjar Goswami, an Associate Cloud Engineer specializing in software development, cloud architecture, and security engineering.",
    creator: "@nirjxrgoswami",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

import Navbar from "@/components/Navbar";
import LenisProvider from "@/components/LenisProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nirjar Goswami",
    url: "https://nirjar.me",
    jobTitle: "Associate Cloud Engineer",
    description: "Nirjar Goswami is an Associate Cloud Engineer based in Ahmedabad, specializing in cloud infrastructure, IAM security, and full-stack development.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "India",
    },
    workLocation: {
      "@type": "ContactPoint",
      "areaServed": "Global",
      "availableLanguage": ["English", "Hindi", "Gujarati"]
    },
    sameAs: [
      "https://github.com/Nirjar26/",
      "https://www.linkedin.com/in/nirjarbharthi-goswami-b593633a7",
      "https://x.com/nirjxrgoswami",
      "https://www.instagram.com/nirjar_goswami/",
      "https://nirjar.hashnode.dev/"
    ],
    knowsAbout: [
      "Cloud Architecture",
      "Identity and Access Management (IAM)",
      "Security Engineering",
      "CI/CD Pipelines",
      "Docker & Kubernetes",
      "API Security",
      "Vault & Password Management",
      "Git Workflow",
      "Node.js & React Development"
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${outfit.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <LenisProvider>
          <Navbar />
          {children}
          <SpeedInsights />
          <Analytics />
        </LenisProvider>
      </body>
    </html>
  );
}
