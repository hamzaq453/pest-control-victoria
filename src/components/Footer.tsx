import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Ant Control", slug: "ant-control" },
    { name: "Spider Control", slug: "spider-control" },
    { name: "Mice & Rat Control", slug: "mice-and-rats" },
    { name: "Wasp Control", slug: "wasp-control" },
    { name: "Possum Removal", slug: "possum-control-and-removal" }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Get Quote", href: "/contact" },

  ];

  return (
    <footer className="bg-[#2E3A24] text-creamy-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          {/* Company Info */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center space-x-2">
              <Image
                src="/Logo-footer.png"
                alt="Pest Free Victoria Logo"
                width={200}
                height={200}
                className="object-contain w-32 h-auto md:w-40 lg:w-48"
              />
            </div>
            
            <p className="text-creamy-white/80 leading-relaxed text-sm md:text-base">
              Your trusted partner for professional pest control services across Victoria. 
              Licensed, insured, and committed to protecting your home and business.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-[#A8B5A2] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">(0451) 004-400</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-[#A8B5A2] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm break-all">info@pestfreevictoria.com.au</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-[#A8B5A2] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">Serving Victoria, Australia</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Services - Combined on Mobile */}
          <div className="grid grid-cols-2 gap-6 md:col-span-1 md:grid-cols-1 lg:col-span-2 lg:grid-cols-2">
            {/* Quick Links */}
            <div className="space-y-3 md:space-y-6">
              <h4 className="text-base md:text-lg font-semibold text-[#A8B5A2]">Quick Links</h4>
              <ul className="space-y-2 md:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-creamy-white/80 hover:text-[#A8B5A2] transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-3 md:space-y-6">
              <h4 className="text-base md:text-lg font-semibold text-[#A8B5A2]">Our Services</h4>
              <ul className="space-y-2 md:space-y-3">
                {services.map((service, index) => (
                  <li key={`${service.name}-${index}`}>
                    <Link 
                      href={service.slug.startsWith('/') ? service.slug : `/services/${service.slug}`}
                      className="text-creamy-white/80 hover:text-[#A8B5A2] transition-colors duration-200 text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-base md:text-lg font-semibold text-[#A8B5A2]">Contact Info</h4>
            
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:space-y-4 md:gap-0">
              <div>
                <h5 className="font-medium text-[#A8B5A2] mb-2 text-sm md:text-base">Emergency Service</h5>
                <div className="text-sm text-creamy-white/80">
                  <div>24/7 Emergency Response</div>
                  <div className="text-[#A8B5A2] font-semibold">(0451) 004-400</div>
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-[#A8B5A2] mb-2 text-sm md:text-base">Licenses</h5>
                <div className="text-sm text-creamy-white/80">
                  <div>Licensed & Insured</div>
                  <div>EPA Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#6B9071]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-3 md:gap-4">
            {/* Copyright */}
            <div className="text-xs md:text-sm text-creamy-white/70 md:justify-self-start text-center md:text-left">
              © {currentYear} Pest Free Victoria. All rights reserved.
            </div>

            {/* Center: Powered by DevHexa */}
            <div className="text-xs md:text-sm text-creamy-white/70 text-center">
              Powered by{" "}
              <Link href="https://devhexa.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#A8B5A2]">
                DevHexa
              </Link>
            </div>

            {/* Right: Legal Links */}
            <div className="flex space-x-4 md:space-x-6 text-xs md:text-sm justify-center md:justify-end md:justify-self-end">
              <Link href="/privacy" className="text-creamy-white/70 hover:text-[#A8B5A2] transition-colors duration-200">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
