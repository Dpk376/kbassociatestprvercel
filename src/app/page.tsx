import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import LoanProcess from "@/components/LoanProcess";
import ConsultationCTA from "@/components/ConsultationCTA";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PartnerLogos />
      <TrustStrip />
      
      {/* Scrollable Content Container */}
      <div className="relative z-20">
        <About />
        <Services />
        <LoanProcess />
        <ConsultationCTA />
        <WhyChooseUs />
        <ContactForm />
      </div>
      
      <Footer />
    </main>
  );
}
