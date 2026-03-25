"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Contact Us",
    description: "Call or WhatsApp K.B. Associates to discuss your loan requirements with our experts.",
    icon: "contact_support",
    details: "First step to clarity"
  },
  {
    title: "Document Guidance",
    description: "We guide you on the exact documents needed and help prepare your application properly.",
    icon: "edit_document",
    details: "Avoiding common mistakes"
  },
  {
    title: "Application Processing",
    description: "Your application is submitted to suitable banks through proper channels, saving you time.",
    icon: "account_balance",
    details: "Efficient bank coordination"
  },
  {
    title: "Approval Support",
    description: "We assist you throughout the entire process until your loan is successfully approved.",
    icon: "task_alt",
    details: "Finalized success"
  }
];

export default function LoanProcess() {
  return (
    <section id="process" className="py-12 bg-white relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-secondary mb-4">
            Our Workflow
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-primary mb-6">
            Simple Loan Process with K.B. Associates
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Applying for loans directly through banks can be confusing and time-consuming. 
            <strong> K.B. Associates simplifies everything for you.</strong>
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center border-4 border-white">
                    {index + 1}
                  </div>

                  {/* Icon Area */}
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                    <span className="material-symbols-outlined text-3xl">
                      {step.icon}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-primary mb-3">
                    {step.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-50 w-full">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-secondary opacity-60">
                      {step.details}
                    </span>
                  </div>
                </div>

                {/* Mobile Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center py-4">
                    <span className="material-symbols-outlined text-slate-300">
                      arrow_downward
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
