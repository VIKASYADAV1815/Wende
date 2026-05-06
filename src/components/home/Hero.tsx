import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-88px)] md:min-h-[calc(100vh-96px)] lg:min-h-[calc(100vh-112px)] flex items-center py-14 sm:py-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop"
          alt="Modern medical laboratory"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-5 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-green"></span>
            <span className="text-[11px] sm:text-sm font-medium tracking-wider uppercase">Wende Goundi Med Dx</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5 sm:mb-6">
            Bridging the Gap in <span className="text-primary-green">Healthcare</span> Infrastructure
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-7 sm:mb-8 leading-relaxed max-w-2xl">
            Delivering reliable medical technology, specialized diagnostic equipment, and comprehensive healthcare solutions across Burkina Faso and West Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/about"
              className="bg-primary-red hover:bg-red-700 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-lg shadow-red-500/30 text-sm sm:text-base"
            >
              Discover Our Vision <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-50 text-gray-900 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold transition-all duration-300 text-center border border-gray-200 text-sm sm:text-base"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}