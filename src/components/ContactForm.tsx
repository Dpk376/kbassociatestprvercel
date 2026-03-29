"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validation";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
        reset();
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <section id="contact" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">
                Get In Touch
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-8">
                Ready to start your financial journey?
              </h3>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-6">
              {[
                {
                  icon: "location_on",
                  title: "Office Address",
                  content:
                    "Tirupur, Tamil Nadu",
                },
                {
                  icon: "mail",
                  title: "Email Support",
                  content: "kbassociates8587@gmail.com",
                },
                {
                  icon: "call",
                  title: "Phone Number",
                  content: "9500630228",
                },
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeIn}
                  className="flex items-start gap-4"
                >
                  <span className="material-symbols-outlined text-secondary bg-secondary/10 p-3 rounded-xl font-bold">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-primary">{item.title}</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 pt-4">
              <a
                href="tel:9500630228"
                className="bg-secondary text-white px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg"
              >
                <span className="material-symbols-outlined">call</span> Call Now
              </a>
              <a
                href="mailto:kbassociates8587@gmail.com"
                className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg"
              >
                <span className="material-symbols-outlined">mail</span> Email Us
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100"
          >
            <h4 className="text-2xl font-extrabold text-primary mb-8">
              Send a Message
            </h4>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary/60 px-1">
                    Your Name
                  </label>
                  <input
                    {...register("name")}
                    className="w-full bg-surface-container-low p-4 rounded-xl border-none ring-1 ring-outline-variant focus:ring-2 focus:ring-secondary transition-all outline-none"
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-error text-xs font-bold px-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary/60 px-1">
                    Phone Number
                  </label>
                  <input
                    {...register("phone")}
                    className="w-full bg-surface-container-low p-4 rounded-xl border-none ring-1 ring-outline-variant focus:ring-2 focus:ring-secondary transition-all outline-none"
                    placeholder="+91 95006 30228"
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <p className="text-error text-xs font-bold px-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary/60 px-1">
                  Email Address
                </label>
                <input
                  {...register("email")}
                  className="w-full bg-surface-container-low p-4 rounded-xl border-none ring-1 ring-outline-variant focus:ring-2 focus:ring-secondary transition-all outline-none"
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-error text-xs font-bold px-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary/60 px-1">
                  Your Message
                </label>
                <textarea
                  {...register("message")}
                  className="w-full bg-surface-container-low p-4 rounded-xl border-none ring-1 ring-outline-variant focus:ring-2 focus:ring-secondary transition-all outline-none"
                  placeholder="How can we help you?"
                  rows={4}
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && (
                  <p className="text-error text-xs font-bold px-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {success && (
                <div className="p-4 bg-secondary/10 text-secondary rounded-xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined">check_circle</span>
                  Message sent successfully! We will contact you soon.
                </div>
              )}

              {error && (
                <div className="p-4 bg-error/10 text-error rounded-xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined">error</span>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary text-white py-5 rounded-xl font-extrabold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && (
                  <span className="material-symbols-outlined">send</span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
