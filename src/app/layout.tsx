import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-tech" });

export const metadata: Metadata = {
  title: "AirDEX - Next-Gen Secure Remote Desktop & Support",
  description: "AirDEX is a blazing-fast, secure remote desktop application. Featuring WebRTC peer-to-peer networking, Curve25519 E2E encryption, and DXGI hardware acceleration for absolute privacy and zero latency.",
  keywords: ["remote desktop", "secure remote access", "p2p remote control", "webrtc remote desktop", "e2e encrypted remote support", "anydesk alternative", "teamviewer alternative"],
  openGraph: {
    title: "AirDEX - Secure Remote Desktop",
    description: "Control any PC anywhere. 100% Privacy Guard with Military-Grade Encryption.",
    url: "https://airdex.x010.tech",
    siteName: "AirDEX",
    images: [
      {
        url: "https://airdex.x010.tech/desktop-mockup.png",
        width: 1200,
        height: 630,
        alt: "AirDEX - Next-Gen Secure Remote Desktop Interface",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "AirDEX - Secure Remote Desktop",
    description: "Zero latency, military-grade encrypted remote desktop software.",
    images: ["https://airdex.x010.tech/desktop-mockup.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AirDEX",
  "operatingSystem": "Windows 10, Windows 11",
  "applicationCategory": "UtilitiesApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A cross-platform remote desktop and remote support application built with C++, Qt 6, and Go. Features E2E encryption, WebRTC low-latency streaming, and DXGI hardware acceleration.",
  "softwareVersion": "1.0.0",
  "author": {
    "@type": "Organization",
    "name": "x010.tech",
    "url": "https://x010.tech"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#050505] text-white min-h-screen flex flex-col`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
