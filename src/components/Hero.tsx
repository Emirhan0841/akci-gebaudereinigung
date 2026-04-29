import Link from 'next/link';

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slideUp">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                ✨ Professionelle Reinigungslösungen
              </div>
              <h1 className="gradient-text">
                Saubere Räume, Glückliche Kunden
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Mit über 10 Jahren Erfahrung bieten wir professionelle Reinigungsdienste für Gewerbe und Privatkundschaft. Zuverlässig, gründlich und fair.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Kostenfreies Angebot
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Unsere Leistungen
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <p className="text-2xl font-bold text-primary-600">10+</p>
                <p className="text-sm text-gray-600">Jahre Erfahrung</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent-500">100%</p>
                <p className="text-sm text-gray-600">Zufriedenheit</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-600">500+</p>
                <p className="text-sm text-gray-600">Glückliche Kunden</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-400 rounded-2xl transform rotate-3 opacity-10"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-primary-400 to-accent-300 rounded-2xl transform -rotate-3 shadow-2xl flex items-center justify-center text-6xl">
              🧹
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
