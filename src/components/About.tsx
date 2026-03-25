"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border-8 border-slate-50">
              <Image
                src="/assets/images/about/financial-advisor.jpg"
                alt="Expert Financial Consultation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
              
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-2xl shadow-xl hidden md:block ring-4 ring-white"
              >
                <p className="text-4xl font-extrabold">17+</p>
                <p className="text-sm opacity-80 uppercase tracking-wider font-bold">Years of Expertise</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">
                About K.B. ASSOCIATES
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-6 font-headline">
                Strategic Financial Guidance for Your Future
              </h3>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                K.B. ASSOCIATES is a premier loan consultancy dedicated to simplifying the financial landscape. Led by <strong>K.S. Savitha</strong>, we bridge the gap between financial institutions and individuals, providing expert advice to secure the most favorable loan terms.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4"
            >
              {[
                { title: "Direct Bank Liaison", desc: "We coordinate directly with top-tier banks for you.", icon: "handshake" },
                { title: "Transparent Metrics", desc: "No hidden charges. Clear, honest financial advice.", icon: "bar_chart" },
                { title: "Rapid Turnaround", desc: "Minimized documentation for faster approvals.", icon: "speed" },
                { title: "End-to-End Support", desc: "Assistance from application to disbursement.", icon: "support_agent" },
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeIn}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-snug">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
