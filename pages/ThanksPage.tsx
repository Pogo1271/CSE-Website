import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export const ThanksPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="bg-brand-50 text-brand-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
          <CheckCircle size={48} strokeWidth={3} />
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-black mb-6">Thank You!</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          Your message has been sent successfully. Our team will get back to you as soon as possible.
        </p>
        <Link to="/" className="bg-brand-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-brand-600 transition shadow-lg shadow-brand-500/20 inline-flex items-center transform hover:-translate-y-1">
          Back to Home
        </Link>
      </div>
    </div>
  );
};
