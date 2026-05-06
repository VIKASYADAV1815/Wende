"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  ShieldCheck, Clock, Globe, Target, Eye, 
  CheckCircle2, Stethoscope, Users, Award,
  ArrowRight, Microscope, Zap
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] selection:bg-primary-red/10 relative">
      
      {/* --- REINFORCED INDUSTRIAL GRID PATTERN --- */}
      {/* This ensures the pattern is visible but doesn't distract from the content */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.05]" 
        style={{ 
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 z-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded mb-8">
                <Zap size={12} className="text-primary-red" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">The Wende Goundi Standard</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.95] mb-8">
                Empowering <br /> 
                <span className="text-primary-red italic">Healthcare</span> <br /> 
                Through <span className="text-primary-green">Precision.</span>
              </h1>
              
              <p className="text-base text-slate-500 max-w-md leading-relaxed">
                Wende Goundi Medical Tech & Diagnostic Solutions is dedicated to improving healthcare infrastructure and diagnostic capacity across Burkina Faso and the wider West African region.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8 }}
              className="relative aspect-[16/10] lg:aspect-square w-full max-w-lg ml-auto rounded-3xl overflow-hidden border-[8px] border-white shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1630959305606-3123a081dada?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Laboratory Excellence" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl border border-white/20">
                <div className="flex items-center gap-4">
                  <Microscope className="text-primary-green" size={24} />
                  <p className="text-[10px] font-bold uppercase tracking-widest leading-tight">Clinically Validated <br/> Global Technology</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- STORY SECTION (THE "ABOUT" CORE) --- */}
      <section className="py-24 relative z-10 border-y border-slate-100 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-primary-red font-bold text-xs uppercase tracking-widest">Leadership</span>
              <h2 className="text-3xl font-bold mt-4 mb-6">Building Platforms, <br /> Not Just Products.</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Under the leadership of <strong>Christopher Moghalu</strong>, we address the demand for reliable medical technology by building long-term partnerships with reputable international manufacturers.
              </p>
              <div className="p-6 border-l-2 border-primary-yellow bg-slate-50/50 italic text-slate-700 font-medium">
                "We are building a long-term medical technology platform, not simply looking for products to trade."
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <Target className="text-primary-red mb-4" size={28} />
                <h3 className="font-bold mb-2">Our Mission</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Providing cutting-edge, validated diagnostic equipment that empowers healthcare providers.</p>
              </div>
              <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <Eye className="text-primary-green mb-4" size={28} />
                <h3 className="font-bold mb-2">Our Vision</h3>
                <p className="text-xs text-slate-500 leading-relaxed">To be the most trusted and reliable medical technology partner in West Africa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES (HIGH-DENSITY GRID) --- */}
      <section className="py-24 z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-4xl font-bold tracking-tighter">Capabilities</h2>
            <div className="h-px flex-1 bg-slate-100 mx-8 hidden md:block" />
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Wende Goundi Solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Distribution", icon: <Globe />, color: "text-primary-red" },
              { title: "Tech Support", icon: <Stethoscope />, color: "text-primary-green" },
              { title: "Capacity Building", icon: <Users />, color: "text-primary-yellow" },
              { title: "Consumables", icon: <CheckCircle2 />, color: "text-slate-900" }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white border border-slate-100 rounded-2xl hover:border-primary-red transition-all group">
                <div className={`${item.color} mb-6 transition-transform group-hover:scale-110`}>{item.icon}</div>
                <h4 className="font-bold mb-2 text-sm">{item.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">Ensuring top-tier medical infrastructure with comprehensive local support.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY US (DEEP NEUTRAL BLACK - NO BLUE) --- */}
      <section className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden z-10">
        {/* Subtle texture for dark section */}
        <div className="absolute inset-0 opacity-[0.1]" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")` }} 
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Partner With Us</h2>
            <p className="text-slate-500 text-sm">We are committed to sustainable healthcare development.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Quality Assured", icon: <ShieldCheck />, color: "bg-primary-green", img: "https://images.unsplash.com/photo-1582719508461-905c673771fd" },
              { title: "24/7 Support", icon: <Clock />, color: "bg-primary-red", img: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
              { title: "Global Reach", icon: <Globe />, color: "bg-primary-yellow", img: "https://images.unsplash.com/photo-1576086213369-97a306d36557" }
            ].map((card, i) => (
              <div key={i} className="group relative h-[380px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                <Image src={card.img} alt={card.title} fill className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white mb-4 ${card.color}`}>
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">Clinically validated diagnostic equipment from world-leading brands.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}