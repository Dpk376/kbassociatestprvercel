import React from "react";

const steps = [
  {
    number: "1",
    title: "Consultation",
    desc: "Discuss your needs with our experts.",
  },
  {
    number: "2",
    title: "Document Submission",
    desc: "Simple, digital or physical paperwork.",
  },
  {
    number: "3",
    title: "Loan Processing",
    desc: "Swift verification and bank coordination.",
  },
  {
    number: "4",
    title: "Approval & Disbursement",
    desc: "Funds delivered to your account.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold uppercase tracking-widest text-secondary-fixed mb-4">
            The Journey
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">
            Simple Loan Process
          </h3>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Horizontal Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              <div className="w-24 h-24 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl relative z-10 group-hover:bg-secondary group-hover:border-secondary transition-all duration-500">
                <span className="text-3xl font-black">{step.number}</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2 font-headline">{step.title}</h4>
              <p className="text-slate-400 text-sm font-body max-w-[180px] mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
