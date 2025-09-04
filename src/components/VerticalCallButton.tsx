'use client';

import Link from 'next/link';

export default function VerticalCallButton() {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <Link 
        href="tel:0451004400" 
        className="bg-deep-forest hover:bg-deep-forest text-white font-bold px-3 py-4 rounded-l-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center space-y-1"
      >
        {/* Phone Icon */}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        
        {/* Phone Number - Vertical Stack */}
        <div className="flex flex-col items-center leading-none">
          <span className="text-xs font-semibold transform rotate-90">0</span>
          <span className="text-xs font-semibold transform rotate-90">4</span>
          <span className="text-xs font-semibold transform rotate-90">5</span>
          <span className="text-xs font-semibold transform rotate-90">1</span>
          <span className="text-xs font-semibold transform rotate-90">0</span>
          <span className="text-xs font-semibold transform rotate-90">0</span>
          <span className="text-xs font-semibold transform rotate-90">4</span>
          <span className="text-xs font-semibold transform rotate-90">4</span>
          <span className="text-xs font-semibold transform rotate-90">0</span>
          <span className="text-xs font-semibold transform rotate-90">0</span>
        </div>
      </Link>
    </div>
  );
}
