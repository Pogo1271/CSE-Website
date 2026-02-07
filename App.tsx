import React, { useState, useEffect, useRef } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronRight, CheckCircle2, Phone, Mail, MapPin, 
  Monitor, ShoppingCart, Scale, Server, 
  Settings, Users, ShieldCheck, ArrowRight, Star, Zap, Filter,
  Building2, Utensils, Factory, Clock, Download, Laptop, Smartphone,
  Coffee, Beer, ShoppingBag, Palmtree, Printer, Wifi, Tablet, ArrowUpRight,
  CreditCard, BarChart3, Cloud, Layers, Ticket, Gift, Globe, Heart, Tv, Wrench, Box,
  ChevronLeft, Smile, ThumbsUp, LifeBuoy, Lightbulb, Lock, Activity, Badge,
  Database, Layout, SmartphoneNfc, Receipt, ChevronDown, ChevronUp
} from 'lucide-react';
import { NavItem, SoftwareSolution, HardwareItem } from './types';

// --- Data Constants ---

const COMPANY_ADDRESS = "Unit 2 Tregrehan Workshops, Tregrehan, St Austell, Cornwall, PL25 3TQ";
const COMPANY_PHONE = "01872 123 456";
const COMPANY_EMAIL = "sales@cornwallscales.co.uk";

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'EPOS Solutions', path: '/solutions' },
  { label: 'Hardware', path: '/hardware' },
  { label: 'Support', path: '/support' },
];

const SOFTWARE_SOLUTIONS: SoftwareSolution[] = [
  {
    id: 'lightspeed',
    name: 'Lightspeed',
    tagline: 'The One-Stop Commerce Platform',
    description: 'Ignite your business with Lightspeed. A unified POS and payments platform that powers the worlds best businesses. Simplify operations and scale your revenue with the newest technology in the industry.',
    logoText: 'Lightspeed',
    themeColor: '#E81C1C',
    isNew: true,
    websiteUrl: 'https://www.lightspeedhq.co.uk/',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lightspeed_POS_logo.svg/2560px-Lightspeed_POS_logo.svg.png',
    interfaceImage: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800&auto=format&fit=crop',
    features: [
      { title: 'Cloud-Based Power', description: 'Access your business data from anywhere, on any device, at any time.', icon: Cloud },
      { title: 'Advanced Inventory', description: 'Detailed stock tracking with variant matrixes for complex retail needs.', icon: Box },
      { title: 'Global Platform', description: 'Join thousands of merchants growing with Lightspeed worldwide.', icon: Globe },
      { title: 'Multi-Location', description: 'Manage multiple venues from a single dashboard with ease.', icon: Building2 },
      { title: 'Integrated Payments', description: 'Fast, secure transactions fully embedded in the POS workflow.', icon: CreditCard },
      { title: 'Detailed Analytics', description: 'Deep dive into sales performance with granular reporting tools.', icon: BarChart3 },
    ]
  },
  {
    id: 'access',
    name: 'Access EPOS',
    tagline: 'Hospitality-First Cloud Solutions',
    description: 'Access EPOS provides a powerful, cloud-native solution designed to drive speed of service and customer loyalty. Perfect for pubs, bars, and restaurants looking to scale with data-driven insights.',
    logoText: 'Access',
    themeColor: '#E5173F',
    websiteUrl: 'https://www.theaccessgroup.com/en-gb/hospitality/epos/',
    logoUrl: 'https://www.theaccessgroup.com/media/2595/access-logo-new-1.svg',
    interfaceImage: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&auto=format&fit=crop',
    features: [
      { title: 'Speed of Service', description: 'Optimized workflows to reduce clicks and serve customers faster during peak hours.', icon: Zap },
      { title: 'Stock Management', description: 'Integrated inventory control to minimize waste and maximize margin.', icon: Box },
      { title: 'Kitchen Display', description: 'Seamless link between front-of-house and kitchen teams.', icon: Monitor },
      { title: 'Table Management', description: 'Graphical floor plans with real-time status updates.', icon: Layout },
      { title: 'Mobile Ordering', description: 'Order & Pay at Table solutions to increase revenue per head.', icon: Smartphone },
      { title: 'Reservations', description: 'Integrated booking system to manage covers efficiently.', icon: Clock },
    ]
  },
  {
    id: 'myepos',
    name: 'MyEpos',
    tagline: 'Flexible, Affordable, Intuitive',
    description: 'MyEpos offers a highly customizable interface that is easy to learn and simple to use. Suitable for both retail and hospitality, it bridges the gap between complex enterprise systems and simple cash registers.',
    logoText: 'MyEpos',
    themeColor: '#25AAE1',
    websiteUrl: 'https://myepos.com/',
    logoUrl: 'https://myepos.com/wp-content/uploads/2020/09/MyEPOS-Logo-1.png',
    interfaceImage: 'https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?q=80&w=800&auto=format&fit=crop',
    features: [
      { title: 'MyEPOS Touch', description: 'Intuitive touch screen interface designed for speed.', icon: Monitor },
      { title: 'MyEPOS Order', description: 'Integrated online and mobile ordering.', icon: Smartphone },
      { title: 'Kitchen Video', description: 'Digital kitchen management system.', icon: Tv },
      { title: 'The OrderPad', description: 'Mobile tableside ordering for staff.', icon: Tablet },
      { title: 'E-Commerce', description: 'Connect your till to your online store.', icon: ShoppingCart },
      { title: 'The Back Office', description: 'Local management and reporting.', icon: Server },
      { title: 'Cloud Back Office', description: 'Remote management from anywhere.', icon: Cloud },
    ]
  },
  {
    id: 'icrtouch',
    name: 'ICRTouch',
    tagline: 'The UK’s Leading EPoS Software Ecosystem',
    description: 'ICRTouch is the gold standard for hospitality and retail businesses. With over 150,000 installs nationwide, it offers a complete ecosystem ranging from the robust TouchPoint till software to PocketTouch for tableside ordering and TouchOffice Web for cloud-based management.',
    logoText: 'ICRTouch',
    themeColor: '#FF6720',
    websiteUrl: 'https://icrtouch.com/',
    logoUrl: 'https://icrtouch.com/wp-content/uploads/2021/08/icrtouch-logo.svg',
    interfaceImage: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800&auto=format&fit=crop',
    features: [
      { title: 'TouchPoint', description: 'Bespoke EPoS software.', icon: Monitor },
      { title: 'TouchPoint Lite', description: 'Lightweight EPoS for simpler needs.', icon: Zap },
      { title: 'PocketTouch', description: 'Digital Order Taking at the table.', icon: Smartphone },
      { title: 'TouchKitchen', description: 'Kitchen Management screens.', icon: Tv },
      { title: 'TouchTakeaway', description: 'Fast Food Ordering & Delivery.', icon: ShoppingBag },
      { title: 'TouchOffice Web', description: 'Cloud Business Management.', icon: Cloud },
      { title: 'ByTable', description: 'Order-To-Table Solution.', icon: SmartphoneNfc },
      { title: 'TouchReservation', description: 'Online Reservations system.', icon: Clock },
      { title: 'SelfService', description: 'Kiosk Ordering.', icon: Monitor },
      { title: 'TouchStock', description: 'Mobile Stock Management.', icon: Box },
    ]
  }
];

const HARDWARE_ITEMS: HardwareItem[] = [
  {
    id: 'titan-s360',
    title: 'Titan S360 Series',
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

// --- Reusable Logo Component ---
const BrandLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative w-11 h-11 bg-[#ed1f42] flex items-center justify-center shrink-0 shadow-sm">
       <ArrowUpRight className="text-white" size={32} strokeWidth={3} />
    </div>
    <div className="flex flex-col justify-center h-12">
      <span className="font-black text-3xl leading-none tracking-tighter text-slate-900">CSE</span>
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900 leading-tight">EPOS solutions</span>
    </div>
  </div>
);

const BrandLogoLight = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative w-11 h-11 bg-[#ed1f42] flex items-center justify-center shrink-0 shadow-sm">
       <ArrowUpRight className="text-white" size={32} strokeWidth={3} />
    </div>
    <div className="flex flex-col justify-center h-12">
      <span className="font-black text-3xl leading-none tracking-tighter text-white">CSE</span>
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 leading-tight">EPOS solutions</span>
    </div>
  </div>
);

// --- Components ---

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center group">
            <BrandLogo />
          </Link>

          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                  location.pathname === item.path 
                    ? 'text-brand-600 font-bold' 
                    : 'text-slate-600 hover:text-brand-500'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-brand-500/30 transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-brand-500 transition">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'bg-brand-50 text-brand-600'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-brand-500'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link to="/contact" className="block w-full text-center bg-brand-500 text-white px-4 py-3 rounded-lg font-bold">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-brand-500 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <BrandLogoLight />
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Modern EPOS, cloud software, and precision hardware. Backed by local expertise and on-site support since our founding.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/solutions" className="hover:text-brand-400 transition">EPOS Software</Link></li>
              <li><Link to="/hardware" className="hover:text-brand-400 transition">Touch Screens</Link></li>
              <li><Link to="/support" className="hover:text-brand-400 transition">Support</Link></li>
              <li><Link to="/about" className="hover:text-brand-400 transition">About CSE</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-0.5 shrink-0 text-brand-500" />
                <span>{COMPANY_ADDRESS}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 shrink-0 text-brand-500" />
                <span className="text-white">{COMPANY_PHONE}</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 shrink-0 text-brand-500" />
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-white transition">{COMPANY_EMAIL}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-400 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-400 transition">Remote Support</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Cornwall Scale & Equipment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Page Components ---

const HomePage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused && scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If we've reached the end (approx), scroll back to start, otherwise scroll right
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
           scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
           scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 400;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const clients = [
    { name: "The Cornish Arms", icon: Beer },
    { name: "Harbour Coffee", icon: Coffee },
    { name: "St Ives Bay Hotel", icon: Palmtree },
    { name: "Peninsula Retail", icon: ShoppingBag },
    { name: "Seaside Bistro", icon: Utensils },
    { name: "Atlantic Bar", icon: Beer },
    { name: "West Coast Surf", icon: ShoppingBag },
    { name: "Moorland Hotel", icon: Palmtree },
    { name: "Pasty House", icon: Utensils },
    { name: "Tech Hub", icon: Wifi },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Inline Style for Custom Animations */}
      <style>{`
        @keyframes scale-slow {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-scale-slow {
          animation: scale-slow 20s ease-in-out infinite;
        }
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        @keyframes float-slower {
          0% { transform: translateY(0px); }
          50% { transform: translateY(15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white min-h-[90vh] flex flex-col justify-center overflow-hidden pt-24 pb-12">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-20 w-[600px] h-[600px] bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 -left-20 w-[600px] h-[600px] bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 flex-grow flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Content */}
            <div className="max-w-3xl lg:pl-16">
              <div className="inline-flex items-center bg-white/5 border border-white/10 text-brand-300 text-xs font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-wider backdrop-blur-md shadow-lg shadow-black/20">
                <Star size={12} className="mr-2 text-brand-500 fill-brand-500" /> 
                <span className="text-white">Rated #1 in the South West</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.05]">
                Powering <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">Hospitality & Retail</span><br/>
                <span className="text-white">Businesses across the UK.</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg font-light">
                Cornwall's leading provider of intelligent EPOS, integrated payments, and cloud management systems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-brand-500/20 flex items-center justify-center transform hover:-translate-y-1 hover:shadow-brand-500/40">
                  Contact Us <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link to="/solutions" className="group bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center backdrop-blur-sm">
                  View Systems
                </Link>
              </div>
            </div>

            {/* Hero Images - Dual Floating Layout */}
            <div className="hidden lg:block relative h-[600px] w-full perspective-[1000px]">
              
              {/* Image 1: Hospitality (Top Right) */}
              <div className="absolute top-0 right-10 w-3/5 z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 transform rotate-3 animate-float-slow bg-slate-800">
                   <img 
                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&auto=format&fit=crop" 
                    alt="Bar EPOS System" 
                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
              </div>

              {/* Image 2: Retail (Bottom Left) */}
               <div className="absolute bottom-10 left-10 w-3/5 z-20 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 transform -rotate-2 animate-float-slower bg-slate-800">
                   <img 
                    src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800&auto=format&fit=crop" 
                    alt="Retail Payment Terminal" 
                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-20 right-20 w-48 h-48 bg-brand-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Centered Trust Indicators */}
        <div className="container mx-auto px-4 mt-16 lg:mt-0 relative z-10">
           <div className="border-t border-white/10 pt-8 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-center">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-green-400 mb-2">
                            <Phone size={20} />
                        </div>
                        <span className="font-bold text-lg">Telephone Support</span>
                        <span className="text-sm text-slate-400">Direct access to engineers</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-blue-400 mb-2">
                            <Wrench size={20} />
                        </div>
                        <span className="font-bold text-lg">On-Site Support</span>
                        <span className="text-sm text-slate-400">Software & Hardware</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-purple-400 mb-2">
                            <Users size={20} />
                        </div>
                        <span className="font-bold text-lg">Full Training</span>
                        <span className="text-sm text-slate-400">For you and your staff</span>
                    </div>
                </div>
           </div>
        </div>
      </div>

      {/* Trusted By Section - Manual Scroll + Auto Scroll + Centered */}
      <div className="bg-white border-b border-slate-100 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Trusted by the South West's Best</h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                Helping hundreds of businesses level up their EPOS systems.
              </p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Left Button */}
            <button onClick={() => scroll('left')} className="hidden md:flex shrink-0 p-4 rounded-full border border-slate-200 hover:bg-slate-50 hover:border-brand-500 hover:text-brand-600 transition-all shadow-sm z-20">
              <ChevronLeft size={24} />
            </button>

            {/* Scroll Container */}
            <div className="relative flex-grow overflow-hidden group" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
              <div 
                ref={scrollRef}
                className="flex overflow-x-auto gap-12 pb-8 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {clients.map((client, i) => (
                  <div key={i} className="flex-none w-72 snap-start p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center justify-center gap-6 group hover:border-brand-200 hover:shadow-lg transition-all cursor-default">
                     <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-brand-600 group-hover:scale-110 transition-all duration-300">
                       <client.icon size={40} strokeWidth={1.5} />
                     </div>
                     <span className="font-bold text-xl text-slate-900">{client.name}</span>
                  </div>
                ))}
              </div>
              {/* Fade gradients */}
              <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white to-transparent pointer-events-none md:block hidden"></div>
              <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent pointer-events-none md:block hidden"></div>
            </div>

            {/* Right Button */}
             <button onClick={() => scroll('right')} className="hidden md:flex shrink-0 p-4 rounded-full border border-slate-200 hover:bg-slate-50 hover:border-brand-500 hover:text-brand-600 transition-all shadow-sm z-20">
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </div>

      {/* Modern Bento Grid Services Section */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
             <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Complete Venue Control</h2>
             <p className="text-slate-500 text-lg mb-8">Hardware, software, and payments working in perfect harmony.</p>
             <Link to="/solutions" className="inline-flex items-center text-brand-600 font-bold hover:text-brand-700 transition">
               View All Solutions <ArrowRight size={20} className="ml-2" />
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. Cloud Back Office (Main) - 2x2 */}
            <div className="md:col-span-2 md:row-span-2 rounded-[2rem] bg-white p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all group overflow-hidden relative flex flex-col">
                <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6">
                  <Cloud size={28} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Cloud Back Office</h3>
                <p className="text-slate-500 text-lg leading-relaxed max-w-sm">
                  Access real-time sales dashboard, manage inventory across multiple sites, and update product lines instantly from anywhere.
                </p>
                <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-gradient-to-tl from-brand-50 to-transparent rounded-tl-[100px] pointer-events-none opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
            </div>

            {/* 2. Integrated Payments - 2x1 */}
            <div className="md:col-span-2 rounded-[2rem] bg-white p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all group relative overflow-hidden flex flex-col justify-center">
                 <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                   <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
                    <CreditCard size={28} />
                   </div>
                   <div>
                     <h3 className="text-2xl font-bold text-slate-900 mb-2">Integrated Payments</h3>
                     <p className="text-slate-500">Seamlessly integrated card terminals that eliminate double-entry errors and speed up your end-of-day reconciliation.</p>
                   </div>
                 </div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] opacity-5 group-hover:opacity-10 transition-opacity"></div>
            </div>

            {/* 3. Kitchen Video (KDS) - 1x1 */}
            <div className="rounded-[2rem] bg-white p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col">
                <div className="w-12 h-12 bg-slate-50 text-slate-600 rounded-2xl flex items-center justify-center mb-6">
                  <Tv size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Kitchen Video</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Replace paper tickets with digital screens for a calmer, more efficient kitchen.
                </p>
            </div>

            {/* 4. Handheld Ordering - 1x1 */}
            <div className="rounded-[2rem] bg-white p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Tablet size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Handheld Ordering</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Take orders tableside to increase speed of service and turn tables faster.
                </p>
            </div>

            {/* 5. Online Ordering - 1x1 */}
            <div className="rounded-[2rem] bg-white p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Online Ordering</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Capture more revenue with a fully branded click & collect or delivery platform.
                </p>
            </div>

            {/* 6. Customer Loyalty - 1x1 */}
             <div className="rounded-[2rem] bg-white p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Customer Loyalty</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Reward your regulars and keep them coming back with points and promotions.
                </p>
            </div>

            {/* 7. Ticketing - 1x1 */}
            <div className="rounded-[2rem] bg-white p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <Ticket size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Ticketing</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Streamline entry for events with integrated ticket sales and capacity management.
                </p>
            </div>

            {/* 8. Gift Cards - 1x1 */}
             <div className="rounded-[2rem] bg-white p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col">
                <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <Gift size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Gift Cards</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Drive repeat business with branded gift cards and digital vouchers.
                </p>
            </div>

            {/* Full Width CTA */}
            <div className="col-span-1 md:col-span-2 lg:col-span-4 rounded-[2rem] bg-gradient-to-br from-brand-500 to-brand-600 text-white p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-brand-500/20 group relative overflow-hidden mt-12">
               <Link to="/contact" className="absolute inset-0 z-20"></Link>
               <div className="relative z-10 mb-6 md:mb-0">
                 <h3 className="text-3xl md:text-4xl font-black mb-3">Get in Touch Today</h3>
                 <p className="text-brand-100 text-lg max-w-xl">Are you looking for an EPOS system or ready to Upgrade? Contact us for help.</p>
               </div>
               <div className="relative z-10 bg-white text-brand-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center shadow-lg transform group-hover:-translate-y-1 transition-transform">
                 Contact Us <ArrowRight size={20} className="ml-2" />
               </div>
               
               {/* Decorative background shapes */}
               <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

const SolutionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(SOFTWARE_SOLUTIONS[0].id);
  const [showAllFeatures, setShowAllFeatures] = useState<boolean>(false);

  const activeSolution = SOFTWARE_SOLUTIONS.find(s => s.id === activeTab) || SOFTWARE_SOLUTIONS[0];
  
  // Reset expansion when switching tabs
  useEffect(() => {
    setShowAllFeatures(false);
  }, [activeTab]);

  const displayedFeatures = showAllFeatures 
    ? activeSolution.features 
    : activeSolution.features.slice(0, 6);

  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">EPOS Software Solutions</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            World-class software tailored to your specific industry needs.
          </p>
        </div>
      </div>
      
      {/* Tabs Navigation */}
      <div className="container mx-auto px-4 mt-12 mb-8">
         <div className="flex flex-wrap justify-center gap-4">
            {SOFTWARE_SOLUTIONS.map(solution => (
               <div key={solution.id} className="relative group">
                   <button
                     onClick={() => setActiveTab(solution.id)}
                     style={{ 
                       backgroundColor: activeTab === solution.id ? solution.themeColor : '#F8FAFC',
                       color: activeTab === solution.id ? '#FFFFFF' : '#475569'
                     }}
                     className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-md border border-transparent ${activeTab !== solution.id ? 'hover:bg-slate-100 border-slate-100' : 'shadow-xl scale-105'}`}
                   >
                     <span className="relative z-10">{solution.name}</span>
                   </button>
                   {solution.isNew && (
                      <span className="absolute -top-3 -right-3 bg-yellow-400 text-black text-[10px] font-black px-3 py-1 rounded-full shadow-sm z-20 animate-bounce">
                        NEW
                      </span>
                   )}
               </div>
            ))}
         </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4 pb-24">
         <div className="bg-white rounded-[3rem] border border-slate-100 shadow-2xl overflow-hidden animate-fadeIn transition-all duration-500">
            <div className="h-2 w-full" style={{ backgroundColor: activeSolution.themeColor }}></div>
            <div className="p-8 md:p-16">
               <div className="flex flex-col lg:flex-row gap-16 items-start">
                  
                  {/* Left Side: Description & Main Info */}
                  <div className="lg:w-1/2 space-y-8">
                     <div className="flex items-center gap-4 flex-wrap">
                       <img 
                          src={activeSolution.logoUrl} 
                          alt={`${activeSolution.name} Logo`} 
                          className="h-12 w-auto object-contain"
                          onError={(e) => {
                            // Fallback to text if image fails
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                          }}
                       />
                       <div 
                         style={{ backgroundColor: activeSolution.themeColor }}
                         className="hidden inline-flex items-center text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg shadow-black/5"
                       >
                         {activeSolution.logoText}
                       </div>
                       {activeSolution.isNew && (
                         <div className="inline-flex items-center bg-yellow-100 text-yellow-800 border border-yellow-200 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                           New
                         </div>
                       )}
                     </div>
                     
                     <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                        {activeSolution.tagline}
                     </h2>
                     <p className="text-xl text-slate-600 leading-relaxed">
                        {activeSolution.description}
                     </p>

                     <div className="pt-6">
                        <a 
                          href={activeSolution.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ backgroundColor: activeSolution.themeColor }}
                          className="inline-flex items-center text-white px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all shadow-xl shadow-black/10"
                        >
                          Find Out More <ArrowUpRight className="ml-2" size={20} />
                        </a>
                     </div>
                  </div>

                  {/* Right Side: Interface Preview & Features */}
                  <div className="lg:w-1/2 w-full space-y-8">
                     {/* Desktop Interface Preview - Smaller now */}
                     <div className="hidden lg:block rounded-2xl overflow-hidden shadow-2xl border border-slate-200 max-w-md mx-auto">
                        <img 
                           src={activeSolution.interfaceImage} 
                           alt={`${activeSolution.name} Interface`}
                           className="w-full h-auto object-cover" 
                        />
                     </div>

                     <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100">
                        <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider">Key Features</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {displayedFeatures.map((feature, idx) => (
                               <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div 
                                    style={{ color: activeSolution.themeColor }}
                                    className="mb-3"
                                  >
                                     <feature.icon size={28} />
                                  </div>
                                  <h4 className="font-bold text-slate-900 text-base mb-1">{feature.title}</h4>
                                  <p className="text-slate-500 text-sm leading-snug">{feature.description}</p>
                               </div>
                            ))}
                        </div>
                        
                        {activeSolution.features.length > 6 && (
                            <button 
                                onClick={() => setShowAllFeatures(!showAllFeatures)}
                                style={{ color: activeSolution.themeColor }}
                                className="w-full mt-6 flex items-center justify-center font-bold text-lg hover:underline py-2"
                            >
                                {showAllFeatures ? (
                                    <>Show Less <ChevronUp className="ml-2" size={20} /></>
                                ) : (
                                    <>View All Features <ChevronDown className="ml-2" size={20} /></>
                                )}
                            </button>
                        )}
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>

      {/* Payment Partners Section */}
      <div className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-20">
              <div className="inline-flex items-center bg-brand-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Integrated Payments
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Seamless Transaction Partners</h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                 We partner with the industry's most reliable payment providers to ensure you get paid faster and more securely.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Teya Card */}
              <div className="relative bg-[#E1FB00] rounded-[2.5rem] p-10 border border-yellow-300 hover:border-black/20 transition-all duration-300 group shadow-2xl">
                 <div className="absolute top-6 right-6 z-10">
                     <span className="bg-black text-white text-[10px] font-black px-3 py-1 rounded-full shadow-sm animate-pulse">
                        NEW
                      </span>
                 </div>
                 <div className="flex justify-between items-center mb-10">
                    <img src="https://teya.com/static/images/logo.svg" alt="Teya Logo" className="h-8 w-auto" />
                    <a href="https://www.teya.com/" target="_blank" rel="noopener noreferrer" className="bg-black/5 hover:bg-black/10 p-3 rounded-full transition text-black">
                       <ArrowUpRight size={20} />
                    </a>
                 </div>
                 <ul className="space-y-4 mb-10">
                    <li className="flex items-center text-black/80"><CheckCircle2 className="text-black mr-3 shrink-0" size={20} /> <span className="font-bold text-black mr-2">4G Backup</span> connectivity</li>
                    <li className="flex items-center text-black/80"><CheckCircle2 className="text-black mr-3 shrink-0" size={20} /> Next Day Settlements</li>
                    <li className="flex items-center text-black/80"><CheckCircle2 className="text-black mr-3 shrink-0" size={20} /> Pay at Counter Integration</li>
                    <li className="flex items-center text-black/80"><Clock className="text-black mr-3 shrink-0" size={20} /> Pay at Table (Coming Soon)</li>
                 </ul>
                 <p className="text-black/70 text-sm leading-relaxed">
                    Teya offers simple, fair pricing and reliable hardware designed to help small businesses thrive without complex contracts.
                 </p>
              </div>

              {/* Dojo Card */}
              <div className="bg-[#003F33] rounded-[2.5rem] p-10 border border-[#005c4b] hover:border-white/20 transition-all duration-300 group shadow-2xl">
                 <div className="flex justify-between items-center mb-10">
                    {/* Dojo Logo Text SVG Placeholder since simple text works or a specific url */}
                    <h3 className="text-4xl font-black text-white">Dojo</h3>
                    <a href="https://dojo.tech/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition text-white">
                       <ArrowUpRight size={20} />
                    </a>
                 </div>
                 <ul className="space-y-4 mb-10">
                    <li className="flex items-center text-white/80"><CheckCircle2 className="text-white mr-3 shrink-0" size={20} /> <span className="font-bold text-white mr-2">4G Backup</span> connectivity</li>
                    <li className="flex items-center text-white/80"><CheckCircle2 className="text-white mr-3 shrink-0" size={20} /> Next Day Settlements</li>
                    <li className="flex items-center text-white/80"><CheckCircle2 className="text-white mr-3 shrink-0" size={20} /> Pay at Counter Integration</li>
                    <li className="flex items-center text-white/80"><CheckCircle2 className="text-white mr-3 shrink-0" size={20} /> Pay at Table</li>
                 </ul>
                 <p className="text-white/60 text-sm leading-relaxed">
                    Dojo provides intuitive card machines with lightning-fast transaction speeds and next-day transfers, ensuring your cash flow remains healthy.
                 </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const HardwarePage: React.FC = () => {
  const categories = ['Terminal', 'Peripheral', 'Accessory'] as const;

  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Hardware Collection</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Professional grade EPOS hardware designed for reliability and speed.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        {categories.map(category => {
          const items = HARDWARE_ITEMS.filter(item => item.category === category);
          if (items.length === 0) return null;
          
          return (
            <div key={category} className="mb-24">
              <div className="flex items-center gap-4 mb-10">
                 <h2 className="text-3xl font-black text-slate-900">{category}s</h2>
                 <div className="h-px flex-grow bg-slate-200"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {items.map(item => (
                  <div key={item.id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-brand-200 transition-all duration-300 flex flex-col">
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-500 mb-4 flex-grow">{item.description}</p>
                      <button className="w-full py-2 rounded-lg bg-slate-50 text-slate-700 font-bold text-sm hover:bg-brand-50 hover:text-brand-600 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const AboutPage: React.FC = () => (
  <div className="pt-32 pb-20 text-center container mx-auto px-4">
    <h1 className="text-4xl font-bold mb-4">About Us</h1>
    <p className="text-slate-600 max-w-2xl mx-auto">
      Founded in Cornwall, we have been providing quality EPOS solutions and local support to businesses since 2005. 
      We believe in building long-term relationships with our clients through exceptional service.
    </p>
  </div>
);

const SupportPage: React.FC = () => (
  <div className="pt-32 pb-20 text-center container mx-auto px-4">
    <h1 className="text-4xl font-bold mb-4">Support Center</h1>
    <p className="text-slate-600 max-w-2xl mx-auto">
      Need assistance? Our support team is available Mon-Fri 9am-5pm. 
      For urgent enquiries, please call our support line.
    </p>
    <div className="mt-8 flex justify-center gap-4">
      <button className="bg-brand-500 text-white px-6 py-3 rounded-lg font-bold">Call Support</button>
      <button className="bg-slate-100 text-slate-900 px-6 py-3 rounded-lg font-bold">Email Us</button>
    </div>
  </div>
);

const ContactPage: React.FC = () => (
  <div className="pt-32 pb-20 text-center container mx-auto px-4">
    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
    <p className="text-slate-600 max-w-2xl mx-auto mb-8">
      Ready to upgrade your system? Get in touch for a free consultation and quote.
    </p>
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-left">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Name</label>
          <input type="text" className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
          <input type="email" className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" placeholder="your@email.com" />
        </div>
