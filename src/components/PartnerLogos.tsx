import React from "react";
import Image from "next/image";

const partners = [
  { name: "State Bank of India", logo: "/assets/banks/sbi.svg", width: 120, height: 60 },
  { name: "HDFC Bank", logo: "/assets/banks/hdfc.svg", width: 120, height: 60 },
  { name: "Repco Bank", logo: "/assets/banks/repco.svg", width: 120, height: 60 },
];

export default function PartnerLogos() {
  return (
    <div className="bg-slate-50 py-16 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center text-slate-500 text-sm font-semibold mb-10 tracking-widest uppercase">
          TRUSTED BY CLIENTS ACROSS MAJOR BANKS
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {partners.map((partner) => (
            <div 
              key={partner.name} 
              className="flex items-center justify-center transition-all duration-500 hover:scale-105"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
          <div className="flex items-center gap-3 mt-2 md:mt-0 px-6 py-3 bg-slate-100/50 rounded-2xl border border-slate-200/50">
            <span className="material-symbols-outlined text-secondary text-xl">
              account_balance
            </span>
            <span className="text-slate-500 font-medium italic text-sm tracking-wide">
              And many more banks...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
