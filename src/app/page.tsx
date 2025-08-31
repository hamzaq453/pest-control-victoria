import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="">
     
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />

    
    </div>
  );
}
