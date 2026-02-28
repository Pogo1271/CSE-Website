import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, ArrowRight, Phone, Wrench, Users, ChevronLeft, ChevronRight,
  Beer, Coffee, Palmtree, ShoppingBag, Utensils, Wifi,
  Cloud, CreditCard, Tv, Tablet, Globe, Heart, Ticket, Gift,
  Gift as GiftIcon,
  Smile, ThumbsUp, Settings, Lightbulb, LifeBuoy, MapPin, ShieldCheck, Clock, Quote
} from 'lucide-react';
import { LOGO_URL } from '../data';

const HOSPITALITY_IMAGES = [
  "/images/hardware/Bixolon-SRP-275.webp",
  "/images/hardware/CSE Printer.png",
  "/images/hardware/FPK32-Kiosk.png",
  "/images/hardware/Barcode_Scanner.png",
  "/images/hardware/BV4800Pro-Orange.png",  
  "/images/scales/cas_pd2.jpg"
];

const RETAIL_IMAGES = [
  "/images/hardware/ISHIDA.png",
  "/images/hardware/CSE_Till1.png",
  "/images/hardware/Cash_Drawer.webp",
  "/images/hardware/Sam4s-NR-510F.png",
  "/images/menu_board/work/charmouth.jpeg",
  "/images/scales/digi_sm120.jpg"
  
];

const HeroImageRotator: React.FC<{ images: string[], interval?: number }> = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(() => Math.floor(Math.random() * images.length));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="Hero"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export const HomePage: React.FC = () => {
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
    { 
      name: "Cornish Oven", 
      logoUrl: "/images/companies/cornish_oven.png", 
      testimonial: "Since working with Cornwall Scales and using the Access EPOS System, we’ve significantly improved how we collate and analyse our business data. Having clear, accessible reporting has helped us make more informed decisions and identify opportunities to improve performance across our shops.", 
      author: "Area Manager" 
    },
    
    { 
      name: "Philps", 
      logoUrl: "/images/companies/philps.png", 
      testimonial: "The support from the Cornwall Scale office team has been outstanding. They are always quick to respond to any queries we have, whether by email or phone. If we ever have an urgent issue, we can call out of hours and their team resolves technical problems very quickly.", 
      author: "Director" 
    },

    { 
      name: "Mount Hawke", 
      logoUrl: "/images/companies/mount_hawke.webp", 
      testimonial: "The team at CSE were more than happy to help, and they developed an EPOS that would see our Front of House, Retail and Café work together as well as allowing an entirely new online booking system that worked alongside a mobile App.", 
      author: "General Manager" 
    },

    { 
      name: "Talay Thai", 
      logoUrl: "/images/companies/talay_thai.png", 
      testimonial: "The handheld ordering tablets have transformed our service speed during busy weekends. Orders go straight to the kitchen, eliminating mistakes. CSE's support has been fantastic from day one.", 
      author: "Restaurant Manager" 
    },

    { 
      name: "Porthmeor", 
      logoUrl: "/images/companies/porthmeor.webp", 
      testimonial: "We’ve used CSE for several years at Porthmeor for our EPOS systems, and they’ve helped us to evolve over time. Recently upgrading all sectors of the business to use the same system, this has streamlined how we integrate our systems, report and become more efficient.", 
      author: "General Manager" 
    },

    { 
      name: "Tremenheere Kitchen", 
      logoUrl: "/images/companies/tremenheere.png", 
      testimonial: "Since working with Cornwall Scales and using the Access EPOS System, we’ve significantly improved how we collate and analyse our business data. Having clear, accessible reporting has helped us make more informed decisions and identify opportunities to improve performance across our shops.", 
      author: "Area Manager" 
    },

    { 
      name: "Trevedra Campsite", 
      logoUrl: "/images/companies/trevedra.jpg", 
      testimonial: "We are delighted with the EPOS system. It is easy to use and the back-office reports are invaluable. The back up & support from all the team at Cornwall Scales is second to none and they have so much patience with the less tech savvy of us", 
      author: "Director" 
    },

    { 
      name: "Peckish", 
      logoUrl: "/images/companies/peckish.png", 
      testimonial: "Simple to train new staff on. Highly recommended for any fast-paced food business.", 
      author: "Owner" 
    },

    { 
      name: "Charmouth Fish Bar", 
      logoUrl: "/images/companies/charmouth_logo.png", 
      testimonial: "Managing peak season queues used to be a nightmare until we installed the new touch screen kiosks. The system is incredibly fast and robust. We can now serve customers twice as fast.", 
      author: "Owner" 
    },

    { 
      name: "Camborne RFC", 
      logoUrl: "/images/companies/Camborne_RFC.png", 
      testimonial: "Helps us serve the crowds on match days quickly. The contactless payments are lightning fast.", 
      author: "Bar Manager" 
    },

    { 
      name: "Kellys Ice Cream", 
      logoUrl: "/images/companies/kellys_bodmin.png", 
      testimonial: "A fantastic local partner for our business. Always there when we need them.", 
      author: "Director" 
    },

    { 
      name: "The Orangery", 
      logoUrl: "/images/companies/orangery_logo.jpg", 
      testimonial: "I have used CSE for all our EPOS solutions for years and have recently have had a new EPOS system set up at the Orangery Cafe , which has bought us up to date and has been brilliant . The Staff at CSE have always been available and happy to help.", 
      author: "Owner" 
    },

  ];

  return (
    <div className="flex flex-col w-full bg-white">
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
        /* Flip Card Styles */
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        /* Custom Flip Logic - Isolated to specific card */
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card:hover .flip-logo {
          opacity: 1 !important;
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative bg-white text-black lg:min-h-screen flex flex-col justify-start pt-4 lg:pt-0 pb-12 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Gradient Blobs */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/5 rounded-full filter blur-[128px] animate-blob"></div>
          <div className="absolute top-40 right-40 w-[600px] h-[600px] bg-brand-500/5 rounded-full filter blur-[128px] animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 -left-20 w-[600px] h-[600px] bg-gray-200/50 rounded-full filter blur-[128px] animate-blob animation-delay-4000"></div>
          
          {/* Subtle Dot Pattern */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#94a3b8 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
          


          {/* Grid lines (Very subtle) */}
          <div className="absolute top-0 right-0 w-1/3 h-full border-l border-slate-100 hidden lg:block"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 flex-grow flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Content */}
            <div className="max-w-3xl lg:pl-4 lg:-mt-20">
              <div className="inline-flex items-center bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-wider shadow-sm">
                <Star size={12} className="mr-2 text-brand-500 fill-brand-500" /> 
                <span>South West Based. Powering Businesses Nationwide.</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.05] text-black">
                Smarter Technology. <br/>
                <span className="text-brand-500">Stronger Businesses.</span>
              </h1>
              
              <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg font-normal">
                Specialists in electronic scales, cash registers, digital signage and integrated EPOS solutions — providing payment and cloud management systems for hospitality and retail.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-brand-500/20 flex items-center justify-center transform hover:-translate-y-1 hover:shadow-brand-500/40">
                  Contact Us <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link to="/solutions" className="group bg-white hover:bg-offwhite text-black border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center shadow-sm hover:shadow-md">
                  View Systems
                </Link>
              </div>
            </div>

            {/* Hero Images - Dual Floating Layout */}
            <div className="hidden lg:block relative h-[650px] w-full perspective-[1000px]">
              
              {/* Image 1: Hospitality (Top Right) */}
              <div className="absolute top-6 right-6 w-3/5 aspect-[4/3] z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 transform rotate-3 animate-float-slow bg-white" style={{ aspectRatio: '4/3' }}>
                   <HeroImageRotator images={HOSPITALITY_IMAGES} interval={3000} />
              </div>

              {/* Image 2: Retail (Bottom Left) */}
               <div className="absolute bottom-6 left-6 w-3/5 aspect-[4/3] z-20 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 transform -rotate-2 animate-float-slower bg-white" style={{ aspectRatio: '4/3' }}>
                   <HeroImageRotator images={RETAIL_IMAGES} interval={3000} />
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-20 right-20 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Centered Trust Indicators - Floating Glass Pill */}
        <div className="container mx-auto px-2 lg:px-4 mt-32 lg:mt-12 relative z-30 mb-0 lg:mb-20">
           <div className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-3xl lg:rounded-[2.5rem] p-6 md:p-8 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    <div className="flex flex-col items-center gap-2 px-4 group py-2 md:py-0">
                        <div className="flex items-center gap-3 mb-1">
                            <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-500 group-hover:scale-110 transition-transform">
                                <Phone size={20} strokeWidth={2.5} />
                            </div>
                            <span className="font-black text-lg text-black">Telephone Support</span>
                        </div>
                        <span className="text-sm text-gray-500 font-medium">Direct access to engineers</span>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 px-4 group py-2 md:py-0">
                        <div className="flex items-center gap-3 mb-1">
                            <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-500 group-hover:scale-110 transition-transform">
                                <Wrench size={20} strokeWidth={2.5} />
                            </div>
                            <span className="font-black text-lg text-black">On-Site Support</span>
                        </div>
                        <span className="text-sm text-gray-500 font-medium">Software & Hardware</span>
                    </div>

                    <div className="flex flex-col items-center gap-2 px-4 group py-2 md:py-0">
                        <div className="flex items-center gap-3 mb-1">
                            <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-500 group-hover:scale-110 transition-transform">
                                <Users size={20} strokeWidth={2.5} />
                            </div>
                            <span className="font-black text-lg text-black">Full Training</span>
                        </div>
                        <span className="text-sm text-gray-500 font-medium">For you and your staff</span>
                    </div>
                </div>
           </div>
        </div>
      </div>

      {/* Trusted By Section - Off White Background */}
      <div className="bg-offwhite py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-black mb-4">Trusted by <span className="text-brand-500">the Best</span></h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Helping hundreds of businesses level up their EPOS systems.
              </p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Left Button */}
            <button onClick={() => scroll('left')} className="hidden md:flex shrink-0 p-4 rounded-full border border-gray-200 bg-white hover:border-brand-500 hover:text-brand-600 transition-all shadow-sm z-20">
              <ChevronLeft size={24} />
            </button>

            {/* Scroll Container */}
            <div className="relative flex-grow overflow-hidden group" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
              <div 
                ref={scrollRef}
                className="flex overflow-x-auto gap-12 pb-8 snap-x snap-mandatory scrollbar-hide py-10"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {clients.map((client, i) => (
                  <div key={i} className="flex-none w-80 h-72 snap-start perspective-1000 flip-card cursor-pointer">
                     <div className="relative w-full h-full transition-transform duration-700 transform-style-3d flip-card-inner shadow-lg rounded-2xl">
                        
                        {/* Front Side - Logo */}
                        <div className="absolute inset-0 backface-hidden bg-white rounded-2xl border border-gray-100 flex flex-col items-center justify-center p-8 shadow-sm">
                           <div className="w-full h-full flex items-center justify-center">
                              <img 
                                src={client.logoUrl} 
                                alt={`${client.name} Logo`} 
                                className="max-w-full max-h-full object-contain opacity-80 flip-logo transition-opacity" 
                              />
                           </div>
                           <span className="mt-4 font-bold text-lg text-black">{client.name}</span>
                        </div>

                        {/* Back Side - Testimonial */}
                        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-brand-500 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-xl">
                           <Quote size={32} className="text-white/30 mb-4 fill-current" />
                           <p className="text-white font-medium text-sm leading-relaxed mb-4 italic">
                             "{client.testimonial}"
                           </p>
                           <div className="mt-auto">
                              <p className="text-white font-bold text-sm">{client.author}</p>
                              <p className="text-brand-200 text-xs">{client.name}</p>
                           </div>
                        </div>

                     </div>
                  </div>
                ))}
              </div>
              {/* Fade gradients */}
              <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-offwhite to-transparent pointer-events-none md:block hidden z-10"></div>
              <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-offwhite to-transparent pointer-events-none md:block hidden z-10"></div>
            </div>

            {/* Right Button */}
             <button onClick={() => scroll('right')} className="hidden md:flex shrink-0 p-4 rounded-full border border-gray-200 bg-white hover:border-brand-500 hover:text-brand-600 transition-all shadow-sm z-20">
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </div>

      {/* Modern Bento Grid Services Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
             <h2 className="text-4xl font-black text-black mb-4 tracking-tight">Complete Venue <span className="text-brand-500">Control</span></h2>
             <p className="text-gray-500 text-lg mb-8">Hardware, software, and payments working in perfect harmony.</p>
             <Link to="/solutions" className="inline-flex items-center text-brand-500 font-bold hover:text-brand-600 transition">
               View All Solutions <ArrowRight size={20} className="ml-2" />
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. Cloud Back Office (Main) - 2x2 */}
            <div className="md:col-span-2 md:row-span-2 rounded-[2rem] bg-offwhite p-8 border border-gray-100 hover:border-brand-200 hover:shadow-xl transition-all group overflow-hidden relative flex flex-col">
                <div className="w-14 h-14 bg-white text-brand-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Cloud size={28} />
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">Cloud Back Office</h3>
                <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
                  Access real-time sales dashboard, manage inventory across multiple sites, and update product lines instantly from anywhere.
                </p>
                <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-gradient-to-tl from-white to-transparent rounded-tl-[100px] pointer-events-none opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
            </div>

            {/* 2. Integrated Payments - 2x1 */}
            <div className="md:col-span-2 rounded-[2rem] bg-offwhite p-8 border border-gray-100 hover:border-brand-200 hover:shadow-xl transition-all group relative overflow-hidden flex flex-col justify-center">
                 <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                   <div className="w-14 h-14 bg-white text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <CreditCard size={28} />
                   </div>
                   <div>
                     <h3 className="text-2xl font-bold text-black mb-2">Integrated Payments</h3>
                     <p className="text-gray-500">Seamlessly integrated card terminals that eliminate double-entry errors and speed up your end-of-day reconciliation.</p>
                   </div>
                 </div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* 3. Kitchen Video (KDS) - 1x1 */}
            <div className="rounded-[2rem] bg-offwhite p-6 border border-gray-100 hover:border-brand-200 hover:shadow-xl transition-all group flex flex-col">
                <div className="w-12 h-12 bg-white text-black rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Tv size={24} />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Kitchen Video</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Replace paper tickets with digital screens for a calmer, more efficient kitchen.
                </p>
            </div>

            {/* 4. Handheld Ordering - 1x1 */}
            <div className="rounded-[2rem] bg-offwhite p-6 border border-gray-100 hover:border-brand-200 hover:shadow-xl transition-all group flex flex-col">
                <div className="w-12 h-12 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Tablet size={24} />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Handheld Ordering</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Take orders tableside to increase speed of service and turn tables faster.
                </p>
            </div>

            {/* 5. Online Ordering - 1x1 */}
            <div className="rounded-[2rem] bg-offwhite p-6 border border-gray-100 hover:border-brand-200 hover:shadow-xl transition-all group flex flex-col">
                <div className="w-12 h-12 bg-white text-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Online Ordering</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Capture more revenue with a fully branded click & collect or delivery platform.
                </p>
            </div>

            {/* 6. Customer Loyalty - 1x1 */}
             <div className="rounded-[2rem] bg-offwhite p-6 border border-gray-100 hover:border-brand-200 hover:shadow-xl transition-all group flex flex-col">
                <div className="w-12 h-12 bg-white text-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Customer Loyalty</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Reward your regulars and keep them coming back with points and promotions.
                </p>
            </div>

            {/* 7. Ticketing - 1x1 */}
            <div className="rounded-[2rem] bg-offwhite p-6 border border-gray-100 hover:border-brand-200 hover:shadow-xl transition-all group flex flex-col">
                <div className="w-12 h-12 bg-white text-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Ticket size={24} />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Ticketing</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Streamline entry for events with integrated ticket sales and capacity management.
                </p>
            </div>

            {/* 8. Gift Cards - 1x1 */}
             <div className="rounded-[2rem] bg-offwhite p-6 border border-gray-100 hover:border-brand-200 hover:shadow-xl transition-all group flex flex-col">
                <div className="w-12 h-12 bg-white text-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <GiftIcon size={24} />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Gift Cards</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Drive repeat business with branded gift cards and digital vouchers.
                </p>
            </div>

            {/* Full Width CTA - Styled like About Page */}
            <div className="col-span-1 md:col-span-2 lg:col-span-4 rounded-[2rem] bg-brand-500 text-white p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-brand-500/20 group relative overflow-hidden mt-12">
               <Link to="/contact" className="absolute inset-0 z-20"></Link>
               <div className="relative z-10 mb-6 md:mb-0">
                 <h3 className="text-3xl md:text-4xl font-black mb-3">Get in Touch Today</h3>
                 <p className="text-brand-100 text-lg max-w-xl">Are you looking for an EPOS system or ready to Upgrade? Contact us for help.</p>
               </div>
               <div className="relative z-10 bg-white text-brand-500 px-8 py-4 rounded-xl font-bold text-lg flex items-center shadow-lg transform group-hover:-translate-y-1 transition-transform">
                 Contact Us <ArrowRight size={20} className="ml-2" />
               </div>
               
               {/* Decorative background shapes */}
               <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};