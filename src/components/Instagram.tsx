'use client';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

// 📌 REPLACE: Add /public/images/instagram/1.jpeg ... 6.jpg
const posts = [
  '/images/instagram/1.jpeg',
  '/images/instagram/2.jpg',
  '/images/instagram/3.jpg',
  '/images/instagram/4.jpg',
  '/images/instagram/5.jpg',
  '/images/instagram/6.jpg',
];

export default function Instagram() {
  return (
    <section className="bg-beige-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="flex items-center justify-center gap-3 text-xs uppercase tracking-luxe text-gold-600">
            <span className="gold-line" /> Follow Us <span className="gold-line" />
          </span>
          <h2 className="mt-4 font-serif text-4xl font-light md:text-5xl">
            On <em className="text-gold-500 not-italic">Instagram</em>
          </h2>
          <a
            href="https://instagram.com/official.rahulk024"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm uppercase tracking-luxe text-ink-900 underline-offset-4 hover:text-gold-500 hover:underline"
          >
            <Heart size={16} /> @official.rahulk024
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {posts.map((src, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/official.rahulk024"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-ink-900"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23faf7f2"/><text x="50%25" y="50%25" font-family="serif" font-size="14" fill="%23c9a227" text-anchor="middle">IG ' +
                    (i + 1) +
                    '</text></svg>';
                }}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink-950/0 opacity-0 transition group-hover:bg-ink-950/60 group-hover:opacity-100">
                <Heart className="text-gold-400" size={28} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}