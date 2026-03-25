"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Choose Us", href: "#why-choose-us" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-200/20 py-4 border-b border-slate-200/50"
          : "bg-black/10 backdrop-blur-md py-6 border-b border-white/10"
      )}
    >
      <div className="flex justify-between items-center px-8 py-0 max-w-7xl mx-auto">
        <Link
          href="/"
          className={cn(
            "text-xl font-bold tracking-tighter flex items-center gap-2 transition-colors duration-300",
            scrolled ? "text-primary" : "text-white"
          )}
        >
          <div className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-inner",
            scrolled ? "bg-primary text-white" : "bg-white text-primary"
          )}>
            <span
              className="material-symbols-outlined text-2xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              account_balance
            </span>
          </div>
          <span className="hidden sm:inline tracking-widest uppercase text-lg">K.B. ASSOCIATES</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-semibold transition-all duration-300 text-sm uppercase tracking-widest hover:scale-105",
                  scrolled 
                    ? "text-slate-600 hover:text-secondary" 
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className={cn(
            "md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors",
            scrolled ? "text-primary hover:bg-slate-100" : "text-white hover:bg-white/10"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined text-2xl">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed inset-x-0 top-full transition-all duration-500 ease-in-out opacity-0 translate-y-[-10px] pointer-events-none",
        isOpen && "opacity-100 translate-y-0 pointer-events-auto"
      )}>
        <div className="bg-white/95 backdrop-blur-2xl border-b border-slate-200 p-8 space-y-6 shadow-2xl mx-4 mt-2 rounded-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-primary font-bold text-xl tracking-tight border-b border-slate-100 pb-2 active:text-secondary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
