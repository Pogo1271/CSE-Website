import React from 'react';
import { 
  Smile, Star, ThumbsUp, Settings, Lightbulb, LifeBuoy,
  MapPin, ShieldCheck, Clock
} from 'lucide-react';
import { CTASection } from '../components/CTASection';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-white py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-brand-500 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Est. 1975
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-black">Serving the <span className="text-brand-500">South West</span></h1>
          <p className="text-xl text-gray-500 max-w-4xl mx-auto font-light leading-relaxed">
            Established in 1975 and covering all of Cornwall, Devon and the South West, we are experts in the installation and support of global leading EPOS solutions for retail and hospitality.
          </p>
        </div>
      </div>

      <div className="bg-offwhite py-24 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div>
                <h2 className="text-4xl font-bold mb-6 text-black">Our Evolution</h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                   <p>
                     Since 1975, CSE has transitioned into a leading technology partner for the region's hospitality and retail sectors. While our heritage is in weighing and cash registers, our present and future is digital.
                   </p>
                   <p>
                     We specialise in deploying sophisticated EPOS networks that do more than just take payments. Our systems integrate stock management, kitchen video displays, mobile ordering, and cloud analytics.
                   </p>
                </div>
             </div>
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                   <div className="text-4xl font-black text-brand-500 mb-2">50+</div>
                   <div className="text-sm font-bold uppercase tracking-widest text-gray-400">Years in Business</div>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                   <div className="text-4xl font-black text-blue-600 mb-2">100s</div>
                   <div className="text-sm font-bold uppercase tracking-widest text-gray-400">Happy Clients</div>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                   <div className="text-4xl font-black text-purple-600 mb-2">7 Days</div>
                   <div className="text-sm font-bold uppercase tracking-widest text-gray-400">Support Coverage</div>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                   <div className="text-4xl font-black text-green-600 mb-2">South West</div>
                   <div className="text-sm font-bold uppercase tracking-widest text-gray-400">Region Covered</div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
           <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                   <img src="/images/about/Our_Approach.png" alt="Team meeting" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-black text-black mb-6">Our Approach</h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    We recognise that every business is different and our aim is to provide a solution that fits around your business needs. 
                  </p>
                  <p className="font-medium text-black">
                    What makes us unique is that we don't use off-the-shelf templates for building your EPOS system, unlike some of our competition.
                  </p>
                  <p>
                     Instead, we work to understand every aspect of the project requirements and ensure that the solution we provide meets them all. From the initial consultation to the final installation and staff training, our process is tailored entirely to you.
                  </p>
                </div>
              </div>
           </div>
        </div>
      </div>

       {/* Our Philosophy Bento Grid */}
       <div className="bg-offwhite py-24 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-black mb-4">Our Philosophy</h2>
             <p className="text-gray-500 max-w-2xl mx-auto">We don't just sell boxes; we build long-term relationships through expert service.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             
             {/* Card 1 */}
             <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-red-50 text-brand-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                   <Smile size={28} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">We’re only happy, when you’re happy</h3>
                <p className="text-gray-600">At CSE, we are passionate about achieving real results and we pride ourselves on delivering top class service each and every time.</p>
             </div>

             {/* Card 2 */}
             <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                   <Star size={28} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Experience to back it up</h3>
                <p className="text-gray-600">Providing support since 1975. We have been around the block a few times and know a thing or two about successful retail and hospitality.</p>
             </div>

             {/* Card 3 */}
             <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                   <ThumbsUp size={28} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">We value our partnerships</h3>
                <p className="text-gray-600">For us, it is not just about the capabilities of the top-class technology we provide – it is also about the experience we provide. We want to become part of your team.</p>
             </div>

             {/* Card 4 */}
             <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                   <Settings size={28} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">We make EPOS Simple</h3>
                <p className="text-gray-600">We understand that your system should never get in the way. From menu programming to system configuration. Have a query? We are just a call away.</p>
             </div>

             {/* Card 5 */}
             <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                   <Lightbulb size={28} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Trusted advice & solutions</h3>
                <p className="text-gray-600">Support engineers are on hand for when you need that extra knowledge. Whether you are looking to upgrade terminals or on the hunt for the latest tech. We can help!</p>
             </div>

             {/* Card 6 */}
             <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                   <LifeBuoy size={28} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Dedicated Support Desk</h3>
                <p className="text-gray-600">At CSE, we have a dedicated helpdesk that you can call or email should you have a support related query.</p>
             </div>

          </div>
        </div>
      </div>

      {/* Why Choose CSE Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="bg-offwhite rounded-[3rem] p-12 md:p-20 border border-slate-100 shadow-lg">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">Why Businesses Choose CSE</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Local expertise, global technology.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: MapPin, 
                title: "Truly Local", 
                desc: "Based in St Austell. When you call us, an engineer who knows your system is on the end of the phone." 
              },
              { 
                icon: ShieldCheck, 
                title: "Certified Expertise", 
                desc: "Experts in both cutting-edge software and hardware, ensuring your entire ecosystem works seamlessly." 
              },
              { 
                icon: Clock, 
                title: "Rapid Response", 
                desc: "We know that every minute of downtime costs you money. We prioritise urgent system fixes to get you back up and running." 
              }
            ].map((v, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-white border border-gray-100 shadow-xl text-brand-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:text-brand-600 transition-all duration-300">
                  <v.icon size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Full Width CTA */}
      <CTASection />
    </div>
  );
};