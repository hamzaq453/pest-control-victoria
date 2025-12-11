import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import LocalServiceAreasSection from "@/components/LocalServiceAreasSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import EcoFriendlySection from "@/components/EcoFriendlySection";
import FumigationServicesSection from "@/components/FumigationServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="">
     
      <HeroSection />
      <LocalServiceAreasSection />
      <ServicesSection />
      <PricingSection />
      <EcoFriendlySection />
      <FumigationServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />

    
    </div>
  );
}
