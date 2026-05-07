"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wrench, PhoneCall, Clock, CheckCircle2, ShieldAlert, ArrowRight, Settings } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function TechnicalSupportPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/1.jpg" 
            alt="Technical Support Engineer" 
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
              <Wrench size={16} className="text-green-300" />
              <span className="text-xs font-bold tracking-widest uppercase text-green-100">Service & Maintenance</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Technical Support & <span className="text-primary-green">Biomedical Services</span>
            </h1>
            <p className="text-lg text-slate-200 mb-8 leading-relaxed">
              Maximizing equipment uptime and extending the lifespan of your critical medical infrastructure with expert installation, training, and 24/7 technical support.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-green hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-green-500/30">
              Request Service <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Comprehensive Lifecycle Management</h2>
            <p className="text-slate-600 leading-relaxed">
              We understand that in healthcare, equipment failure is not an option. Our certified biomedical engineering team provides end-to-end service solutions to keep your clinical operations running smoothly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              {
                icon: <Settings size={32} />,
                title: "Installation & Commissioning",
                desc: "Professional site preparation, installation, and rigorous calibration to ensure equipment meets manufacturer specifications from day one.",
                color: "text-blue-500",
                bg: "bg-blue-50"
              },
              {
                icon: <Clock size={32} />,
                title: "Preventive Maintenance",
                desc: "Scheduled maintenance programs designed to identify and resolve potential issues before they cause costly downtime.",
                color: "text-primary-green",
                bg: "bg-green-50"
              },
              {
                icon: <PhoneCall size={32} />,
                title: "24/7 Emergency Repair",
                desc: "Rapid response technical support and on-site repair services for critical life-support and diagnostic equipment.",
                color: "text-primary-red",
                bg: "bg-red-50"
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.bg} ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900"
            >
              <Image src="/3.jpg" alt="Training Session" fill className="object-cover opacity-80" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Clinical Application Training</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Technology is only as effective as the professionals using it. We provide comprehensive clinical application and technical training programs for doctors, nurses, and laboratory technicians. Our training ensures your staff is confident, efficient, and capable of utilizing all advanced features of your new equipment.
              </p>
              <ul className="space-y-3">
                {["On-site Clinical Staff Training", "Biomedical Technician Workshops", "Operational Safety Protocols", "Software & IT Integration Support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 size={18} className="text-primary-green" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 relative overflow-hidden mt-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-red via-primary-yellow to-primary-green" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <ShieldAlert size={48} className="text-primary-yellow mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Immediate Technical Assistance?</h2>
          <p className="text-slate-300 mb-8 text-lg">Our certified engineers are on standby to resolve your equipment issues rapidly and efficiently.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-red-500/30">
            Contact Support Hotline <PhoneCall size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
