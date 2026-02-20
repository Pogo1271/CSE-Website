import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, ArrowRight, Phone, Wrench, Users, ChevronLeft, ChevronRight,
  Beer, Coffee, Palmtree, ShoppingBag, Utensils, Wifi,
  Cloud, CreditCard, Tv, Tablet, Globe, Heart, Ticket, Gift,
  Gift as GiftIcon,
  Smile, ThumbsUp, Settings, Lightbulb, LifeBuoy, MapPin, ShieldCheck, Clock
} from 'lucide-react';
import { LOGO_URL } from '../data';

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
    { name: "Malcolm Barnecutt", icon: ShoppingBag },
    { name: "Philps Pasties", icon: Utensils },
    { name: "Kelly's Icecream", icon: Smile },
    { name: "Porthminster Cafe", icon: Coffee },
    { name: "Balcony Bar", icon: Beer },
    { name: "Mount Hawke Skatepark", icon: Ticket },
    { name: "Woolacombe Sands Holiday Park", icon: Palmtree },
    { name: "Monkey Tree Holiday Park", icon: Palmtree },
    { name: "Onzo", icon: Utensils },
    { name: "Camborne RFC", icon: Beer },
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
      `}</style>

      {/* Hero Section */}
      <div className="relative bg-white text-black min-h-[90vh] flex flex-col justify-start pt-4 lg:pt-0 pb-12 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Gradient Blobs */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/5 rounded-full filter blur-[128px] animate-blob"></div>
          <div className="absolute top-40 right-40 w-[600px] h-[600px] bg-brand-500/5 rounded-full filter blur-[128px] animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 -left-20 w-[600px] h-[600px] bg-gray-200/50 rounded-full filter blur-[128px] animate-blob animation-delay-4000"></div>
          
          {/* Subtle Dot Pattern */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#94a3b8 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
          
          {/* Background Logo Watermark - Replaces swirl patterns */}
          <div className="absolute -right-20 -top-20 w-[700px] opacity-[0.03] rotate-12 pointer-events-none">
            <img src={LOGO_URL} alt="" className="w-full grayscale" />
          </div>

          {/* Grid lines (Very subtle) */}
          <div className="absolute top-0 right-0 w-1/3 h-full border-l border-slate-100 hidden lg:block"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 flex-grow flex flex-col justify-center lg:justify-start lg:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Content */}
            <div className="max-w-3xl lg:pl-4">
              <div className="inline-flex items-center bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-wider shadow-sm">
                <Star size={12} className="mr-2 text-brand-500 fill-brand-500" /> 
                <span>Rated #1 in the South West</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.05] text-black">
                Powering <br/>
                <span className="text-brand-500">Hospitality & Retail</span><br/>
                <span className="text-black">Businesses across the UK.</span>
              </h1>
              
              <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg font-normal">
                Cornwall's leading provider of intelligent EPOS, integrated payments, and cloud management systems.
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
            <div className="hidden lg:block relative h-[600px] w-full perspective-[1000px]">
              
              {/* Image 1: Hospitality (Top Right) */}
              <div className="absolute top-0 right-10 w-3/5 z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 transform rotate-3 animate-float-slow bg-white">
                   <img 
                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&auto=format&fit=crop" 
                    alt="Bar EPOS System" 
                    className="w-full h-auto object-cover" 
                  />
              </div>

              {/* Image 2: Retail (Bottom Left) */}
               <div className="absolute bottom-10 left-10 w-3/5 z-20 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 transform -rotate-2 animate-float-slower bg-white">
                   <img 
                    src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800&auto=format&fit=crop" 
                    alt="Retail Payment Terminal" 
                    className="w-full h-auto object-cover" 
                  />
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-20 right-20 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Centered Trust Indicators */}
        <div className="container mx-auto px-4 mt-16 lg:mt-0 relative z-10">
           <div className="border-t border-gray-100 pt-8 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-center">
                    <div className="flex flex-col items-center gap-3 group">
                        <div className="w-12 h-12 rounded-full bg-offwhite flex items-center justify-center text-black mb-2 group-hover:bg-brand-50 group-hover:text-brand-500 transition-colors">
                            <Phone size={20} />
                        </div>
                        <span className="font-bold text-lg">Telephone Support</span>
                        <span className="text-sm text-gray-500">Direct access to engineers</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 group">
                        <div className="w-12 h-12 rounded-full bg-offwhite flex items-center justify-center text-black mb-2 group-hover:bg-brand-50 group-hover:text-brand-500 transition-colors">
                            <Wrench size={20} />
                        </div>
                        <span className="font-bold text-lg">On-Site Support</span>
                        <span className="text-sm text-gray-500">Software & Hardware</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 group">
                        <div className="w-12 h-12 rounded-full bg-offwhite flex items-center justify-center text-black mb-2 group-hover:bg-brand-50 group-hover:text-brand-500 transition-colors">
                            <Users size={20} />
                        </div>
                        <span className="font-bold text-lg">Full Training</span>
                        <span className="text-sm text-gray-500">For you and your staff</span>
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
                className="flex overflow-x-auto gap-12 pb-8 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {clients.map((client, i) => (
                  <div key={i} className="flex-none w-72 snap-start p-6 rounded-2xl bg-white border border-gray-100 flex flex-col items-center text-center justify-center gap-6 group hover:border-brand-200 hover:shadow-xl hover:-translate-y-1 transition-all cursor-default shadow-sm">
                     <div className="w-20 h-20 rounded-full bg-offwhite shadow-inner flex items-center justify-center text-gray-400 group-hover:text-brand-600 group-hover:scale-110 transition-all duration-300">
                       <client.icon size={40} strokeWidth={1.5} />
                     </div>
                     <span className="font-bold text-xl text-black">{client.name}</span>
                  </div>
                ))}
              </div>
              {/* Fade gradients */}
              <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-offwhite to-transparent pointer-events-none md:block hidden"></div>
              <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-offwhite to-transparent pointer-events-none md:block hidden"></div>
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