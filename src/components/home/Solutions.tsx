"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Activity, Microscope, Stethoscope, HeartPulse } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Solutions() {
  const { copy } = useLanguage();

  const solutionCards = [
    {
      ...copy.home.solutions.cards[0],
      icon: <Microscope size={32} />,
      img: "/pathelogy/p1.jpg"
    },
    {
      ...copy.home.solutions.cards[1],
      icon: <Activity size={32} />,
      img: "/l1.jpg"
    },
    {
      ...copy.home.solutions.cards[2],
      icon: <HeartPulse size={32} />,
      img: "/dialysis/d1.jpg"
    },
    {
      ...copy.home.solutions.cards[3],
      icon: <Stethoscope size={32} />,
      img: "/infra/op.jpg"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-800 font-semibold text-sm">
            {copy.home.solutions.badge}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{copy.home.solutions.title}</h2>
          <p className="text-gray-600 text-lg">
            {copy.home.solutions.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutionCards.map((service, index) => (
            <div key={index} className="group rounded-3xl flex flex-col overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-gray-900/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              </div>
              <div className="p-8 relative flex-1 flex flex-col">
                <div className="absolute -top-12 right-6 bg-white p-4 rounded-2xl shadow-xl text-primary-green border border-gray-50 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 pr-12">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-1 text-sm leading-relaxed">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 font-bold text-sm text-primary-green hover:text-green-700 transition-colors group/link"
                >
                  {copy.home.solutions.learnMore} 
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
