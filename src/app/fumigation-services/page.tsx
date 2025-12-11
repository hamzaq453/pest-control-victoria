import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fumigation Services | Commercial & Residential | Pest Free Victoria",
  description: "Professional fumigation services in Melbourne. Commercial & residential fumigation solutions. Licensed & insured. Get quote today.",
  keywords: "fumigation services, commercial fumigation, residential fumigation, fumigation near me, professional fumigation",
};

export default function FumigationServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#4A7C59] via-[#2E5D3A] to-[#1A3D1F] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #FFFFFF 1px, transparent 1px),
              linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Professional <span className="text-[#A8D5BA]">Fumigation Services</span> in Melbourne & Victoria
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md mb-8">
              Complete fumigation solutions for commercial & residential properties. Our licensed professionals provide safe, effective fumigation services ensuring complete pest elimination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#F7F3E9] text-[#2E3A24] hover:bg-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Fumigation Quote
              </Link>
              <a
                href="tel:0451004400"
                className="border-2 border-[#F7F3E9] text-[#F7F3E9] hover:bg-[#F7F3E9] hover:text-[#2E3A24] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Call: (0451) 004-400
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is Fumigation Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A24] mb-6">
                What is Fumigation?
              </h2>
              <p className="text-lg text-[#2E3A24]/80 mb-4 leading-relaxed">
                Fumigation is a comprehensive pest control method that uses gaseous pesticides to eliminate pests throughout an entire structure. Our professional fumigation services in Melbourne and Victoria provide complete pest elimination for both residential and commercial properties.
              </p>
              <p className="text-base text-[#2E3A24]/70 mb-6 leading-relaxed">
                Fumigation services are ideal for severe infestations, structural pest problems, and situations requiring complete pest elimination. Our licensed fumigation professionals ensure safe, effective treatment while protecting your property and ensuring compliance with all safety regulations.
              </p>
              <p className="text-base text-[#2E3A24]/70 leading-relaxed">
                When you need fumigation services near you, our team provides professional fumigation solutions with minimal disruption to your home or business operations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#6B9071] to-[#2E3A24] rounded-2xl p-8 text-[#F7F3E9] shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">When is Fumigation Needed?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-[#A8D5BA] font-bold">✓</span>
                  <span>Severe pest infestations requiring complete elimination</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#A8D5BA] font-bold">✓</span>
                  <span>Structural pest problems affecting entire buildings</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#A8D5BA] font-bold">✓</span>
                  <span>Pre-purchase property inspections requiring fumigation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#A8D5BA] font-bold">✓</span>
                  <span>Commercial properties requiring compliance fumigation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#A8D5BA] font-bold">✓</span>
                  <span>Termite and wood-destroying pest treatments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Residential vs Commercial Fumigation */}
      <section className="py-16 md:py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A24] mb-4">
              Residential & Commercial Fumigation Services
            </h2>
            <p className="text-lg text-[#2E3A24]/80 max-w-3xl mx-auto">
              We provide professional fumigation services for both residential and commercial properties in Melbourne and across Victoria.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Residential Fumigation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-[#6B9071] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#2E3A24]">Residential Fumigation</h3>
              </div>
              <p className="text-[#2E3A24]/80 mb-6 leading-relaxed">
                Safe and effective residential fumigation services for Melbourne homes. Our professional fumigation process eliminates all pests while ensuring the safety of your family and property.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#A8B5A2] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#2E3A24]/80">Complete home fumigation services</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#A8B5A2] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#2E3A24]/80">Safe for families and pets</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#A8B5A2] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#2E3A24]/80">Licensed and certified professionals</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#A8B5A2] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#2E3A24]/80">Pre and post-fumigation inspections</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#A8B5A2] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#2E3A24]/80">Guaranteed pest elimination</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-block w-full text-center bg-[#2E3A24] text-[#F7F3E9] hover:bg-[#6B9071] px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
              >
                Get Residential Fumigation Quote
              </Link>
            </div>

            {/* Commercial Fumigation */}
            <div className="bg-gradient-to-br from-[#2E3A24] to-[#6B9071] rounded-2xl p-8 shadow-lg text-[#F7F3E9]">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-[#A8B5A2] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#2E3A24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Commercial Fumigation</h3>
              </div>
              <p className="mb-6 leading-relaxed opacity-90">
                Professional commercial fumigation services for businesses across Melbourne and Victoria. We provide comprehensive fumigation solutions with minimal disruption to your operations.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#A8B5A2] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Business fumigation services</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#A8B5A2] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Compliance documentation provided</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#A8B5A2] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Minimal business disruption</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#A8B5A2] rounded-full mt-2 flex-shrink-0"></div>
                  <span>After-hours service available</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#A8B5A2] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Regular maintenance programs</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-block w-full text-center bg-[#F7F3E9] text-[#2E3A24] hover:bg-[#A8B5A2] px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
              >
                Get Commercial Fumigation Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A24] mb-4">
              Our Fumigation Process
            </h2>
            <p className="text-lg text-[#2E3A24]/80 max-w-3xl mx-auto">
              Our professional fumigation services follow a comprehensive process to ensure safe, effective pest elimination.
            </p>
          </div>

          <div className="bg-[#F7F3E9] rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6B9071] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold text-[#2E3A24] mb-2">Inspection</h4>
                <p className="text-sm text-[#2E3A24]/70">
                  Thorough assessment of your property to determine fumigation needs
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6B9071] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-[#2E3A24] mb-2">Preparation</h4>
                <p className="text-sm text-[#2E3A24]/70">
                  Safe preparation and sealing of the property for fumigation
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6B9071] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-[#2E3A24] mb-2">Fumigation</h4>
                <p className="text-sm text-[#2E3A24]/70">
                  Professional fumigation treatment application by licensed experts
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6B9071] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h4 className="font-semibold text-[#2E3A24] mb-2">Verification</h4>
                <p className="text-sm text-[#2E3A24]/70">
                  Post-treatment inspection and clearance certification
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A24] mb-4">
              Why Choose Our Fumigation Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#6B9071] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2E3A24] mb-2">Licensed Professionals</h3>
              <p className="text-[#2E3A24]/70">
                Our fumigation team is fully licensed and certified, ensuring safe, professional fumigation services in Melbourne and Victoria.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#6B9071] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2E3A24] mb-2">Safe Methods</h3>
              <p className="text-[#2E3A24]/70">
                We use safe fumigation methods that protect your property while ensuring complete pest elimination.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#6B9071] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2E3A24] mb-2">Guaranteed Results</h3>
              <p className="text-[#2E3A24]/70">
                Our fumigation services come with guaranteed results, ensuring your property is completely pest-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#2E3A24] to-[#6B9071] mb-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F7F3E9] mb-6">
            Need Fumigation Services in Melbourne or Victoria?
          </h2>
          <p className="text-xl text-[#F7F3E9]/90 mb-8 max-w-2xl mx-auto">
            Our licensed fumigation professionals provide safe, effective fumigation services for residential and commercial properties. Get your free quote today for fumigation services near you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#F7F3E9] text-[#2E3A24] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white transition-colors duration-300"
            >
              Get Fumigation Service Quote
            </Link>
            <a
              href="tel:0451004400"
              className="border-2 border-[#F7F3E9] text-[#F7F3E9] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#F7F3E9] hover:text-[#2E3A24] transition-colors duration-300"
            >
              Call: (0451) 004-400
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
