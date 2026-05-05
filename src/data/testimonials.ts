export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Aarav & Priya Sharma',
    role: 'Penthouse, Mumbai',
    quote: 'Interior studio didn\'t just design our home — they understood our soul. Every corner feels intentional and breathtaking.',
  },
  {
    name: 'Rohan Mehta',
    role: 'CEO, Mehta Group',
    quote: 'Our office now commands respect the moment clients walk in. Worth every rupee, every minute.',
  },
  {
    name: 'Ishita Kapoor',
    role: 'Villa Owner, Goa',
    quote: 'A masterpiece. The team\'s attention to detail is on another level entirely.',
  },
  {
    name: 'Vikram & Neha Singh',
    role: 'Bungalow, Delhi',
    quote: 'Three years later, we still discover little details. That\'s real craftsmanship.',
  },
];