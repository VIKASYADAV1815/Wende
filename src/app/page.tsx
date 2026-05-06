import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import About from "@/components/home/About";
import Solutions from "@/components/home/Solutions";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Platform from "@/components/home/Platform";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Stats />
      <About />
      <Solutions />
      <WhyChooseUs />
      <Platform />
      <CTA />
    </div>
  );
}