"use client";

import { Download, Lock } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const ThreeScene = dynamic(() => import("@/components/ThreeScene"), { ssr: false });

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects for the image
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center overflow-hidden bg-[#050505]" ref={containerRef}>
      {/* Three.js animated background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <ThreeScene />
      </div>
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#050505]/30 via-transparent to-[#050505]" />

      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center relative z-10 w-full mb-20">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/80 border border-gray-800 text-[#1DBF73] text-sm font-medium mb-8"
        >
          <Lock className="w-4 h-4" />
          <span>Enterprise-Grade Remote Desktop</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ fontFamily: 'var(--font-tech), system-ui, sans-serif' }}
          className="uppercase tracking-tight text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 max-w-4xl mx-auto text-center"
        >
          Secure Access. <br className="hidden md:block" />
          <span className="text-[#1DBF73]">
            Absolute Control.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl"
        >
          AirDEX provides a highly secure, low-latency remote desktop experience for professionals. Built with zero-trust architecture and end-to-end encryption.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <a href="#download" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1DBF73] hover:bg-[#19a563] text-white rounded-full font-semibold text-lg transition-all shadow-lg hover:-translate-y-1">
            <Download className="w-5 h-5" />
            Download for Windows (.exe)
          </a>
          <p className="text-sm text-gray-500 mt-2">Version 1.0.0 | Windows 10/11 (64-bit)</p>
        </motion.div>
      </div>

      {/* Software UI Mockup Section */}
      <motion.div 
        style={{ y, scale, opacity }}
        className="w-full max-w-5xl mx-auto px-6 relative z-20 flex justify-center"
      >
        <div className="relative w-full aspect-[4/3] drop-shadow-2xl">
          <Image 
            src="/desktop-mockup.png" 
            alt="AirDEX Secure Remote Desktop Interface" 
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
