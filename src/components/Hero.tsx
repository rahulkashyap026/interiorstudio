'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Parallax background — replace with your local image */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            // 📌 REPLACE: /public/images/hero/hero.jpg
            backgroundImage:
              "url('/images/hero/hero.jpg'), linear-gradient(135deg, #1a1a1a, #2a2418)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-ink-950/50 to-ink-950" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8 }}
          className="mb-6 flex items-center gap-3 text-xs uppercase tracking-luxe text-gold-400"
        >
          <span className="gold-line" /> Luxury Interior Studio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1, ease: 'easeOut' }}
          className="max-w-4xl font-serif text-5xl font-light leading-[1.05] text-white text-balance md:text-7xl lg:text-8xl"
        >
          Crafting Spaces <em className="text-gold-400 not-italic">Beyond</em> Imagination
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mt-8 max-w-xl text-lg text-beige-100/80"
        >
          Where timeless elegance meets contemporary craftsmanship. We design homes that whisper sophistication and roar individuality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          className="mt-12 flex flex-wrap gap-5"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-gold-400 px-8 py-4 text-sm font-medium uppercase tracking-luxe text-ink-950 transition-all duration-300 hover:bg-gold-500 hover:shadow-gold"
          >
            Get Free Consultation
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#gallery"
            className="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-medium uppercase tracking-luxe text-white backdrop-blur-md transition hover:border-gold-400 hover:bg-white/10"
          >
            <Play size={14} className="fill-current" /> View Portfolio
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-luxe text-beige-100/60">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-gold-400 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}