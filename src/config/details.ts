/**
 * ========================================
 * 🎨 COMPLETE DETAILS CONFIGURATION FILE
 * ========================================
 * 
 * यह फाइल सभी विवरण (डिटेल्स) एक जगह रखती है।
 * (This file contains all details in one place)
 * 
 * यहाँ आप आसानी से बदलाव कर सकते हैं:
 * - सभी टेक्स्ट (Text)
 * - सभी लिंक (Links)
 * - सभी रंग (Colors)
 * - सभी इमेजेस (Images)
 * - सभी विवरण (Details)
 * 
 * Change करने के लिए सिर्फ values को update करें।
 * ========================================
 */

// ============================================
// 0️⃣ साइट कॉन्फ़िगरेशन (SITE CONFIGURATION)
// ============================================
export const SITE_CONFIG = {
  // साइट का URL
  url: 'https://dreamhouseinterior.com',
  
  // Favicon आइकन पाथ
  favicon: '/favicon.ico',
  
  // Apple Touch Icon (iOS devices के लिए)
  appleIcon: '/apple-touch-icon.png',
  
  // Open Graph Image (सोशल शेयरिंग के लिए)
  ogImage: '/images/hero/hero.jpg',
  
  // थीम कलर (browser address bar के लिए)
  themeColor: '#0a0a0a',
  
  // Default Language
  language: 'en',
  
  // Country Code
  country: 'IN',
};

// ============================================
// 1️⃣ कंपनी की जानकारी (COMPANY INFORMATION)
// ============================================
export const COMPANY = {
  // कंपनी का नाम
  name: 'Dream House Interior',
  
  // कंपनी का टैगलाइन / स्लोगन
  tagline: 'Crafting Spaces Beyond Imagination',
  
  // कंपनी का विवरण
  description: "Crafting Spaces Beyond Imagination. India's most trusted name in luxury interior design.",
  
  // कंपनी का छोटा विवरण
  shortDescription: 'India\'s most trusted luxury interior design studio',
  
  // कॉपीराइट टेक्स्ट
  copyrightText: 'Dream House Interior. All rights reserved.',
  
  // फुटर में दिखने वाला टेक्स्ट
  footerCraftedText: 'Crafted with care',
};

// ============================================
// 2️⃣ संपर्क जानकारी (CONTACT INFORMATION)
// ============================================
export const CONTACT = {
  // फोन नंबर
  phone: '+91 9250234507',
  
  // ईमेल
  email: 'dreamhouseinterior.com',
  
  // शहर / पता
  location: 'Kanpur, Lucknow',
  
  // WhatsApp नंबर (बिना +91 के)
  whatsapp: '919250234507',
};

// ============================================
// 3️⃣ रंग (COLORS)
// ============================================
// ये सभी रंग tailwind.config.js में भी update करें
export const COLORS = {
  // काला / डार्क शेड्स
  ink: {
    50: '#f7f7f6',    // बहुत हल्का
    900: '#0a0a0a',   // गहरा
    950: '#050505',   // बहुत गहरा
  },
  
  // बेज रंग (Cream / Light Brown)
  beige: {
    50: '#faf7f2',    // बहुत हल्का बेज
    100: '#f3ede2',   // हल्का बेज
    200: '#e8dcc4',   // मध्यम बेज
    300: '#d9c69e',   // गहरा बेज
    400: '#c4a875',   // गहरा बेज
  },
  
  // सोने का रंग (Gold - Premium)
  gold: {
    400: '#d4af37',   // हल्का सोना
    500: '#c9a227',   // मध्यम सोना
    600: '#a8861f',   // गहरा सोना
  },
};

// ============================================
// 4️⃣ नेविगेशन लिंक्स (NAVIGATION LINKS)
// ============================================
export const NAVIGATION = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

// ============================================
// 5️⃣ हीरो सेक्शन (HERO SECTION)
// ============================================
export const HERO = {
  // सबसे ऊपर छोटा लेबल
  label: 'Luxury Dream House Interior',
  
  // मुख्य शीर्षक (heading)
  // NOTE: "<em>" वाले हिस्से को सोने का रंग मिलेगा
  title: 'Crafting Spaces <em >Beyond</em> Imagination',
  
  // हीरो का विवरण
  description: 'We transform your vision into reality with meticulous attention to detail and timeless elegance.',
  
  // बटन टेक्स्ट
  ctaButton: 'Start Your Journey',
  
  // हीरो इमेज पाथ
  imageUrl: '/images/hero/hero.jpg',
  
  // Play बटन के साथ विडीओ दिखाना है?
  showVideoButton: true,
  videoUrl: '#', // अपना विडीओ लिंक डालें
};

// ============================================
// 6️⃣ सर्विसेस / सेवाएं (SERVICES)
// ============================================
export const SERVICES = [
  {
    title: 'Kitchen Design',
    description: 'Modular kitchens with smart storage and premium finishes',
    imageUrl: '/images/services/kitchen.jpg',
    icon: 'LayoutGrid', // Icon का नाम (lucide-react से)
  },
  {
    title: 'Bedroom Spaces',
    description: 'Serene sanctuaries with custom wardrobes and ambient lighting',
    imageUrl: '/images/services/bedroom.jpg',
    icon: 'Bed',
  },
  {
    title: 'Living Areas',
    description: 'Open-plan designs that blend comfort and elegance',
    imageUrl: '/images/services/living.jpg',
    icon: 'Sofa',
  },
  {
    title: 'Office Spaces',
    description: 'Professional environments that inspire productivity',
    imageUrl: '/images/services/office.jpg',
    icon: 'Briefcase',
  },
  {
    title: 'Full Home Design',
    description: 'End-to-end interior transformation with cohesive aesthetics',
    imageUrl: '/images/services/full-home.jpg',
    icon: 'Home',
  },
  {
    title: 'Home Design',
    description: 'End-to-end interior transformation with cohesive aesthetics',
    imageUrl: '/images/services/full-home.jpg',
    icon: 'Home',
  },
];

// ============================================
// 7️⃣ गैलरी (GALLERY)
// ============================================
// अपनी इमेजेस जोड़ने के लिए यहाँ नई entry add करें
export const GALLERY = [
  // KITCHEN IMAGES
  { id: 1, src: '/images/gallery/kitchen/kitchen-1.jpg', category: 'Kitchen', title: 'Modern Modular Kitchen' },
  { id: 2, src: '/images/gallery/kitchen/kitchen-2.jpg', category: 'Kitchen', title: 'Italian Kitchen' },
  { id: 3, src: '/images/gallery/kitchen/kitchen-3.jpg', category: 'Kitchen', title: 'L-Shape Kitchen' },
  
  // BEDROOM IMAGES
  { id: 4, src: '/images/gallery/bedroom/bedroom-1.jpg', category: 'Bedroom', title: 'Master Suite' },
  { id: 5, src: '/images/gallery/bedroom/bedroom-2.jpg', category: 'Bedroom', title: 'Guest Bedroom' },
  { id: 6, src: '/images/gallery/bedroom/bedroom-3.jpg', category: 'Bedroom', title: 'Kids Bedroom' },
  
  // LIVING ROOM IMAGES
  { id: 7, src: '/images/gallery/living/living-1.jpg', category: 'Living Room', title: 'Open Plan Living' },
  { id: 8, src: '/images/gallery/living/living-2.jpg', category: 'Living Room', title: 'Lounge Area' },
  { id: 13, src: '/images/gallery/living/living-3.jpeg', category: 'Living Room', title: 'Family Room' },

  
  // OFFICE IMAGES
  { id: 9, src: '/images/gallery/office/office-1.jpg', category: 'Office', title: 'Executive Cabin' },
  { id: 10, src: '/images/gallery/office/office-2.jpg', category: 'Office', title: 'Co-working Space' },
  
  // FULL HOME IMAGES
  { id: 11, src: '/images/gallery/full-home/home-1.jpg', category: 'Full Home', title: 'Penthouse Residence' },
  { id: 12, src: '/images/gallery/full-home/home-2.jpg', category: 'Full Home', title: 'Villa Interior' },
];

// गैलरी के categories (फिल्टर के लिए)
export const GALLERY_CATEGORIES = [
  'All',
  'Kitchen',
  'Bedroom',
  'Living Room',
  'Office',
  'Full Home',
];

// ============================================
// 8️⃣ प्रशंसापत्र (TESTIMONIALS)
// ============================================
export const TESTIMONIALS = [
  {
    name: 'Aarav & Priya Sharma',
    role: 'Penthouse, Mumbai',
    quote: 'Dream House Interior didn\'t just design our home — they understood our soul. Every corner feels intentional and breathtaking.',
    rating: 5, // 1-5 stars
    imageUrl: '/images/testimonials/client-1.jpg', // क्लाइंट की फोटो (optional)
  },
  {
    name: 'Rohan Mehta',
    role: 'CEO, Mehta Group',
    quote: 'Our office now commands respect the moment clients walk in. Worth every rupee, every minute.',
    rating: 5,
    imageUrl: '/images/testimonials/client-2.jpg',
  },
  {
    name: 'Ishita Kapoor',
    role: 'Villa Owner, Goa',
    quote: 'A masterpiece. The team\'s attention to detail is on another level entirely.',
    rating: 5,
    imageUrl: '/images/testimonials/client-3.jpg',
  },
  {
    name: 'Vikram & Neha Singh',
    role: 'Bungalow, Delhi',
    quote: 'Three years later, we still discover little details. That\'s real craftsmanship.',
    rating: 5,
    imageUrl: '/images/testimonials/client-4.jpg',
  },
];

// ============================================
// 9️⃣ ABOUT सेक्शन
// ============================================
export const ABOUT = {
  // शीर्षक
  title: 'About Us',
  
  // छोटा विवरण / टैगलाइन
  subtitle: 'Crafting Interiors with Soul',
  
  // लंबा विवरण
  description: 'With over a decade of experience, Dream House Interior has redefined luxury living in India. Our team of award-winning designers combines timeless aesthetics with modern functionality to create spaces that tell your unique story.',
  
  // मुख्य फीचर्स / फायदे
  highlights: [
    'Award-winning designs',
    'Premium quality materials',
    'On-time delivery',
    'Lifetime support',
    'Custom solutions',
    'Professional team',
  ],
  
  // About इमेज
  imageUrl: '/images/about/about.jpg',
};

// ============================================
// 🔟 WHY US सेक्शन (क्यों हमें चुनें?)
// ============================================
export const WHY_US = [
  {
    title: 'Personalized Approach',
    description: 'We understand your unique style and create designs that reflect your personality.',
    icon: 'Heart',
  },
  {
    title: 'Premium Materials',
    description: 'Only the finest materials sourced from trusted suppliers worldwide.',
    icon: 'Star',
  },
  {
    title: 'Timely Delivery',
    description: 'We respect your time and deliver projects on or before the deadline.',
    icon: 'Clock',
  },
  {
    title: 'Expert Team',
    description: 'Our team consists of award-winning architects and interior designers.',
    icon: 'Users',
  },
  {
    title: 'Creative Vision',
    description: 'Transforming spaces into masterpieces with innovative thinking.',
    icon: 'Lightbulb',
  },
  {
    title: 'Lifetime Support',
    description: 'We support you long after project completion with maintenance and upgrades.',
    icon: 'Headphones',
  },
];

// ============================================
// 1️⃣1️⃣ CTA सेक्शन (Call To Action)
// ============================================
export const CTA = {
  // मुख्य हेडिंग
  title: 'Ready to Transform Your Space?',
  
  // छोटा विवरण
  description: 'Let\'s create something extraordinary together. Get in touch with our design experts today.',
  
  // बटन टेक्स्ट
  buttonText: 'Get Free Consultation',
  
  // बटन लिंक
  buttonLink: '#contact',
  
  // बैकग्राउंड इमेज
  backgroundImage: '/images/cta/cta-bg.jpg',
};

// ============================================
// 1️⃣2️⃣ इंस्टाग्राम सेक्शन
// ============================================
export const INSTAGRAM = {
  // शीर्षक
  title: 'Follow Our Latest Work',
  
  // विवरण
  description: 'Discover daily inspirations and stunning interiors on our Instagram',
  
  // इंस्टाग्राम यूजरनेम (@ के बिना)
  username: 'interior_studio',
  
  // इंस्टाग्राम प्रोफाइल लिंक
  profileUrl: 'https://instagram.com/interior_studio',
  
  // इंस्टाग्राम हैशटैग
  hashtags: ['#interiorstudio', '#luxuryinteriors', '#homedecor'],
};

// ============================================
// 1️⃣3️⃣ सोशल मीडिया लिंक्स
// ============================================
export const SOCIAL_MEDIA = {
  // फेसबुक
  facebook: 'https://facebook.com/interiorstudio',
  
  // इंस्टाग्राम
  instagram: 'https://instagram.com/interior_studio',
  
  // Twitter / X
  twitter: 'https://twitter.com/interiorstudio',
  
  // लिंक्डइन
  linkedin: 'https://linkedin.com/company/interior-studio',
  
  // YouTube
  youtube: 'https://youtube.com/@interiorstudio',
  
  // Pinterest
  pinterest: 'https://pinterest.com/interiorstudio',
  
  // WhatsApp (सिर्फ नंबर)
  whatsapp: '9250234507',
};

// ============================================
// 1️⃣4️⃣ पेज के टाइटल्स (PAGE TITLES & META)
// ============================================
export const PAGE_TITLES = {
  // होम पेज
  home: {
    title: 'Dream House Interior - Luxury Interior Design',
    description: 'Transform your spaces into luxury interiors with India\'s trusted interior design studio.',
  },
  
  // सर्विसेस पेज
  services: {
    title: 'Our Services - Dream House Interior',
    description: 'Explore our comprehensive interior design services for homes and offices.',
  },
  
  // गैलरी पेज
  gallery: {
    title: 'Gallery - Dream House Interior',
    description: 'Browse our stunning portfolio of completed interior design projects.',
  },
  
  // About पेज
  about: {
    title: 'About Us - Dream House Interior',
    description: 'Learn about Dream House Interior\'s journey in creating beautiful spaces.',
  },
  
  // कांटैक्ट पेज
  contact: {
    title: 'Contact Us - Dream House Interior',
    description: 'Get in touch with us for a free consultation on your project.',
  },
};

// ============================================
// 1️⃣5️⃣ फुटर लिंक्स
// ============================================
export const FOOTER_LINKS = {
  // Quick Links
  quickLinks: [
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
    { label: 'Instagram', href: 'https://instagram.com/interior_studio' },
  ],
  
  // Legal Links
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Return Policy', href: '/returns' },
  ],
};

// ============================================
// 1️⃣6️⃣ एनीमेशन्स (ANIMATIONS)
// ============================================
export const ANIMATIONS = {
  // Fade up animation duration
  fadeUpDuration: 0.8,
  
  // Stagger delay between elements
  staggerDelay: 0.1,
  
  // Scroll animation trigger offset
  scrollTriggerOffset: 100,
};

// ============================================
// 1️⃣7️⃣ कांटैक्ट फॉर्म (CONTACT FORM)
// ============================================
export const CONTACT_FORM = {
  // फॉर्म का शीर्षक
  title: 'Get Your Free Consultation',
  
  // फॉर्म का विवरण
  description: 'Fill in your details and our team will reach out within 24 hours.',
  
  // फॉर्म फील्ड्स की प्लेसहोल्डर्स
  fields: {
    name: 'Your Full Name',
    email: 'Your Email Address',
    phone: 'Your Phone Number',
    project: 'Project Type',
    budget: 'Estimated Budget',
    message: 'Tell us about your project',
  },
  
  // Submit बटन टेक्स्ट
  submitButton: 'Send Inquiry',
  
  // Success मैसेज
  successMessage: 'Thank you! We\'ll contact you soon.',
};

// ============================================
// 1️⃣8️⃣ टेक्स्ट वेरिएशन्स (COMMON TEXT)
// ============================================
export const COMMON_TEXT = {
  // Loading text
  loading: 'Loading...',
  
  // Error messages
  errorMessage: 'Something went wrong. Please try again.',
  
  // Success message
  successMessage: 'Success! Thank you.',
  
  // View more
  viewMore: 'View More',
  
  // Learn more
  learnMore: 'Learn More',
  
  // Get in touch
  getInTouch: 'Get In Touch',
  
  // Coming soon
  comingSoon: 'Coming Soon',
};

// ============================================
// ✅ USAGE GUIDE
// ============================================
/*
 * 
 * 🎯 कैसे use करें?
 * 
 * 1. Import करें:
 *    import { COMPANY, COLORS, SERVICES } from '@/config/details'
 * 
 * 2. Components में use करें:
 *    <h1>{COMPANY.name}</h1>
 *    <p>{COMPANY.tagline}</p>
 * 
 * 3. कोई भी बदलाव करने के लिए यहाँ values change करें
 * 
 * 4. सभी files में automatically update हो जाएगा
 * 
 * ✅ फायदे:
 * ✓ सभी विवरण एक जगह
 * ✓ कोडिंग नहीं - सिर्फ values change करें
 * ✓ गलती का खतरा कम
 * ✓ वक्त बचाएं
 * ✓ आसान maintenance
 * 
 */
