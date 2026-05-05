import { LucideIcon } from 'lucide-react';
import {
  LayoutGrid,
  Bed,
  Sofa,
  Briefcase,
  Home,
} from 'lucide-react';

export interface Service {
  title: string;
  desc: string;
  icon: LucideIcon;
  image: string;
}

export const services: Service[] = [
  {
    title: 'Kitchen Design',
    desc: 'Modular kitchens with smart storage and premium finishes',
    icon: LayoutGrid,
    image: '/images/services/kitchen.jpg',
  },
  {
    title: 'Bedroom Spaces',
    desc: 'Serene sanctuaries with custom wardrobes and ambient lighting',
    icon: Bed,
    image: '/images/services/bedroom.jpg',
  },
  {
    title: 'Living Areas',
    desc: 'Open-plan designs that blend comfort and elegance',
    icon: Sofa,
    image: '/images/services/living.jpg',
  },
  {
    title: 'Office Spaces',
    desc: 'Professional environments that inspire productivity',
    icon: Briefcase,
    image: '/images/services/office.jpg',
  },
  {
    title: 'Full Home Design',
    desc: 'End-to-end interior transformation with cohesive aesthetics',
    icon: Home,
    image: '/images/services/full-home.jpg',
  },
];