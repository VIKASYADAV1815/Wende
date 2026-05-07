"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { 
  ShieldCheck, Clock, Globe, Target, Eye, 
  CheckCircle2, Stethoscope, Users, Award,
  ArrowRight, Microscope, Zap, HeartPulse, Activity
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function AboutPage() {
  const coreAreas = [
    { title: "Pathology & Histopathology Equipment", icon: <Microscope /> },
    { title: "Immunohistochemistry (IHC) Systems & Reagents", icon: <Zap /> },
    { title: "Laboratory Equipment & Consumables", icon: <CheckCircle2 /> },
    { title: "Dialysis Equipment & Water Treatment Systems", icon: <Activity /> },
    { title: "Operating Room & Hospital Infrastructure", icon: <HeartPulse /> },
    { title: "Technical Support & Biomedical Services", icon: <Stethoscope /> }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-primary-red/10 relative overflow-hidden">
      
      {/* Subtle Pattern BG */}
      <div className="fixed inset-0 z-0 opacity-[0.02] pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l20 20-20 20L0 20z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")`, 
          backgroundSize: '40px 40px' 
        }}>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 mb-6 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-600">About Wende Goundi</span>
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 bg-primary-red rounded-full"></span>
                  <span className="h-1.5 w-1.5 bg-primary-yellow rounded-full"></span>
                  <span className="h-1.5 w-1.5 bg-primary-green rounded-full"></span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
                Empowering <span className="text-primary-green">Modern Healthcare</span> in West Africa
              </h1>
              
              <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-lg">
                Wende Goundi Medical Tech & Diagnostic Solutions Company is a healthcare technology and diagnostic solutions company based in Ouagadougou, Burkina Faso, dedicated to improving access to modern medical infrastructure, diagnostic systems, and specialized healthcare equipment.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white"
            >
              <Image 
                src="/infra.png" 
                alt="Medical Laboratory" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-sm flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary-green/10 rounded-full flex items-center justify-center text-primary-green">
                    <Microscope size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Advanced Diagnostics</p>
                    <p className="text-[11px] text-slate-500 font-medium">Clinically Validated Technology</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- OUR APPROACH --- */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-red via-primary-yellow to-primary-green" />
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">Sustainable Healthcare Solutions</h2>
                <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                  <p>
                    We specialize in pathology, immunohistochemistry (IHC), laboratory diagnostics, dialysis solutions, hospital infrastructure, and medical technology support services. We work with international manufacturers and healthcare partners to provide reliable, high-quality medical equipment and consumables tailored to the needs of healthcare institutions in emerging markets.
                  </p>
                  <p>
                    At Wende Goundi, we believe healthcare modernization requires more than simply supplying equipment. Our approach focuses on building sustainable healthcare solutions through equipment distribution, installation, technical support, maintenance services, training, and long-term partnership development.
                  </p>
                  <p className="font-semibold text-slate-800">
                    We are committed to supporting hospitals, laboratories, clinics, diagnostic centers, NGOs, and public health institutions with solutions that improve efficiency, diagnostic accuracy, and patient care outcomes.
                  </p>
                </div>
              </div>
              
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Target size={16} className="text-primary-red" /> Core Areas of Focus
                </h3>
                <ul className="space-y-3">
                  {coreAreas.map((area, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-100"
                    >
                      <div className="text-primary-green shrink-0">{area.icon}</div>
                      <span className="text-xs font-semibold text-slate-700">{area.title}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section className="py-16 z-10 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group"
            >
              <div className="w-12 h-12 bg-red-50 text-primary-red rounded-xl flex items-center justify-center mb-6 border border-red-100">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                As healthcare systems continue to expand across West Africa, our mission is to help bridge the gap between advanced medical technology and local healthcare needs by delivering dependable, affordable, and sustainable medical solutions.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group"
            >
              <div className="w-12 h-12 bg-green-50 text-primary-green rounded-xl flex items-center justify-center mb-6 border border-green-100">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our vision is to become a trusted leader in diagnostic and medical technology solutions throughout Burkina Faso and the wider West African region through innovation, quality service, and strategic global partnerships. We are committed to advancing healthcare infrastructure and supporting the future of modern medicine in Africa.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- COMMITMENT --- */}
      <section className="py-20 bg-slate-900 text-white relative z-10 mt-8">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-red via-primary-yellow to-primary-green" />
        
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              Partnering for sustainable healthcare development across West Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Quality Assured", icon: <ShieldCheck />, color: "text-primary-green bg-green-500/10" },
              { title: "Reliable Support", icon: <Clock />, color: "text-primary-red bg-red-500/10" },
              { title: "Strategic Partnerships", icon: <Globe />, color: "text-primary-yellow bg-yellow-500/10" }
            ].map((card, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-center hover:bg-slate-800 transition-colors">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${card.color}`}>
                  {card.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Delivering dependable and affordable medical solutions tailored to local needs.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
