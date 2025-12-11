import Link from "next/link";

export default function FumigationServicesSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#A8B5A2] text-[#2E3A24] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Professional Fumigation Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E3A24] mb-4">
            Professional <span className="text-[#6B9071]">Fumigation Services</span> for Commercial & Residential
          </h2>
          <p className="text-lg md:text-xl text-[#2E3A24]/80 max-w-3xl mx-auto leading-relaxed">
            Complete fumigation solutions for Melbourne and Victoria. Our licensed professionals provide safe, effective fumigation services for both residential and commercial properties, ensuring complete pest elimination.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Residential Fumigation */}
          <div className="bg-[#F7F3E9] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
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
          <div className="bg-gradient-to-br from-[#2E3A24] to-[#6B9071] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-[#F7F3E9]">
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

        {/* Process Section */}
        <div className="bg-[#F7F3E9] rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#2E3A24] mb-6 text-center">
            Our Fumigation Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6B9071] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-[#2E3A24] mb-2">Inspection</h4>
              <p className="text-sm text-[#2E3A24]/70">Thorough assessment of your property</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6B9071] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold text-[#2E3A24] mb-2">Preparation</h4>
              <p className="text-sm text-[#2E3A24]/70">Safe preparation and sealing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6B9071] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-[#2E3A24] mb-2">Fumigation</h4>
              <p className="text-sm text-[#2E3A24]/70">Professional treatment application</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6B9071] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h4 className="font-semibold text-[#2E3A24] mb-2">Verification</h4>
              <p className="text-sm text-[#2E3A24]/70">Post-treatment inspection & clearance</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#2E3A24] to-[#6B9071] rounded-2xl p-8 md:p-12 text-[#F7F3E9]">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Fumigation Services in Melbourne or Victoria?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
              Our licensed fumigation professionals provide safe, effective fumigation services for residential and commercial properties. Get your free quote today for fumigation services near you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#F7F3E9] text-[#2E3A24] hover:bg-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get Fumigation Service Quote
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
      </div>
    </section>
  );
}

