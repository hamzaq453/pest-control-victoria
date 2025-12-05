'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || 'AW-17685108547';

  useEffect(() => {
    // Countdown timer for auto-redirect
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <>
      {/* Google Ads Conversion Tracking Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleTagId}');
          gtag('event', 'conversion', {
            'send_to': '${googleTagId}',
            'event_category': 'lead',
            'event_label': 'form_submission',
            'value': 1.0,
            'currency': 'AUD'
          });
        `}
      </Script>

      <div className="min-h-screen bg-gradient-to-b from-deep-forest to-[#1a2e1a] flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-[#A8D5BA] rounded-full p-4">
                <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-deep-forest" />
              </div>
            </div>

            {/* Thank You Message */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-deep-forest mb-4">
              Thank You!
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-2">
              We've received your message successfully.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Our team will get back to you within 24 hours.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Link
                href="/"
                className="w-full sm:w-auto px-8 py-3 bg-deep-forest text-creamy-white rounded-lg font-semibold hover:bg-[#2E3A24] transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Back to Home
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3 bg-[#A8D5BA] text-deep-forest rounded-lg font-semibold hover:bg-[#8FC5A3] transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Contact Us Again
              </Link>
            </div>

            {/* Auto-redirect Countdown */}
            <p className="text-sm text-gray-500">
              Redirecting to home page in{' '}
              <span className="font-semibold text-deep-forest">{countdown}</span>{' '}
              {countdown === 1 ? 'second' : 'seconds'}...
            </p>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-creamy-white/80 text-sm">
              Need immediate assistance?{' '}
              <a
                href="tel:0451004400"
                className="text-[#A8D5BA] hover:text-creamy-white font-semibold underline"
              >
                Call us at (0451) 004-400
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

