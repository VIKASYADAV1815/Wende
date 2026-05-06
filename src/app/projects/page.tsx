"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Microscope, TestTube2, Activity, Building2, Globe } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "National Dialysis Center Upgrade",
    category: "Dialysis Equipment",
    location: "Ouagadougou, Burkina Faso",
    description: "Complete overhaul and installation of state-of-the-art dialysis machines and water treatment systems for a major national healthcare facility, increasing their patient capacity by 40%.",
    image: "https://images.unsplash.com/photo-1648224394432-8830fec15349?q=80&w=1177&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <Activity size={16} />,
    color: "bg-primary-red"
  },
  {
    title: "Regional Laboratory Network",
    category: "Laboratory Setup",
    location: "Bobo-Dioulasso Region",
    description: "Equipped a network of three regional clinics with automated biochemistry analyzers and hematology equipment, alongside comprehensive training for 15+ lab technicians.",
    image: "https://images.unsplash.com/photo-1646956141021-d687dcfe5fb9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <Microscope size={16} />,
    color: "bg-primary-green"
  },
  {
    title: "Pathology Department Modernization",
    category: "Pathology & IHC",
    location: "Koudougou Hospital",
    description: "Installation of advanced tissue processors, microtomes, and establishing a reliable supply chain for IHC reagents to support improved cancer diagnostics.",
    image: "https://images.unsplash.com/photo-1602052577122-f73b9710adba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <TestTube2 size={16} />,
    color: "bg-primary-yellow"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      
      {/* SIMPLE HEADER */}
      <section className="pt-32 pb-16 bg-[#fcfcfc] border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Our Projects
            </h1>
            <p className="text-slate-500 text-lg">
              Delivering specialized medical infrastructure across Burkina Faso.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT GRID - CLEAN & STABLE */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* IMAGE */}
                <div className="relative aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`${project.color} p-1.5 rounded text-white`}>
                      {project.icon}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 leading-tight text-slate-900">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Globe size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-tight">{project.location}</span>
                    </div>
                    <Link href="/contact" className="text-primary-green hover:text-primary-red transition-colors">
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SIMPLE DETAIL SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Expertise in Local Context</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Wende Goundi specializes in the unique logistical and technical requirements of the West African healthcare landscape. We don't just supply equipment; we ensure long-term operational success.
              </p>
              <ul className="space-y-3">
                {["On-site technical training", "Sustainable reagent supply chains", "24/7 maintenance support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 border border-slate-200 rounded-2xl">
              <h4 className="font-bold mb-4 uppercase tracking-widest text-xs text-slate-400">Our Reach</h4>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="block text-4xl font-bold text-primary-red">250+</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Installations</span>
                </div>
                <div>
                  <span className="block text-4xl font-bold text-primary-green">100%</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Support Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}