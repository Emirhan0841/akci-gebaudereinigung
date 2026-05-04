'use client';

import Image from 'next/image';
import { SERVICES } from '@/lib/constants';
import { useState } from 'react';

export function Services() {
  const [selectedService, setSelectedService] = useState(SERVICES[0]);

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slideUp">
          <p className="text-primary-600 font-semibold mb-3">Was wir anbieten</p>
          <h2 className="mb-6">Umfassende Reinigungslösungen</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Für jeden Bedarf haben wir die richtige Lösung. Professionell, zuverlässig und zu fairen Preisen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service)}
              className={`p-6 rounded-xl transition-all text-left ${
                selectedService.id === service.id
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-white border-2 border-gray-200 text-gray-900 hover:border-primary-300'
              }`}
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              <p className={selectedService.id === service.id ? 'text-primary-100' : 'text-gray-600'}>
                {service.description}
              </p>
            </button>
          ))}
        </div>

        {/* Service Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 animate-slideUp">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Image */}
            <div className="relative h-80 rounded-xl overflow-hidden shadow-md order-2 md:order-1">
              <Image
                src={selectedService.id === 1 ? '/Fenster1.png' : selectedService.id === 2 ? '/Staubsauger.png' : selectedService.id === 3 ? '/Außenfassade.png' : '/wischen2.png'}
                alt={selectedService.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <div>
                <div className="text-6xl mb-6">{selectedService.icon}</div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">
                  {selectedService.name}
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  {selectedService.description}
                </p>
                <a
                  href="#contact"
                  className="inline-block px-6 py-3 bg-accent-500 text-white rounded-lg font-semibold hover:bg-accent-600 transition-colors"
                >
                  Angebot einholen
                </a>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Leistungen:</h4>
                {selectedService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-accent-600 font-bold text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Interessiert? Wir erstellen dir gerne ein maßgeschneidertes Angebot!
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors"
          >
            Jetzt kostenfreies Angebot anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
