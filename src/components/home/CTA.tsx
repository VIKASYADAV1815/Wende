"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function CTA() {
  const { copy } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-green"></div>
      <div className="absolute inset-0 bg-[url('/6.jpg')] opacity-10 mix-blend-overlay object-cover"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-6 max-w-3xl mx-auto">
          {copy.home.cta.title}
        </h2>
        <p className="text-green-100 text-xl mb-10 max-w-2xl mx-auto">
          {copy.home.cta.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-primary-yellow hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg"
          >
            {copy.home.cta.primary}
          </Link>
          <Link
            href="/projects"
            className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
          >
            {copy.home.cta.secondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
