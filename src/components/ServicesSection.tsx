import Link from "next/link";
import Image from "next/image";

export default function ServicesSection() {
  const featuredServices = [
    {
      id: 23,
      slug: "general-pest-control",
      title: "General Pest Control",
      description: "All-encompassing pest control services covering a wide range of common household and commercial pests.",
      image: "/S2.jpg",
      features: ["Wide Coverage", "Versatile Solutions", "Cost-effective"],
      color: "from-[#6B9071] to-[#2E3A24]"
    },
    {
      id: 22,
      slug: "mice-and-rats",
      title: "Mice and Rats",
      description: "Complete rodent control services for both mice and rats, ensuring your property remains pest-free.",
      image: "/mice.png",
      features: ["Dual Control", "Complete Elimination", "Prevention"],
      color: "from-[#A8B5A2] to-[#6B9071]"
    },
    {
      id: 3,
      slug: "bees-infestation",
      title: "Bees Infestation",
      description: "Safe and effective bee removal services, prioritizing both human safety and bee conservation.",
      image: "/bees.jpg",
      features: ["Bee Conservation", "Safe Removal", "Expert Handling"],
      color: "from-[#2E3A24] to-[#1A2314]"
    }
  ];

  return (
    <section className="py-20 bg-[#F7F3E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E3A24] mb-6">
            Our <span className="text-deep-forest">Featured Services</span>
          </h2>
          <p className="text-xl text-[#2E3A24]/80 max-w-3xl mx-auto leading-relaxed">
            Professional pest control solutions tailored to your specific needs. 
            From residential protection to commercial management, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div 
              key={service.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Service Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#2E3A24] mb-3 group-hover:text-[#6B9071] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-[#2E3A24]/70 mb-4 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#A8B5A2] rounded-full"></div>
                      <span className="text-sm text-[#2E3A24]/80 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center justify-center w-full text-creamy-white bg-dark-charcoal px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:from-[#6B9071] group-hover:to-[#2E3A24] mt-auto"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center bg-deep-forest text-creamy-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
