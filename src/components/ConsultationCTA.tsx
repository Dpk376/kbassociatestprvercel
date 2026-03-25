import React from "react";

export default function ConsultationCTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

      <div className="max-w-5xl mx-auto px-8 relative z-10 text-center">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-secondary mb-6">
          Personalized Guidance
        </h2>
        <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
          Not Sure Which Loan is Right for You?
        </h3>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium">
          Our senior consultants are ready to provide expert guidance tailored to your financial goals. Get a free consultation today.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="tel:9025580888"
            className="flex items-center gap-3 bg-secondary text-white px-10 py-5 rounded-2xl font-bold hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/30 hover:scale-105 active:scale-95"
          >
            <span className="material-symbols-outlined">call</span>
            Call for Consultation
          </a>
          
          <a
            href="https://wa.me/919025580888"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#20bd5a] transition-all shadow-xl shadow-green-500/20 hover:scale-105 active:scale-95"
          >
            <span className="material-symbols-outlined fill">chat</span>
            WhatsApp Inquiry
          </a>
        </div>
        
        <p className="mt-10 text-slate-400 text-sm italic">
          No obligation. Just expert advice to clear your doubts.
        </p>
      </div>
    </section>
  );
}
