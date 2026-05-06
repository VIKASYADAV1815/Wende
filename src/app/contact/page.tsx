"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, ArrowRight } from "lucide-react";
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
    <div className="flex flex-col min-h-screen pt-12 bg-[#F8F9FA] relative overflow-hidden selection:bg-primary-red/10">
      {/* Custom Geometric Pattern BG */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 mb-4 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Contact Us</span>
            <div className="flex gap-1">
              <span className="h-1.5 w-1.5 bg-primary-red rounded-full"></span>
              <span className="h-1.5 w-1.5 bg-primary-yellow rounded-full"></span>
              <span className="h-1.5 w-1.5 bg-primary-green rounded-full"></span>
            </div>
          </motion.div>
          <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Get in Touch
          </motion.h1>
          <motion.p variants={fadeIn} className="text-gray-500 text-sm md:text-base max-w-xl mx-auto font-light">
            Whether you need a quote or technical support, our team is here to assist you.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-start pb-20">
          {/* Contact Info - Smaller & Refined */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="lg:w-5/12 w-full space-y-4"
          >
            {[
              { icon: MapPin, color: 'bg-red-50 text-primary-red', title: 'Office Location', content: 'Ouagadougou, Burkina Faso', sub: 'Full address upon request' },
              { icon: Phone, color: 'bg-yellow-50 text-primary-yellow', title: 'Phone', content: '+226 00 00 00 00', sub: 'Mon-Fri, 8am - 6pm' },
              { icon: Mail, color: 'bg-green-50 text-primary-green', title: 'Email', content: 'info@wendegoundi.com', sub: 'support@wendegoundi.com' }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn} className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center ${item.color}`}>
                  <item.icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-0.5">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.content}</p>
                  <p className="text-[11px] text-gray-400">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form - Premium White Card */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="lg:w-7/12 w-full"
          >
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-50 relative overflow-hidden">
              {formStatus === "success" ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-100">
                    <Send className="text-primary-green" size={20} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Message Sent</h4>
                  <p className="text-gray-500 text-sm mt-2 mb-6">We will get back to you shortly.</p>
                  <button onClick={() => setFormStatus("idle")} className="text-xs font-bold text-primary-red uppercase tracking-widest border-b border-primary-red pb-1">
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">First Name</label>
                      <input required type="text" placeholder="John" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-all outline-none text-sm" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">Last Name</label>
                      <input required type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-all outline-none text-sm" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
                    <input required type="email" placeholder="john@hospital.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-all outline-none text-sm" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">Subject</label>
                    <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-all outline-none text-sm appearance-none">
                      <option value="">Select a topic</option>
                      <option value="equipment">Equipment Inquiry</option>
                      <option value="technical">Technical Support</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">Message</label>
                    <textarea required rows={4} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-all outline-none resize-none text-sm"></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-primary-red transition-all shadow-lg text-sm disabled:opacity-70 mt-2"
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