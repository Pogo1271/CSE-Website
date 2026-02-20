import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Printer, Monitor, Smartphone, Scan, Scale, Calculator, CreditCard } from 'lucide-react';
import { HARDWARE_ITEMS } from '../data';
import { CTASection } from '../components/CTASection';

export const HardwarePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('terminals');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 80px header + 80px subnav + 20px padding
      const y = element.getBoundingClientRect().top + window.scrollY - 180; 
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Setup scroll spy to update active tab
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['terminals', 'printers', 'drawers', 'registers', 'accessories'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to find item from data.ts
  const getItem = (id: string) => HARDWARE_ITEMS.find(i => i.id === id);

  const navigation = [
    { id: 'terminals', label: 'Terminals' },
    { id: 'printers', label: 'Printers' },
    { id: 'drawers', label: 'Cash Drawers' },
    { id: 'registers', label: 'Registers & Scales' },
    { id: 'accessories', label: 'We Also Supply' },
  ];

  // Manual Item Definitions where data.ts items are reused or missing
  const receiptPrinter = getItem('printer-thermal');
  
  const kitchenPrinter = {
    ...receiptPrinter,
    id: 'printer-kitchen',
    title: 'Kitchen Impact Printers',
    description: 'Heavy-duty dot matrix printers designed for hot, humid kitchen environments. Loud printing noise ensures chefs never miss an order.',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop'
  };

  const weAlsoSupply = [
    getItem('scanner-2d'),
    getItem('kitchen-display'),
    getItem('handheld-tablet'),
    getItem('kiosk-self-serve')
  ].filter(Boolean); // Ensure no undefined items

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-white pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-brand-500 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Our Products
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-black">Professional <span className="text-brand-500">Hardware</span></h1>
          <p className="text-xl text-gray-500 max-w-4xl mx-auto font-light leading-relaxed">
            High-performance equipment built for the demands of modern hospitality and retail.
          </p>
        </div>
      </div>

      {/* Sticky Sub-nav */}
      <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-y border-gray-100 py-4 mb-12 shadow-sm transition-all">
        <div className="container mx-auto px-4 overflow-x-auto hide-scrollbar">
           <div className="flex justify-start md:justify-center min-w-max gap-2 md:gap-4 px-2">
              {navigation.map(nav => (
                <button 
                  key={nav.id}
                  onClick={() => scrollToSection(nav.id)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    activeSection === nav.id 
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25 ring-2 ring-brand-500 ring-offset-2' 
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-black border border-gray-200'
                  }`}
                >
                  {nav.label}
                </button>
              ))}
           </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-offwhite py-24 border-t border-gray-100 mb-24">
        <div className="container mx-auto px-4 flex flex-col gap-24 max-w-6xl">
          
          {/* SECTION 1: TERMINALS */}
          <section id="terminals" className="scroll-mt-48">
             <div className="mb-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-500 text-white flex items-center justify-center">
                   <Monitor size={24} />
                </div>
                <h2 className="text-4xl font-black text-black">Terminals</h2>
             </div>
             
             {/* Main Terminal Block */}
             {getItem('cse-pro-15') && (
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-200 shadow-xl flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 order-2 md:order-1">
                        <div className="inline-block bg-brand-50 text-brand-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-brand-100">
                           Flagship Model
                        </div>
                        <h3 className="text-3xl font-black text-black mb-6">CSE Pro 15"</h3>
                        <p className="text-lg text-gray-500 leading-relaxed mb-8">
                            The industry standard for hospitality. A high-performance fanless terminal with a 15" PCAP waterproof touch screen. Precision-engineered for reliability in harsh bar and kitchen environments.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-2 text-gray-700 font-medium">
                                <Check size={18} className="text-green-500" strokeWidth={3} /> Spill Proof (IP64)
                            </div>
                            <div className="flex items-center gap-2 text-gray-700 font-medium">
                                <Check size={18} className="text-green-500" strokeWidth={3} /> Fanless Design
                            </div>
                            <div className="flex items-center gap-2 text-gray-700 font-medium">
                                <Check size={18} className="text-green-500" strokeWidth={3} /> Solid State Drive
                            </div>
                            <div className="flex items-center gap-2 text-gray-700 font-medium">
                                <Check size={18} className="text-green-500" strokeWidth={3} /> 3 Year Warranty
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-5/12 order-1 md:order-2">
                        <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-square relative bg-white border border-gray-100">
                             <img src={getItem('cse-pro-15')?.imageUrl} alt="CSE Pro 15" className="w-full h-full object-cover" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
             )}
          </section>

          {/* SECTION 2: PRINTERS */}
          <section id="printers" className="scroll-mt-48">
             <div className="mb-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-500 text-white flex items-center justify-center">
                   <Printer size={24} />
                </div>
                <h2 className="text-4xl font-black text-black">Printers</h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Receipt Printer */}
                <div className="bg-white rounded-[2.5rem] p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all group">
                    <div className="h-64 rounded-2xl overflow-hidden mb-8 relative border border-gray-100">
                         <img src={receiptPrinter?.imageUrl} alt="Receipt Printer" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-2xl font-black text-black mb-4">Receipt Printers</h3>
                    <p className="text-gray-500 mb-6 leading-relaxed">
                        Ultra-fast thermal printing for customer receipts. Features drop-in paper loading, auto-cutter, and multiple interface options including LAN, WiFi and Bluetooth.
                    </p>
                    <ul className="space-y-2 mb-6 text-sm text-gray-600">
                       <li className="flex items-center"><Check size={14} className="text-brand-500 mr-2" strokeWidth={3} /> 250mm/sec print speed</li>
                       <li className="flex items-center"><Check size={14} className="text-brand-500 mr-2" strokeWidth={3} /> Front or Top exit options</li>
                    </ul>
                </div>

                {/* Kitchen Printer */}
                <div className="bg-white rounded-[2.5rem] p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all group">
                    <div className="h-64 rounded-2xl overflow-hidden mb-8 relative border border-gray-100">
                         <img src={kitchenPrinter.imageUrl} alt="Kitchen Printer" className="w-full h-full object-cover" />
                         <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">Heat Resistant</div>
                    </div>
                    <h3 className="text-2xl font-black text-black mb-4">Kitchen Printers</h3>
                    <p className="text-gray-500 mb-6 leading-relaxed">
                         Rugged impact printers (dot matrix) designed specifically for hot kitchens. Uses plain paper and ribbon so receipts don't turn black under heat lamps.
                    </p>
                    <ul className="space-y-2 mb-6 text-sm text-gray-600">
                       <li className="flex items-center"><Check size={14} className="text-brand-500 mr-2" strokeWidth={3} /> Audible buzzer included</li>
                       <li className="flex items-center"><Check size={14} className="text-brand-500 mr-2" strokeWidth={3} /> 2-ply copy capability</li>
                    </ul>
                </div>
             </div>
          </section>

          {/* SECTION 3: CASH DRAWERS */}
          <section id="drawers" className="scroll-mt-48">
             <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-200 shadow-lg flex flex-col md:flex-row gap-12 items-center">
                 <div className="w-full md:w-1/2">
                    <img src={getItem('cash-drawer')?.imageUrl} alt="Cash Drawer" className="rounded-2xl shadow-lg border border-gray-100 w-full" />
                 </div>
                 <div className="flex-1">
                     <div className="flex items-center gap-3 mb-4 text-brand-500">
                        <CreditCard size={28} />
                        <span className="font-bold uppercase tracking-widest text-sm">Security</span>
                     </div>
                     <h2 className="text-3xl font-black text-black mb-6">Heavy Duty Cash Drawers</h2>
                     <p className="text-gray-500 text-lg leading-relaxed mb-6">
                        Secure your cash with our range of heavy-duty steel cash drawers. Available in standard 410mm width or compact versions for tight spaces.
                     </p>
                     <ul className="grid grid-cols-1 gap-3 mb-8">
                        <li className="flex items-center text-gray-700"><div className="w-2 h-2 rounded-full bg-brand-500 mr-3"></div> Tested to over 1 million cycles</li>
                        <li className="flex items-center text-gray-700"><div className="w-2 h-2 rounded-full bg-brand-500 mr-3"></div> Stainless steel front option</li>
                        <li className="flex items-center text-gray-700"><div className="w-2 h-2 rounded-full bg-brand-500 mr-3"></div> Removable insert & lockable lid</li>
                     </ul>
                 </div>
             </div>
          </section>

          {/* SECTION 4: REGISTERS & SCALES */}
          <section id="registers" className="scroll-mt-48">
             <div className="mb-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-500 text-white flex items-center justify-center">
                   <Calculator size={24} />
                </div>
                <h2 className="text-4xl font-black text-black">Registers & Scales</h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Cash Registers */}
                <div className="group rounded-[2rem] bg-white border border-gray-200 p-8 hover:border-brand-200 hover:shadow-xl transition-all">
                   <div className="flex items-start justify-between mb-6">
                      <div className="p-4 bg-gray-50 rounded-2xl text-gray-600 group-hover:bg-brand-50 group-hover:text-brand-500 transition-colors">
                         <Calculator size={32} />
                      </div>
                   </div>
                   <h3 className="text-2xl font-black text-black mb-4">Electronic Cash Registers</h3>
                   <p className="text-gray-500 mb-6">
                      Simple, reliable standalone cash registers for businesses that don't require a full EPOS system. Perfect for small independent shops and pop-ups.
                   </p>
                   <div className="h-48 rounded-xl bg-gray-100 overflow-hidden relative">
                      <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop" alt="Cash Register" className="w-full h-full object-cover opacity-80" />
                   </div>
                </div>

                {/* Scales */}
                <div className="group rounded-[2rem] bg-white border border-gray-200 p-8 hover:border-brand-200 hover:shadow-xl transition-all">
                   <div className="flex items-start justify-between mb-6">
                      <div className="p-4 bg-gray-50 rounded-2xl text-gray-600 group-hover:bg-brand-50 group-hover:text-brand-500 transition-colors">
                         <Scale size={32} />
                      </div>
                   </div>
                   <h3 className="text-2xl font-black text-black mb-4">Retail Weighing Scales</h3>
                   <p className="text-gray-500 mb-6">
                      Trade-approved weighing scales for loose goods. We supply standalone label printing scales and models that integrate directly with your EPOS.
                   </p>
                   <div className="h-48 rounded-xl bg-gray-100 overflow-hidden relative">
                      <img src="https://images.unsplash.com/photo-1574720974868-e697c1d3945a?q=80&w=800&auto=format&fit=crop" alt="Weighing Scale" className="w-full h-full object-cover opacity-80" />
                   </div>
                </div>
             </div>
          </section>

          {/* SECTION 5: WE ALSO SUPPLY (GRID LIST) */}
          <section id="accessories" className="scroll-mt-48">
             <div className="text-center mb-12">
                 <h2 className="text-3xl font-black text-black">We Also Supply</h2>
                 <div className="h-1 w-20 bg-brand-500 mx-auto mt-4 rounded-full"></div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {weAlsoSupply.map((item, idx) => (
                    item && (
                      <div key={idx} className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all group">
                          <div className="h-40 overflow-hidden relative bg-gray-100">
                             <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                          <div className="p-6">
                             <h3 className="font-bold text-lg text-black mb-2 leading-tight">{item.title}</h3>
                             <p className="text-xs text-gray-500 line-clamp-3">{item.description}</p>
                          </div>
                      </div>
                    )
                ))}
             </div>
          </section>

        </div>
      </div>
      
      <CTASection />
    </div>
  );
};