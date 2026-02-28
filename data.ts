import { 
  Cloud, Box, Globe, Monitor, Server, Smartphone, Zap, 
  Settings, Users, Star, Map, ShoppingBag, Phone, BarChart, Plug, Receipt, Clock, Database, Scale
} from 'lucide-react';
import { NavItem, SoftwareSolution, HardwareItem, PaymentProvider } from './types';
import { scale } from 'motion';

export const COMPANY_ADDRESS = "Unit 2 Tregrehan Workshops, Tregrehan, St Austell, Cornwall, PL25 3TQ";
export const COMPANY_PHONE = "0333 577 0108";
export const COMPANY_EMAIL = "info@cornwallscalesltd.co.uk";
export const LOGO_URL = "/CSE.png";
export const FAVICON_URL = "/Favicon.png";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'EPOS Solutions', path: '/solutions' },
  { 
    label: 'Hardware', 
    path: '/hardware',
    children: [
      { label: 'EPOS Hardware', path: '/hardware' },
      { label: 'Cash Registers', path: '/hardware/cash-registers' },
      { label: 'Scales', path: '/hardware/scales' },
      { label: 'Digital Menu Signage', path: '/hardware/digital-signage' }
    ]
  },
  { label: 'Support', path: '/support' },
];

export const SOFTWARE_SOLUTIONS: SoftwareSolution[] = [
  {
    id: 'lightspeed',
    name: 'Lightspeed',
    tagline: 'The One-Stop Commerce Platform',
    description: 'Lightspeed Restaurant is the one-stop commerce platform that lets you run your entire restaurant, serve more customers and access your business anywhere, anytime.',
    logoText: 'Lightspeed',
    color: 'bg-[#E81C1C]',
    logoUrl: '/images/epos/Lightspeed_Logo.png',
    partnerLogoUrl: '/images/epos/Lightspeed_PartnerLogo.png',
    websiteUrl: 'https://www.lightspeedhq.com/uk/',
    features: [
      { title: 'Tableside Ordering', description: 'Take orders and payments directly at the table to speed up service.', icon: Smartphone },
      { title: 'Custom Floor Plans', description: 'Edit your floor plan on the fly to manage sections and seating.', icon: Map },
      { title: 'Menu Management', description: 'Update menus instantly across all locations and delivery platforms.', icon: Receipt },
      { title: 'Ingredient Inventory', description: 'Track stock down to the ingredient level to reduce waste and costs.', icon: Box },
      { title: 'Detailed Reporting', description: 'Real-time insights into staff performance, best sellers, and hourly sales.', icon: BarChart },
      { title: 'Seamless Integrations', description: 'Connect with Deliveroo, UberEats, Xero, Quickbooks and many more', icon: Plug },
      { title: 'Multi-Site Control', description: 'Manage all your locations from a single cloud-based dashboard.', icon: Globe },
      { title: '24/7 Support', description: 'Round-the-clock specialised support for peace of mind.', icon: Phone },
    ],
    isNew: true,
    interfaceMedia: {
      type: 'image',
      url: '/images/epos/lightspeed-interface.jpeg'
    }
  },
  {
    id: 'access',
    name: 'Access EPOS',
    tagline: 'Hospitality-First Cloud Solutions',
    description: 'Access EPOS provides a powerful, cloud-native solution designed to drive speed of service and customer loyalty. Perfect for pubs, bars, and restaurants looking to scale with data-driven insights.',
    logoText: 'Access',
    color: 'bg-[#ED1F42]',
    logoUrl: '/images/epos/Access_Logo.webp',
    websiteUrl: 'https://www.theaccessgroup.com/en-gb/epos/',
    features: [
      { title: 'Speed of Service', description: 'Optimised workflows to reduce clicks and serve customers faster.', icon: Zap },
      { title: 'Stock Management', description: 'Integrated inventory control to minimize waste and maximize margin.', icon: Box },
      { title: 'Kitchen Display', description: 'Seamless link between front-of-house and kitchen teams.', icon: Monitor },
      { title: 'Table Management', description: 'Visual floor plans to manage seating and reservations.', icon: Users },
      { title: 'Staff Scheduling', description: 'Manage rotas and labour costs directly within the platform.', icon: Clock },
      { title: 'Advanced Reporting', description: 'Drill down into data with granular custom reports.', icon: BarChart },
    ],
    interfaceMedia: {
      type: 'image',
      url: '/images/epos/access-interface.png'
    }
  },
  {
    id: 'myepos',
    name: 'MyEpos',
    tagline: 'Flexible, Affordable, Intuitive',
    description: 'MyEpos offers a highly customisable interface that is easy to learn and simple to use. Suitable for both retail and hospitality, it bridges the gap between complex enterprise systems and simple cash registers.',
    logoText: 'MyEpos',
    color: 'bg-[#25AAE1]',
    logoUrl: '/images/epos/MyEpos_Logo.png',
    partnerLogoUrl: '/images/epos/myepos-partner.webp',
    websiteUrl: 'https://myepos.com/',
    features: [
      { title: 'Customisable UI', description: 'Design the till layout exactly how your staff needs it.', icon: Settings },
      { title: 'Retail & Hospitality', description: 'Versatile modes for scanning barcodes or managing table plans.', icon: Users },
      { title: 'Loyalty Built-in', description: 'Simple customer retention tools included out of the box.', icon: Star },
      { title: 'Scalable', description: 'Grows with your business from a single terminal to multiple sites.', icon: BarChart },
      { title: 'Cloud Backup', description: 'Never lose your data with automatic cloud backups.', icon: Database },
      { title: 'Scale Integration', description: 'Certified integration with weighing scales for loose goods.', icon: Scale },
    ],
    interfaceMedia: {
      type: 'image',
      url: '/images/epos/myepos-interface.png'
    }
  },
  {
    id: 'icrtouch',
    name: 'ICRTouch',
    tagline: 'The UK’s Leading EPoS Software Ecosystem',
    description: 'ICRTouch is the gold standard for hospitality and retail businesses. With over 150,000 installs nationwide, it offers a complete ecosystem ranging from the robust TouchPoint till software to PocketTouch for tableside ordering and TouchOffice Web for cloud-based management.',
    logoText: 'ICRTouch',
    color: 'bg-[#FF6720]',
    logoUrl: '/images/epos/ICRTouch_Logo.png',
    partnerLogoUrl: '/images/epos/ICRTouch_PartnerLogo.png',
    partnerLogos: ['/images/epos/ICRTouch_PartnerLogo.png', '/images/epos/ICRTouch-Silver.png'], // Placeholders for Authorized Reseller and Silver Award
    websiteUrl: 'https://icrtouch.com/',
    features: [
      { title: 'TouchPoint', description: 'Built to be robust and reliable, its intuitive interface is easy to use, helping you quickly improve efficiency and productivity.', imageUrl: '/images/epos/TouchPoint-Icon-01.png' },
      { title: 'TouchOffice Web', description: 'The powerful cloud-based tool gives you complete control; anytime, anywhere; helping you make the right, intelligent decisions for your business.', imageUrl: '/images/epos/TouchOffice-Web-Icon-01.png' },
      { title: 'PocketTouch', description: 'The paperless solution to taking food and drink orders, it’ll also reduce mistakes and increase your table turnover.', imageUrl: '/images/epos/PocketTouch-Icon-01.png' },
      { title: 'SelfService', description: 'An interactive experience that allows customers to independently browse menus and place orders without the need for staff assistance. Reducing queues and improving guest experience.', imageUrl: '/images/epos/SelfService-Icon-01.png' },
      { title: 'TouchKitchen', description: 'From starters through to dessert, customer orders are organised neatly, and clearly displayed on a screen within the kitchen for easy order management, with no need for paper and print outs.', imageUrl: '/images/epos/SelfService-Icon-01.png' },
      { title: 'TouchTakeaway', description: 'Generate more revenue with online webshop ordering for delivery or click and collect thanks to TouchTakeaway. Integrate seamlessly into your EPoS; all with 0% commission.', imageUrl: '/images/epos/TouchTakeaway-Icon-01.png' },
    ],
    interfaceMedia: {
      type: 'image', // 'video' or'image'
      url: 'images/epos/icr-interface.png' // Placeholder video as .mp4 (https://www.w3schools.com/html/mov_bbb.mp4)
    }
  }
];

export const PAYMENT_PROVIDERS: PaymentProvider[] = [
  {
    id: 'dojo',
    name: 'Dojo',
    logoUrl: '/images/epos/DOJO_Logo.png',
    websiteUrl: 'https://dojo.tech/',
    features: [
      '4G Backup Connectivity',
      'Next Day Settlements',
      'Pay at Counter Integration',
      'Pay at Table',
      'Advanced Business Insights & Customer Analytics',
      'Built-in Tipping Support with Full Reporting'
    ],
    description: 'Dojo provides intuitive card machines with lightning-fast transaction speeds and next-day transfers, ensuring your cash flow remains healthy.'
  },
  {
    id: 'teya',
    name: 'Teya',
    logoUrl: '/images/epos/Teya_Logo.png',
    websiteUrl: 'https://www.teya.com/',
    features: [
      '4G Backup Connectivity',
      'Next Day Settlements',
      'Pay at Counter Integration',
      'Pay at Table (Coming Soon)',
      'Highly Competitive Pricing',
      'Optional Integrated Business Account'
    ],
    description: 'Teya offers simple, fair pricing and reliable hardware designed to help small businesses thrive without complex contracts.'
  }
];

export const HARDWARE_ITEMS: HardwareItem[] = [
  {
    id: 'cse-pro-15',
    title: 'CSE Pro 15"',
    description: 'The industry standard for hospitality. A high-performance fanless terminal with a 15" PCAP waterproof touch screen. Precision-engineered for reliability in harsh bar and kitchen environments.',
    category: 'Terminal',
    imageUrl: '/images/hardware/CSE_Till.png',
    images: [
      '/images/hardware/CSE_Till1.png',
      '/images/hardware/CSE_Till2.png',
      '/images/hardware/CSE_Till3.png',
      '/images/hardware/CSE_Till4.png',
      '/images/hardware/CSE_Till5.png',
      '/images/hardware/CSE_Till6.png'
    ]
  },
  {
    id: 'kiosk-self-serve',
    title: 'Interactive Kiosks',
    description: 'Reduce queues and increase basket spend with self-service kiosks. Fully integrated with your kitchen workflow. Perfect for busy takeaways',
    category: 'Terminal',
    imageUrl: '/images/hardware/FPK32-Kiosk.png'
  },
  {
    id: 'handheld-tablet',
    title: 'Rugged Ordering Tablets',
    description: 'Drop-proof, spill-resistant handhelds that allow staff to take orders at the table, speeding up service and turning tables faster.',
    category: 'Terminal',
    imageUrl: '/images/hardware/BV4800Pro-Orange.png'
  },
  {
    id: 'printer-thermal',
    title: 'Smart Thermal Printers',
    description: 'Ultra-fast, jam-free receipt and kitchen printing. Features LAN, WiFi, and Bluetooth connectivity options to ensure orders reach the bar or kitchen instantly.',
    category: 'Peripheral',
    imageUrl: '/images/hardware/CSE Printer.png'
  },
  {
    id: 'printer-kitchen',
    title: 'Impact Kitchen Printers',
    description: 'Robust dot-matrix printers designed for hot and humid kitchen environments. Clear, audible printing ensures chefs never miss an order.',
    category: 'Peripheral',
    imageUrl: '/images/hardware/Bixolon-SRP-275.webp'
  },
  {
    id: 'kitchen-display',
    title: 'Kitchen Video Systems',
    description: 'Replace paper tickets with digital KDS screens. Track cook times, manage courses, for a calmer, more efficient kitchen.',
    category: 'Peripheral',
    imageUrl: '/images/hardware/TouchKitchen.png'
  },
  {
    id: 'card-terminal',
    title: 'Integrated Payments',
    description: 'Link your card machine directly to the EPOS. Amounts are pushed automatically to the terminal, eliminating keying errors and speeding up end-of-day reconciliation.',
    category: 'Peripheral',
    imageUrl: '/images/hardware/DOJO.webp'
  },
  {
    id: 'scanner-2d',
    title: '2D Barcode Scanners',
    description: 'Omnidirectional scanning for retail items and customer loyalty QR codes on smartphone screens.',
    category: 'Accessory',
    imageUrl: '/images/hardware/Barcode_Scanner.png'
  },
  {
    id: 'cash-drawer',
    title: 'Secure Cash Drawers',
    description: 'Heavy-duty steel construction with stainless steel fronts. Tested to over 1 million cycles to ensure security for your cash handling.',
    category: 'Accessory',
    imageUrl: '/images/hardware/Cash_Drawer.webp',
    images: [
      '/images/hardware/Cash_Drawer-Open.webp',
      '/images/hardware/Cash_Drawer.webp'
    ]
  },
  {
    id: 'cash-register',
    title: 'Electronic Cash Registers',
    description: 'Simple, reliable standalone cash registers for businesses that don\'t require a full EPOS system. Perfect for small independent shops and pop-ups.',
    category: 'Register',
    imageUrl: '/images/hardware/Sam4s-NR-510F.png'
  },
  {
    id: 'weighing-scale',
    title: 'Retail Weighing Scales',
    description: 'Trade-approved weighing scales for loose goods. We supply standalone label printing scales and models that integrate directly with your EPOS.',
    category: 'Scale',
    imageUrl: '/images/hardware.ISHIDA.png'
  }
];