import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pest Control Cost & Pricing | Affordable Rates | Pest Free Victoria",
  description: "Transparent pest control cost & pricing in Melbourne & Victoria. Starting from $150. Get free quote & save 20% on first service.",
  keywords: "pest control cost, affordable pest control, pest control pricing, cheap pest control, pest control rates",
};

export default function PestControlCostPage() {
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
              Affordable Pest Control Cost & Pricing in <span className="text-[#A8D5BA]">Victoria</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md mb-8">
              Transparent pricing with 20% discount available. Get competitive pest control cost for services in Melbourne and across Victoria. Free quotation with no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#F7F3E9] text-[#2E3A24] hover:bg-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:0451004400"
                className="border-2 border-[#F7F3E9] text-[#F7F3E9] hover:bg-[#F7F3E9] hover:text-[#2E3A24] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Call for Pricing: (0451) 004-400
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What Affects Cost Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A24] mb-4">
              What Affects Pest Control Cost?
            </h2>
            <p className="text-lg text-[#2E3A24]/80 max-w-3xl mx-auto">
              Understanding what factors influence pest control cost helps you get the best value for your pest control services in Melbourne and Victoria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-[#F7F3E9] rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#6B9071] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2E3A24] mb-2">Property Size</h3>
              <p className="text-[#2E3A24]/70 text-sm">
                Larger properties require more treatment, affecting the overall pest control cost.
              </p>
            </div>

            <div className="bg-[#F7F3E9] rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#6B9071] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2E3A24] mb-2">Pest Type</h3>
              <p className="text-[#2E3A24]/70 text-sm">
                Different pests require different treatment methods, which impacts pest control cost.
              </p>
            </div>

            <div className="bg-[#F7F3E9] rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#6B9071] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2E3A24] mb-2">Treatment Method</h3>
              <p className="text-[#2E3A24]/70 text-sm">
                Eco-friendly or traditional methods can affect pest control cost and pricing.
              </p>
            </div>

            <div className="bg-[#F7F3E9] rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#6B9071] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2E3A24] mb-2">Location</h3>
              <p className="text-[#2E3A24]/70 text-sm">
                Pest control cost may vary by location in Melbourne and Victoria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discount Information Section */}
      <section className="py-16 md:py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#2E3A24] to-[#6B9071] rounded-2xl p-8 md:p-12 text-center text-[#F7F3E9]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Save 20% on Your First Service
            </h2>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto opacity-90">
              Get affordable pest control cost with our special discount. Save 20% on your first service when you book online. Free quotation available with no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#F7F3E9] text-[#2E3A24] hover:bg-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get Your Free Quote Today
              </Link>
              <a
                href="tel:0451004400"
                className="border-2 border-[#F7F3E9] text-[#F7F3E9] hover:bg-[#F7F3E9] hover:text-[#2E3A24] px-8 py-3 rounded-xl font-semibold transition-colors duration-300"
              >
                Call for Pricing: (0451) 004-400
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Pricing Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A24] mb-4">
              Transparent Pest Control Cost & Pricing
            </h2>
            <p className="text-lg text-[#2E3A24]/80 max-w-3xl mx-auto">
              We believe in transparent pricing. All pest control cost estimates are provided upfront with no hidden fees. Get competitive pricing for pest control near you in Melbourne and across Victoria.
            </p>
          </div>

          <div className="bg-[#F7F3E9] rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6B9071] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2E3A24] mb-2">No Hidden Fees</h3>
                <p className="text-[#2E3A24]/70">
                  Transparent pest control cost with all fees disclosed upfront
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#6B9071] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2E3A24] mb-2">Free Quotation</h3>
                <p className="text-[#2E3A24]/70">
                  Get a free quote for pest control cost with no obligation
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#6B9071] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2E3A24] mb-2">Competitive Rates</h3>
                <p className="text-[#2E3A24]/70">
                  Affordable pest control cost with competitive pricing in Victoria
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#2E3A24] to-[#6B9071] mb-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F7F3E9] mb-6">
            Get Your Free Pest Control Cost Quote
          </h2>
          <p className="text-xl text-[#F7F3E9]/90 mb-8 max-w-2xl mx-auto">
            Get transparent pest control cost & pricing for services in Melbourne and Victoria. Free quotation available with 20% discount on first service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#F7F3E9] text-[#2E3A24] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white transition-colors duration-300"
            >
              Get Free Quote
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
