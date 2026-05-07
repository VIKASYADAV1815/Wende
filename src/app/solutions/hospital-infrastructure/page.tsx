"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Activity, HeartPulse, PlusSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function HospitalInfrastructurePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/infra/unnamed (5).jpg" 
            alt="Modern Hospital Infrastructure" 
            fill 
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeIn}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 mb-6 bg-primary-green/20 backdrop-blur-md px-4 py-2 rounded-full border border-primary-green/30">
              <Building2 size={16} className="text-green-300" />
              <span className="text-xs font-bold tracking-widest uppercase text-green-100">Facility Modernization</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Hospital <span className="text-primary-green">Infrastructure</span>
            </h1>
            <p className="text-lg text-slate-200 mb-8 leading-relaxed">
              Equipping medical facilities with advanced operating room systems, intensive care units (ICU), and comprehensive patient monitoring networks to elevate the standard of care.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-green hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-green-500/30">
              Discuss Your Project <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
            >
              <Image src="/infra/unnamed (5).jpg" alt="Operating Room" fill className="object-cover" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Advanced Operating Rooms</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We design and supply state-of-the-art surgical environments. From ceiling-mounted supply pendants and advanced surgical lights to integrated operating tables, we provide modular and scalable solutions that improve surgical precision, ergonomics, and infection control.
              </p>
              <ul className="space-y-3">
                {["Surgical Lighting & Camera Systems", "Ceiling Supply Pendants", "Advanced Surgical Tables", "Digital OR Integration"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 size={18} className="text-primary-green" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Intensive Care Units (ICU)</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Critical care demands reliability. Our ICU infrastructure solutions include highly functional hospital beds, life-support ventilators, infusion pump arrays, and comprehensive patient monitoring systems. We ensure that your critical care teams have the life-saving tools they need at their fingertips.
              </p>
              <ul className="space-y-3">
                {["Multi-parameter Patient Monitors", "Advanced Ventilators & Respiratory Care", "Syringe & Volumetric Infusion Pumps", "ICU Electric Beds & Anti-decubitus Mattresses"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 size={18} className="text-primary-yellow" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 order-1 md:order-2 grid grid-cols-2 gap-2 p-2 bg-white"
            >
              <div className="relative rounded-2xl overflow-hidden"><Image src="/infra/unnamed (2).jpg" alt="ICU Monitoring" fill className="object-cover" /></div>
              <div className="relative rounded-2xl overflow-hidden"><Image src="/infra/unnamed (4).jpg" alt="Infusion Pumps" fill className="object-cover" /></div>
              <div className="relative rounded-2xl overflow-hidden col-span-2"><Image src="/infra/unnamed (1).jpg" alt="Patient Ward" fill className="object-cover" /></div>
            </motion.div>
          </div>

          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 flex items-center justify-center p-8"
            >
               <Image src="/infra/unnamed (3).jpg" alt="Surgical Instruments" fill className="object-cover" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Sterilization & Surgical Instruments</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Infection prevention is paramount in any hospital setting. We supply premium-grade surgical instruments and complete Central Sterile Services Department (CSSD) equipment, including high-capacity autoclaves and washer-disinfectors to guarantee patient safety.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <PlusSquare size={24} className="text-primary-red mb-2" />
                  <h4 className="font-bold text-slate-900 text-sm">Surgical Instruments</h4>
                  <p className="text-xs text-slate-500 mt-1">Premium stainless steel tools.</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <Activity size={24} className="text-primary-green mb-2" />
                  <h4 className="font-bold text-slate-900 text-sm">CSSD Integration</h4>
                  <p className="text-xs text-slate-500 mt-1">Complete sterilization cycles.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
