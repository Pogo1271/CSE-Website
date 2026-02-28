import React, { useRef } from 'react';
import { Monitor, Palette, Cloud, ArrowRight, Layout, Wrench, Headset, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTASection } from '../components/CTASection';
import { motion, useScroll, useTransform } from 'motion/react';

const SLIDER_IMAGES_TOP = [
  "/images/menu_board/slider/charmouth_fish.webp", // Charmouth
  "/images/menu_board/slider/charmouth_ice_cream.webp", // Charmouth
  "/images/menu_board/slider/lewis_fish.webp", // Lewis
];

const SLIDER_IMAGES_BOTTOM = [
  "/images/menu_board/slider/cse_ad.webp", // CSE
  "/images/menu_board/slider/porthminster_beach.webp", // Porthminster
  "/images/menu_board/slider/takeaway.webp", // Takeaway
];

const GALLERY_IMAGES = [
  "/images/menu_board/work/peckish.jpeg",
  "/images/menu_board/work/lewis.jpeg",
  "/images/menu_board/work/porthminster.jpeg",
  "/images/menu_board/work/charmouth.jpeg",
  "/images/menu_board/work/charmouth2.jpeg",
  "/images/menu_board/work/charmouth3.jpeg"
];

export const DigitalSignagePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Standard Theme */}
      <div className="bg-white pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-brand-500 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Digital Experience
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-black">Digital Menu <span className="text-brand-500">Signage</span></h1>
          <p className="text-xl text-gray-500 max-w-4xl mx-auto font-light leading-relaxed mb-8">
            Transform your venue with stunning digital menu boards. Powered by BenQ X-Sign and brought to life with our bespoke, in-house artwork design.
          </p>
        </div>
      </div>

      {/* Parallax Scroll Slider Section */}
      <div ref={containerRef} className="bg-white py-24 overflow-hidden relative border-y border-gray-100">
         <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10 pointer-events-none"></div>
         
         <div className="flex flex-col gap-12 rotate-[-2deg] scale-110">
            {/* Top Row - Scrolls Left */}
            <motion.div style={{ x: x1 }} className="flex gap-8 w-max">
               {[...SLIDER_IMAGES_TOP, ...SLIDER_IMAGES_TOP].map((src, i) => (
                  <div key={i} className="w-[400px] h-[250px] md:w-[500px] md:h-[300px] rounded-2xl overflow-hidden border-4 border-gray-100 shadow-2xl relative group">
                     <img src={src} alt={`Digital Signage Example ${i}`} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                     </div>
                  </div>
               ))}
            </motion.div>

            {/* Bottom Row - Scrolls Right */}
            <motion.div style={{ x: x2 }} className="flex gap-8 w-max ml-[-20%]">
               {[...SLIDER_IMAGES_BOTTOM, ...SLIDER_IMAGES_BOTTOM].map((src, i) => (
                  <div key={i} className="w-[400px] h-[250px] md:w-[500px] md:h-[300px] rounded-2xl overflow-hidden border-4 border-gray-100 shadow-2xl relative group">
                     <img src={src} alt={`Digital Signage Example ${i}`} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                     </div>
                  </div>
               ))}
            </motion.div>
         </div>
      </div>

      {/* 4 Boxes Feature Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-black mb-4">Complete Digital Solution</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">From design to installation, we handle every step of your digital transformation.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Box 1: In-House Design */}
              <div className="bg-offwhite p-8 rounded-[2rem] border border-gray-100 hover:border-brand-200 hover:shadow-xl transition-all group">
                 <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Palette size={28} />
                 </div>
                 <h3 className="text-xl font-bold text-black mb-3">In-House Design Studio</h3>
                 <p className="text-gray-500 leading-relaxed">Our creative team designs bespoke, high-impact artwork tailored to your brand identity.</p>
              </div>

              {/* Box 2: Commercial Hardware */}
              <div className="bg-offwhite p-8 rounded-[2rem] border border-gray-100 hover:border-brand-200 hover:shadow-xl transition-all group">
                 <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Monitor size={28} />
                 </div>
                 <h3 className="text-xl font-bold text-black mb-3">Commercial Displays</h3>
                 <p className="text-gray-500 leading-relaxed">High-brightness, 24/7 rated commercial screens designed specifically for hospitality environments.</p>
              </div>

              {/* Box 3: Cloud Control */}
              <div className="bg-offwhite p-8 rounded-[2rem] border border-gray-100 hover:border-brand-200 hover:shadow-xl transition-all group">
                 <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Cloud size={28} />
                 </div>
                 <h3 className="text-xl font-bold text-black mb-3">Cloud-Based Management</h3>
                 <p className="text-gray-500 leading-relaxed">Update menus, prices, and promotions instantly from anywhere in the world via the cloud.</p>
              </div>

              {/* Box 4: Installation & Support */}
              <div className="bg-offwhite p-8 rounded-[2rem] border border-gray-100 hover:border-brand-200 hover:shadow-xl transition-all group">
                 <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Wrench size={28} />
                 </div>
                 <h3 className="text-xl font-bold text-black mb-3">Installation & Ongoing Support</h3>
                 <p className="text-gray-500 leading-relaxed">Full installation service and dedicated technical support to keep your screens running smoothly.</p>
              </div>
           </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-offwhite py-24 border-t border-gray-100">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <div className="inline-block bg-brand-100 text-brand-600 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  Portfolio
               </div>
               <h2 className="text-4xl font-black text-black mb-4">Our Customers</h2>
               <p className="text-gray-500 max-w-2xl mx-auto text-lg">See how we've transformed venues across the South West.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {GALLERY_IMAGES.map((src, idx) => (
                  <div key={idx} className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer">
                     <img src={src} alt={`Gallery Image ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                     <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <ImageIcon size={20} className="text-brand-500" />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>

      <div className="pt-24">
        <CTASection />
      </div>
    </div>
  );
};
