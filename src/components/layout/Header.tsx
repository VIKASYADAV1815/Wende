"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { copy } = useLanguage();

  const navLinks = [
    { key: "home", name: copy.nav.home, href: "/" },
    { key: "about", name: copy.nav.about, href: "/about" },
    {
      key: "solutions",
      name: copy.nav.solutions,
      href: "#",
      subLinks: copy.nav.solutionItems.map((item) => ({ name: item.label, href: item.href }))
    },
    { key: "projects", name: copy.nav.projects, href: "/projects" },
    { key: "contact", name: copy.nav.contact, href: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-3">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink min-w-0">
          <Image
            src="/logo.png"
            alt="Wende Goundi Med Dx Logo"
            width={300}
            height={100}
            className={`object-contain transition-all duration-300 ${isScrolled ? "h-14 sm:h-14 md:h-20 w-auto" : "h-14 sm:h-14 md:h-20 w-auto"}`}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="text-gray-700 font-medium hover:text-primary-green transition-colors flex items-center gap-1 py-2"
              >
                {link.name}
                {link.subLinks && <ChevronDown size={16} />}
              </Link>

              {/* Dropdown Menu */}
              {link.subLinks && activeDropdown === link.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100"
                >
                  <div className="py-2">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-green transition-colors"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="bg-primary-red hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-colors flex items-center gap-2 shadow-lg shadow-red-500/30"
          >
            <PhoneCall size={18} />
            <span>{copy.nav.quote}</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-800 p-2 shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? copy.nav.closeMenu : copy.nav.openMenu}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 max-h-[calc(100vh-88px)] overflow-y-auto flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <Link
                    href={link.href}
                    className="text-gray-800 font-medium py-2 text-lg"
                    onClick={() => !link.subLinks && setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <div className="pl-4 flex flex-col gap-2 mt-1 border-l-2 border-gray-100">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className="text-gray-600 py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="bg-primary-green text-white px-6 py-3 rounded-lg font-medium text-center mt-4 flex items-center justify-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <PhoneCall size={18} />
                <span>{copy.nav.contactNow}</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
