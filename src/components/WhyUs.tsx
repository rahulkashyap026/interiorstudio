'use client';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Sparkles } from 'lucide-react';

const items = [
  { icon: Award, title: 'Premium Quality', desc: 'Heritage materials & artisan craftsmanship in every detail.' },
  { icon: Users, title: 'Experienced Team', desc: 'Award-winning designers with 15+ years of expertise.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'Disciplined project management. Promises kept.' },
  { icon: Sparkles, title: 'Custom Designs', desc: 'No templates — every space is uniquely yours.' },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #d4af37 0%, transparent 40%), radial-gradient(circle at 80% 80%, #d4af37 0%, transparent 40%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="flex items-center justify-center gap-3 text-xs uppercase tracking-luxe text-gold-400">
            <span className="gold-line" /> Why Choose Us <span className="gold-line" />
          </span>
          <h2 className="mt-4 font-serif text-4xl font-light text-white md:text-5xl">
            The Interior studio <em className="text-gold-400 not-italic">Difference</em>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="hover-lift glass-dark relative rounded-2xl p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/10 text-gold-400">
                <it.icon size={24} strokeWidth={1.3} />
              </div>
              <h3 className="font-serif text-xl text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-beige-100/60">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}