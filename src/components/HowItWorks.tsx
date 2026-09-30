"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    { num: "01", title: "Select Files", desc: "Drag and drop any file directly into the AirDEX client." },
    { num: "02", title: "Generate Key", desc: "A unique, temporary cryptographic key is instantly generated." },
    { num: "03", title: "Direct Transfer", desc: "The receiver uses the key to establish a direct, encrypted P2P tunnel." }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How It <span className="text-[#1DBF73]">Works</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Seamless file sharing in three simple steps.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[2px] bg-gradient-to-r from-transparent via-[#1DBF73]/30 to-transparent -z-10" />

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-[#050505] border-2 border-gray-800 flex items-center justify-center text-2xl font-bold text-[#1DBF73] mb-6 group-hover:border-[#1DBF73] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
