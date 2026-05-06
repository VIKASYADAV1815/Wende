import { Truck, Wrench, Settings, GraduationCap, PackageOpen, Building, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Platform() {
  const items = [
    { 
      icon: Truck, 
      title: "Equipment Distribution", 
      desc: "Delivering state-of-the-art medical technology from top global manufacturers directly to your facility.",
      color: "text-primary-red", 
      bg: "bg-red-50",
      borderHover: "hover:border-primary-red/30 hover:shadow-red-900/5"
    },
    { 
      icon: Wrench, 
      title: "Technical Support", 
      desc: "Ensuring minimal downtime with our dedicated team of expert local engineers and rapid response times.",
      color: "text-primary-green", 
      bg: "bg-green-50",
      borderHover: "hover:border-primary-green/30 hover:shadow-green-900/5"
    },
    { 
      icon: Settings, 
      title: "Installation Services", 
      desc: "Professional setup, calibration, and testing of complex diagnostic and laboratory systems.",
      color: "text-primary-yellow", 
      bg: "bg-yellow-50",
      borderHover: "hover:border-primary-yellow/50 hover:shadow-yellow-900/5"
    },
    { 
      icon: GraduationCap, 
      title: "Capacity Building", 
      desc: "Empowering healthcare professionals with comprehensive operational and clinical training.",
      color: "text-primary-green", 
      bg: "bg-green-50",
      borderHover: "hover:border-primary-green/30 hover:shadow-green-900/5"
    },
    { 
      icon: PackageOpen, 
      title: "Consumable Supply", 
      desc: "Reliable, uninterrupted supply chains for essential medical reagents and daily laboratory materials.",
      color: "text-primary-red", 
      bg: "bg-red-50",
      borderHover: "hover:border-primary-red/30 hover:shadow-red-900/5"
    },
    { 
      icon: Building, 
      title: "Facility Support", 
      desc: "End-to-end consulting for hospital infrastructure development and laboratory modernization.",
      color: "text-primary-yellow", 
      bg: "bg-yellow-50",
      borderHover: "hover:border-primary-yellow/50 hover:shadow-yellow-900/5"
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Soft background glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-yellow/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row gap-8 items-end mb-16 max-w-7xl mx-auto">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold tracking-widest uppercase bg-white border border-gray-200 rounded-full text-gray-700 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse"></span>
              Platform Focus
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Building a Comprehensive <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-red via-primary-yellow to-primary-green">Medical Technology</span> Platform
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              We are not simply looking for products to trade. We are building a long-term medical technology platform focused on excellence and regional impact.
            </p>
          </div>
          <div className="lg:w-1/3 flex lg:justify-end w-full pb-2">
            <Link href="/about" className="inline-flex items-center gap-3 font-bold text-gray-900 hover:text-primary-green transition-colors group">
              Learn about our approach
              <span className="bg-gray-100 group-hover:bg-green-100 p-3 rounded-full transition-colors">
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`group relative isolate flex flex-col p-8 rounded-3xl bg-white/95 backdrop-blur-sm border border-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(15,23,42,0.14)] ${item.borderHover}`}
            >
              <div className="absolute inset-0 rounded-3xl ring-1 ring-gray-100/80 pointer-events-none group-hover:ring-primary-green/20 transition-colors"></div>
              <div className={`${item.bg} ${item.color} w-14 h-14 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md`}>
                <item.icon size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}