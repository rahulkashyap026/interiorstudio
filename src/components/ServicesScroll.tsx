    'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { services } from '@/data/services';

export default function ServicesScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  // Move horizontally over scroll length
  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-78%']);

  return (
    <section id="services" ref={ref} className="relative h-[400vh] bg-ink-950">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-12 max-w-7xl px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-xs uppercase tracking-luxe text-gold-400"
          >
            <span className="gold-line" /> Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-4 max-w-3xl font-serif text-4xl font-light text-white md:text-6xl"
          >
            Interior studio <em className="text-gold-400 not-italic">Services</em>
          </motion.h2>
          <p className="mt-4 max-w-xl text-beige-100/60">
            Scroll to explore our seven pillars of design excellence.
          </p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 will-change-transform">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative flex h-[420px] w-[340px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-md transition duration-500 hover:border-gold-400/40 hover:shadow-luxe"
            >
              <div className="absolute inset-0 -z-20 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${s.image})` }} />
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gold-400/0 to-gold-400/0 transition duration-700 group-hover:from-gold-400/10 group-hover:to-transparent" />

              <div>
                <span className="text-xs uppercase tracking-luxe text-gold-400">
                  0{i + 1}
                </span>
                <div className="mt-12 flex h-16 w-16 items-center justify-center rounded-full border border-gold-400/30 bg-gold-400/5 text-gold-400 transition group-hover:rotate-6 group-hover:border-gold-400">
                  <s.icon size={26} strokeWidth={1.2} />
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-beige-100/70">{s.desc}</p>
                <div className="mt-6 h-px w-12 bg-gold-400/40 transition-all duration-500 group-hover:w-full" />
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}