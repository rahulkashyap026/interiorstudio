'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get('name')?.toString().trim() ?? '';
    const phone = formData.get('phone')?.toString().trim() ?? '';
    const email = formData.get('email')?.toString().trim() ?? '';
    const message = formData.get('message')?.toString().trim() ?? '';

    const whatsappNumber = '91 9250234507'; // replace with your WhatsApp number in international format
    const text = `*New Inquiry from Interior studio*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    try {
      window.open(whatsappUrl, '_blank');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      form.reset();
    } catch (error) {
      console.error('WhatsApp open error:', error);
      alert('Unable to open WhatsApp. Please try again.');
    }
  };

  return (
    <section id="contact" className="bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="flex items-center gap-3 text-xs uppercase tracking-luxe text-gold-400">
            <span className="gold-line" /> Get In Touch
          </span>
          <h2 className="mt-4 font-serif text-4xl font-light text-white md:text-6xl">
            Begin Your <em className="text-gold-400 not-italic">Journey</em>
          </h2>
          <p className="mt-6 max-w-md text-beige-100/60">
            Share your vision. Our design consultants will reach out within 24 hours.
          </p>

          <ul className="mt-10 space-y-6">
            {[
              { icon: Phone, label: '+91 9250234507', href: 'tel:+91 9250234507' },
              { icon: Mail, label: 'hello@interiorstudio.com', href: 'mailto:hello@interiorstudio.com' },
              { icon: MapPin, label: 'Kanpur , Lucknow ', href: '#' },
            ].map((c) => (
              <li key={c.label}>
                <a href={c.href} className="group flex items-center gap-4 text-beige-100/80 transition hover:text-gold-400">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition group-hover:border-gold-400 group-hover:bg-gold-400/10">
                    <c.icon size={18} />
                  </span>
                  <span>{c.label}</span>
                </a>
              </li>
            ))}
          </ul>

         <div className="mt-10 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3573.5153523630183!2d80.29675507564572!3d26.406840976952317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDI0JzI0LjYiTiA4MMKwMTcnNTcuNiJF!5e0!3m2!1sen!2sin!4v1777950386713!5m2!1sen!2sin"
    
    className="w-full h-full border-0"
    
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    
    title="Google Map"
  ></iframe>

</div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          onSubmit={onSubmit}
          className="glass-dark space-y-5 rounded-2xl p-8 lg:p-10"
        >
          <Input label="Full Name" name="name" required />
          <Input label="Phone Number" name="phone" type="tel" required />
          <Input label="Email Address" name="email" type="email" required />
          <div>
            <label className="mb-2 block text-xs uppercase tracking-luxe text-beige-100/60">Your Vision</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-beige-100/30 focus:border-gold-400 focus:outline-none"
              placeholder="Tell us about your space…"
            />
          </div>

          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-3 rounded-full bg-gold-400 py-4 text-sm font-medium uppercase tracking-luxe text-ink-950 transition hover:bg-gold-500 hover:shadow-gold"
          >
            {submitted ? '✓ Message Sent' : <>Send Message <Send size={16} className="transition-transform group-hover:translate-x-1" /></>}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-luxe text-beige-100/60">{label}</label>
      <input
        {...props}
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-beige-100/30 focus:border-gold-400 focus:outline-none"
      />
    </div>
  );
}