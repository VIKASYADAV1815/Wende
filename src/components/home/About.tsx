import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/2.jpg"
                alt="Medical professionals collaborating"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-green/10 mix-blend-multiply"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-primary-red">
                <p className="text-gray-800 font-semibold italic text-lg">
                  "Building a long-term medical technology platform, not simply looking for products to trade."
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-green-100 text-primary-green font-semibold text-sm">
              About Our Company
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Modernizing Healthcare in <span className="text-primary-red">West Africa</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Led by Christopher Moghalu, Wende Goundi Medical Tech & Diagnostic Solutions is dedicated to improving healthcare infrastructure and diagnostic capacity across Burkina Faso and the wider West African region.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We address the growing demand for reliable medical technology by building long-term partnerships with reputable international manufacturers committed to quality, innovation, and sustainable healthcare development.
            </p>
            
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary-red font-semibold hover:text-red-700 transition-colors group"
            >
              Read Our Full Story 
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}