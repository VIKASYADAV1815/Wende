import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-green"></div>
      <div className="absolute inset-0 bg-[url('/1.jpg')] opacity-10 mix-blend-overlay object-cover"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-6 max-w-3xl mx-auto">
          Ready to modernize your healthcare facility?
        </h2>
        <p className="text-green-100 text-xl mb-10 max-w-2xl mx-auto">
          Partner with us for reliable medical technology, infrastructure development, and consistent technical support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-primary-yellow hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg"
          >
            Contact Our Team
          </Link>
          <Link
            href="/projects"
            className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
          >
            View Our Projects
          </Link>
        </div>
      </div>
    </section>
  );
}