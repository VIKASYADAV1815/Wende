"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, ArrowRight, User, Globe } from "lucide-react";
import React, { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

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
  const { copy } = useLanguage();

  const contactItems = [
    { icon: User, color: "text-slate-700 bg-slate-100", border: "border-slate-200 hover:border-slate-300", ...copy.contactPage.contactItems[0] },
    { icon: MapPin, color: "text-primary-red bg-red-50", border: "border-red-100 hover:border-red-200", ...copy.contactPage.contactItems[1] },
    { icon: Phone, color: "text-yellow-600 bg-yellow-50", border: "border-yellow-100 hover:border-yellow-200", ...copy.contactPage.contactItems[2] },
    { icon: Mail, color: "text-primary-green bg-green-50", border: "border-green-100 hover:border-green-200", ...copy.contactPage.contactItems[3] },
    { icon: Globe, color: "text-teal-600 bg-teal-50", border: "border-teal-100 hover:border-teal-200", ...copy.contactPage.contactItems[4] }
  ];

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
      <div className="absolute top-0 right-0 w-125 h-125 bg-primary-green/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-primary-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        {/* Header - Refined and elegant */}
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="text-center mb-12"
        >
          <div className="mb-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
              <span className="text-[10px] font-bold tracking-widest uppercase text-slate-600">{copy.contactPage.badge}</span>
              <div className="flex gap-1">
                <span className="h-1.5 w-1.5 bg-primary-red rounded-full"></span>
                <span className="h-1.5 w-1.5 bg-primary-yellow rounded-full"></span>
                <span className="h-1.5 w-1.5 bg-primary-green rounded-full"></span>
              </div>
            </motion.div>
          </div>
          <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            {copy.contactPage.headingStart} <span className="text-primary-green">{copy.contactPage.headingAccent}</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="text-slate-500 text-sm md:text-base max-w-xl mx-auto font-medium">
            {copy.contactPage.intro}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Contact Info - Refined, subtle borders, smaller sizing */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="lg:col-span-4 w-full flex flex-col gap-3"
          >
            {contactItems.map((item, i) => (
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
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary-red via-primary-yellow to-primary-green rounded-t-3xl" />
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{copy.contactPage.formTitle}</h3>
                <p className="text-xs text-slate-500">{copy.contactPage.formDescription}</p>
              </div>

              {formStatus === "success" ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-100 text-primary-green">
                    <Send size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{copy.contactPage.successTitle}</h4>
                  <p className="text-slate-500 text-sm mb-6">{copy.contactPage.successDescription}</p>
                  <button onClick={() => setFormStatus("idle")} className="text-xs font-bold text-primary-red uppercase tracking-widest hover:text-primary-green transition-colors flex items-center justify-center gap-1 mx-auto">
                    {copy.contactPage.sendAnother} <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">{copy.contactPage.firstName}</label>
                      <input required type="text" placeholder={copy.contactPage.firstNamePlaceholder} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all outline-none text-sm placeholder:text-slate-400" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">{copy.contactPage.lastName}</label>
                      <input required type="text" placeholder={copy.contactPage.lastNamePlaceholder} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all outline-none text-sm placeholder:text-slate-400" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">{copy.contactPage.email}</label>
                    <input required type="email" placeholder={copy.contactPage.emailPlaceholder} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all outline-none text-sm placeholder:text-slate-400" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">{copy.contactPage.subject}</label>
                    <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all outline-none text-sm appearance-none text-slate-700">
                      <option value="">{copy.contactPage.subjectPlaceholder}</option>
                      <option value="equipment">{copy.contactPage.subjectOptions.equipment}</option>
                      <option value="partnership">{copy.contactPage.subjectOptions.partnership}</option>
                      <option value="technical">{copy.contactPage.subjectOptions.technical}</option>
                      <option value="other">{copy.contactPage.subjectOptions.other}</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">{copy.contactPage.message}</label>
                    <textarea required rows={4} placeholder={copy.contactPage.messagePlaceholder} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all outline-none resize-none text-sm placeholder:text-slate-400"></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-primary-green transition-colors text-sm disabled:opacity-70 mt-2"
                  >
                    {formStatus === "submitting" ? copy.contactPage.sending : copy.contactPage.send} 
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
