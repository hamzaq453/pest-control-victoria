import Link from "next/link";

export default function LocalServiceAreasSection() {
  const serviceAreas = [
    { name: "Melbourne", description: "Fast pest control services across all Melbourne suburbs" },
    { name: "Geelong", description: "Professional pest management in Geelong & surrounding areas" },
    { name: "Ballarat", description: "Reliable pest control solutions for Ballarat residents" },
    { name: "Bendigo", description: "Expert pest control services in Bendigo & region" },
    { name: "Warrnambool", description: "Comprehensive pest management for Warrnambool" },
    { name: "All Victoria", description: "We serve all areas across Victoria with same-day service" },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#A8B5A2] text-[#2E3A24] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Local Pest Control Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E3A24] mb-4">
            Pest Control Near You in <span className="text-[#6B9071]">Melbourne & Victoria</span>
          </h2>
          <p className="text-lg md:text-xl text-[#2E3A24]/80 max-w-3xl mx-auto leading-relaxed">
            We provide fast, local pest control services across Victoria. Our expert team is available for same-day service in your area, ensuring quick response times and effective solutions for all your pest problems.
          </p>
        </div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serviceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-[#F7F3E9] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#A8B5A2]/20"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#2E3A24] mb-2">
                    {area.name}
                  </h3>
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

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#2E3A24] to-[#6B9071] rounded-2xl p-8 md:p-12 text-center text-[#F7F3E9]">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need Pest Control Near You?
          </h3>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto opacity-90">
            We provide same-day pest control services across Melbourne, Geelong, Ballarat, and all of Victoria. Get your free quote today and experience fast, reliable pest control near you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#F7F3E9] text-[#2E3A24] hover:bg-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get Local Service Quote
            </Link>
            <a
              href="tel:0451004400"
              className="border-2 border-[#F7F3E9] text-[#F7F3E9] hover:bg-[#F7F3E9] hover:text-[#2E3A24] px-8 py-3 rounded-xl font-semibold transition-colors duration-300"
            >
              Call: (0451) 004-400
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

