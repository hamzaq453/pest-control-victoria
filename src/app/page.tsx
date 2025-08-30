import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-8 pt-16">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Welcome to Pest Free Victoria</h2>
          <p className="text-lg text-foreground mb-4">
            Your trusted partner for professional pest control services across Victoria.
          </p>
        </section>

        {/* Color Palette Display */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-primary mb-4">Our Brand Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-creamy-white text-dark-charcoal p-4 rounded-lg border">
              <div className="w-full h-20 bg-creamy-white rounded mb-2"></div>
              <p className="font-mono text-sm">Creamy White</p>
              <p className="font-mono text-xs">#FFF7E6</p>
            </div>
            <div className="bg-light-sage text-dark-charcoal p-4 rounded-lg border">
              <div className="w-full h-20 bg-light-sage rounded mb-2"></div>
              <p className="font-mono text-sm">Light Sage</p>
              <p className="font-mono text-xs">#AEC3B0</p>
            </div>
            <div className="bg-medium-sage text-creamy-white p-4 rounded-lg border">
              <div className="w-full h-20 bg-medium-sage rounded mb-2"></div>
              <p className="font-mono text-sm">Medium Sage</p>
              <p className="font-mono text-xs">#6B9071</p>
            </div>
            <div className="bg-dark-charcoal text-creamy-white p-4 rounded-lg border">
              <div className="w-full h-20 bg-dark-charcoal rounded mb-2"></div>
              <p className="font-mono text-sm">Dark Charcoal</p>
              <p className="font-mono text-xs">#29352A</p>
            </div>
            <div className="bg-deep-forest text-creamy-white p-4 rounded-lg border">
              <div className="w-full h-20 bg-deep-forest rounded mb-2"></div>
              <p className="font-mono text-sm">Deep Forest</p>
              <p className="font-mono text-xs">#375534</p>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-light-sage p-6 rounded-lg">
            <h4 className="text-xl font-bold text-dark-charcoal mb-3">Residential Pest Control</h4>
            <p className="text-dark-charcoal">Comprehensive pest control solutions for your home.</p>
          </div>
          <div className="bg-medium-sage p-6 rounded-lg">
            <h4 className="text-xl font-bold text-creamy-white mb-3">Commercial Services</h4>
            <p className="text-creamy-white">Professional pest management for businesses.</p>
          </div>
          <div className="bg-deep-forest p-6 rounded-lg">
            <h4 className="text-xl font-bold text-creamy-white mb-3">Emergency Response</h4>
            <p className="text-creamy-white">24/7 emergency pest control services.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark-charcoal text-creamy-white p-6 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Pest Free Victoria. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
