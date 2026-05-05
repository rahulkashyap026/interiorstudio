export interface GalleryItem {
  id: number;
  src: string;
  category: string;
  title: string;
}

export const gallery: GalleryItem[] = [
  { id: 1, src: '/images/gallery/kitchen/kitchen-1.jpg', category: 'Kitchen', title: 'Modern Modular Kitchen' },
  { id: 2, src: '/images/gallery/bedroom/bedroom-1.jpg', category: 'Bedroom', title: 'Master Suite' },
  { id: 3, src: '/images/gallery/living/living-1.jpg', category: 'Living Room', title: 'Open Plan Living' },
  { id: 4, src: '/images/gallery/office/office-1.jpg', category: 'Office', title: 'Executive Cabin' },
  { id: 5, src: '/images/gallery/full-home/home-1.jpg', category: 'Full Home', title: 'Penthouse Residence' },
  { id: 6, src: '/images/gallery/kitchen/kitchen-2.jpg', category: 'Kitchen', title: 'Italian Kitchen' },
  { id: 7, src: '/images/gallery/bedroom/bedroom-2.jpg', category: 'Bedroom', title: 'Guest Bedroom' },
  { id: 8, src: '/images/gallery/living/living-2.jpg', category: 'Living Room', title: 'Lounge Area' },
  { id: 9, src: '/images/gallery/office/office-2.jpg', category: 'Office', title: 'Co-working Space' },
  { id: 10, src: '/images/gallery/full-home/home-2.jpg', category: 'Full Home', title: 'Villa Interior' },
  { id: 11, src: '/images/gallery/kitchen/kitchen-3.jpg', category: 'Kitchen', title: 'L-Shape Kitchen' },
  { id: 12, src: '/images/gallery/bedroom/bedroom-3.jpg', category: 'Bedroom', title: 'Kids Bedroom' },
];