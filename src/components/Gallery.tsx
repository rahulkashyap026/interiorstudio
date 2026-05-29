'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// 📌 REPLACE: Add images to /public/gallery/ folder
const gallery = [
  { id: 1, src: '/images/gallery/kitchen/kitchen-1.jpg', category: 'Kitchen', title: 'Modern Modular Kitchen' },
  { id: 2, src: '/images/gallery/bedroom/bedroom-1.jpg', category: 'Bedroom', title: 'Master Suite' },
  { id: 3, src: '/images/gallery/living/living-1.jpg', category: 'Living Room', title: 'Open Plan Living' },
  { id: 4, src: '/images/gallery/office/office-1.jpg', category: 'Office', title: 'Executive Cabin' },
  { id: 5, src: '/images/gallery/full-home/home-1.jpg', category: 'Full Home', title: 'Penthouse Residence' },
  { id: 6, src: '/images/gallery/kitchen/kitchen-2.jpg', category: 'Kitchen', title: 'Italian Kitchen' },
  { id: 7, src: '/images/gallery/bedroom/bedroom-2.jpg', category: 'Bedroom', title: 'Guest Bedroom' },
  { id: 8, src: '/images/gallery/living/living-2.jpg', category: 'Living Room', title: 'Lounge Area' },
  { id: 9, src: '/images/gallery/office/office-2.jpg', category: 'Office', title: 'Co-working Space' },
  { id: 10, src: '/images/gallery/full-home/home-2.jpg', category: 'Full Home', title: 'Villa Interior' },
  { id: 11, src: '/images/gallery/kitchen/kitchen-3.jpg', category: 'Kitchen', title: 'L-Shape Kitchen' },
  { id: 12, src: '/images/gallery/bedroom/bedroom-3.jpg', category: 'Bedroom', title: 'Kids Bedroom' },
  { id: 13, src: '/images/gallery/living/living-3.jpeg', category: 'Living Room', title: 'Family Room' },

];

const categories = ['All', 'Kitchen', 'Bedroom', 'Living Room', 'Office', 'Full Home'];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? gallery : gallery.filter((g) => g.category === active);

  return (
    <section id="gallery" className="bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="flex items-center gap-3 text-xs uppercase tracking-luxe text-gold-400">
              <span className="gold-line" /> Portfolio
            </span>
            <h2 className="mt-4 font-serif text-4xl font-light text-white md:text-6xl">
              Crafted <em className="text-gold-400 not-italic">Masterpieces</em>
            </h2>
            <p className="mt-3 max-w-md text-beige-100/60">
              Hand-picked projects that define our pursuit of perfection.
            </p>
          </div>

          {/* Filter chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-5 py-2 text-xs uppercase tracking-luxe transition ${
                  active === c
                    ? 'border-gold-400 bg-gold-400 text-ink-950'
                    : 'border-white/15 text-beige-100/70 hover:border-gold-400 hover:text-gold-400'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.figure
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
                className="group relative break-inside-avoid overflow-hidden rounded-2xl bg-ink-900"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.title}
                    onError={(e) => {
                      // Local placeholder if image missing
                      (e.currentTarget as HTMLImageElement).src =
                        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><rect width="400" height="500" fill="%231a1a1a"/><text x="50%25" y="50%25" font-family="serif" font-size="20" fill="%23d4af37" text-anchor="middle">Upload Image</text></svg>';
                    }}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                </div>

                <figcaption className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-[10px] uppercase tracking-luxe text-gold-400">
                    {item.category}
                  </span>
                  <h3 className="mt-1 font-serif text-xl text-white">{item.title}</h3>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>

        <p className="mt-8 text-center text-xs uppercase tracking-luxe text-beige-100/40">
          
        </p>
      </div>
    </section>
  );
}