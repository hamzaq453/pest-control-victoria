'use client';

export default function DiscountBanner() {
  const bannerMessages = [
    "SEASON START SPECIAL - GET 20% OFF ON ALL SERVICES",
    "FREE INSPECTION & QUOTE - CALL US TODAY",
    "SAME-DAY EMERGENCY SERVICES AVAILABLE 24/7",
    "LICENSED & INSURED PROFESSIONALS - GUARANTEED RESULTS"
  ];
  
  return (
    <>
      <style>{`
        @keyframes discount-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .discount-marquee {
          animation: discount-scroll 40s linear infinite;
          display: flex;
          width: max-content;
        }
        .discount-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="fixed top-0 left-0 right-0 z-[60] bg-deep-forest text-creamy-white py-2.5 sm:py-2 md:py-2 border-b border-[#2E3A24] overflow-hidden">
        <div className="relative w-full">
          {/* Scrolling Marquee Container */}
          <div className="discount-marquee flex whitespace-nowrap">
            {/* Display all messages twice for seamless loop */}
            {[...bannerMessages, ...bannerMessages].map((message, i) => (
              <div key={i} className="flex items-center shrink-0">
                <span className="text-sm sm:text-base md:text-lg font-semibold leading-tight px-8 sm:px-12 md:px-16">
                  {message}
                </span>
                <span className="text-sm sm:text-base md:text-lg font-semibold leading-tight text-[#A8D5BA] px-4">
                  ✦
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
