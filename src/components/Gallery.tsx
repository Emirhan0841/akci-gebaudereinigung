'use client';

import Image from 'next/image';
import { useState } from 'react';

// Placeholder gallery data - replace with real images
const galleryItems = [
  {
    id: 1,
    title: 'Büroreinigung',
    category: 'Gewerbe',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%231aa5b8" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="32" fill="white" text-anchor="middle" dominant-baseline="middle"%3E📊 Büroreinigung%3C/text%3E%3C/svg%3E',
  },
  {
    id: 2,
    title: 'Fensterreinigung',
    category: 'Fassade',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%232be88c" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="32" fill="white" text-anchor="middle" dominant-baseline="middle"%3E🪟 Fensterreinigung%3C/text%3E%3C/svg%3E',
  },
  {
    id: 3,
    title: 'Grundreinigung',
    category: 'Innenraum',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%231aa5b8" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="32" fill="white" text-anchor="middle" dominant-baseline="middle"%3E✨ Grundreinigung%3C/text%3E%3C/svg%3E',
  },
  {
    id: 4,
    title: 'Fassadenreinigung',
    category: 'Außen',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%232be88c" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="32" fill="white" text-anchor="middle" dominant-baseline="middle"%3E🏗️ Fassadenreinigung%3C/text%3E%3C/svg%3E',
  },
];

const categories = ['Alle', 'Gewerbe', 'Innenraum', 'Außen', 'Fassade'];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Alle');

  const filteredItems = selectedCategory === 'Alle'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 animate-slideUp">
          <p className="text-primary-600 font-semibold mb-3">Portfolio</p>
          <h2 className="mb-6">Unsere Arbeiten</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schau dir an, wie wir Räume verwandeln und zum Glänzen bringen.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg animate-slideUp"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-end justify-between p-4 text-white">
                <span className="text-sm font-semibold px-3 py-1 bg-primary-600 rounded-full">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-right">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Möchtest du, dass wir auch deine Räume so zum Glänzen bringen?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-accent-500 text-white rounded-lg font-semibold text-lg hover:bg-accent-600 transition-colors"
          >
            Kostenfreies Angebot anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
