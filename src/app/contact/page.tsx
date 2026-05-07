"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, ArrowRight, User, Globe } from "lucide-react";
import React, { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-slate-50 relative overflow-hidden selection:bg-primary-red/10 pb-20">
      {/* Subtle Geometric Pattern BG */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l20 20-20 20L0 20z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")`, 
          backgroundSize: '40px 40px' 
        }}>
      </div>
      
      {/* Very Soft Ambient Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-green/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        {/* Header - Refined and elegant */}
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 mb-4 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-600">Contact Us</span>
            <div className="flex gap-1">
              <span className="h-1.5 w-1.5 bg-primary-red rounded-full"></span>
              <span className="h-1.5 w-1.5 bg-primary-yellow rounded-full"></span>
              <span className="h-1.5 w-1.5 bg-primary-green rounded-full"></span>
            </div>
          </motion.div>
          <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Let's Start a <span className="text-primary-green">Conversation</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="text-slate-500 text-sm md:text-base max-w-xl mx-auto font-medium">
            Whether you need a quote, technical support, or partnership inquiries, our team is ready to assist you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Contact Info - Refined, subtle borders, smaller sizing */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="lg:col-span-4 w-full flex flex-col gap-3"
          >
            {[
              { icon: User, color: 'text-slate-700 bg-slate-100', border: 'border-slate-200 hover:border-slate-300', title: 'Managing Director', content: 'Christopher Moghalu' },
              { icon: MapPin, color: 'text-primary-red bg-red-50', border: 'border-red-100 hover:border-red-200', title: 'Location', content: 'Ouagadougou, BF' },
              { icon: Phone, color: 'text-yellow-600 bg-yellow-50', border: 'border-yellow-100 hover:border-yellow-200', title: 'Phone', content: '+1 (404) 936-1540' },
              { icon: Mail, color: 'text-primary-green bg-green-50', border: 'border-green-100 hover:border-green-200', title: 'Email', content: 'info@wendegoundimedical.com' },
              { icon: Globe, color: 'text-teal-600 bg-teal-50', border: 'border-teal-100 hover:border-teal-200', title: 'Website', content: 'www.wendegoundimedical.com' }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn} className={`flex items-center gap-3 p-3.5 bg-white rounded-2xl border ${item.border} shadow-sm transition-all duration-200 group`}>
                <div className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center ${item.color} group-hover:scale-105 transition-transform duration-200`}>
                  <item.icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">{item.title}</p>
                  <h3 className="text-sm font-bold text-slate-800 truncate">{item.content}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form - Elegant, compact */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="lg:col-span-8 w-full"
          >
            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-red via-primary-yellow to-primary-green rounded-t-3xl" />
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">Send us a Message</h3>
                <p className="text-xs text-slate-500">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              {formStatus === "success" ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-100 text-primary-green">
                    <Send size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h4>
                  <p className="text-slate-500 text-sm mb-6">Thank you for reaching out. Our team will contact you shortly.</p>
                  <button onClick={() => setFormStatus("idle")} className="text-xs font-bold text-primary-red uppercase tracking-widest hover:text-primary-green transition-colors flex items-center justify-center gap-1 mx-auto">
                    Send another message <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">First Name</label>
                      <input required type="text" placeholder="John" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all outline-none text-sm placeholder:text-slate-400" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Last Name</label>
                      <input required type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all outline-none text-sm placeholder:text-slate-400" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                    <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all outline-none text-sm placeholder:text-slate-400" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Subject</label>
                    <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all outline-none text-sm appearance-none text-slate-700">
                      <option value="">Select a topic...</option>
                      <option value="equipment">Equipment Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Message</label>
                    <textarea required rows={4} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all outline-none resize-none text-sm placeholder:text-slate-400"></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-primary-green transition-colors text-sm disabled:opacity-70 mt-2"
                  >
                    {formStatus === "submitting" ? "Sending..." : "Send Message"} 
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
