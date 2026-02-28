import React from 'react';
import { Calculator, Check } from 'lucide-react';
import { CTASection } from '../components/CTASection';

export const CashRegistersPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-white pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-brand-500 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Our Products
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-black">Electronic <span className="text-brand-500">Cash Registers</span></h1>
          <p className="text-xl text-gray-500 max-w-4xl mx-auto font-light leading-relaxed">
            Simple, reliable standalone cash registers for businesses that don't require a full EPOS system.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-offwhite py-24 border-t border-gray-100 mb-24">
        <div className="container mx-auto px-4 flex flex-col gap-24 max-w-6xl">
          
          {/* Info Block */}
          <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-200 shadow-lg text-center">
             <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calculator size={32} />
             </div>
             <h2 className="text-3xl font-black text-black mb-6">Why Choose a Standalone Register?</h2>
             <p className="text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
                Not every business needs the complexity of a full EPOS system. For many small retailers, pop-ups, and independent shops, a reliable electronic cash register is the perfect solution. They offer simplicity, speed, and robustness without the need for internet connectivity or monthly software fees. Our range of SAM4S registers provides professional features like thermal printing and barcode scanning in a compact, easy-to-use package.
             </p>
          </section>

          {/* Product 1: SAM4S NR-520R */}
          <section>
             <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-200 shadow-xl flex flex-col md:flex-row gap-12 items-center">
                 <div className="flex-1 order-2 md:order-1">
                     <div className="inline-block bg-gray-100 text-gray-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                        Retail Standard
                     </div>
                     <h3 className="text-3xl font-black text-black mb-6">SAM4S NR-520R</h3>
                     <p className="text-lg text-gray-500 leading-relaxed mb-8">
                         The SAM4S NR-520R is a versatile retail cash register designed for ease of use and reliability. With its raised keyboard and clear multi-line display, it's the ideal choice for general retail environments, newsagents, and small shops.
                     </p>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                         <div className="flex items-center gap-2 text-gray-700 font-medium">
                             <Check size={18} className="text-brand-500" strokeWidth={3} /> Single Station Thermal Printer
                         </div>
                         <div className="flex items-center gap-2 text-gray-700 font-medium">
                             <Check size={18} className="text-brand-500" strokeWidth={3} /> 12 Line Operator Display
                         </div>
                         <div className="flex items-center gap-2 text-gray-700 font-medium">
                             <Check size={18} className="text-brand-500" strokeWidth={3} /> Up to 6,000 PLUs
                         </div>
                         <div className="flex items-center gap-2 text-gray-700 font-medium">
                             <Check size={18} className="text-brand-500" strokeWidth={3} /> Graphic Logo Printing
                         </div>
                         <div className="flex items-center gap-2 text-gray-700 font-medium">
                             <Check size={18} className="text-brand-500" strokeWidth={3} /> Electronic Journal
                         </div>
                         <div className="flex items-center gap-2 text-gray-700 font-medium">
                             <Check size={18} className="text-brand-500" strokeWidth={3} /> Easy to Program
                         </div>
                     </div>
                 </div>
                 <div className="w-full md:w-5/12 order-1 md:order-2">
                     <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-square relative bg-white border border-gray-100 p-8 flex items-center justify-center">
                          {/* Placeholder for SAM4S NR-520R */}
                          <img src="/images/cash_register/sam4s_nr520r.jpg" alt="SAM4S NR-520R" className="w-full h-full object-contain" />
                     </div>
                 </div>
             </div>
          </section>

          {/* Product 2: SAM4S ER-940 */}
          <section>
             <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-200 shadow-xl flex flex-col md:flex-row gap-12 items-center">
                 <div className="w-full md:w-5/12">
                     <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-square relative bg-white border border-gray-100 p-8 flex items-center justify-center">
                          {/* Placeholder for SAM4S ER-940 */}
                          <img src="/images/cash_register/sam4s_er940.jpg" alt="SAM4S ER-940" className="w-full h-full object-contain" />
                     </div>
                 </div>
                 <div className="flex-1">
                     <div className="inline-block bg-brand-100 text-brand-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                        Hospitality Ready
                     </div>
                     <h3 className="text-3xl font-black text-black mb-6">SAM4S ER-940</h3>
                     <p className="text-lg text-gray-500 leading-relaxed mb-8">
                         A high-performance register built for the demands of hospitality. The ER-940 features a flat, spill-resistant keyboard, making it perfect for bars, cafes, and restaurants where spills are a daily hazard.
                     </p>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                         <div className="flex items-center gap-2 text-gray-700 font-medium">
                             <Check size={18} className="text-brand-500" strokeWidth={3} /> High Speed Thermal Printer
                         </div>
                         <div className="flex items-center gap-2 text-gray-700 font-medium">
                             <Check size={18} className="text-brand-500" strokeWidth={3} /> Flat Spill-Resistant Keyboard
                         </div>
                         <div className="flex items-center gap-2 text-gray-700 font-medium">
                             <Check size={18} className="text-brand-500" strokeWidth={3} /> Up to 10,000 PLUs
                         </div>
                         <div className="flex items-center gap-2 text-gray-700 font-medium">
                             <Check size={18} className="text-brand-500" strokeWidth={3} /> Table Management
                         </div>
                         <div className="flex items-center gap-2 text-gray-700 font-medium">
                             <Check size={18} className="text-brand-500" strokeWidth={3} /> Check Tracking
                         </div>
                         <div className="flex items-center gap-2 text-gray-700 font-medium">
                             <Check size={18} className="text-brand-500" strokeWidth={3} /> 2x RS232 Ports
                         </div>
                     </div>
                 </div>
             </div>
          </section>

        </div>
      </div>
      
      <CTASection />
    </div>
  );
};
