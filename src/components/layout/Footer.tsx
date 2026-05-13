"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Footer() {
  const { copy } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-4 border-primary-green">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="inline-block">
              <Image
                src="/logo.png"
                alt="Wende Goundi Med Dx Logo"
                width={280}
                height={100}
                className="object-contain h-24 md:h-28 w-auto bg-white/95 p-3 rounded-xl"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {copy.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-4 h-1 bg-primary-red rounded-full"></span>
              {copy.footer.quickLinksTitle}
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {copy.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-yellow transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="text-primary-green group-hover:text-primary-yellow transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-4 h-1 bg-primary-yellow rounded-full"></span>
              {copy.footer.solutionsTitle}
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {copy.nav.solutionItems.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-yellow transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="text-primary-green group-hover:text-primary-yellow transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-4 h-1 bg-primary-green rounded-full"></span>
              {copy.footer.contactTitle}
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-green shrink-0 mt-0.5" size={18} />
                <span>Ouagadougou, Burkina Faso</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-green shrink-0" size={18} />
                <span>+1 (404) 936-1540</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary-green shrink-0" size={18} />
                <a href="mailto:cm@wendegoundimedical.com" className="hover:text-primary-yellow transition-colors">cm@wendegoundimedical.com</a>
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="text-primary-green shrink-0" size={18} />
                <a href="https://www.wendegoundimedical.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-yellow transition-colors">www.wendegoundimedical.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {copy.footer.copyright}
          </p>
          <div className="flex items-center gap-1 text-sm font-medium">
            <span className="text-primary-green">{copy.footer.values[0]}</span>
            <span className="text-primary-yellow mx-1">•</span>
            <span className="text-primary-green">{copy.footer.values[1]}</span>
            <span className="text-primary-yellow mx-1">•</span>
            <span className="text-primary-green">{copy.footer.values[2]}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
