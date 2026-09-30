"use client";

import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Security() {
  return (
    <section id="security" className="py-24 bg-[#050505] border-y border-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-gray-900/30 rounded-3xl p-8 md:p-12 border border-gray-800">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Anti-Brute-Force</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Absolute Protection Against <span className="text-[#1DBF73]">Intrusions.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              AirDEX is built with advanced rate-limiting and connection-dropping mechanisms. Any unauthorized attempt to guess transfer keys or intercept connections is instantly identified and blacklisted.
            </p>
            <ul className="space-y-4">
              {["Automatic IP Blocking", "Key Expiration Mechanisms", "Zero-Knowledge Architecture"].map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <div className="w-2 h-2 rounded-full bg-[#1DBF73]" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full h-[400px] bg-gray-950 rounded-2xl border border-gray-800 flex items-center justify-center relative overflow-hidden group"
          >
             {/* Simple visualization of a shield or code */}
             <div className="absolute inset-0 opacity-10 mix-blend-overlay">
               <Image src="https://www.transparenttextures.com/patterns/cubes.png" alt="Cubes Pattern" fill className="object-cover" />
             </div>
             <ShieldCheck className="w-48 h-48 text-[#1DBF73]/20 group-hover:text-[#1DBF73]/40 transition-colors" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center font-mono text-sm text-[#1DBF73]/80 opacity-0 group-hover:opacity-100 transition-opacity">
               [BLOCKED] UNAUTHORIZED ACCESS DETECTED
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
