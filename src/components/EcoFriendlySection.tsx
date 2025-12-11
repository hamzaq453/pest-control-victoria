import Link from "next/link";
import Image from "next/image";

export default function EcoFriendlySection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[#F7F3E9] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-block bg-[#A8B5A2] text-[#2E3A24] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🌱 Eco-Friendly Solutions
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E3A24] mb-6">
              Eco-Friendly Pest Control & <span className="text-[#6B9071]">Eco Pest Control</span> Solutions for Melbourne Homes
            </h2>
            <p className="text-lg md:text-xl text-[#2E3A24]/80 mb-6 leading-relaxed">
              We use safe, non-toxic methods that protect your family, pets & environment. Our eco-friendly pest control and eco pest control services near you in Melbourne and across Victoria offer effective yet gentle solutions — perfect for sensitive homes, families with children, and pet owners.
            </p>
            <p className="text-base md:text-lg text-[#2E3A24]/70 mb-8 leading-relaxed">
              Our eco-friendly pest control and eco pest control approach combines proven natural methods with modern technology to eliminate pests without harmful chemicals. We prioritize the safety of your loved ones while delivering guaranteed results. Safe, non-toxic eco pest control for Melbourne families and environmentally conscious pest control services across Victoria.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#A8B5A2] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#2E3A24] text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2E3A24] mb-1">Safe for Families & Pets</h4>
                  <p className="text-[#2E3A24]/70 text-sm">Non-toxic eco-friendly pest control and eco pest control treatments that won't harm children, pets, or the environment. Perfect for Melbourne families.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#A8B5A2] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#2E3A24] text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2E3A24] mb-1">Environmentally Conscious</h4>
                  <p className="text-[#2E3A24]/70 text-sm">Biodegradable eco-friendly and eco pest control solutions that protect local ecosystems and wildlife in Victoria.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#A8B5A2] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#2E3A24] text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2E3A24] mb-1">Highly Effective</h4>
                  <p className="text-[#2E3A24]/70 text-sm">Proven methods that deliver the same results as traditional treatments.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#A8B5A2] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#2E3A24] text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2E3A24] mb-1">No Lingering Odors</h4>
                  <p className="text-[#2E3A24]/70 text-sm">Natural treatments that leave your home fresh and odor-free.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/eco-friendly-pest-control"
                className="bg-[#2E3A24] text-[#F7F3E9] hover:bg-[#6B9071] px-8 py-3 rounded-xl font-semibold transition-colors duration-300 text-center"
              >
                Learn More About Eco-Friendly Solutions
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[#2E3A24] text-[#2E3A24] hover:bg-[#2E3A24] hover:text-[#F7F3E9] px-8 py-3 rounded-xl font-semibold transition-colors duration-300 text-center"
              >
                Get Free Quote
              </Link>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#6B9071] to-[#2E3A24] rounded-2xl p-8 text-[#F7F3E9] shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Why Choose Eco-Friendly Pest Control?</h3>
              <div className="space-y-4">
                <div className="bg-[#F7F3E9]/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-[#A8B5A2] mb-2">100%</div>
                  <div className="text-sm">Safe for Children & Pets</div>
                </div>
                <div className="bg-[#F7F3E9]/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-[#A8B5A2] mb-2">0%</div>
                  <div className="text-sm">Harmful Chemicals</div>
                </div>
                <div className="bg-[#F7F3E9]/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-[#A8B5A2] mb-2">100%</div>
                  <div className="text-sm">Effective Results</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

