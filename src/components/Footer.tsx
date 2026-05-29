import { Heart, Share2, Mail, Phone } from 'lucide-react';
import { COMPANY, CONTACT, FOOTER_LINKS, SOCIAL_MEDIA } from '@/config/details';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 py-16 text-beige-100/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl tracking-luxe text-white uppercase">
            {COMPANY.name}
          </div>
          <p className="mt-4 max-w-sm text-sm">
            {COMPANY.description}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={SOCIAL_MEDIA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-gold-400 hover:text-gold-400"
              aria-label="Instagram"
            >
              <Share2 size={16} />
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-gold-400 hover:text-gold-400"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-gold-400 hover:text-gold-400"
              aria-label="Phone"
            >
              <Phone size={16} />
            </a>
            <a
              href={`https://wa.me/${SOCIAL_MEDIA.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-gold-400 hover:text-gold-400"
              aria-label="WhatsApp"
            >
              <Heart size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs uppercase tracking-luxe text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {FOOTER_LINKS.quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition hover:text-gold-400">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs uppercase tracking-luxe text-white">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>{CONTACT.phone}</li>
            <li>{CONTACT.email}</li>
            <li>{CONTACT.location}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 px-6 pt-8 text-xs md:flex-row">
        <span>© {new Date().getFullYear()} {COMPANY.copyrightText}</span>
        <span className="uppercase tracking-luxe">Crafted with care</span>
      </div>
    </footer>
  );
}