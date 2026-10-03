import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'magazine-print-annual-vol1',
    title: "MagazineSpare Print Annual Vol. 1 - Collector's Edition",
    category: 'Print Editions',
    price: 85000,
    originalPrice: 105000,
    rating: 4.9,
    reviewsCount: 128,
    description: "Luxurious 240-page hardcover publication printed on 180gsm archival paper. Featuring deep-dive investigative journalism, photographic essays, and architectural monographs.",
    image: '/src/assets/images/magazine_print_issue_1791046659621.jpg',
    inStock: true,
    features: [
      "Hardcover Linen Binding with Foil Debossing",
      "FSC Certified 180gsm Archival Matte Paper",
      "Exclusive Paris & EV Global Essays",
      "Individually Numbered Limited Run"
    ]
  },
  {
    id: 'digital-pro-membership',
    title: 'Digital Pro Annual Membership (Unlimited All-Access)',
    category: 'Subscriptions',
    price: 120000,
    originalPrice: 175000,
    rating: 5.0,
    reviewsCount: 412,
    description: "Unlimited digital access across all desktop, tablet, and mobile platforms. Enjoy ad-free reading, audio article narrations, and exclusive subscriber dispatch briefings.",
    image: '/src/assets/images/tablet_streaming_apps_1791045826090.jpg',
    inStock: true,
    features: [
      "100% Ad-Free Reading Experience",
      "High-Res PDF Issues & Offline Mode",
      "Weekly Editorial Dispatches & Briefings",
      "Priority Invitations to Live Video Salons"
    ]
  },
  {
    id: 'pro-photojournalist-prime-lens',
    title: 'Photojournalist Prime Lens 50mm f/1.4 Pro Edition',
    category: 'Gear & Optics',
    price: 1250000,
    originalPrice: 1400000,
    rating: 4.8,
    reviewsCount: 87,
    description: "Ultra-sharp professional prime lens with nano-crystal multicoating, silent ultrasonic autofocus motor, and rugged weather-sealed magnesium chassis.",
    image: '/src/assets/images/camera_lens_photo_1791045838333.jpg',
    inStock: true,
    features: [
      "Fast f/1.4 Maximum Low-Light Aperture",
      "Circular 9-Blade Diaphragm for Creamy Bokeh",
      "Weather-Sealed Magnesium Mount",
      "Nano Anti-Reflective Fluorine Coating"
    ]
  },
  {
    id: 'field-tech-modular-backpack',
    title: 'Field & Tech Modular Camera Backpack 25L',
    category: 'Field Gear',
    price: 320000,
    originalPrice: 395000,
    rating: 4.9,
    reviewsCount: 215,
    description: "Waterproof Cordura tactical daypack with dedicated padded laptop compartment (up to 16\"), customizable camera gear dividers, and hidden passport security pocket.",
    image: '/src/assets/images/tech_travel_backpack_1791046671304.jpg',
    inStock: true,
    features: [
      "Weatherproof 1000D Ballistic Cordura",
      "Padded Laptop (16\") & Tablet Sleeves",
      "Fidlock Magnetic Fasteners & Sternum Strap",
      "Side Access Quick-Draw Camera Hatch"
    ]
  },
  {
    id: 'autonomous-ai-edge-kit',
    title: 'Autonomous AI Edge Developer Neural Module',
    category: 'Tech & Hardware',
    price: 495000,
    originalPrice: 575000,
    rating: 4.7,
    reviewsCount: 64,
    description: "Compact edge neural computing development module with PCIe 4.0 expansion, Tensor acceleration, and pre-flashed machine learning benchmark workbench.",
    image: '/src/assets/images/ai_circuit_chip_1791045763363.jpg',
    inStock: true,
    features: [
      "Low-Power 40 TOPS Neural Processor",
      "PCIe 4.0 & Dual USB-C 3.2 Gen 2",
      "Pre-Installed Linux Model Workbench",
      "Anodized Aluminum Passive Heatsink"
    ]
  },
  {
    id: 'historic-capitals-anthology',
    title: 'Historic Capitals: A Journey Through Heritage & Architecture',
    category: 'Print Editions',
    price: 70000,
    originalPrice: 90000,
    rating: 4.9,
    reviewsCount: 93,
    description: "A comprehensive photographic and architectural journey through Paris, Rome, Kyoto, and Istanbul with local culinary secrets and walking itineraries.",
    image: '/src/assets/images/eiffel_tower_night_1791045748763.jpg',
    inStock: true,
    features: [
      "Full-Color Panoramic Gatefold Plates",
      "Hand-Drawn Neighborhood Walking Maps",
      "Culinary Producer & Artisan Directories",
      "Smyth-Sewn Binding with Ribbon Bookmark"
    ]
  }
];

export const SHOP_CATEGORIES = [
  'All',
  'Print Editions',
  'Subscriptions',
  'Gear & Optics',
  'Field Gear',
  'Tech & Hardware'
];
