import { ShieldCheck, Clock, Globe } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck size={36} className="text-white relative z-10" />,
      title: "Quality Assured",
      desc: "Supplying only clinically validated and certified diagnostic equipment from reputable global brands.",
      bgPattern: "radial-gradient(#ffffff 2px, transparent 2px)",
      cardBg: "bg-primary-green",
      textColor: "text-green-50",
      titleColor: "text-white"
    },
    {
      icon: <Clock size={36} className="text-white relative z-10" />,
      title: "24/7 Support",
      desc: "Dedicated local team providing continuous technical support, training, and rapid maintenance.",
      bgPattern: "radial-gradient(#ffffff 2px, transparent 2px)",
      cardBg: "bg-primary-red",
      textColor: "text-red-50",
      titleColor: "text-white"
    },
    {
      icon: <Globe size={36} className="text-gray-900 relative z-10" />,
      title: "Global Standards",
      desc: "Bringing world-class healthcare infrastructure directly to Burkina Faso and the wider region.",
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Partner With Us</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are committed to sustainable healthcare development across West Africa, offering reliable technology and end-to-end support rather than simply trading products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div key={i} className={`group relative ${item.cardBg} p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden z-10 cursor-default`}>
              
              {/* Subtle Low-Opacity Background Pattern */}
              <div 
                className="absolute inset-0 opacity-[0.1] group-hover:opacity-[0.15] transition-opacity duration-500 z-0" 
                style={{ backgroundImage: item.bgPattern, backgroundSize: '24px 24px' }}
              ></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md mb-8 border border-white/30 relative shadow-inner">
                  {item.icon}
                </div>
                <h3 className={`text-2xl font-bold ${item.titleColor} mb-4`}>{item.title}</h3>
                <p className={`${item.textColor} leading-relaxed text-lg font-medium`}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}