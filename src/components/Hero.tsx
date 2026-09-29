"use client";

import dynamic from "next/dynamic";
import { Download, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const ThreeScene = dynamic(() => import("./ThreeScene"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 flex items-center overflow-hidden bg-[#050505]">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#1DBF73]/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#1DBF73]/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900/50 border border-gray-800 text-[#1DBF73] text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Next-Gen Secure File Transfer</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            Share Without <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DBF73] to-emerald-300">
              Compromise.
            </span>
          </h1>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
            AirDEX provides absolute privacy for your most sensitive files. Powered by end-to-end encryption and WebRTC low-latency networking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#download" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1DBF73] hover:bg-[#159a5b] text-white rounded-full font-semibold text-lg transition-all shadow-[0_0_20px_rgba(29,191,115,0.4)] hover:shadow-[0_0_30px_rgba(29,191,115,0.6)] hover:-translate-y-1">
              <Download className="w-5 h-5" />
              Download for Windows (.exe)
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4 ml-4">Version 1.0.0 | Windows 10/11 (64-bit)</p>
        </motion.div>

        <div className="h-[500px] lg:h-[700px] relative w-full">
          <ThreeScene />
        </div>
      </div>
    </section>
  );
}
