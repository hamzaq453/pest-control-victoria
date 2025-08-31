'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });

  const services = [
    'Select a Service',
    'Birds Control',
    'Birds Proofing',
    'Bees Infestation',
    'Flea and Fleas Pest Control',
    'Moth Treatment',
    'Housefly Control',
    'Mice Control',
    'Ant Control',
    'Cockroach Control',
    'Dead Animal Removal',
    'Possum Removal',
    'Possum Control',
    'Mice and Rats',
    'Bedbug Extermination',
    'Residential Pest Management',
    'Commercial Pest Management Solution',
    'General Pest Control',
    'Spider Control',
    'Same Day Emergency Services',
    'Wasp Control'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E3A24] mb-4">
            Get In <span className="text-deep-forest">Touch</span>
          </h2>
          <p className="text-lg text-[#2E3A24]/80">
            Ready to solve your pest problem? Contact us for a free quote.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-[#F7F3E9] rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#2E3A24] mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#A8B5A2] rounded-lg focus:ring-2 focus:ring-[#6B9071] focus:border-transparent outline-none transition-all duration-200 bg-white text-[#2E3A24] placeholder-[#2E3A24]/60"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#2E3A24] mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#A8B5A2] rounded-lg focus:ring-2 focus:ring-[#6B9071] focus:border-transparent outline-none transition-all duration-200 bg-white text-[#2E3A24] placeholder-[#2E3A24]/60"
                placeholder="Enter your email address"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#2E3A24] mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#A8B5A2] rounded-lg focus:ring-2 focus:ring-[#6B9071] focus:border-transparent outline-none transition-all duration-200 bg-white text-[#2E3A24] placeholder-[#2E3A24]/60"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Service Dropdown */}
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-[#2E3A24] mb-2">
                Service Required *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#A8B5A2] rounded-lg focus:ring-2 focus:ring-[#6B9071] focus:border-transparent outline-none transition-all duration-200 bg-white text-[#2E3A24]"
              >
                {services.map((service, index) => (
                  <option key={index} value={service === 'Select a Service' ? '' : service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-deep-forest text-creamy-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#6B9071] focus:ring-offset-2"
              >
                Get Free Quote
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-[#2E3A24] text-creamy-white px-6 py-3 rounded-xl">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="font-semibold">24/7 Emergency: (0451) 003-300</span>
          </div>
        </div>
      </div>
    </section>
  );
}
