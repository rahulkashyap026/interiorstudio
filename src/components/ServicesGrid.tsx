'use client';
import { motion } from 'framer-motion';
import { services } from '@/data/services';

export default function ServicesGrid() {
  return (
    <section className="bg-beige-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="flex items-center justify-center gap-3 text-xs uppercase tracking-luxe text-gold-600">
            <span className="gold-line" /> All Services <span className="gold-line" />
          </span>
          <h2 className="mt-4 font-serif text-4xl font-light md:text-5xl">
            Browse the <em className="text-gold-500 not-italic">Full Suite</em>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="hover-lift group relative overflow-hidden rounded-2xl border border-beige-200 bg-white"
            >
              <div className="relative overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-48 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-beige-100 text-gold-500 transition group-hover:bg-ink-950 group-hover:text-gold-400">
                  <s.icon size={22} strokeWidth={1.3} />
                </div>
                <h3 className="mt-6 font-serif text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-900/60">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
