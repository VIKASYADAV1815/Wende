"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Droplets, Activity, HeartPulse, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function DialysisPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/dialysis/d1.jpg" 
            alt="Hemodialysis Center" 
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
            <div className="inline-flex items-center gap-2 mb-6 bg-blue-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30">
              <Droplets size={16} className="text-blue-300" />
              <span className="text-xs font-bold tracking-widest uppercase text-blue-100">Renal Care Excellence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Dialysis & <span className="text-blue-400">Water Treatment</span>
            </h1>
            <p className="text-lg text-slate-200 mb-8 leading-relaxed">
              Providing complete hemodialysis solutions, from advanced dialysis machines and comfortable patient chairs to industrial-grade Reverse Osmosis (RO) water purification systems.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-blue-500/30">
              Explore Renal Solutions <ArrowRight size={18} />
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
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 grid grid-cols-2 gap-2 p-2 bg-white"
            >
              <div className="relative rounded-2xl overflow-hidden col-span-2"><Image src="/dialysis/d1.jpg" alt="Dialysis Center" fill className="object-cover" /></div>
              <div className="relative rounded-2xl overflow-hidden"><Image src="/dialysis/d4.jpg" alt="Dialysis Machine" fill className="object-cover" /></div>
              <div className="relative rounded-2xl overflow-hidden"><Image src="/dialysis/d5.jpg" alt="Patient Chair" fill className="object-cover" /></div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Advanced Hemodialysis Systems</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We equip renal care centers with highly reliable, user-friendly hemodialysis machines designed to provide safe and efficient patient treatments. Coupled with ergonomic, fully adjustable dialysis chairs, we ensure maximum comfort for patients during their therapy sessions.
              </p>
              <ul className="space-y-3">
                {["Next-Generation Hemodialysis Machines", "Ergonomic & Adjustable Patient Chairs", "Integrated Patient Monitoring", "Dialyzers, Bloodlines & Consumables"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 size={18} className="text-blue-500" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Medical Water Treatment (RO)</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Ultra-pure water is the foundation of safe hemodialysis. We supply, install, and maintain industrial-grade Reverse Osmosis (RO) water purification systems, such as the AquaA series, ensuring your facility meets strict international standards for medical water quality.
              </p>
              <ul className="space-y-3">
                {["AquaA Reverse Osmosis Systems", "Multi-stage Filtration & Purification", "High-capacity Storage Tanks", "Automated Heat Disinfection"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 size={18} className="text-primary-green" /> {item}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-100 p-4 rounded-2xl border border-slate-200">
                  <ShieldCheck size={24} className="text-primary-green mb-2" />
                  <h4 className="font-bold text-slate-900 text-sm">Ultra-Pure Water</h4>
                  <p className="text-xs text-slate-500 mt-1">ISO/AAMI standard compliance.</p>
                </div>
                <div className="bg-slate-100 p-4 rounded-2xl border border-slate-200">
                  <Activity size={24} className="text-blue-500 mb-2" />
                  <h4 className="font-bold text-slate-900 text-sm">Continuous Supply</h4>
                  <p className="text-xs text-slate-500 mt-1">Redundant systems for zero downtime.</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 order-1 md:order-2 grid grid-cols-2 gap-2 p-2 bg-white"
            >
              <div className="relative rounded-2xl overflow-hidden"><Image src="/dialysis/d2.jpg" alt="AquaA System" fill className="object-cover object-left" /></div>
              <div className="relative rounded-2xl overflow-hidden"><Image src="/dialysis/d3.jpg" alt="RO Tanks" fill className="object-cover" /></div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
