import { 
  Cloud, Box, Globe, Monitor, Server, Smartphone, Zap, 
  Settings, Users, Star, Map, ShoppingBag, Phone, BarChart, Plug, Receipt, Clock, Database, Scale
} from 'lucide-react';
import { NavItem, SoftwareSolution, HardwareItem } from './types';

export const COMPANY_ADDRESS = "Unit 2 Tregrehan Workshops, Tregrehan, St Austell, Cornwall, PL25 3TQ";
export const COMPANY_PHONE = "0333 577 0108";
export const COMPANY_EMAIL = "info@cornwallscalesltd.co.uk";
export const LOGO_URL = "https://pplx-res.cloudinary.com/image/upload/v1739818828/user_uploads/hldnlywlv/image.jpg";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'EPOS Solutions', path: '/solutions' },
  { label: 'Hardware', path: '/hardware' },
  { label: 'Support', path: '/support' },
];

export const SOFTWARE_SOLUTIONS: SoftwareSolution[] = [
  {
    id: 'lightspeed',
    name: 'Lightspeed',
    tagline: 'The One-Stop Commerce Platform',
    description: 'Ignite your business with Lightspeed. A unified POS and payments platform that powers the worlds best businesses. Simplify operations and scale your revenue.',
    logoText: 'Lightspeed',
    color: 'bg-[#E81C1C]',
    logoUrl: 'https://logo.clearbit.com/lightspeedhq.com',
    websiteUrl: 'https://www.lightspeedhq.com/uk/',
    features: [
      { title: 'Cloud-Based', description: 'Access your business data from anywhere, on any device.', icon: Cloud },
      { title: 'Advanced Inventory', description: 'Detailed stock tracking with variant matrixes for retail.', icon: Box },
      { title: 'Global Platform', description: 'Join thousands of merchants growing with Lightspeed.', icon: Globe },
      { title: 'Multi-Location', description: 'Manage multiple stores seamlessly from a single account.', icon: Map },
      { title: 'Omnichannel', description: 'Sell in-store and online with fully synchronized inventory.', icon: ShoppingBag },
      { title: 'Detailed Analytics', description: 'Deep insights into sales, staff performance, and margins.', icon: BarChart },
      { title: 'Integrations', description: 'Connect with Xero, QuickBooks, and hundreds of other apps.', icon: Plug },
      { title: '24/7 Support', description: 'Round-the-clock specialized support for peace of mind.', icon: Phone },
    ],
    isNew: true
  },
  {
    id: 'myepos',
    name: 'MyEpos',
    tagline: 'Flexible, Affordable, Intuitive',
    description: 'MyEpos offers a highly customizable interface that is easy to learn and simple to use. Suitable for both retail and hospitality, it bridges the gap between complex enterprise systems and simple cash registers.',
    logoText: 'MyEpos',
    color: 'bg-[#25AAE1]',
    logoUrl: 'https://logo.clearbit.com/myepos.com',
    websiteUrl: 'https://myepos.com/',
    features: [
      { title: 'Customizable UI', description: 'Design the till layout exactly how your staff needs it.', icon: Settings },
      { title: 'Retail & Hospitality', description: 'Versatile modes for scanning barcodes or managing table plans.', icon: Users },
      { title: 'Loyalty Built-in', description: 'Simple customer retention tools included out of the box.', icon: Star },
      { title: 'Scalable', description: 'Grows with your business from a single terminal to multiple sites.', icon: BarChart },
      { title: 'Cloud Backup', description: 'Never lose your data with automatic cloud backups.', icon: Database },
      { title: 'Scale Integration', description: 'Certified integration with weighing scales for loose goods.', icon: Scale },
    ]
  },
  {
    id: 'access',
    name: 'Access EPOS',
    tagline: 'Hospitality-First Cloud Solutions',
    description: 'Access EPOS provides a powerful, cloud-native solution designed to drive speed of service and customer loyalty. Perfect for pubs, bars, and restaurants looking to scale with data-driven insights.',
    logoText: 'Access',
    color: 'bg-[#ED1F42]',
    logoUrl: 'https://logo.clearbit.com/theaccessgroup.com',
    websiteUrl: 'https://www.theaccessgroup.com/en-gb/epos/',
    features: [
      { title: 'Speed of Service', description: 'Optimized workflows to reduce clicks and serve customers faster.', icon: Zap },
      { title: 'Stock Management', description: 'Integrated inventory control to minimize waste and maximize margin.', icon: Box },
      { title: 'Kitchen Display', description: 'Seamless link between front-of-house and kitchen teams.', icon: Monitor },
      { title: 'Table Management', description: 'Visual floor plans to manage seating and reservations.', icon: Users },
      { title: 'Staff Scheduling', description: 'Manage rotas and labor costs directly within the platform.', icon: Clock },
      { title: 'Advanced Reporting', description: 'Drill down into data with granular custom reports.', icon: BarChart },
    ]
  },
  {
    id: 'icrtouch',
    name: 'ICRTouch',
    tagline: 'The UK’s Leading EPoS Software Ecosystem',
    description: 'ICRTouch is the gold standard for hospitality and retail businesses. With over 150,000 installs nationwide, it offers a complete ecosystem ranging from the robust TouchPoint till software to PocketTouch for tableside ordering and TouchOffice Web for cloud-based management.',
    logoText: 'ICRTouch',
    color: 'bg-[#FF6720]',
    logoUrl: 'https://logo.clearbit.com/icrtouch.com',
    websiteUrl: 'https://icrtouch.com/',
    features: [
      { title: 'TouchPoint', description: 'Effortless, reliable till software that keeps working even when the internet goes down.', icon: Monitor },
      { title: 'TouchOffice Web', description: 'Real-time cloud analytics to track sales, stock, and staff performance from anywhere.', icon: Server },
      { title: 'PocketTouch', description: 'Streamline service with handheld ordering directly to the kitchen.', icon: Smartphone },
      { title: 'Self-Service', description: 'Reduce queues with fully integrated self-service kiosks.', icon: Monitor },
      { title: 'Loyalty Schemes', description: 'Built-in points and customer account management.', icon: Star },
      { title: 'TouchTakeaway', description: 'A fully integrated online ordering platform for delivery and click & collect.', icon: ShoppingBag },
    ]
  }
];

export const HARDWARE_ITEMS: HardwareItem[] = [
  {
    id: 'cse-pro-15',
    title: 'CSE Pro 15"',
    description: 'The industry standard for hospitality. A high-performance fanless terminal with a 15" PCAP waterproof touch screen. Precision-engineered for reliability in harsh bar and kitchen environments.',
    category: 'Terminal',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'kiosk-self-serve',
    title: 'Interactive Kiosk',
    description: 'Reduce queues and increase basket spend with our 22" self-service kiosks. Fully integrated with your kitchen workflow, these units are perfect for QSRs and busy takeaways.',
    category: 'Terminal',
    imageUrl: 'https://images.unsplash.com/photo-1556740772-1a741367b93e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'handheld-tablet',
    title: 'Rugged Ordering Tablet',
    description: 'Take the till to the table. Drop-proof, spill-resistant handhelds that allow staff to take orders and payments directly at the table, speeding up service and turning tables faster.',
    category: 'Terminal',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'printer-thermal',
    title: 'Smart Thermal Printers',
    description: 'Ultra-fast, jam-free receipt and kitchen printing. Features LAN, WiFi, and Bluetooth connectivity options to ensure orders reach the bar or kitchen instantly.',
    category: 'Peripheral',
    imageUrl: 'https://images.unsplash.com/photo-1612815154858-60aa4c46ae94?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'kitchen-display',
    title: 'Kitchen Video Systems',
    description: 'Replace paper tickets with digital KDS screens. Track cook times, manage courses, and silence the noise of kitchen printers for a calmer, more efficient kitchen.',
    category: 'Peripheral',
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'card-terminal',
    title: 'Integrated Payments',
    description: 'Link your card machine directly to the EPOS. Amounts are pushed automatically to the terminal, eliminating keying errors and speeding up end-of-day reconciliation.',
    category: 'Peripheral',
    imageUrl: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'scanner-2d',
    title: '2D Barcode Scanners',
    description: 'Omnidirectional scanning for retail items and customer loyalty QR codes on smartphone screens. Durable and ergonomic design for high-volume retail.',
    category: 'Accessory',
    imageUrl: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cash-drawer',
    title: 'Secure Cash Drawers',
    description: 'Heavy-duty steel construction with stainless steel fronts. Tested to over 1 million cycles to ensure security for your cash handling.',
    category: 'Accessory',
    imageUrl: 'https://images.unsplash.com/photo-1583912267550-d44d7a125821?q=80&w=800&auto=format&fit=crop'
  }
];