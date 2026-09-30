"use client";

import { Zap, Lock, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-[#1DBF73]" />,
      title: "WebRTC Low Latency",
      description: "Experience blazing fast peer-to-peer transfers with zero server intermediaries."
    },
    {
      icon: <Lock className="w-8 h-8 text-[#1DBF73]" />,
      title: "E2E Encryption",
      description: "Military-grade AES-256 encryption ensures your files remain completely unreadable to anyone else."
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-[#1DBF73]" />,
      title: "100% Privacy Guard",
      description: "No logs, no tracking, no middleman. Your data is yours and only yours."
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#050505] relative z-10 border-t border-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Core <span className="text-[#1DBF73]">Features</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Built from the ground up for maximum security and absolute privacy.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -50 : idx === 2 ? 50 : 0, y: idx === 1 ? 50 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="p-8 rounded-2xl bg-gray-900/40 border border-gray-800 hover:border-[#1DBF73]/50 transition-colors group"
            >
              <div className="w-16 h-16 rounded-xl bg-gray-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
