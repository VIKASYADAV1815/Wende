"use client";

import { ShieldCheck, Clock, Globe } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function WhyChooseUs() {
  const { copy } = useLanguage();

  const features = [
    {
      icon: <ShieldCheck size={36} className="text-white relative z-10" />,
      title: copy.home.whyChooseUs.cards[0].title,
      desc: copy.home.whyChooseUs.cards[0].description,
      bgPattern: "radial-gradient(#ffffff 2px, transparent 2px)",
      cardBg: "bg-primary-green",
      textColor: "text-green-50",
      titleColor: "text-white"
    },
    {
      icon: <Clock size={36} className="text-white relative z-10" />,
      title: copy.home.whyChooseUs.cards[1].title,
      desc: copy.home.whyChooseUs.cards[1].description,
      bgPattern: "radial-gradient(#ffffff 2px, transparent 2px)",
      cardBg: "bg-primary-red",
      textColor: "text-red-50",
      titleColor: "text-white"
    },
    {
      icon: <Globe size={36} className="text-gray-900 relative z-10" />,
      title: copy.home.whyChooseUs.cards[2].title,
      desc: copy.home.whyChooseUs.cards[2].description,
      bgPattern: "radial-gradient(#000000 2px, transparent 2px)",
      cardBg: "bg-primary-yellow",
      textColor: "text-yellow-900",
      titleColor: "text-gray-900"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative brand elements in background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-red/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-1 w-8 bg-primary-red rounded-full"></span>
            <span className="h-1 w-8 bg-primary-yellow rounded-full"></span>
            <span className="h-1 w-8 bg-primary-green rounded-full"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.home.whyChooseUs.title}</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {copy.home.whyChooseUs.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 gap-6">
            {features.map((item, i) => (
              <div key={i} className={`group relative ${item.cardBg} p-8 rounded-[2rem] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden z-10 cursor-default flex items-center gap-6`}>
                
                {/* Subtle Low-Opacity Background Pattern */}
                <div 
                  className="absolute inset-0 opacity-[0.1] group-hover:opacity-[0.15] transition-opacity duration-500 z-0" 
                  style={{ backgroundImage: item.bgPattern, backgroundSize: '24px 24px' }}
                ></div>
                
                <div className="relative z-10 shrink-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 relative shadow-inner">
                    {item.icon}
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className={`text-xl font-bold ${item.titleColor} mb-2`}>{item.title}</h3>
                  <p className={`${item.textColor} leading-relaxed text-sm font-medium`}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="relative h-64 lg:h-full rounded-3xl overflow-hidden shadow-xl mt-8">
              <Image src="/3.jpg" alt="Medical Technology" fill className="object-cover" />
            </div>
            <div className="relative h-64 lg:h-full rounded-3xl overflow-hidden shadow-xl mb-8">
              <Image src="/4.jpg" alt="Diagnostic Excellence" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
