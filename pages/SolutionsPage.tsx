import React, { useState, useEffect } from 'react';
import { Monitor, CheckCircle2, ArrowUpRight, Clock, Zap, Cloud, Settings, Users, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { SOFTWARE_SOLUTIONS, PAYMENT_PROVIDERS } from '../data';
import { CTASection } from '../components/CTASection';
import { Link } from 'react-router-dom';

export const SolutionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(SOFTWARE_SOLUTIONS[0].id);
  const [isExpanded, setIsExpanded] = useState(false);

  const activeSolution = SOFTWARE_SOLUTIONS.find(s => s.id === activeTab) || SOFTWARE_SOLUTIONS[0];

  useEffect(() => {
    setIsExpanded(false);
  }, [activeTab]);

  // Show 4 items by default, all items if expanded
  const displayedFeatures = isExpanded ? activeSolution.features : activeSolution.features.slice(0, 4);
  const showExpandButton = activeSolution.features.length > 4;

  return (
    <div className="bg-white min-h-screen">
      {/* Standard Header Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-brand-500 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Our Software
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-black">EPOS <span className="text-brand-500">Solutions</span></h1>
          <p className="text-xl text-gray-500 max-w-4xl mx-auto font-light leading-relaxed">
            World-class software tailored to your specific industry needs. From retail to hospitality, we have the perfect system for you.
          </p>
        </div>
      </div>
      
      {/* Main Content Section */}
      <div className="bg-offwhite py-24 border-t border-gray-100">
        {/* Tabs Navigation */}
        <div className="container mx-auto px-4 mb-12">
           <div className="flex flex-wrap justify-center gap-6">
              {SOFTWARE_SOLUTIONS.map(solution => (
                 <button
                   key={solution.id}
                   onClick={() => setActiveTab(solution.id)}
                   className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 relative group overflow-visible ${
                      activeTab === solution.id 
                      ? `${solution.color} text-white shadow-xl scale-105 z-10` 
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                   }`}
                 >
                   <span className="relative z-10">{solution.name}</span>
                   {solution.isNew && (
                      <span className="absolute -top-3 -right-3 bg-yellow-400 text-black text-[10px] font-black px-3 py-1 rounded-full shadow-md z-20 border-2 border-white transform rotate-6">NEW</span>
                   )}
                 </button>
              ))}
           </div>
        </div>

        {/* Tab Content - Redesigned Box */}
        <div className="container mx-auto px-4 pb-24">
           <div className="rounded-[3rem] shadow-xl overflow-hidden animate-fadeIn flex flex-col bg-white border border-gray-100">
              
              {/* Colored Header Section */}
              <div className={`${activeSolution.color} p-10 md:p-14 text-white relative overflow-hidden transition-colors duration-500`}>
                  <div className="relative z-10 w-full">
                     <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                        {/* Logo Box */}
                        <div className="flex items-center gap-4">
                          <div 
                            className="bg-white p-6 rounded-3xl inline-block shadow-xl hover:scale-105 transition-transform duration-300"
                          >
                             <img 
                               src={activeSolution.logoUrl} 
                               alt={`${activeSolution.name} Logo`} 
                               className="h-16 md:h-20 w-auto object-contain max-w-[240px]" 
                             />
                          </div>
                          {activeSolution.isNew && (
                             <div className="bg-white text-black px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                               Coming Soon
                             </div>
                          )}
                        </div>

                        {/* Partner Logo Box */}
                        {(activeSolution.partnerLogos && activeSolution.partnerLogos.length > 0) ? (
                          <div className="bg-white p-6 rounded-3xl inline-flex gap-6 shadow-xl hover:scale-105 transition-transform duration-300 items-center">
                             {activeSolution.partnerLogos.map((logo, idx) => (
                               <img 
                                 key={idx}
                                 src={logo} 
                                 alt="Partner Logo" 
                                 className="h-16 md:h-20 w-auto object-contain max-w-[180px]" 
                               />
                             ))}
                          </div>
                        ) : activeSolution.partnerLogoUrl && (
                          <div className="bg-white p-6 rounded-3xl inline-block shadow-xl hover:scale-105 transition-transform duration-300">
                             <img 
                               src={activeSolution.partnerLogoUrl} 
                               alt="Partner Logo" 
                               className="h-16 md:h-20 w-auto object-contain max-w-[240px]" 
                             />
                          </div>
                        )}
                     </div>

                     <div className="max-w-4xl">
                        <p className="text-lg md:text-2xl font-bold mb-4 opacity-95">{activeSolution.tagline}</p>
                        <p className="text-base md:text-lg opacity-90 leading-relaxed max-w-3xl font-medium">
                           {activeSolution.description}
                        </p>
                     </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-black opacity-10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
              </div>

              {/* White Body Section with Features */}
              <div className="p-10 md:p-14 bg-white relative">
                  <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                     {/* Features Grid - Left Column */}
                     <div className="flex-1 w-full">
                         <h3 className="text-2xl font-black text-black mb-8">Key Features</h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {displayedFeatures.map((feature, idx) => (
                               <div key={idx} className="bg-offwhite p-6 rounded-2xl border border-gray-100 hover:border-brand-200 transition-all group animate-fadeIn h-full">
                                  <div className={`w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 text-brand-500 group-hover:scale-110 transition-transform overflow-hidden`}>
                                     {feature.imageUrl ? (
                                        <img src={feature.imageUrl} alt={feature.title} className="w-full h-full object-cover" />
                                     ) : (
                                        feature.icon && <feature.icon size={24} className={activeSolution.color.replace('bg-', 'text-')} />
                                     )}
                                  </div>
                                  <h4 className="font-bold text-lg text-black mb-2">{feature.title}</h4>
                                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                         </div>
                         
                         {/* Expand/Collapse Button */}
                         {showExpandButton && (
                            <div className="mt-8 flex justify-center">
                              <button 
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="flex flex-col items-center text-gray-400 hover:text-brand-500 transition-colors group"
                              >
                                <span className="text-xs font-bold uppercase tracking-widest mb-1 group-hover:underline">
                                  {isExpanded ? 'Show Less' : 'View More Features'}
                                </span>
                                {isExpanded ? (
                                  <ChevronUp size={24} className="animate-bounce" />
                                ) : (
                                  <ChevronDown size={24} className="animate-bounce" />
                                )}
                              </button>
                            </div>
                         )}
                     </div>
                     
                     {/* Interface Preview Visual - Right Column */}
                     <div className="w-full lg:w-[45%]">
                         <div className="bg-offwhite rounded-[2rem] border border-gray-100 overflow-hidden shadow-lg aspect-video relative group">
                             {activeSolution.interfaceMedia?.type === 'video' ? (
                                <video 
                                  src={activeSolution.interfaceMedia.url} 
                                  autoPlay 
                                  loop 
                                  muted 
                                  playsInline 
                                  className="w-full h-full object-contain"
                                />
                             ) : (
                                <div className="w-full h-full relative">
                                   {activeSolution.interfaceMedia?.url ? (
                                     <img 
                                       src={activeSolution.interfaceMedia.url} 
                                       alt="Interface Preview" 
                                       className="w-full h-full object-contain"
                                     />
                                   ) : (
                                     <div className="w-full h-full flex flex-col items-center justify-center">
                                       <Monitor size={80} className="text-gray-300 mb-4" />
                                       <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Interface Preview</span>
                                     </div>
                                   )}
                                   <div className={`absolute inset-0 ${activeSolution.color} opacity-5 pointer-events-none`}></div>
                                </div>
                             )}
                             
                             {/* Overlay Label */}
                             <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest z-20">
                               Interface Preview
                             </div>
                         </div>
                     </div>
                  </div>
              </div>

           </div>
        </div>
      </div>

      {/* Payment Partners Section */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="container mx-auto px-4">
           <div className="text-center mb-20">
              <div className="inline-flex items-center bg-brand-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Integrated Payments
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-black">Seamless <span className="text-brand-500">Payments</span></h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                 We partner with the industry's most reliable payment providers to ensure you get paid faster and more securely.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {PAYMENT_PROVIDERS.map(provider => (
                <div key={provider.id} className="bg-offwhite rounded-[2.5rem] p-10 border border-gray-200 hover:border-brand-500 transition-all duration-300 group shadow-lg">
                   <div className="flex justify-between items-start mb-10">
                      <div className="inline-block hover:scale-105 transition-transform duration-300">
                         <img 
                           src={provider.logoUrl} 
                           alt={`${provider.name} Logo`} 
                           className="h-16 w-auto object-contain max-w-[180px]" 
                         />
                      </div>
                      <a href={provider.websiteUrl} target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 p-3 rounded-full transition text-black shadow-sm">
                         <ArrowUpRight size={20} />
                      </a>
                   </div>
                   <ul className="space-y-4 mb-10">
                      {provider.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          {feature.includes('Coming Soon') ? (
                            <Clock className="text-yellow-500 mr-3 shrink-0" size={20} />
                          ) : (
                            <CheckCircle2 className="text-brand-500 mr-3 shrink-0" size={20} />
                          )}
                          
                          {feature.includes('4G Backup') ? (
                            <span>
                              <span className="font-bold text-black mr-1">4G Backup</span>
                              {feature.replace('4G Backup', '')}
                            </span>
                          ) : (
                            feature
                          )}
                        </li>
                      ))}
                   </ul>
                   <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {provider.description}
                   </p>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Why Choose Section with Increased Bottom Spacing */}
      <div className="bg-offwhite py-24 border-t border-gray-100 mb-32">
        <div className="container mx-auto px-4">
            <div className="text-center mb-20">
                <div className="inline-flex items-center bg-brand-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                  Our Expertise
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-black mb-6">Why Choose Our <span className="text-brand-500">EPOS Solutions?</span></h2>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                   We combine local expertise with world-class technology to deliver systems that help your business thrive.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-5xl mx-auto">
                {/* Feature 1 */}
                <div className="flex items-start gap-6 p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center shrink-0">
                        <Zap size={28} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-black mb-2">Fast & Reliable</h3>
                        <p className="text-gray-500 leading-relaxed">Systems designed for speed and reliability, even during your busiest periods.</p>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-6 p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center shrink-0">
                        <Cloud size={28} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-black mb-2">Cloud Connected</h3>
                        <p className="text-gray-500 leading-relaxed">Access your business data from anywhere, anytime, on any device.</p>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-6 p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center shrink-0">
                        <Settings size={28} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-black mb-2">Fully Customizable</h3>
                        <p className="text-gray-500 leading-relaxed">Tailor the system to fit your specific business needs and workflows.</p>
                    </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start gap-6 p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center shrink-0">
                        <Users size={28} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-black mb-2">Expert Support</h3>
                        <p className="text-gray-500 leading-relaxed">Local support from trained professionals who understand your business.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      <CTASection />
    </div>
  );
};