import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const allServices = [
    {
      id: 1,
      slug: "birds-control",
      title: "Birds Control",
      description: "Professional bird control solutions to protect your property from damage and health hazards caused by bird infestations.",
      image: "/S1.jpg",
      features: ["Humane Methods", "Property Protection", "Health Safety"],
      category: "Wildlife Control",
      color: "from-[#A8B5A2] to-[#6B9071]"
    },
    {
      id: 2,
      slug: "birds-proofing",
      title: "Birds Proofing",
      description: "Comprehensive bird proofing services to prevent birds from nesting and roosting on your property.",
      image: "/S2.jpg",
      features: ["Long-term Solution", "Property Preservation", "Preventive Approach"],
      category: "Wildlife Control",
      color: "from-[#6B9071] to-[#2E3A24]"
    },
    {
      id: 3,
      slug: "bees-infestation",
      title: "Bees Infestation",
      description: "Safe and effective bee removal services, prioritizing both human safety and bee conservation.",
      image: "/S3.jpg",
      features: ["Bee Conservation", "Safe Removal", "Expert Handling"],
      category: "Insect Control",
      color: "from-[#2E3A24] to-[#1A2314]"
    },
    {
      id: 4,
      slug: "flea-and-fleas-pest-control",
      title: "Flea and Fleas Pest Control",
      description: "Complete flea elimination services for both residential and commercial properties, ensuring long-lasting results.",
      image: "/S1.jpg",
      features: ["Complete Elimination", "Pet Safe", "Long-lasting Results"],
      category: "Insect Control",
      color: "from-[#A8B5A2] to-[#6B9071]"
    },
    {
      id: 5,
      slug: "moth-treatment",
      title: "Moth Treatment",
      description: "Professional moth control services to protect your clothing, carpets, and stored items from damage.",
      image: "/S2.jpg",
      features: ["Clothing Protection", "Stored Items Safety", "Preventive Treatment"],
      category: "Insect Control",
      color: "from-[#6B9071] to-[#2E3A24]"
    },
    {
      id: 6,
      slug: "housefly-control",
      title: "Housefly Control",
      description: "Effective housefly control solutions to maintain a clean and hygienic environment in your home or business.",
      image: "/S3.jpg",
      features: ["Hygiene Maintenance", "Quick Results", "Ongoing Prevention"],
      category: "Insect Control",
      color: "from-[#2E3A24] to-[#1A2314]"
    },
    {
      id: 7,
      slug: "mice-control",
      title: "Mice Control",
      description: "Comprehensive mouse control services using proven methods to eliminate infestations and prevent future problems.",
      image: "/S1.jpg",
      features: ["Complete Elimination", "Prevention Methods", "Safe Solutions"],
      category: "Rodent Control",
      color: "from-[#A8B5A2] to-[#6B9071]"
    },
    {
      id: 8,
      slug: "ant-control",
      title: "Ant Control",
      description: "Professional ant control services to eliminate ant colonies and prevent future infestations in your property.",
      image: "/S2.jpg",
      features: ["Colony Elimination", "Preventive Measures", "Long-term Solution"],
      category: "Insect Control",
      color: "from-[#6B9071] to-[#2E3A24]"
    },
    {
      id: 9,
      slug: "cockroach-control",
      title: "Cockroach Control",
      description: "Effective cockroach elimination services using advanced techniques to ensure complete eradication.",
      image: "/S3.jpg",
      features: ["Complete Eradication", "Advanced Techniques", "Health Protection"],
      category: "Insect Control",
      color: "from-[#2E3A24] to-[#1A2314]"
    },
    {
      id: 10,
      slug: "dead-animal-removal",
      title: "Dead Animal Removal",
      description: "Professional and humane dead animal removal services, ensuring proper disposal and sanitization.",
      image: "/S1.jpg",
      features: ["Humane Service", "Proper Disposal", "Sanitization"],
      category: "Wildlife Control",
      color: "from-[#A8B5A2] to-[#6B9071]"
    },
    {
      id: 11,
      slug: "possum-removal",
      title: "Possum Removal",
      description: "Safe possum removal services that protect both the animals and your property from damage.",
      image: "/S2.jpg",
      features: ["Safe Removal", "Animal Protection", "Property Safety"],
      category: "Wildlife Control",
      color: "from-[#6B9071] to-[#2E3A24]"
    },
    {
      id: 12,
      slug: "possum-control",
      title: "Possum Control",
      description: "Comprehensive possum control solutions to prevent future infestations and protect your property.",
      image: "/S3.jpg",
      features: ["Prevention Methods", "Property Protection", "Long-term Control"],
      category: "Wildlife Control",
      color: "from-[#2E3A24] to-[#1A2314]"
    },
    {
      id: 13,
      slug: "mice-and-rats",
      title: "Mice and Rats",
      description: "Complete rodent control services for both mice and rats, ensuring your property remains pest-free.",
      image: "/S1.jpg",
      features: ["Dual Control", "Complete Elimination", "Prevention"],
      category: "Rodent Control",
      color: "from-[#A8B5A2] to-[#6B9071]"
    },
    {
      id: 14,
      slug: "bedbug-extermination",
      title: "Bedbug Extermination",
      description: "Professional bedbug extermination services using proven methods to completely eliminate infestations.",
      image: "/S2.jpg",
      features: ["Complete Elimination", "Proven Methods", "Guaranteed Results"],
      category: "Insect Control",
      color: "from-[#6B9071] to-[#2E3A24]"
    },
    {
      id: 15,
      slug: "residential-pest-management",
      title: "Residential Pest Management",
      description: "Comprehensive pest control solutions for residential properties, protecting your home and family.",
      image: "/S3.jpg",
      features: ["Family Safety", "Home Protection", "Comprehensive Service"],
      category: "Management",
      color: "from-[#2E3A24] to-[#1A2314]"
    },
    {
      id: 16,
      slug: "commercial-pest-management-solution",
      title: "Commercial Pest Management Solution",
      description: "Professional pest management solutions for businesses, ensuring compliance and maintaining your reputation.",
      image: "/S1.jpg",
      features: ["Business Compliance", "Reputation Protection", "Minimal Disruption"],
      category: "Management",
      color: "from-[#A8B5A2] to-[#6B9071]"
    },
    {
      id: 17,
      slug: "general-pest-control",
      title: "General Pest Control",
      description: "All-encompassing pest control services covering a wide range of common household and commercial pests.",
      image: "/S2.jpg",
      features: ["Wide Coverage", "Versatile Solutions", "Cost-effective"],
      category: "General",
      color: "from-[#6B9071] to-[#2E3A24]"
    },
    {
      id: 18,
      slug: "spider-control",
      title: "Spider Control",
      description: "Effective spider control services to eliminate dangerous and nuisance spiders from your property.",
      image: "/S3.jpg",
      features: ["Dangerous Species Control", "Safe Elimination", "Prevention"],
      category: "Insect Control",
      color: "from-[#2E3A24] to-[#1A2314]"
    },
    {
      id: 19,
      slug: "same-day-emergency-services",
      title: "Same Day Emergency Services",
      description: "24/7 emergency pest control services for urgent situations requiring immediate attention.",
      image: "/S1.jpg",
      features: ["24/7 Availability", "Same Day Response", "Emergency Hotline"],
      category: "Emergency",
      color: "from-[#A8B5A2] to-[#6B9071]"
    },
    {
      id: 20,
      slug: "wasp-control",
      title: "Wasp Control",
      description: "Professional wasp control and removal services, ensuring safety for you and your family.",
      image: "/S2.jpg",
      features: ["Safe Removal", "Family Protection", "Expert Handling"],
      category: "Insect Control",
      color: "from-[#6B9071] to-[#2E3A24]"
    }
  ];

  const categories = ["All Services", "Wildlife Control", "Insect Control", "Rodent Control", "Management", "Emergency", "General"];

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
              Our <span className="text-[#A8D5BA]">Services</span>
            </h1>
            <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Comprehensive pest control solutions tailored to your specific needs. 
              From residential protection to commercial management, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E3A24] mb-6">
              Professional <span className="text-[#6B9071]">Pest Control</span> Solutions
            </h2>
            <p className="text-xl text-[#2E3A24]/80 max-w-3xl mx-auto leading-relaxed">
              Choose from our comprehensive range of pest control services, each designed to address specific pest problems 
              with proven methods and guaranteed results.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service) => (
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
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-[#2E3A24]/90 text-[#F7F3E9] px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                      {service.category}
                    </span>
                  </div>
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
                    className="inline-flex items-center justify-center w-full text-[#F7F3E9] bg-gradient-to-r from-[#2E3A24] to-[#6B9071] px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:from-[#6B9071] group-hover:to-[#2E3A24] mt-auto"
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

          {/* Service Categories Summary */}
          {/* <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#2E3A24] mb-4">
                Service <span className="text-[#6B9071]">Categories</span>
              </h3>
              <p className="text-lg text-[#2E3A24]/80 max-w-2xl mx-auto">
                Our services are organized into specialized categories to help you find the exact solution you need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.slice(1).map((category, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6B9071] to-[#2E3A24] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-[#2E3A24] mb-2">{category}</h4>
                  <p className="text-[#2E3A24]/70 text-sm">
                    {allServices.filter(service => service.category === category).length} Services
                  </p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2E3A24] to-[#6B9071] mb-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F7F3E9] mb-6">
            Ready to Solve Your Pest Problem?
          </h2>
          <p className="text-xl text-[#F7F3E9]/90 mb-8 max-w-2xl mx-auto">
            Don't let pests take over your space. Our expert team is ready to provide you with a customized solution and free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#F7F3E9] text-[#2E3A24] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white transition-colors duration-300"
            >
              Get Free Quote
            </a>
            <a
              href="tel:(0451) 003-300"
              className="border-2 border-[#F7F3E9] text-[#F7F3E9] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#F7F3E9] hover:text-[#2E3A24] transition-colors duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
