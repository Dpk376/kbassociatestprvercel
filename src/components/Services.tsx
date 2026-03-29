"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" } as any
  },
};

const services = [
  {
    title: "Home Loans",
    description: "Help customers purchase their dream home with easy loan assistance and documentation support.",
    icon: "home",
    image: "/assets/images/services/home-loan.jpg"
  },
  {
    title: "Business Loans",
    description: "Financial support to start or expand your business with expert consultation.",
    icon: "business_center",
    image: "/assets/images/services/business-loan.jpg"
  },
  {
    title: "Construction Loans",
    description: "Loans designed to support residential or commercial construction projects.",
    icon: "architecture",
    image: "/assets/images/services/construction-loan.jpg"
  },
  {
    title: "Property Purchase Loans",
    description: "Get assistance in financing residential or commercial property purchases.",
    icon: "real_estate_agent",
    image: "/assets/images/services/property-purchase.jpg"
  },
  {
    title: "Property Extension Loans",
    description: "Expand your existing home or building with flexible loan options.",
    icon: "add_home",
    image: "/assets/images/services/property-extension.png"
  },
  {
    title: "Loan Takeover",
    description: "Transfer your existing loan to another bank with better interest rates and benefits.",
    icon: "published_with_changes",
    image: "/assets/images/services/loan-takeover.png"
  },
  {
    title: "Mortgage Loans",
    description: "Unlock the value of your property with secure mortgage-based financing.",
    icon: "account_balance",
    image: "/assets/images/services/mortgage-loan.png"
  },
  {
    title: "Personal Loans",
    description: "Quick financial support for personal needs such as education, travel, or emergencies.",
    icon: "person",
    image: "/assets/images/services/personal-loan.png"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">
            Financial Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-primary font-headline">
            Tailored Loan Solutions
          </h3>
          <p className="mt-6 text-slate-500 max-w-2xl mx-auto">
            Expert guidance for your financial journey. We provide end-to-end support for all your loan requirements.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center rounded-xl bg-white/90 backdrop-blur shadow-lg text-secondary">
                  <span className="material-symbols-outlined text-2xl">
                    {service.icon}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Contact CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 bg-white rounded-[40px] p-12 md:p-20 shadow-xl shadow-slate-200/50 border border-slate-100 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h4 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
              Need help choosing the right loan?
            </h4>
            <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
              Contact K.B. Associates today for expert guidance. Our specialists will help you find the best financial solution.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="tel:9500630228" 
                className="flex items-center gap-3 bg-secondary text-white px-8 py-4 rounded-2xl font-bold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 hover:scale-105"
              >
                <span className="material-symbols-outlined">call</span>
                Call Now
              </a>
              
              <a 
                href="mailto:kbassociates8587@gmail.com" 
                className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:scale-105"
              >
                <span className="material-symbols-outlined">mail</span>
                Email Us
              </a>
              
              <a 
                href="https://wa.me/919500630228" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-500/20 hover:scale-105"
              >
                <span className="material-symbols-outlined fill">chat</span>
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
