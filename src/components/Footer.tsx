import { Heart, Share2, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 py-16 text-beige-100/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl tracking-luxe text-white">
            Interior studio
          </div>
          <p className="mt-4 max-w-sm text-sm">
            Crafting Spaces Beyond Imagination. India&apos;s most trusted name in luxury interior design.
          </p>
          <div className="mt-6 flex gap-3">
            {[Heart, Share2, Mail, Phone].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-gold-400 hover:text-gold-400"
                aria-label="Social"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs uppercase tracking-luxe text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {['Services', 'Gallery', 'About', 'Testimonials', 'Contact'].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="transition hover:text-gold-400">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs uppercase tracking-luxe text-white">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>+91 9250234507</li>
            <li>hello@interiorstudio.com</li>
            <li>Kanpur , Lucknow</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 px-6 pt-8 text-xs md:flex-row">
        <span>© {new Date().getFullYear()} Interior studio. All rights reserved.</span>
        <span className="uppercase tracking-luxe">Crafted with care</span>
      </div>
    </footer>
  );
}