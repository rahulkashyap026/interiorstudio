'use client';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY, NAVIGATION } from '@/config/details';

const links = NAVIGATION;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink-950/80 backdrop-blur-xl shadow-luxe' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#home" className="font-serif text-xl tracking-luxe text-white uppercase">
          {COMPANY.name}
        </a>

        <ul className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm uppercase tracking-luxe text-beige-100/90 transition hover:text-gold-400"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-gold-400 px-6 py-2 text-xs uppercase tracking-luxe text-gold-400 transition hover:bg-gold-400 hover:text-ink-950"
          >
            Consultation
          </a>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4 border-t border-white/10 bg-ink-950/95 px-6 py-6 backdrop-blur-xl lg:hidden"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block text-sm uppercase tracking-luxe text-beige-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}