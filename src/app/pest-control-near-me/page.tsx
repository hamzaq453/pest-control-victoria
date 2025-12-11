import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pest Control Near Me | Melbourne & Victoria | Pest Free Victoria",
  description: "Find professional pest control near you in Melbourne, Geelong, Ballarat & all Victoria. Same-day service available. Get free quote today.",
  keywords: "pest control near me, pest control near you, local pest control, Melbourne pest control, Victoria pest control",
};

export default function PestControlNearMePage() {
  const serviceAreas = [
    { name: "Melbourne", suburbs: "All Melbourne suburbs", description: "Fast pest control services across all Melbourne suburbs" },
    { name: "Geelong", suburbs: "Geelong & surrounding areas", description: "Professional pest management in Geelong & region" },
    { name: "Ballarat", suburbs: "Ballarat & region", description: "Reliable pest control solutions for Ballarat residents" },
    { name: "Bendigo", suburbs: "Bendigo & region", description: "Expert pest control services in Bendigo" },
    { name: "Warrnambool", suburbs: "Warrnambool & region", description: "Comprehensive pest management for Warrnambool" },
    { name: "All Victoria", suburbs: "Statewide coverage", description: "We serve all areas across Victoria with same-day service" },
  ];

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
              Pest Control Near You in <span className="text-[#A8D5BA]">Melbourne & Victoria</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md mb-8">
              Fast, local pest control services available today. We're your local pest control experts serving Melbourne, Geelong, Ballarat, and all of Victoria with same-day service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#F7F3E9] text-[#2E3A24] hover:bg-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Find Local Service
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

      {/* Service Areas Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E3A24] mb-4">
              Pest Control Services Near You
            </h2>
            <p className="text-lg md:text-xl text-[#2E3A24]/80 max-w-3xl mx-auto">
              We provide fast, reliable pest control services across Melbourne and all of Victoria. Find pest control near you with our same-day service available in your area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-[#F7F3E9] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#A8B5A2]/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#2E3A24] mb-2">
                      {area.name}
                    </h3>
                    <p className="text-sm text-[#6B9071] font-medium mb-2">
                      {area.suburbs}
                    </p>
                    <p className="text-[#2E3A24]/70 text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-[#6B9071] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-[#6B9071] font-semibold hover:text-[#2E3A24] transition-colors duration-200 text-sm"
                >
                  Get Quote for {area.name}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Local Section */}
      <section className="py-16 md:py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A24] mb-4">
              Why Choose Local Pest Control Near You?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#6B9071] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2E3A24] mb-2">Fast Response Times</h3>
              <p className="text-[#2E3A24]/70">
                Local pest control means faster service. We provide same-day pest control near you with quick response times across Melbourne and Victoria.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#6B9071] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2E3A24] mb-2">Local Knowledge</h3>
              <p className="text-[#2E3A24]/70">
                We understand local pest problems in Melbourne and Victoria. Our expertise in regional pest issues ensures effective solutions for your area.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#6B9071] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2E3A24] mb-2">Same-Day Service</h3>
              <p className="text-[#2E3A24]/70">
                Need pest control near you today? We offer same-day service across Melbourne, Geelong, Ballarat, and all of Victoria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A24] mb-4">
              Pest Control Services Available Near You
            </h2>
            <p className="text-lg text-[#2E3A24]/80 max-w-3xl mx-auto">
              We provide comprehensive pest control services near you, including:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {["Ant Control", "Rodent Control", "Spider Control", "Cockroach Control", "Wasp Removal", "Bed Bug Control", "Termite Treatment", "General Pest Control"].map((service, index) => (
              <Link
                key={index}
                href="/services"
                className="bg-[#F7F3E9] rounded-xl p-4 text-center hover:bg-[#A8B5A2] hover:text-[#2E3A24] transition-colors duration-200 font-medium text-[#2E3A24]"
              >
                {service}
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-block bg-[#2E3A24] text-[#F7F3E9] hover:bg-[#6B9071] px-8 py-3 rounded-xl font-semibold transition-colors duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#2E3A24] to-[#6B9071] mb-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F7F3E9] mb-6">
            Need Pest Control Near You?
          </h2>
          <p className="text-xl text-[#F7F3E9]/90 mb-8 max-w-2xl mx-auto">
            Get fast, local pest control services in Melbourne, Geelong, Ballarat, and all of Victoria. Same-day service available. Get your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#F7F3E9] text-[#2E3A24] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white transition-colors duration-300"
            >
              Get Local Service Quote
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
