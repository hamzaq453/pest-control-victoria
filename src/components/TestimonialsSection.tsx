import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Melbourne, VIC",
      rating: 5,
      review: "Pest Free Victoria did an amazing job with our ant infestation. The team was professional, thorough, and eco-friendly. Our home has been pest-free for 6 months now!",
      service: "Ant Control",
      avatar: "/testimonials/avatar1.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Geelong, VIC",
      rating: 5,
      review: "Excellent service! They responded to our emergency call within 2 hours and completely resolved our wasp nest problem. Highly recommend their 24/7 emergency service.",
      service: "Wasp Control",
      avatar: "/testimonials/avatar2.jpg"
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "Ballarat, VIC",
      rating: 5,
      review: "Professional, reliable, and effective. The team treated our entire property for spiders and provided excellent follow-up service. Very satisfied with the results.",
      service: "Spider Control",
      avatar: "/testimonials/avatar3.jpg"
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-[#F7F3E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E3A24] mb-6">
            What Our <span className="text-deep-forest">Customers Say</span>
          </h2>
          <p className="text-xl text-[#2E3A24]/80 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers across Victoria have to say about our pest control services.
          </p>
        </div>

        {/* Overall Rating
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 bg-white rounded-2xl px-8 py-6 shadow-lg">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2E3A24]">4.9</div>
              <div className="text-sm text-[#2E3A24]/70">Average Rating</div>
            </div>
            <div className="flex items-center space-x-1">
              {renderStars(5)}
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#6B9071]">500+</div>
              <div className="text-sm text-[#2E3A24]/70">Happy Customers</div>
            </div>
          </div>
        </div> */}

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-d bg-dark-charcoal rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Review Text */}
              <p className="text-creamy-white leading-relaxed mb-6 italic">
                "{testimonial.review}"
              </p>

              {/* Service Badge */}
              <div className="inline-block bg-[#A8B5A2] text-[#2E3A24] px-3 py-1 rounded-full text-sm font-medium mb-4">
                {testimonial.service}
              </div>

              {/* Customer Info */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#A8B5A2] to-[#6B9071] rounded-full flex items-center justify-center">
                  <span className="text-creamy-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-creamy-white">{testimonial.name}</div>
                  <div className="text-sm text-creamy-white">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#2E3A24] to-[#6B9071] rounded-2xl p-8 text-[#F7F3E9]">
            <h3 className="text-2xl font-bold mb-4">
              Join Our Happy Customers
            </h3>
            <p className="text-[#F7F3E9]/90 mb-6 max-w-2xl mx-auto">
              Experience the same level of professional service and satisfaction. Get your free quote today and see why we're Victoria's trusted pest control experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#F7F3E9] text-[#2E3A24] px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Get Free Quote
              </button>
              {/* <button className="border-2 border-[#F7F3E9] text-[#F7F3E9] px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-[#F7F3E9] hover:text-[#2E3A24]">
                Read More Reviews
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
