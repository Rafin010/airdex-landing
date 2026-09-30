import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-tech" });

export const metadata: Metadata = {
  title: "AirDEX - Next-Gen Secure File Transfer",
  description: "Share files securely with absolute privacy. WebRTC low-latency networking with military-grade E2E encryption.",
  keywords: ["secure file transfer", "p2p file sharing", "e2e encryption", "webrtc file transfer", "privacy focused file share"],
  openGraph: {
    title: "AirDEX - Next-Gen Secure File Transfer",
    description: "Share without compromise. 100% Privacy Guard.",
    url: "https://airdex.com",
    siteName: "AirDEX",
    images: [
      {
        url: "https://airdex.com/og-image.png", // Placeholder
        width: 1200,
        height: 630,
        alt: "AirDEX - Next-Gen Secure File Transfer",
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
    title: "AirDEX - Next-Gen Secure File Transfer",
    description: "Share without compromise. 100% Privacy Guard.",
    images: ["https://airdex.com/twitter-image.png"], // Placeholder
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#050505] text-white min-h-screen flex flex-col`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
