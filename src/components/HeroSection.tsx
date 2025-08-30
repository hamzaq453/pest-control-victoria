import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/Hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-dark-charcoal/40"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-deep-forest rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-creamy-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-medium-sage rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-creamy-white leading-tight">
                <span className="text-creamy-white">Pest-Free</span> Living
                <br />
                <span className="text-light-sage">Starts Here</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-creamy-white/90 leading-relaxed">
                Professional pest control services that protect your home and business. 
                <span className="font-semibold text-light-sage"> 24/7 Emergency Response</span> available.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-light-sage rounded-full"></div>
                <span className="text-creamy-white font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-medium-sage rounded-full"></div>
                <span className="text-creamy-white font-medium">Eco-Friendly Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-deep-forest rounded-full"></div>
                <span className="text-creamy-white font-medium">Guaranteed Results</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="bg-deep-forest text-creamy-white hover:bg-dark-charcoal px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Free Quote
              </Link>
              <Link
                href="/services"
                className="border-2 border-creamy-white text-creamy-white hover:bg-creamy-white hover:text-dark-charcoal px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-light-sage rounded-full flex items-center justify-center">
                  <span className="text-dark-charcoal text-sm font-bold">✓</span>
                </div>
                <span className="text-creamy-white font-medium">500+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-medium-sage rounded-full flex items-center justify-center">
                  <span className="text-creamy-white text-sm font-bold">★</span>
                </div>
                <span className="text-creamy-white font-medium">5-Star Rated</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-creamy-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
