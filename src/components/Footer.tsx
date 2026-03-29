import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-24 pb-12 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
        <div className="space-y-6">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-white flex items-center gap-2"
          >
            <span
              className="material-symbols-outlined text-secondary-fixed"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              account_balance
            </span>
            K.B. ASSOCIATES
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            Leading loan consultancy in Tiruppur providing professional guidance
            for all your financial needs.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 font-headline">Quick Links</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li>
              <Link href="#home" className="hover:text-secondary-fixed transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-secondary-fixed transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-secondary-fixed transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-secondary-fixed transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 font-headline">Services</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li>Home Loans</li>
            <li>Business Loans</li>
            <li>Construction Loans</li>
            <li>Mortgage Loans</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 font-headline">Contact Info</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-fixed text-sm">location_on</span>
              <span>Tirupur, Tamil Nadu</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary-fixed text-sm">call</span>
              <span>+91 95006 30228</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary-fixed text-sm">mail</span>
              <span>kbassociates8587@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
        <p>© {currentYear} K.B. ASSOCIATES. All rights reserved.</p>
        <div className="flex gap-8">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
