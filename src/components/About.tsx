'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-beige-50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-ink-950 shadow-luxe">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about/about.jpg"
              alt="Interior studio atelier"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><rect width="400" height="500" fill="%23faf7f2"/><text x="50%25" y="50%25" font-family="serif" font-size="20" fill="%23c9a227" text-anchor="middle">About Image</text></svg>';
              }}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-gold-400/30 bg-white p-6 shadow-luxe md:block">
            <div className="font-serif text-4xl text-ink-950">15<span className="text-gold-500">+</span></div>
            <div className="text-xs uppercase tracking-luxe text-ink-900/60">Years of Craft</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="flex items-center gap-3 text-xs uppercase tracking-luxe text-gold-600">
            <span className="gold-line" /> Our Story
          </span>
          <h2 className="mt-4 font-serif text-4xl font-light leading-tight md:text-5xl">
            Where <em className="text-gold-500 not-italic">Vision</em> Meets Craft
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-900/70">
            For over a decade, Interior studio has redefined luxury living. Every project is a personal narrative — sculpted by master artisans, guided by world-class designers, and finished with the kind of detail that speaks softly but lingers forever.
          </p>
          <p className="mt-4 text-ink-900/60">
            We don&apos;t decorate spaces. We choreograph experiences — where light, texture, and silhouette converse to create homes that are unmistakably yours.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-beige-200 pt-8">
            {[
              { n: '500+', l: 'Projects' },
              { n: '98%', l: 'Repeat Clients' },
              { n: '40+', l: 'Awards' },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl text-ink-950">{s.n}</div>
                <div className="text-xs uppercase tracking-luxe text-ink-900/50">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}