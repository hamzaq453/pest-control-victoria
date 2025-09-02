import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#4A7C59] via-[#2E5D3A] to-[#1A3D1F] overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #FFFFFF 1px, transparent 1px),
              linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#7FB069]/30 to-[#A8D5BA]/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-[#FFFFFF]/20 to-[#7FB069]/20 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-[#A8D5BA]/25 to-[#F7F3E9]/40 rounded-full blur-md"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-[#7FB069]/20 to-[#FFFFFF]/15 rounded-full blur-lg"></div>
        </div>

        {/* Subtle Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#1A3D1F]/40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              About <span className="text-[#A8D5BA]">Pest Free Victoria</span>
            </h1>
            <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Your trusted partner for professional pest control services across Victoria. 
              We've been protecting homes and businesses since 2009 with reliable, effective, and environmentally conscious solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/About-1.png"
                alt="Pest Control Professional at Work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2E3A24]/20 to-transparent"></div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A24] leading-tight">
                  Our <span className="text-[#6B9071]">Story</span>
                </h2>
                <p className="text-lg text-[#2E3A24]/80 leading-relaxed">
                  Founded in 2009, Pest Free Victoria began with a simple mission: to provide reliable, 
                  professional pest control services that protect both residential and commercial properties 
                  across Victoria. What started as a small family business has grown into one of the region's 
                  most trusted pest management companies.
                </p>
                <p className="text-lg text-[#2E3A24]/80 leading-relaxed">
                  Our commitment to excellence, environmental responsibility, and customer satisfaction has 
                  remained unchanged throughout our journey. We believe that every home and business deserves 
                  to be pest-free, and we work tirelessly to make that a reality.
                </p>
              </div>

              {/* Key Milestones */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-[#F7F3E9] rounded-xl">
                  <div className="text-3xl font-bold text-[#6B9071] mb-2">2009</div>
                  <div className="text-sm text-[#2E3A24]/70">Company Founded</div>
                </div>
                <div className="text-center p-4 bg-[#F7F3E9] rounded-xl">
                  <div className="text-3xl font-bold text-[#6B9071] mb-2">500+</div>
                  <div className="text-sm text-[#2E3A24]/70">Happy Customers</div>
                </div>
                <div className="text-center p-4 bg-[#F7F3E9] rounded-xl">
                  <div className="text-3xl font-bold text-[#6B9071] mb-2">15+</div>
                  <div className="text-sm text-[#2E3A24]/70">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-[#F7F3E9] rounded-xl">
                  <div className="text-3xl font-bold text-[#6B9071] mb-2">24/7</div>
                  <div className="text-sm text-[#2E3A24]/70">Emergency Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A24] mb-6">
              Our <span className="text-deep-forest">Mission</span> & Values
            </h2>
            <p className="text-xl text-[#2E3A24]/80 max-w-3xl mx-auto">
              We're driven by our commitment to excellence, environmental responsibility, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#A8B5A2] to-[#6B9071] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2E3A24] mb-4">Excellence</h3>
              <p className="text-[#2E3A24]/70">
                We maintain the highest standards in pest control, using proven methods and continuous training 
                to deliver exceptional results for every client.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6B9071] to-[#2E3A24] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2E3A24] mb-4">Environmental Care</h3>
              <p className="text-[#2E3A24]/70">
                We prioritize eco-friendly solutions that effectively eliminate pests while protecting your family, 
                pets, and the environment we all share.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A24] to-[#6B9071] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2E3A24] mb-4">Customer Focus</h3>
              <p className="text-[#2E3A24]/70">
                Your satisfaction is our priority. We build lasting relationships through transparent communication, 
                reliable service, and guaranteed results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A24] leading-tight">
                  Comprehensive <span className="text-[#6B9071]">Solutions</span>
                </h2>
                <p className="text-lg text-[#2E3A24]/80 leading-relaxed">
                  From residential pest control to commercial pest management, we provide tailored solutions 
                  that address your specific pest problems with the highest standards of safety and effectiveness.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-[#F7F3E9] p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-[#2E3A24] mb-3">Residential Services</h4>
                  <p className="text-[#2E3A24]/70">
                    Protect your home and family with our comprehensive residential pest control services, 
                    including regular maintenance and emergency treatments.
                  </p>
                </div>

                <div className="bg-[#F7F3E9] p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-[#2E3A24] mb-3">Commercial Solutions</h4>
                  <p className="text-[#2E3A24]/70">
                    Maintain your business reputation with our professional commercial pest management services 
                    that ensure compliance and minimal disruption.
                  </p>
                </div>

                <div className="bg-[#F7F3E9] p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-[#2E3A24] mb-3">Emergency Response</h4>
                  <p className="text-[#2E3A24]/70">
                    Available 24/7 for urgent pest infestations that require immediate attention and 
                    professional intervention.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center space-x-2 bg-[#2E3A24] text-[#F7F3E9] px-6 py-3 rounded-xl hover:bg-[#6B9071] transition-colors duration-300"
                >
                  <span className="font-semibold">View All Services</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
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

      {/* Team & Certifications Section */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A24] mb-6">
              Our <span className="text-deep-forest">Team</span> & Certifications
            </h2>
            <p className="text-xl text-[#2E3A24]/80 max-w-3xl mx-auto">
              Our licensed and certified professionals are committed to providing the highest quality pest control services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#A8B5A2] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#2E3A24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#2E3A24] mb-2">Licensed</h3>
              <p className="text-[#2E3A24]/70 text-sm">All technicians are fully licensed and certified</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#6B9071] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#2E3A24] mb-2">Insured</h3>
              <p className="text-[#2E3A24]/70 text-sm">Fully insured for your peace of mind</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#2E3A24] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-creamy-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#2E3A24] mb-2">EPA Certified</h3>
              <p className="text-[#2E3A24]/70 text-sm">Environmentally conscious pest control</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#A8B5A2] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#2E3A24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#2E3A24] mb-2">Trained</h3>
              <p className="text-[#2E3A24]/70 text-sm">Continuous training and development</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2E3A24] to-[#6B9071] mb-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-creamy-white mb-6">
            Ready to Experience Pest-Free Living?
          </h2>
          <p className="text-xl text-creamy-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Pest Free Victoria for their pest control needs. 
            Get your free quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-creamy-white text-[#2E3A24] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#F7F3E9] transition-colors duration-300"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="border-2 border-creamy-white text-creamy-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-creamy-white hover:text-[#2E3A24] transition-colors duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
