'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('/images/cta/cta-bg.jpg'), linear-gradient(135deg, #1a1a1a, #0a0a0a)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/40" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <h2 className="font-serif text-4xl font-light text-white md:text-6xl">
          Let&apos;s Design Your <em className="text-gold-400 not-italic">Dream Space</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-beige-100/70">
          Your vision deserves more than a plan. It deserves Interior studio.
        </p>
        <a
          href="#contact"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gold-400 px-10 py-5 text-sm font-medium uppercase tracking-luxe text-ink-950 transition hover:bg-gold-500 hover:shadow-gold"
        >
          Contact Now
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </section>
  );
}