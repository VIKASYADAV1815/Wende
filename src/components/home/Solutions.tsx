import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Activity, Microscope, Stethoscope, HeartPulse } from "lucide-react";

export default function Solutions() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-800 font-semibold text-sm">
            Our Expertise
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Initial Focus Areas</h2>
          <p className="text-gray-600 text-lg">
            Providing comprehensive solutions from specialized diagnostic systems to complete hospital infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Pathology & IHC",
              desc: "Advanced histopathology equipment and immunohistochemistry systems.",
              icon: <Microscope size={32} />,
              img: "/3.jpg"
            },
            {
              title: "Laboratory Systems",
              desc: "Modern analyzers and reliable supply of high-quality consumables.",
              icon: <Activity size={32} />,
              img: "/4.jpg"
            },
            {
              title: "Dialysis Solutions",
              desc: "State-of-the-art dialysis equipment and water treatment systems.",
              icon: <HeartPulse size={32} />,
              img: "/5.jpg"
            },
            {
              title: "Hospital Infrastructure",
              desc: "Operating room setups and comprehensive facility development.",
              icon: <Stethoscope size={32} />,
              img: "/6.jpg"
            }
          ].map((service, index) => (
            <div key={index} className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/10 transition-colors"></div>
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-10 right-6 bg-white p-4 rounded-xl shadow-md text-primary-green">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link
                  href={`/solutions/${service.title.toLowerCase().replace(/ & | /g, "-")}`}
                  className="text-primary-green font-medium flex items-center gap-1 hover:text-green-700 transition-colors"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}