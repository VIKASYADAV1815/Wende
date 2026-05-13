"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Droplets, Activity, HeartPulse, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function DialysisPage() {
  const { copy } = useLanguage();
  const page = copy.solutionPages.dialysis;

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
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 to-slate-900/40" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeIn}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 mb-6 bg-blue-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30">
              <Droplets size={16} className="text-blue-300" />
              <span className="text-xs font-bold tracking-widest uppercase text-blue-100">{page.badge}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              {page.titleStart} <span className="text-blue-400">{page.titleAccent}</span>
            </h1>
            <p className="text-lg text-slate-200 mb-8 leading-relaxed">
              {page.intro}
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-blue-500/30">
              {page.cta} <ArrowRight size={18} />
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
              className="flex flex-col gap-4"
            >
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-lg border border-slate-200/60">
                <Image src="/dialysis/d1.jpg" alt="Dialysis Center" fill className="object-cover" />
              </div>
              <div className="flex gap-4">
                <div className="relative w-1/2 aspect-video rounded-3xl overflow-hidden shadow-lg border border-slate-200/60">
                  <Image src="/dialysis/d4.jpg" alt="Dialysis Machine" fill className="object-cover" />
                </div>
                <div className="relative w-1/2 aspect-video rounded-3xl overflow-hidden shadow-lg border border-slate-200/60">
                  <Image src="/dialysis/d5.jpg" alt="Patient Chair" fill className="object-cover" />
                </div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">{page.sections[0].title}</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {page.sections[0].description}
              </p>
              <ul className="space-y-3">
                {page.sections[0].items?.map((item, i) => (
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
              <h2 className="text-3xl font-bold mb-4 text-slate-900">{page.sections[1].title}</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {page.sections[1].description}
              </p>
              <ul className="space-y-3">
                {page.sections[1].items?.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 size={18} className="text-primary-green" /> {item}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-100 p-4 rounded-2xl border border-slate-200">
                  <ShieldCheck size={24} className="text-primary-green mb-2" />
                  <h4 className="font-bold text-slate-900 text-sm">{page.highlights[0].title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{page.highlights[0].description}</p>
                </div>
                <div className="bg-slate-100 p-4 rounded-2xl border border-slate-200">
                  <Activity size={24} className="text-blue-500 mb-2" />
                  <h4 className="font-bold text-slate-900 text-sm">{page.highlights[1].title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{page.highlights[1].description}</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="flex flex-col gap-4 order-1 md:order-2"
            >
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-lg border border-slate-200/60">
                 <Image src="/dialysis/d2.jpg" alt="AquaA System" fill className="object-cover" />
              </div>
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-lg border border-slate-200/60">
                 <Image src="/dialysis/d3.jpg" alt="RO Tanks" fill className="object-cover" />
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
