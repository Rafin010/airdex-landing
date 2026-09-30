"use client";

import { Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-16 pb-8 border-t border-gray-900 text-center md:text-left overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="col-span-1 md:col-span-2"
        >
          <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
            <Shield className="w-6 h-6 text-[#1DBF73]" />
            <span className="text-xl font-bold text-white tracking-tight">
              Air<span className="text-[#1DBF73]">DEX</span>
            </span>
          </div>
          <p className="text-gray-400 max-w-sm mx-auto md:mx-0">
            Secure, peer-to-peer file transfer designed for absolute privacy and maximum speed.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#features" className="hover:text-[#1DBF73] transition-colors">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-[#1DBF73] transition-colors">How it Works</a></li>
            <li><a href="#download" className="hover:text-[#1DBF73] transition-colors">Download</a></li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-[#1DBF73] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#1DBF73] transition-colors">Terms of Service</a></li>
          </ul>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-600 border-t border-gray-900 pt-8"
      >
        &copy; {new Date().getFullYear()} AirDEX. All rights reserved.
      </motion.div>
    </footer>
  );
}
