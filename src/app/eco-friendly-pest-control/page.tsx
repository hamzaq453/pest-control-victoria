import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eco-Friendly Pest Control | Safe & Non-Toxic | Pest Free Victoria",
  description: "Eco-friendly pest control solutions in Melbourne. Safe for families, pets & environment. Non-toxic methods with guaranteed results.",
  keywords: "eco-friendly pest control, green pest control, non-toxic pest control, safe pest control, environmentally friendly pest control",
};

export default function EcoFriendlyPestControlPage() {
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
            <div className="inline-block bg-[#A8D5BA] text-[#2E3A24] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🌱 Eco-Friendly Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Eco-Friendly Pest Control Solutions in <span className="text-[#A8D5BA]">Melbourne</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md mb-8">
              Safe, non-toxic pest control for your family, pets & environment. Our eco-friendly service options are effective yet gentle — perfect for sensitive homes, families with children, and pet owners in Melbourne and Victoria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#F7F3E9] text-[#2E3A24] hover:bg-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Eco-Friendly Quote
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

      {/* What is Eco-Friendly Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A24] mb-6">
                What is Eco-Friendly Pest Control?
              </h2>
              <p className="text-lg text-[#2E3A24]/80 mb-4 leading-relaxed">
                Eco-friendly pest control uses safe, non-toxic methods that protect your family, pets, and the environment. Our eco-friendly pest control solutions in Melbourne combine proven natural methods with modern technology to eliminate pests without harmful chemicals.
              </p>
              <p className="text-base text-[#2E3A24]/70 mb-6 leading-relaxed">
                Unlike traditional pest control that relies on harsh chemicals, eco-friendly pest control near you uses biodegradable solutions, natural repellents, and environmentally conscious methods that are safe for children, pets, and local ecosystems.
              </p>
              <p className="text-base text-[#2E3A24]/70 leading-relaxed">
                We prioritize the safety of your loved ones while delivering guaranteed results. Our eco-friendly pest control services are perfect for Melbourne homes, families with children, and pet owners who want effective pest elimination without compromising safety.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#6B9071] to-[#2E3A24] rounded-2xl p-8 text-[#F7F3E9] shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Why Choose Eco-Friendly Pest Control?</h3>
              <div className="space-y-4">
                <div className="bg-[#F7F3E9]/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-[#A8D5BA] mb-2">100%</div>
                  <div className="text-sm">Safe for Children & Pets</div>
                </div>
                <div className="bg-[#F7F3E9]/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-[#A8D5BA] mb-2">0%</div>
                  <div className="text-sm">Harmful Chemicals</div>
                </div>
                <div className="bg-[#F7F3E9]/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-[#A8D5BA] mb-2">100%</div>
                  <div className="text-sm">Effective Results</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Eco-Friendly Methods Section */}
      <section className="py-16 md:py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A24] mb-4">
              Our Eco-Friendly Pest Control Methods
            </h2>
            <p className="text-lg text-[#2E3A24]/80 max-w-3xl mx-auto">
              We use safe, non-toxic methods for eco-friendly pest control in Melbourne and across Victoria. Our environmentally conscious approach protects your family and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#6B9071] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2E3A24] mb-2">Natural Treatments</h3>
              <p className="text-[#2E3A24]/70">
                Biodegradable, plant-based solutions that are safe for your family and pets while effectively eliminating pests.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#6B9071] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2E3A24] mb-2">Non-Toxic Solutions</h3>
              <p className="text-[#2E3A24]/70">
                Safe, non-toxic pest control methods that won't harm children, pets, or the environment in your Melbourne home.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#6B9071] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2E3A24] mb-2">Environmentally Conscious</h3>
              <p className="text-[#2E3A24]/70">
                Biodegradable solutions that protect local ecosystems and wildlife in Victoria while eliminating pests.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#6B9071] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2E3A24] mb-2">Highly Effective</h3>
              <p className="text-[#2E3A24]/70">
                Proven eco-friendly methods that deliver the same results as traditional treatments without harmful chemicals.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#6B9071] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2E3A24] mb-2">No Lingering Odors</h3>
              <p className="text-[#2E3A24]/70">
                Natural treatments that leave your Melbourne home fresh and odor-free, perfect for sensitive households.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#6B9071] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2E3A24] mb-2">Fast Results</h3>
              <p className="text-[#2E3A24]/70">
                Quick-acting eco-friendly solutions that provide fast results without compromising safety or effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A24] mb-4">
              Benefits of Eco-Friendly Pest Control
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#A8B5A2] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#2E3A24] text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2E3A24] mb-1 text-lg">Safe for Families & Pets</h4>
                  <p className="text-[#2E3A24]/70">
                    Non-toxic eco-friendly pest control treatments that won't harm children, pets, or the environment. Perfect for Melbourne families with young children and pets.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#A8B5A2] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#2E3A24] text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2E3A24] mb-1 text-lg">Environmentally Conscious</h4>
                  <p className="text-[#2E3A24]/70">
                    Biodegradable eco-friendly solutions that protect local ecosystems and wildlife in Victoria while effectively eliminating pests.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#A8B5A2] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#2E3A24] text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2E3A24] mb-1 text-lg">No Harmful Chemicals</h4>
                  <p className="text-[#2E3A24]/70">
                    Our eco-friendly pest control methods use zero harmful chemicals, making them safe for sensitive homes and individuals with chemical sensitivities.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#A8B5A2] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#2E3A24] text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2E3A24] mb-1 text-lg">Highly Effective</h4>
                  <p className="text-[#2E3A24]/70">
                    Proven eco-friendly methods that deliver the same results as traditional treatments, ensuring complete pest elimination in your Melbourne property.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#A8B5A2] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#2E3A24] text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2E3A24] mb-1 text-lg">No Lingering Odors</h4>
                  <p className="text-[#2E3A24]/70">
                    Natural eco-friendly treatments that leave your home fresh and odor-free, unlike traditional chemical treatments.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#A8B5A2] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#2E3A24] text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2E3A24] mb-1 text-lg">Guaranteed Results</h4>
                  <p className="text-[#2E3A24]/70">
                    Our eco-friendly pest control services come with guaranteed results, ensuring your Melbourne property remains pest-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#2E3A24] to-[#6B9071] mb-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F7F3E9] mb-6">
            Get Eco-Friendly Pest Control in Melbourne
          </h2>
          <p className="text-xl text-[#F7F3E9]/90 mb-8 max-w-2xl mx-auto">
            Experience safe, non-toxic eco-friendly pest control solutions for your Melbourne home. Safe for families, pets & environment. Get your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#F7F3E9] text-[#2E3A24] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white transition-colors duration-300"
            >
              Get Eco-Friendly Quote
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
