"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    } as any,
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-primary pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero/finance-consulting.jpg"
          alt="Professional loan consultancy"
          fill
          priority
          className="object-cover opacity-30 scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col items-start w-full"
      >
        <div className="space-y-8 max-w-4xl">
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 text-secondary-fixed text-sm font-semibold backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Professional Loan Consultancy
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-1">
            <h1 className="text-5xl md:text-8xl lg:text-[7rem] font-black text-white leading-none tracking-tighter whitespace-nowrap">
              K.B. <span className="text-secondary-fixed uppercase">Associates</span>
            </h1>
            <div className="text-xl md:text-3xl font-bold text-secondary-fixed tracking-[0.4em] uppercase opacity-80 pl-2">
              Tiruppur
            </div>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-4xl font-bold text-slate-100 leading-tight max-w-2xl"
          >
            Your Trusted Partner for <span className="text-secondary-fixed">Loan Services</span>
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-4 text-slate-200">
            {[
              "750+ Successful Loan Applications",
              "17+ Years of Experience",
              "Trusted Loan Guidance in Tiruppur"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-green-400 text-xl font-bold">
                  check_circle
                </span>
                <span className="text-lg font-medium">{text}</span>
              </div>
            ))}
            
            <div className="flex items-center gap-2 mt-2 text-green-400 font-semibold">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              Take Over Topup – 7.1% interest – 0.59 paisa – applicable with all major banks
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-6">
            <a
              href="tel:9500630228"
              className="flex items-center gap-3 bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 hover:scale-105 active:scale-95"
            >
              <span className="material-symbols-outlined">call</span>
              Call Now
            </a>
            <a
              href="https://wa.me/919500630228?text=Hi%2C%20I%20found%20K.B.%20Associates%20online%20and%20would%20like%20to%20know%20about%20loan%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#20bd5a] transition-all shadow-lg shadow-green-500/20 hover:scale-105 active:scale-95"
            >
              <span className="material-symbols-outlined fill">chat</span>
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
