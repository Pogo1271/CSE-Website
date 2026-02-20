import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pb-24">
      <div className="rounded-[2rem] bg-brand-500 text-white p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl group relative overflow-hidden">
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
  );
};