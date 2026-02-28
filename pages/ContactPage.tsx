import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { COMPANY_ADDRESS, COMPANY_PHONE, COMPANY_EMAIL } from '../data';

export const ContactPage: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
             {/* Standard Header Section */}
             <div className="bg-white py-24">
                 <div className="container mx-auto px-4 text-center">
                     <div className="inline-block bg-brand-500 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                         Get In Touch
                     </div>
                     <h1 className="text-5xl md:text-7xl font-black mb-8 text-black">Contact <span className="text-brand-500">Us</span></h1>
                     <p className="text-xl text-gray-500 max-w-4xl mx-auto font-light leading-relaxed">
                         Send us a message and we'll get back to you as soon as possible.
                     </p>
                 </div>
             </div>

            {/* Main Content Section */}
            <div className="bg-offwhite py-24 border-t border-gray-100 mb-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto">
                        
                        {/* Left Column: Contact Info & Map */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-black text-black mb-8">Contact Details</h2>
                                <div className="space-y-8">
                                    {/* Address */}
                                    <div className="flex items-start gap-6 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-14 h-14 bg-brand-50 text-brand-500 rounded-2xl flex items-center justify-center shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-black mb-2">Visit Us</h3>
                                            <p className="text-gray-500 leading-relaxed text-lg">{COMPANY_ADDRESS}</p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-6 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-black mb-2">Call Us</h3>
                                            <p className="text-gray-500 leading-relaxed text-lg mb-1">Mon-Fri from 9am to 5pm.</p>
                                            <a href={`tel:${COMPANY_PHONE}`} className="text-xl font-black text-black hover:text-brand-500 transition block">
                                                {COMPANY_PHONE}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-6 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-black mb-2">Email Us</h3>
                                            <p className="text-gray-500 leading-relaxed text-lg mb-1">We'll respond as soon as possible.</p>
                                            <a href={`mailto:${COMPANY_EMAIL}`} className="text-xl font-bold text-black hover:text-brand-500 transition block break-all">
                                                {COMPANY_EMAIL}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="h-[400px] rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-200 relative bg-gray-100 group">
                                <iframe 
                                    width="100%" 
                                    height="100%" 
                                    frameBorder="0" 
                                    scrolling="no" 
                                    marginHeight={0} 
                                    marginWidth={0} 
                                    src="https://maps.google.com/maps?q=CSE%20Ltd%2050.3492521,-4.7542561&z=15&output=embed"
                                    className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                                    title="Office Location"
                                ></iframe>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 h-fit lg:sticky lg:top-32">
                            <h2 className="text-3xl font-black text-black mb-8">Send a Message</h2>
                            <form 
                                name="contact" 
                                method="POST" 
                                data-netlify="true" 
                                className="space-y-6"
                            >
                                <input type="hidden" name="form-name" value="contact" />
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                                    <input type="text" name="subject" className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition bg-offwhite font-medium" placeholder="What is this regarding?" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                                    <input type="text" name="name" className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition bg-offwhite font-medium" placeholder="Your full name" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                    <input type="email" name="email" className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition bg-offwhite font-medium" placeholder="your@email.com" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                    <textarea name="message" rows={6} className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition bg-offwhite font-medium resize-none" placeholder="How can we help you?" required></textarea>
                                </div>
                                <button type="submit" className="w-full bg-brand-500 text-white font-bold py-5 rounded-xl hover:bg-brand-600 transition shadow-lg shadow-brand-500/20 text-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                                    Send Message <Send size={20} />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};