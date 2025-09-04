'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    'Select a Service',
    'Birds Control',
    'Birds Proofing',
    'Bees Infestation',
    'Flea and Fleas Pest Control',
    'Moth Treatment',
    'Housefly Control',
    'Possum Removal',
    'Rat Control',
    'Mouse Control',
    'Spider Control',
    'Ant Control',
    'Termite Control',
    'Cockroach Control',
    'Silverfish Control',
    'Bed Bug Control',
    'Wasp Control',
    'Snake Removal',
    'Carpet Beetle Control',
    'Clothes Moth Control',
    'Pigeon Control',
    'Mole Control'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.service === '' || formData.service === 'Select a Service') {
      setSubmitStatus({
        type: 'error',
        message: 'Please select a service'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#F7F3E9] via-white to-[#F7F3E9] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#A8B5A2]/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#6B9071]/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#2E3A24]/10 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#2E3A24] text-creamy-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Get Your Free Quote</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#2E3A24] mb-6">
            Ready to <span className="text-deep-forest relative">
              Solve
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#A8B5A2]/40 rounded-full"></div>
            </span> Your Pest Problem?
          </h2>
          <p className="text-xl text-[#2E3A24]/80 max-w-3xl mx-auto leading-relaxed">
            Don't let pests take over your space. Our expert team is ready to provide you with a customized solution and free quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm">
              {/* Form Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6B9071] to-[#2E3A24] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#2E3A24] mb-2">Get Started Today</h3>
                <p className="text-[#2E3A24]/70">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-semibold text-[#2E3A24] mb-3 group-hover:text-[#6B9071] transition-colors duration-200">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-[#A8B5A2]/30 rounded-xl focus:ring-4 focus:ring-[#6B9071]/20 focus:border-[#6B9071] outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm text-[#2E3A24] placeholder-[#2E3A24]/50 group-hover:border-[#6B9071]/50"
                      placeholder="Enter your full name"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-[#2E3A24] mb-3 group-hover:text-[#6B9071] transition-colors duration-200">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-[#A8B5A2]/30 rounded-xl focus:ring-4 focus:ring-[#6B9071]/20 focus:border-[#6B9071] outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm text-[#2E3A24] placeholder-[#2E3A24]/50 group-hover:border-[#6B9071]/50"
                      placeholder="Enter your email address"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Phone Field */}
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#2E3A24] mb-3 group-hover:text-[#6B9071] transition-colors duration-200">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-[#A8B5A2]/30 rounded-xl focus:ring-4 focus:ring-[#6B9071]/20 focus:border-[#6B9071] outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm text-[#2E3A24] placeholder-[#2E3A24]/50 group-hover:border-[#6B9071]/50"
                      placeholder="Enter your phone number"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Service Dropdown */}
                <div className="group">
                  <label htmlFor="service" className="block text-sm font-semibold text-[#2E3A24] mb-3 group-hover:text-[#6B9071] transition-colors duration-200">
                    Service Required *
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-[#A8B5A2]/30 rounded-xl focus:ring-4 focus:ring-[#6B9071]/20 focus:border-[#6B9071] outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm text-[#2E3A24] group-hover:border-[#6B9071]/50 appearance-none"
                    >
                      {services.map((service, index) => (
                        <option key={index} value={service === 'Select a Service' ? '' : service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-[#6B9071]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-[#2E3A24] mb-3 group-hover:text-[#6B9071] transition-colors duration-200">
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-6 py-4 border-2 border-[#A8B5A2]/30 rounded-xl focus:ring-4 focus:ring-[#6B9071]/20 focus:border-[#6B9071] outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm text-[#2E3A24] placeholder-[#2E3A24]/50 group-hover:border-[#6B9071]/50 resize-none"
                      placeholder="Describe your pest problem or specific requirements"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Status Message */}
                {submitStatus.type && (
                  <div className={`p-4 rounded-xl text-sm font-medium ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-5 px-8 rounded-xl font-bold text-lg transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-[#6B9071]/30 relative overflow-hidden group ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-[#2E3A24] to-[#6B9071] text-creamy-white hover:scale-105 hover:shadow-2xl'
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Get Free Quote</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </span>
                    {!isSubmitting && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#6B9071] to-[#2E3A24] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info & Features */}
          <div className="space-y-8">
            {/* Emergency Contact */}
            <div className="bg-dark-charcoal rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">24/7 Emergency Service</h3>
                  <p className="text-white/90">Urgent pest control needs</p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">(0451) 004-400</div>
                <p className="text-white/80">Available round the clock</p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[#A8B5A2] to-[#6B9071] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-[#2E3A24] mb-2">Free Quote</h4>
                <p className="text-[#2E3A24]/70 text-sm">No hidden fees, transparent pricing</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6B9071] to-[#2E3A24] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-[#2E3A24] mb-2">Same Day Service</h4>
                <p className="text-[#2E3A24]/70 text-sm">Quick response for urgent needs</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2E3A24] to-[#6B9071] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-[#2E3A24] mb-2">Eco-Friendly</h4>
                <p className="text-[#2E3A24]/70 text-sm">Safe for your family and pets</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[#A8B5A2] to-[#2E3A24] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-[#2E3A24] mb-2">Guaranteed Results</h4>
                <p className="text-[#2E3A24]/70 text-sm">100% satisfaction guaranteed</p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-white/20">
              <h4 className="text-lg font-bold text-[#2E3A24] mb-4 text-center">Why Choose Us?</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#A8B5A2] rounded-full flex items-center justify-center">
                    <span className="text-[#2E3A24] text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[#2E3A24]/80 text-sm">Licensed & Insured Professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#6B9071] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[#2E3A24]/80 text-sm">15+ Years of Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#2E3A24] rounded-full flex items-center justify-center">
                    <span className="text-creamy-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[#2E3A24]/80 text-sm">500+ Happy Customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
