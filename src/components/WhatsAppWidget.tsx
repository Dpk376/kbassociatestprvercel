"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const whatsappLink =
    "https://wa.me/919500630228?text=Hi%2C%20I%20found%20K.B.%20Associates%20online%20and%20would%20like%20to%20know%20about%20loan%20services.";

  useEffect(() => {
    // Show a subtle notification after 3 seconds to draw attention
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100"
          >
            {/* Header */}
            <div className="bg-[#001e40] p-6 text-white relative">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="material-symbols-outlined text-white text-2xl">
                      support_agent
                    </span>
                  </div>
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[#001e40] rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-tight">K.B. Associates</h4>
                  <div className="flex items-center gap-1.5 opacity-80 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    Online & Ready to Help
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 bg-slate-50">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-6">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Hi there! 👋 How can we help you with your loan requirements today?
                </p>
                <span className="text-[10px] text-slate-400 mt-2 block text-right">
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold hover:bg-[#20bd5a] transition-all shadow-lg shadow-green-500/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="material-symbols-outlined fill text-xl">chat</span>
                Start Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        <AnimatePresence>
          {showNotification && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 text-sm font-semibold text-primary pointer-events-none"
            >
              Need help? Chat with us!
              <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-t border-r border-slate-100"></div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowNotification(false);
          }}
          className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 z-50 ${
            isOpen ? "bg-[#001e40]" : "bg-[#25D366]"
          }`}
        >
          <span className="material-symbols-outlined text-3xl transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}">
            {isOpen ? "close" : "chat"}
          </span>
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce border-2 border-white">
              1
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
