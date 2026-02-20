import React from 'react';
import { LOGO_URL } from '../data';

export const BrandLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <img 
      src={LOGO_URL} 
      alt="CSE Logo" 
      className="h-14 w-auto object-contain" 
    />
  </div>
);

export const BrandLogoLight = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="bg-white p-2 rounded-lg">
      <img 
        src={LOGO_URL} 
        alt="CSE Logo" 
        className="h-10 w-auto object-contain" 
      />
    </div>
  </div>
);