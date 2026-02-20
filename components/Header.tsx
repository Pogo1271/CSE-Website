import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { NAV_ITEMS } from '../data';

export const Header: React.FC = () => {
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