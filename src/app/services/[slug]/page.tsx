import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import servicesData from '@/data/services.json';

// Helper function to get icon component
function getIcon(iconName: string) {
  const icons: { [key: string]: React.ReactElement } = {
    shield: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.5-4a5 5 0 11-10 0 5 5 0 0110 0z" />
      </svg>
    ),
    heart: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    leaf: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    search: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    clipboard: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    tools: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    eye: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  };
  return icons[iconName] || icons.shield;
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.services.find(s => s.slug === slug);
  
  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
              <section className="relative py-8 bg-gradient-to-br from-[#4A7C59] via-[#2E5D3A] to-[#1A3D1F] overflow-hidden">
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
          {/* Breadcrumbs Navigation */}
          <div className="mb-8 text-center">
            <nav className="flex items-center space-x-2 text-sm justify-center">
              <Link href="/" className="text-[#AEC3B0] hover:text-white transition-colors duration-300">
                Home
              </Link>
              <span className="text-[#AEC3B0]">/</span>
              <Link href="/services" className="text-[#AEC3B0] hover:text-white transition-colors duration-300">
                Services
              </Link>
              <span className="text-[#AEC3B0]">/</span>
              <span className="text-white">{service.title}</span>
            </nav>
          </div>

          {/* Centered Content */}
          <div className="text-center">
                         <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4 drop-shadow-lg">
               {service.shortTitle}
             </h1>
             <p className="text-lg md:text-xl font-bold text-[#FFF7E6] mb-4 drop-shadow-md">
               {service.description}
             </p>
             <p className="text-base text-[#AEC3B0] mb-6 max-w-2xl mx-auto leading-relaxed">
               {service.longDescription}
             </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#FFF7E6] text-[#29352A] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white transition-colors duration-300 text-center"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:(0451) 004-400"
                className="border-2 border-[#FFF7E6] text-[#FFF7E6] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#FFF7E6] hover:text-[#29352A] transition-colors duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A24] mb-6">
              Why Choose Our <span className="text-[#6B9071]">{service.title}</span> Service?
            </h2>
            <p className="text-xl text-[#2E3A24]/80 max-w-3xl mx-auto">
              Our comprehensive approach ensures effective, long-lasting results while maintaining the highest standards of safety and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6B9071] to-[#2E3A24] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2E3A24] mb-4 text-center">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A24] mb-6">
              Key <span className="text-[#6B9071]">Benefits</span>
            </h2>
            <p className="text-xl text-[#2E3A24]/80 max-w-3xl mx-auto">
              Discover how our professional {service.title.toLowerCase()} services can protect your property and provide peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#A8B5A2] to-[#6B9071] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-white">
                    {getIcon(benefit.icon)}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#2E3A24] mb-4">{benefit.title}</h3>
                <p className="text-[#2E3A24]/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A24] mb-6">
              Our <span className="text-[#6B9071]">Process</span>
            </h2>
            <p className="text-xl text-[#2E3A24]/80 max-w-3xl mx-auto">
              We follow a systematic approach to ensure effective {service.title.toLowerCase()} and long-lasting results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step) => (
              <div key={step.step} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6B9071] to-[#2E3A24] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <div className="text-white">
                      {getIcon(step.icon)}
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-[#A8B5A2] text-[#2E3A24] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-sm">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#2E3A24] mb-4">{step.title}</h3>
                  <p className="text-[#2E3A24]/70 text-sm leading-relaxed">{step.description}</p>
                </div>
                
                {/* Connector Line */}
                {step.step < service.process.length && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-[#A8B5A2] transform -translate-y-1/2 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A24] mb-6">
              Our <span className="text-[#6B9071]">Methods</span>
            </h2>
            <p className="text-xl text-[#2E3A24]/80 max-w-3xl mx-auto">
              We employ a variety of proven techniques and technologies to ensure effective {service.title.toLowerCase()}.
            </p>
          </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {service.methods.map((method, index) => (
               <div key={index} className="bg-[#F7F3E9] rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                 <div className="flex items-start space-x-6">
                   <div className="w-16 h-16 bg-gradient-to-br from-[#6B9071] to-[#2E3A24] rounded-2xl flex items-center justify-center flex-shrink-0">
                     <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                     </svg>
                   </div>
                   <div className="flex-1">
                     <h3 className="text-xl font-bold text-[#2E3A24] mb-4">{method.title}</h3>
                     <p className="text-[#2E3A24]/70 leading-relaxed">{method.description}</p>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A24] mb-6">
              Frequently Asked <span className="text-[#6B9071]">Questions</span>
            </h2>
            <p className="text-xl text-[#2E3A24]/80">
              Get answers to common questions about our {service.title.toLowerCase()} services.
            </p>
          </div>

          <div className="space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-[#F7F3E9] rounded-2xl p-8">
                <h3 className="text-xl font-bold text-[#2E3A24] mb-4">{faq.question}</h3>
                <p className="text-[#2E3A24]/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2E3A24] to-[#6B9071] mb-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F7F3E9] mb-6">
            Ready to Solve Your {service.title} Problem?
          </h2>
          <p className="text-xl text-[#F7F3E9]/90 mb-8 max-w-2xl mx-auto">
            Don't let {service.title.toLowerCase()} issues continue to damage your property. Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#F7F3E9] text-[#2E3A24] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white transition-colors duration-300"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:(0451) 004-400"
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
