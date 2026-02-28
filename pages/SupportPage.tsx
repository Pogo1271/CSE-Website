import React from 'react';
import { Phone, Mail, Download, HardDrive } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_EMAIL } from '../data';
import { CTASection } from '../components/CTASection';

export const SupportPage: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
             {/* Standard Header Section */}
             <div className="bg-white py-24">
                 <div className="container mx-auto px-4 text-center">
                     <div className="inline-block bg-brand-500 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                         Customer Care
                     </div>
                     <h1 className="text-5xl md:text-7xl font-black mb-8 text-black">We're Here <span className="text-brand-500">To Help</span></h1>
                     <p className="text-xl text-gray-500 max-w-4xl mx-auto font-light leading-relaxed">
                         Based in Cornwall, our expert support team is ready to help — no matter where you are in the world.
                     </p>
                 </div>
             </div>

             {/* Main Content Section */}
             <div className="bg-offwhite py-24 border-t border-gray-100 mb-24">
                 <div className="container mx-auto px-4">
                     
                     {/* Top Section: Remote Support & Utilities Grid */}
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                        
                        {/* Remote Support Box */}
                        <div className="bg-white border border-gray-200 rounded-[3rem] p-10 md:p-14 text-center shadow-xl relative overflow-hidden flex flex-col justify-center h-full">
                             <div className="relative z-10 flex flex-col h-full items-center">
                                <div className="w-16 h-16 bg-brand-50 text-brand-500 rounded-2xl flex items-center justify-center mb-6">
                                    <Download size={32} />
                                </div>
                                <h2 className="text-3xl font-black mb-4 text-black">Remote Support</h2>
                                <p className="text-gray-500 mb-8 max-w-md mx-auto text-lg leading-relaxed flex-grow">
                                    Our engineers can remotely access your system to diagnose and fix issues instantly. Please call us first to obtain a code.
                                </p>
                                <a 
                                    href="https://cornwallscales.screenconnect.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-block bg-brand-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-600 transition shadow-xl shadow-brand-500/30 transform hover:-translate-y-1 w-full md:w-auto"
                                >
                                    Download ScreenConnect
                                </a>
                             </div>
                             {/* Decorative blob */}
                             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
                        </div>

                        {/* Utilities & Programs Box */}
                        <div className="bg-white border border-gray-200 rounded-[3rem] p-10 md:p-14 text-center shadow-xl relative overflow-hidden flex flex-col justify-center h-full">
                             <div className="relative z-10 flex flex-col h-full items-center">
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                    <HardDrive size={32} />
                                </div>
                                <h2 className="text-3xl font-black mb-4 text-black">Utilities & Programs</h2>
                                <p className="text-gray-500 mb-8 max-w-md mx-auto text-lg leading-relaxed flex-grow">
                                    Access essential drivers, manuals, software installers, and utility programs for your hardware.
                                </p>
                                <a 
                                    href="https://drive.google.com/drive/folders/1vCEJpEpaDD6-3syhonawFoxGmTHlZsqE" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-xl shadow-blue-600/30 transform hover:-translate-y-1 w-full md:w-auto"
                                >
                                    Access Drive Folder
                                </a>
                             </div>
                             {/* Decorative blob */}
                             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                             <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
                        </div>

                     </div>

                     {/* Contact Grid - Moved Below */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                         <div className="bg-white p-12 rounded-[2.5rem] border border-gray-100 text-center hover:shadow-xl transition-all group flex flex-col h-full">
                             <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                                 <Phone size={36} />
                             </div>
                             <h3 className="text-2xl font-bold mb-3 text-black">Telephone Support</h3>
                             <p className="text-gray-500 mb-6">Speak directly to an engineer. When calling, please select:</p>
                             <ul className="text-left text-sm text-gray-600 space-y-3 mb-8 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <li className="flex gap-3"><span className="font-bold text-brand-500 shrink-0">Option 1</span> <span>For till rolls and accessories or to leave a message</span></li>
                                <li className="flex gap-3"><span className="font-bold text-brand-500 shrink-0">Option 2</span> <span>To speak to an engineer during normal office hours (9am-5pm)</span></li>
                                <li className="flex gap-3"><span className="font-bold text-brand-500 shrink-0">Option 3</span> <span>For emergency out of hours support (active support contract required)</span></li>
                             </ul>
                             <a href={`tel:${COMPANY_PHONE}`} className="text-3xl font-black text-black hover:text-brand-500 transition block mt-auto">
                                 {COMPANY_PHONE}
                             </a>
                         </div>
                         <div className="bg-white p-12 rounded-[2.5rem] border border-gray-100 text-center hover:shadow-xl transition-all group flex flex-col h-full">
                             <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                                 <Mail size={36} />
                             </div>
                             <h3 className="text-2xl font-bold mb-3 text-black">Email Support</h3>
                             <p className="text-gray-500 mb-4">Contact us via email for non-urgent queries.</p>
                             <p className="text-left text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8 my-auto">
                                <strong className="text-brand-500">Note:</strong> Emails may not be closely monitored out of hours. If urgent, ring and select <strong className="text-brand-500">Option 3</strong> (active support contract required).
                             </p>
                             <a href={`mailto:${COMPANY_EMAIL}`} className="text-2xl font-bold text-black hover:text-brand-500 transition block break-all mt-auto">
                                 {COMPANY_EMAIL}
                             </a>
                         </div>
                     </div>

                 </div>
             </div>
             
             <CTASection />
        </div>
    );
};