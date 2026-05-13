"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Stats() {
  const { copy } = useLanguage();

  return (
    <section className="bg-primary-green py-8 sm:py-10 md:py-12 relative z-20 -mt-8 sm:-mt-10 mx-4 md:mx-auto max-w-7xl rounded-2xl shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          <div className="p-4 sm:p-5">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">{copy.home.stats[0].title}</div>
            <p className="text-green-100 font-medium text-sm sm:text-base">{copy.home.stats[0].description}</p>
          </div>
          <div className="p-4 sm:p-5">
            <div className="text-3xl sm:text-4xl font-bold text-primary-yellow mb-1 sm:mb-2">{copy.home.stats[1].title}</div>
            <p className="text-green-100 font-medium text-sm sm:text-base">{copy.home.stats[1].description}</p>
          </div>
          <div className="p-4 sm:p-5">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">{copy.home.stats[2].title}</div>
            <p className="text-green-100 font-medium text-sm sm:text-base">{copy.home.stats[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
