'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user prefers dark mode
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    // Listen for changes in color scheme preference
    const handleChange = (e:any) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{
            
            filter: isDarkMode ? 'none' : 'brightness(0.85) contrast(1.15)',
          }}
        >
          <source src="/Hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dynamic Overlay based on color scheme preference */}
      <div 
        className="absolute inset-0 bg-gray-800/90"
        style={{ 
          opacity: isDarkMode ? 0.5 : 0.6,
          transition: 'opacity 0.3s ease-in-out'
        }}
      ></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#2E3A24] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#F7F3E9] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#A8B5A2] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F7F3E9] leading-tight">
                <span className="text-[#F7F3E9]">Pest-Free</span> Living
                <br />
                <span className="text-[#A8B5A2]">Starts Here</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[#F7F3E9]/90 leading-relaxed">
                Professional pest control services that protect your home and business. 
                <span className="font-semibold text-[#A8B5A2]"> 24/7 Emergency Response</span> available.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#A8B5A2] rounded-full"></div>
                <span className="text-[#F7F3E9] font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#A8B5A2] rounded-full"></div>
                <span className="text-[#F7F3E9] font-medium">Eco-Friendly Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#2E3A24] rounded-full"></div>
                <span className="text-[#F7F3E9] font-medium">Guaranteed Results</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="bg-[#2E3A24] text-[#F7F3E9] hover:bg-[#1A2314] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Free Quote
              </Link>
              <Link
                href="/services"
                className="border-2 border-[#F7F3E9] text-[#F7F3E9] hover:bg-[#F7F3E9] hover:text-[#1A2314] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#A8B5A2] rounded-full flex items-center justify-center">
                  <span className="text-[#1A2314] text-sm font-bold">✓</span>
                </div>
                <span className="text-[#F7F3E9] font-medium">500+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#A8B5A2] rounded-full flex items-center justify-center">
                  <span className="text-[#F7F3E9] text-sm font-bold">★</span>
                </div>
                <span className="text-[#F7F3E9] font-medium">5-Star Rated</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-[#F7F3E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}