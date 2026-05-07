"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TestTubes, Activity, Settings, ArrowRight, CheckCircle2, FlaskConical } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function LaboratoryEquipmentPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/l2.jpg" 
            alt="Modern Clinical Laboratory" 
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
            <div className="inline-flex items-center gap-2 mb-6 bg-primary-yellow/20 backdrop-blur-md px-4 py-2 rounded-full border border-primary-yellow/30">
              <FlaskConical size={16} className="text-yellow-300" />
              <span className="text-xs font-bold tracking-widest uppercase text-yellow-100">Clinical Diagnostics</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Laboratory <span className="text-primary-yellow">Equipment</span>
            </h1>
            <p className="text-lg text-slate-200 mb-8 leading-relaxed">
              Equipping clinical laboratories with advanced, high-throughput automated analyzers, sample processing systems, and essential diagnostic consumables.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-yellow hover:bg-yellow-500 text-slate-900 px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-yellow-500/30">
              Equip Your Lab <ArrowRight size={18} />
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
              <Image src="/l1.jpg" alt="Automated Clinical Analyzers" fill className="object-cover" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Automated Clinical Analyzers</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We provide fully automated chemistry and immunology analyzers designed to handle high sample volumes with exceptional precision. These systems streamline laboratory workflows, minimize human error, and deliver rapid diagnostic results for improved patient care.
              </p>
              <ul className="space-y-3">
                {["High-throughput Chemistry Analyzers", "Automated Immunology Systems", "Integrated Laboratory Information Systems (LIS)", "Hematology & Coagulation Analyzers"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 size={18} className="text-primary-yellow" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Sample Processing & Preparation</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Accurate results depend on perfect sample preparation. We supply essential benchtop equipment including refrigerated centrifuges, sample sorting carousels, pipetting stations, and incubation systems to ensure every biological sample is processed under optimal conditions.
              </p>
              <ul className="space-y-3">
                {["Clinical Centrifuges & Rotors", "Automated Sample Sorters", "Precision Pipettes & Dispensers", "Temperature-controlled Incubators"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 size={18} className="text-primary-green" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 order-1 md:order-2 p-4 bg-white flex items-center justify-center"
            >
              <Image src="/l3.jpg" alt="Sample Preparation Tubes" fill className="object-cover" />
            </motion.div>
          </div>

          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 grid grid-cols-2 gap-2 p-2 bg-white"
            >
              <div className="relative rounded-2xl overflow-hidden col-span-2"><Image src="/l4.jpg" alt="Lab Consumables" fill className="object-cover" /></div>
              <div className="relative rounded-2xl overflow-hidden"><Image src="/l5.jpg" alt="Test Tubes" fill className="object-cover" /></div>
              <div className="relative rounded-2xl overflow-hidden"><Image src="/l6.jpg" alt="Pipette Tips" fill className="object-cover" /></div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Lab Consumables & Reagents</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We are a reliable supply chain partner for all your laboratory consumable needs. We provide high-quality reagents, calibration standards, test tubes, microplates, and sterile pipettes to keep your diagnostic operations running without interruption.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-100 p-4 rounded-2xl border border-slate-200">
                  <TestTubes size={24} className="text-primary-yellow mb-2" />
                  <h4 className="font-bold text-slate-900 text-sm">Certified Consumables</h4>
                  <p className="text-xs text-slate-500 mt-1">Sterile and reliable labware.</p>
                </div>
                <div className="bg-slate-100 p-4 rounded-2xl border border-slate-200">
                  <Settings size={24} className="text-primary-green mb-2" />
                  <h4 className="font-bold text-slate-900 text-sm">Consistent Supply</h4>
                  <p className="text-xs text-slate-500 mt-1">Dependable stock availability.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
