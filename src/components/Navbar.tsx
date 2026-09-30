"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-none"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/logo.svg" alt="Official Logo" width={32} height={32} className="group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold text-white tracking-tight">
            Air<span className="text-[#1DBF73]">DEX</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#how-it-works" className="hover:text-white transition-colors">How it Works</Link>
          <Link href="#security" className="hover:text-white transition-colors">Security</Link>
        </div>
        <Link href="#download" className="px-6 py-2.5 bg-[#1DBF73] hover:bg-[#19a563] text-white rounded-full font-medium transition-all shadow-md hover:shadow-lg">
          Download
        </Link>
      </div>
    </motion.nav>
  );
}
