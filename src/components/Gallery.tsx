'use client';

import { useState } from 'react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image?: string;
  before?: string;
  after?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Badreinigung',
    category: 'Innenraum',
    before: '/badalt.jpeg',
    after: '/badneu.jpeg',
  },
  {
    id: 2,
    title: 'WC-Reinigung',
    category: 'Innenraum',
    before: '/wcalt.jpeg',
    after: '/wcneu.jpeg',
  },
  {
    id: 3,
    title: 'Winterdienst',
    category: 'Außen',
    image: '/winterdienst1.jpeg',
  },
  {
    id: 4,
    title: 'Winterdienst',
    category: 'Außen',
    image: '/winterdienst2.jpeg',
  },
];

const categories = ['Alle', 'Gewerbe', 'Innenraum', 'Außen', 'Fassade'];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  const [expandAll, setExpandAll] = useState(false);
  const [toggledItems, setToggledItems] = useState<Record<number, boolean>>({});

  const filteredItems = selectedCategory === 'Alle'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const displayedItems = selectedCategory === 'Alle' && !expandAll
    ? filteredItems.slice(0, 3)
    : filteredItems;

  const handleCategoryClick = (category: string) => {
    if (category === 'Alle') {
      if (selectedCategory === 'Alle') {
        setExpandAll(!expandAll);
      } else {
        setSelectedCategory('Alle');
        setExpandAll(true);
      }
    } else {
      setSelectedCategory(category);
      setExpandAll(false);
    }
  };

  const toggleImage = (id: number) => {
    setToggledItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
              onClick={() => handleCategoryClick(category)}
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

        {/* Gallery Grid - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {displayedItems.map((item, idx) => {
            const isBeforeAfter = !!item.before && !!item.after;
            const showBefore = toggledItems[item.id];
            const currentImage = isBeforeAfter ? (showBefore ? item.before : item.after) : item.image;
            const label = isBeforeAfter ? (showBefore ? 'Vorher' : 'Nachher') : undefined;

            const CardElement = isBeforeAfter ? 'button' : 'div';
            const cardProps = isBeforeAfter
              ? {
                  onClick: () => toggleImage(item.id),
                  type: 'button',
                }
              : {};

            return (
              <CardElement
                key={item.id}
                className="group relative overflow-hidden rounded-xl shadow-lg animate-slideUp hover:shadow-xl transition-shadow"
                style={{ animationDelay: `${idx * 100}ms` }}
                {...cardProps}
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[3/4] bg-gray-200 overflow-hidden">
                  <img
                    src={currentImage}
                    alt={`${item.title}${label ? ` - ${label}` : ''}`}
                    className={`w-full h-full object-cover ${isBeforeAfter ? 'group-hover:scale-105' : ''} transition-transform duration-300`}
                  />
                </div>

                {/* Label Badge - only for before/after */}
                {isBeforeAfter && (
                  <div className="absolute top-3 right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {label}
                  </div>
                )}

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                  <h3 className="text-white text-lg font-bold">{item.title}</h3>
                </div>

                {/* Hover Hint - only for before/after */}
                {isBeforeAfter && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 px-4 py-2 rounded-lg text-sm font-medium">
                      Klicken zum Vergleichen
                    </div>
                  </div>
                )}
              </CardElement>
            );
          })}
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
