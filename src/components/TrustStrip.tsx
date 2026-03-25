"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "750+",
    label: "Successful Loan Applications",
    icon: "description",
    description: "Expertly processed directly by our team"
  },
  {
    value: "17+",
    label: "Years of Experience",
    icon: "history",
    description: "Since 2008 in the financial sector"
  },
  {
    value: "100%",
    label: "Dedicated Personal Support",
    icon: "support_agent",
    description: "Every file handled personally by K.S. Savitha"
  }
];

export default function TrustStrip() {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-secondary mb-4">
            Established Credibility
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 font-headline">
            Trusted by Customers in Tiruppur
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            K.B. Associates has successfully filed over <strong>750 loan applications</strong> in the past 17 years, all handled personally by K.S. Savitha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100/50 flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                <span className="material-symbols-outlined text-3xl">
                  {stat.icon}
                </span>
              </div>
              
              <h4 className="text-5xl font-extrabold text-primary mb-2 group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </h4>
              <p className="font-bold text-slate-800 text-lg mb-3">
                {stat.label}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
