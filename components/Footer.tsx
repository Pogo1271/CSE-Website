import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_ADDRESS, COMPANY_PHONE, COMPANY_EMAIL } from '../data';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-offwhite text-slate-600 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <BrandLogo />
            </div>
            <p className="text-sm leading-relaxed text-slate-500 mb-6">
              Modern EPOS, cloud software, and precision hardware. Backed by local expertise and on-site support since our founding.
            </p>
          </div>
          
          <div>
            <h3 className="text-black font-bold text-lg mb-6">Explore</h3>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to="/solutions" className="hover:text-brand-500 transition">EPOS Software</Link></li>
              <li><Link to="/hardware" className="hover:text-brand-500 transition">Touch Screens</Link></li>
              <li><Link to="/hardware/scales" className="hover:text-brand-500 transition">Weighing Scales</Link></li>
              <li><Link to="/hardware/cash-registers" className="hover:text-brand-500 transition">Cash Registers</Link></li>
              <li><Link to="/hardware/digital-signage" className="hover:text-brand-500 transition">Digital Menu Signage</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to="/" className="hover:text-brand-500 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-500 transition">About CSE</Link></li>
              <li><Link to="/support" className="hover:text-brand-500 transition">Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-0.5 shrink-0 text-brand-500" />
                <span>{COMPANY_ADDRESS}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 shrink-0 text-brand-500" />
                <span className="text-slate-600 font-medium">{COMPANY_PHONE}</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 shrink-0 text-brand-500" />
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-brand-500 transition">{COMPANY_EMAIL}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to="/privacy-policy" className="hover:text-brand-500 transition">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="hover:text-brand-500 transition">Terms of Service</Link></li>
              <li><Link to="/remote-support-policy" className="hover:text-brand-500 transition">Remote Support Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 mt-16 pt-8 text-center text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Cornwall Scale & Equipment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};