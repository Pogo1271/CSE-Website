import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FAVICON_URL } from './data';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { HardwarePage } from './pages/HardwarePage';
import { SupportPage } from './pages/SupportPage';
import { ContactPage } from './pages/ContactPage';
import { ThanksPage } from './pages/ThanksPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfUsePage } from './pages/TermsOfUsePage';
import { RemoteSupportPolicyPage } from './pages/RemoteSupportPolicyPage';
import { CashRegistersPage } from './pages/CashRegistersPage';
import { ScalesPage } from './pages/ScalesPage';
import { DigitalSignagePage } from './pages/DigitalSignagePage';

import { ScrollToTop } from './components/ScrollToTop';

const App: React.FC = () => {
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = FAVICON_URL;
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = FAVICON_URL;
      document.head.appendChild(newLink);
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="font-sans text-slate-900 antialiased selection:bg-brand-200 selection:text-brand-900 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/hardware" element={<HardwarePage />} />
            <Route path="/hardware/cash-registers" element={<CashRegistersPage />} />
            <Route path="/hardware/scales" element={<ScalesPage />} />
            <Route path="/hardware/digital-signage" element={<DigitalSignagePage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/thanks" element={<ThanksPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />
            <Route path="/remote-support-policy" element={<RemoteSupportPolicyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;