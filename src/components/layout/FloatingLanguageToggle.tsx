"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function FloatingLanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex items-center bg-white p-1.5 rounded-full shadow-xl border border-slate-200">
      {(["en", "fr"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          className={`relative px-5 py-2 rounded-full text-sm font-bold transition-colors duration-300 ${
            locale === l ? "text-white" : "text-slate-500 hover:text-slate-800"
          }`}
        >
          {locale === l && (
            <motion.div
              layoutId="activeLocale"
              className="absolute inset-0 bg-slate-900 rounded-full shadow-md"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10 uppercase">{l}</span>
        </button>
      ))}
    </div>
  );
}
