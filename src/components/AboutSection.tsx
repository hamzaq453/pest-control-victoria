import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="min-h-screen bg-white py-20">
      {/* First Row - Image Left, Content Right */}
      <div className="min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Side - Image */}
          <div className="relative h-screen lg:h-full ml-18">
            <Image
              src="/About-1.png"
              alt="Pest Control Professional at Work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2E3A24]/20 to-transparent"></div>
          </div>

          {/* Right Side - Content */}
          <div className="flex items-center justify-center p-8 lg:p-16">
            <div className="max-w-lg space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-[#2E3A24] leading-tight">
                  Professional <span className="text-[#6B9071]">Pest Control</span> Services
                </h2>
                <p className="text-lg text-[#2E3A24]/80 leading-relaxed">
                  With over 15 years of experience in pest management, Pest Free Victoria has been protecting homes and businesses across the region with reliable, effective, and environmentally conscious solutions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#6B9071] mb-2">15+</div>
                  <div className="text-sm text-[#2E3A24]/70">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#6B9071] mb-2">500+</div>
                  <div className="text-sm text-[#2E3A24]/70">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#6B9071] mb-2">24/7</div>
                  <div className="text-sm text-[#2E3A24]/70">Emergency Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#6B9071] mb-2">100%</div>
                  <div className="text-sm text-[#2E3A24]/70">Guaranteed Results</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#2E3A24]">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#A8B5A2] rounded-full flex items-center justify-center">
                      <span className="text-[#2E3A24] text-sm font-bold">✓</span>
                    </div>
                    <span className="text-[#2E3A24]/80">Licensed and Insured Professionals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#A8B5A2] rounded-full flex items-center justify-center">
                      <span className="text-[#2E3A24] text-sm font-bold">✓</span>
                    </div>
                    <span className="text-[#2E3A24]/80">Eco-Friendly Treatment Methods</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#A8B5A2] rounded-full flex items-center justify-center">
                      <span className="text-[#2E3A24] text-sm font-bold">✓</span>
                    </div>
                    <span className="text-[#2E3A24]/80">Same-Day Emergency Response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row - Content Left, Image Right */}
      <div className="min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Side - Content */}
          <div className="flex items-center justify-center p-8 lg:p-16 order-2 lg:order-1">
            <div className="max-w-lg space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-[#2E3A24] leading-tight">
                  Comprehensive <span className="text-[#6B9071]">Solutions</span> for Every Need
                </h2>
                <p className="text-lg text-[#2E3A24]/80 leading-relaxed">
                  From residential pest control to commercial pest management, we provide tailored solutions that address your specific pest problems with the highest standards of safety and effectiveness.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-[#F7F3E9] p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-[#2E3A24] mb-3">Residential Services</h4>
                  <p className="text-[#2E3A24]/70">
                    Protect your home and family with our comprehensive residential pest control services, including regular maintenance and emergency treatments.
                  </p>
                </div>

                <div className="bg-[#F7F3E9] p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-[#2E3A24] mb-3">Commercial Solutions</h4>
                  <p className="text-[#2E3A24]/70">
                    Maintain your business reputation with our professional commercial pest management services that ensure compliance and minimal disruption.
                  </p>
                </div>

                <div className="bg-[#F7F3E9] p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-[#2E3A24] mb-3">Emergency Response</h4>
                  <p className="text-[#2E3A24]/70">
                    Available 24/7 for urgent pest infestations that require immediate attention and professional intervention.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <div className="inline-flex items-center space-x-2 bg-[#2E3A24] text-[#F7F3E9] px-6 py-3 rounded-xl">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-semibold">Serving Victoria Since 2009</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-screen lg:h-full order-1 lg:order-2">
            <Image
              src="/About-2.jpg"
              alt="Pest Control Vehicle and Equipment"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#2E3A24]/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
