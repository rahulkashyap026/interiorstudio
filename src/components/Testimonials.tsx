'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

const testimonials = [
  { name: 'Aarav & Priya Sharma', role: 'Penthouse, Mumbai', quote: 'Interior studio didn\'t just design our home — they understood our soul. Every corner feels intentional and breathtaking.' },
  { name: 'Rohan Mehta', role: 'CEO, Mehta Group', quote: 'Our office now commands respect the moment clients walk in. Worth every rupee, every minute.' },
  { name: 'Ishita Kapoor', role: 'Villa Owner, Goa', quote: 'A masterpiece. The team\'s attention to detail is on another level entirely.' },
  { name: 'Vikram & Neha Singh', role: 'Bungalow, Delhi', quote: 'Three years later, we still discover little details. That\'s real craftsmanship.' },
];

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[i];

  return (
    <section className="bg-beige-100 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="flex items-center justify-center gap-3 text-xs uppercase tracking-luxe text-gold-600">
          <span className="gold-line" /> Testimonials <span className="gold-line" />
        </span>
        <h2 className="mt-4 font-serif text-4xl font-light md:text-5xl">
          Voices of <em className="text-gold-500 not-italic">Trust</em>
        </h2>

        <div className="relative mt-16 min-h-[280px]">
          <Quote className="mx-auto mb-6 text-gold-400" size={40} strokeWidth={1} />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mx-auto max-w-2xl font-serif text-2xl font-light leading-relaxed text-ink-900 md:text-3xl">
                &quot;{t.quote}&quot;
              </p>
              <div className="mt-8">
                <div className="font-serif text-lg">{t.name}</div>
                <div className="text-xs uppercase tracking-luxe text-ink-900/50">{t.role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => setI((p) => (p - 1 + testimonials.length) % testimonials.length)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/20 transition hover:border-gold-400 hover:text-gold-500"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${i === idx ? 'w-8 bg-gold-500' : 'w-1.5 bg-ink-900/20'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setI((p) => (p + 1) % testimonials.length)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/20 transition hover:border-gold-400 hover:text-gold-500"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}