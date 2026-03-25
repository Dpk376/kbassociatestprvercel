"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="why-choose-us" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-24 items-center relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 order-2 md:order-1"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-sm font-bold uppercase tracking-widest text-secondary"
          >
            Our Advantage
          </motion.h2>
          <motion.h3 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold text-primary"
          >
            Why Choose K.B. ASSOCIATES
          </motion.h3>
          <div className="space-y-6">
            {[
              {
                title: "Expert loan consultation",
                desc: "Strategic advice tailored to your financial profile.",
              },
              {
                title: "Quick loan processing",
                desc: "Time-efficient workflows to get you funded faster.",
              },
              {
                title: "Support for multiple loan types",
                desc: "A comprehensive range of financial products under one roof.",
              },
              {
                title: "Assistance with documentation",
                desc: "We handle the paperwork complexities for you.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group cursor-default"
              >
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined font-bold">check</span>
                </span>
                <div>
                  <h4 className="font-bold text-primary">{item.title}</h4>
                  <p className="text-sm text-slate-500 font-body">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-1 md:order-2"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl rotate-3 translate-x-4 border border-slate-100">
            <Image
              src="/assets/images/about/business-meeting.jpg"
              alt="Financial agreement handshake"
              width={600}
              height={800}
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          <motion.div 
            initial={{ rotate: -10, opacity: 0 }}
            whileInView={{ rotate: -3, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute inset-0 border-2 border-secondary/20 rounded-3xl -rotate-3 -translate-x-4 -z-10"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
