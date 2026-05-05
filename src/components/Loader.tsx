'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative"
            >
              <div className="font-serif text-4xl text-bold tracking-luxe text-beige-100 md:text-6xl">
                INTERIOR STUDIO
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
                className="absolute -bottom-2 left-0 h-px bg-gold-400"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xs uppercase tracking-luxe text-beige-200/70"
            >
              Crafting Excellence
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}