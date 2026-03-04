import React from 'react';
import { Scale, Check, ExternalLink, Award } from 'lucide-react';
import { CTASection } from '../components/CTASection';
import { scale } from 'motion';

export const ScalesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-white pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-brand-500 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Our Products
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-black">Retail <span className="text-brand-500">Weighing Scales</span></h1>
          <p className="text-xl text-gray-500 max-w-4xl mx-auto font-light leading-relaxed">
            Trade-approved weighing scales for loose goods. Standalone or integrated.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-offwhite py-24 border-t border-gray-100 mb-24">
        <div className="container mx-auto px-4 flex flex-col gap-16 max-w-6xl">
          
          {/* Certification Info Box */}
          <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-200 shadow-lg text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-400 to-brand-600"></div>
             <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
             </div>
             <h2 className="text-3xl font-black text-black mb-6">Certified & Calibrated</h2>
             <p className="text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto mb-8">
                We work closely with Cornwall Council and Trading Standards to ensure we are able to certificate and calibrate your scales accurately. Compliance is key for any business trading by weight, and our team ensures your equipment meets all legal requirements.
             </p>
          </section>

          {/* Partners Section */}
          <section className="text-center overflow-hidden">
             <style>{`
               @keyframes marquee {
                 0% { transform: translateX(0); }
                 100% { transform: translateX(-50%); }
               }
               .animate-marquee {
                 animation: marquee 15s linear infinite;
               }
             `}</style>
             <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-8">Working With Industry Leaders</h3>
             
             <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
                <div className="flex w-max animate-marquee items-center gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                   {/* First Set */}
                   {[
                     { src: "/images/scales/cas_logo.png", alt: "CAS" },
                     { src: "/images/scales/digi_scales.png", alt: "DIGI" },
                     { src: "/images/scales/adam_equipment3.png", alt: "Adam Equipment" },
                     { src: "/images/scales/turier_logo.webp", alt: "Turier" },
                     { src: "/images/scales/UWE-Logo.svg", alt: "UWE" },
                   ].map((logo, idx) => (
                      <div key={`logo-1-${idx}`} className="h-12 md:h-16 w-auto flex-shrink-0">
                         <img src={logo.src} alt={logo.alt} className="h-full object-contain mix-blend-multiply" />
                      </div>
                   ))}
                   
                   {/* Duplicate Set for Loop */}
                   {[
                     { src: "/images/scales/cas_logo.png", alt: "CAS" },
                     { src: "/images/scales/digi_scales.png", alt: "DIGI" },
                     { src: "/images/scales/adam_equipment3.png", alt: "Adam Equipment" },
                     { src: "/images/scales/turier_logo.webp", alt: "Turier" },
                     { src: "/images/scales/UWE-Logo.svg", alt: "UWE" },
                   ].map((logo, idx) => (
                      <div key={`logo-2-${idx}`} className="h-12 md:h-16 w-auto flex-shrink-0">
                         <img src={logo.src} alt={logo.alt} className="h-full object-contain mix-blend-multiply" />
                      </div>
                   ))}

                  </div>
             </div>
            </section>


          {/* Info Box */}
          <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-200 shadow-lg text-center">
              <p className="text-lg md:text-xl text-gray-500 font-medium max-w-4xl mx-auto leading-relaxed">
                  We offer a wide range of scales suitable for portion control, retail, and light industrial use. Get in touch with your requirements and we’ll recommend the right solution for your business. This is just a small selection of the scales we supply and support.
              </p>
          </section>

          {/* Product Categories */}
          
          {/* Category 1: Integrated EPOS Scales */}
          <section>
             <div className="flex items-center gap-4 mb-8">
                <div className="h-10 w-10 rounded-xl bg-brand-500 text-white flex items-center justify-center">
                   <Scale size={20} />
                </div>
                <h2 className="text-3xl font-black text-black">Integrated EPOS Scales</h2>
             </div>
             <div className="w-full">
                {/* Product 1 - Full Width */}
                <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-200 shadow-lg hover:shadow-xl transition-all flex flex-col md:flex-row gap-8 items-center">
                   <div className="w-full md:w-1/2 h-64 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
                      <img src="/images/scales/cas_pd2.jpg" alt="CAS PD-II" className="h-full object-contain mix-blend-multiply" />
                   </div>
                   <div className="w-full md:w-1/2">
                       <h3 className="text-3xl font-black text-black mb-4">CAS PD-II</h3>
                       <p className="text-gray-500 mb-6 text-lg">The industry standard for supermarket and retail integration. Connects directly to your EPOS for seamless weight-to-price calculation.</p>
                       <ul className="space-y-3">
                          <li className="flex items-center text-gray-600"><Check size={18} className="text-brand-500 mr-3" /> Heavy Duty Construction</li>
                          <li className="flex items-center text-gray-600"><Check size={18} className="text-brand-500 mr-3" /> Large VFD Display</li>
                          <li className="flex items-center text-gray-600"><Check size={18} className="text-brand-500 mr-3" /> Seamless EPOS Integration</li>
                       </ul>
                   </div>
                </div>
             </div>
          </section>

          {/* Category 2: Label Printing Scales */}
          <section>
             <div className="flex items-center gap-4 mb-8">
                <div className="h-10 w-10 rounded-xl bg-brand-500 text-white flex items-center justify-center">
                   <Scale size={20} />
                </div>
                <h2 className="text-3xl font-black text-black">Label Printing Scales</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product 3 */}
                <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                   <div className="h-48 mb-6 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
                      <img src="/images/scales/cas_cn1.webp" alt="CAS CN-1" className="h-full object-contain mix-blend-multiply" />
                   </div>
                   <h3 className="text-2xl font-black text-black mb-3">CAS CN-1</h3>
                   <p className="text-gray-500 mb-6 text-sm">Designed for meat, poultry, fish, fruit, and vegetables. Features remote functionality, a 7" colour display, and enhanced network capabilities.</p>
                   <ul className="space-y-2">
                      <li className="flex items-center text-sm text-gray-600"><Check size={14} className="text-brand-500 mr-2" /> 7" Colour Display</li>
                      <li className="flex items-center text-sm text-gray-600"><Check size={14} className="text-brand-500 mr-2" /> Remote Functionality</li>
                   </ul>
                </div>
                {/* Product 4 */}
                <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                   <div className="h-48 mb-6 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
                      <img src="/images/scales/digi_sm120.jpg" alt="DIGI SM-120" className="h-full object-contain mix-blend-multiply" />
                   </div>
                   <h3 className="text-2xl font-black text-black mb-3">DIGI SM-120</h3>
                   <p className="text-gray-500 mb-6 text-sm">Compact and powerful label printing scale with cloud connectivity options. Ideal for modern retail counters with limited space.</p>
                   <ul className="space-y-2">
                      <li className="flex items-center text-sm text-gray-600"><Check size={14} className="text-brand-500 mr-2" /> Cloud Connected</li>
                      <li className="flex items-center text-sm text-gray-600"><Check size={14} className="text-brand-500 mr-2" /> Linerless Label Option</li>
                   </ul>
                </div>
             </div>
          </section>

          {/* Category 3: Portion Control Scales */}
          <section>
             <div className="flex items-center gap-4 mb-8">
                <div className="h-10 w-10 rounded-xl bg-brand-500 text-white flex items-center justify-center">
                   <Scale size={20} />
                </div>
                <h2 className="text-3xl font-black text-black">Portion Control Scales</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product 5 */}
                <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                   <div className="h-48 mb-6 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
                      <img src="/images/scales/cas-pwii.webp" alt="CAS PW-II" className="h-full object-contain mix-blend-multiply" />
                   </div>
                   <h3 className="text-2xl font-black text-black mb-3">CAS PW-II</h3>
                   <p className="text-gray-500 mb-6 text-sm">Simple, battery-operated portion control scale. Compact design fits easily on any prep bench.</p>
                   <ul className="space-y-2">
                      <li className="flex items-center text-sm text-gray-600"><Check size={14} className="text-brand-500 mr-2" /> Battery Operated</li>
                      <li className="flex items-center text-sm text-gray-600"><Check size={14} className="text-brand-500 mr-2" /> Dual Display</li>
                      <li className="flex items-center text-sm text-gray-600"><Check size={14} className="text-brand-500 mr-2" /> Stainless Steel Construction</li>
                   </ul>
                </div>
                {/* Product 6 */}
                <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                   <div className="h-48 mb-6 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
                      <img src="/images/scales/adam_abw.png" alt="Adam Equipment Aqua" className="h-full object-contain mix-blend-multiply" />
                   </div>
                   <h3 className="text-2xl font-black text-black mb-3">Adam Equipment Aqua</h3>
                   <p className="text-gray-500 mb-6 text-sm">Washdown scale with IP67 rating. Essential for food preparation areas requiring strict hygiene and regular cleaning.</p>
                   <ul className="space-y-2">
                      <li className="flex items-center text-sm text-gray-600"><Check size={14} className="text-brand-500 mr-2" /> IP67 Waterproof</li>
                      <li className="flex items-center text-sm text-gray-600"><Check size={14} className="text-brand-500 mr-2" /> Stainless Steel Pan</li>
                   </ul>
                </div>
             </div>
          </section>

          {/* Category 4: Touchscreen & Floor Scales */}
          <section>
             <div className="flex items-center gap-4 mb-8">
                <div className="h-10 w-10 rounded-xl bg-brand-500 text-white flex items-center justify-center">
                   <Scale size={20} />
                </div>
                <h2 className="text-3xl font-black text-black">Other Scales</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product 7 */}
                <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                   <div className="h-48 mb-6 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
                      <img src="/images/scales/excell-fd3p.webp" alt="Excell FD3P Retail" className="h-full object-contain mix-blend-multiply" />
                   </div>
                   <h3 className="text-2xl font-black text-black mb-3">Excell FD3P Retail</h3>
                   <p className="text-gray-500 mb-6 text-sm">Dual range price computing scale. Water channel design for protection and reliability.</p>
                   <ul className="space-y-2">
                      <li className="flex items-center text-sm text-gray-600"><Check size={14} className="text-brand-500 mr-2" /> Dual Range Weighing</li>
                      <li className="flex items-center text-sm text-gray-600"><Check size={14} className="text-brand-500 mr-2" /> Water Resistant Design</li>
                   </ul>
                </div>
                {/* Product 8 */}
                <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                   <div className="h-48 mb-6 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
                      <img src="/images/scales/adam-gfk.png" alt="Adam Equipment GFK" className="h-full object-contain mix-blend-multiply" />
                   </div>
                   <h3 className="text-2xl font-black text-black mb-3">Adam Equipment GFK</h3>
                   <p className="text-gray-500 mb-6 text-sm">Heavy-duty floor scale for goods in/out and warehouse weighing. Large platform with a clear indicator.</p>
                   <ul className="space-y-2">
                      <li className="flex items-center text-sm text-gray-600"><Check size={14} className="text-brand-500 mr-2" /> High Capacity</li>
                      <li className="flex items-center text-sm text-gray-600"><Check size={14} className="text-brand-500 mr-2" /> Checkweighing Function</li>
                   </ul>
                </div>
             </div>
          </section>

        </div>
      </div>
      
      <CTASection />
    </div>
  );
};
