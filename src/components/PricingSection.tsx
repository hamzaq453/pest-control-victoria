import Link from "next/link";

export default function PricingSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E3A24] mb-4">
            Affordable Pest Control Cost & Pricing in <span className="text-[#6B9071]">Victoria</span>
          </h2>
          <p className="text-lg md:text-xl text-[#2E3A24]/80 max-w-3xl mx-auto">
            Transparent pest control cost with no hidden fees. Get competitive pricing for pest control near you in Melbourne and across Victoria. 
            <span className="font-semibold text-[#6B9071]"> Free quotation available</span> with <span className="font-semibold text-[#6B9071]">20% discount</span> on all services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Residential Pricing */}
          <div className="bg-[#F7F3E9] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#2E3A24] mb-4">Residential Pest Control</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#6B9071]">From $180</span>
              <span className="text-[#2E3A24]/70 ml-2">per treatment</span>
              <p className="text-sm text-[#2E3A24]/60 mt-2">Affordable pest control cost for Melbourne homes</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#A8B5A2] rounded-full"></div>
                <span className="text-[#2E3A24]/80">Standard pest treatment</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#A8B5A2] rounded-full"></div>
                <span className="text-[#2E3A24]/80">Eco-friendly options available</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#A8B5A2] rounded-full"></div>
                <span className="text-[#2E3A24]/80">Free follow-up inspection</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#A8B5A2] rounded-full"></div>
                <span className="text-[#2E3A24]/80">Guaranteed results</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="block w-full text-center bg-[#2E3A24] text-[#F7F3E9] hover:bg-[#6B9071] px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Commercial Pricing */}
          <div className="bg-gradient-to-br from-[#2E3A24] to-[#6B9071] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-[#F7F3E9] transform scale-105 md:scale-100">
            <div className="inline-block bg-[#A8B5A2] text-[#2E3A24] px-3 py-1 rounded-full text-sm font-bold mb-4">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-4">Commercial Pest Management</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">Custom Quote</span>
              <span className="ml-2 opacity-80">based on needs</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#A8B5A2] rounded-full"></div>
                <span>Tailored business solutions</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#A8B5A2] rounded-full"></div>
                <span>Regular maintenance plans</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#A8B5A2] rounded-full"></div>
                <span>Compliance documentation</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#A8B5A2] rounded-full"></div>
                <span>Minimal business disruption</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="block w-full text-center bg-[#F7F3E9] text-[#2E3A24] hover:bg-[#A8B5A2] px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Emergency Pricing */}
          <div className="bg-[#F7F3E9] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#2E3A24] mb-4">Emergency Services</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#6B9071]">From $180</span>
              <span className="text-[#2E3A24]/70 ml-2">same-day service</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#A8B5A2] rounded-full"></div>
                <span className="text-[#2E3A24]/80">24/7 availability</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#A8B5A2] rounded-full"></div>
                <span className="text-[#2E3A24]/80">Same-day response</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#A8B5A2] rounded-full"></div>
                <span className="text-[#2E3A24]/80">Urgent pest situations</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#A8B5A2] rounded-full"></div>
                <span className="text-[#2E3A24]/80">Fast, effective solutions</span>
              </li>
            </ul>
            <a
              href="tel:0451004400"
              className="block w-full text-center bg-[#2E3A24] text-[#F7F3E9] hover:bg-[#6B9071] px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
            >
              Call Now: (0451) 004-400
            </a>
          </div>
        </div>

        {/* Pricing Notes */}
        <div className="bg-[#F7F3E9] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#2E3A24] mb-4">
            Transparent Pest Control Cost & Pricing
          </h3>
          <p className="text-lg text-[#2E3A24]/80 mb-6 max-w-3xl mx-auto">
            All prices are estimates. Final pest control cost depends on property size, pest type, and treatment method. 
            We provide detailed quotes with no hidden fees for pest control in Melbourne and across Victoria. 
            <span className="font-semibold text-[#6B9071]">Save 20% on your first service</span> when you book online. 
            <span className="font-semibold text-[#6B9071]">Get competitive pricing for pest control near you</span> with our free quotation service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#2E3A24] text-[#F7F3E9] hover:bg-[#6B9071] px-8 py-3 rounded-xl font-semibold transition-colors duration-300"
            >
              Get Your Free Quote Today
            </Link>
            <a
              href="tel:0451004400"
              className="border-2 border-[#2E3A24] text-[#2E3A24] hover:bg-[#2E3A24] hover:text-[#F7F3E9] px-8 py-3 rounded-xl font-semibold transition-colors duration-300"
            >
              Call for Pricing: (0451) 004-400
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

