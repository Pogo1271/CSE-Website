import React from 'react';
import { CTASection } from '../components/CTASection';
import { COMPANY_EMAIL } from '../data';

export const TermsOfUsePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4 text-center">
           <div className="inline-block bg-brand-500 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Legal
           </div>
           <h1 className="text-5xl md:text-7xl font-black mb-8 text-black">Terms of <span className="text-brand-500">Use</span></h1>
        </div>
      </div>

      {/* Content */}
      <div className="bg-offwhite py-24 border-t border-gray-100 mb-24">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="bg-white p-12 md:p-16 rounded-[2.5rem] border border-gray-100 shadow-sm text-gray-600 space-y-8 leading-relaxed">
              
              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Website Terms of Use</h2>
                 <p className="mb-4">This page (together with the documents referred to on it) tells you the terms of use on which you may make use of our website, whether as a guest or a registered user. Please read these Website Terms of Use carefully before you start to use the site. By using our site, you indicate that you accept these terms of use and that you agree to abide by them. If you do not agree to these terms of use, please refrain from using our site.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Information about us</h2>
                 <p>This website is owned by “Cornwall Scale & Equipment Ltd”.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Accessing our site</h2>
                 <p className="mb-4">Access to our site is permitted on a temporary basis, and we reserve the right to withdraw or amend the service we provide on our site without notice (see below). We will not be liable if for any reason our site is unavailable at any time or for any period.</p>
                 <p className="mb-4">From time to time, we may restrict access to some parts of our site, or our entire site, to users who have registered with us.</p>
                 <p className="mb-4">If you choose, or you are provided with, a user identification code, password or any other piece of information as part of our security procedures, you must treat such information as confidential, and you must not disclose it to any third party. We have the right to disable any user identification code or password, whether chosen by you or allocated by us, at any time, if in our opinion you have failed to comply with any of the provisions of these terms of use.</p>
                 <p className="mb-4">When using our site, you must comply with the provisions of our acceptable use policy.</p>
                 <p>You are responsible for making all arrangements necessary for you to have access to our site. You are also responsible for ensuring that all persons who access our site through your internet connection are aware of these terms, and that they comply with them.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Intellectual property rights</h2>
                 <p className="mb-4">We are the owner or the licensee of all intellectual property rights in our site, and in the material published on it. Those works are protected by copyright laws and treaties around the world. All such rights are reserved.</p>
                 <p className="mb-4">You may print off one copy, and may download extracts, of any page(s) from our site for your personal reference and you may draw the attention of others within your organisation to material posted on our site.</p>
                 <p className="mb-4">You must not modify the paper or digital copies of any materials you have printed off or downloaded in any way, and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text.</p>
                 <p className="mb-4">Our status and that of any identified contributors as the authors of material on our site must always be acknowledged.</p>
                 <p className="mb-4">You must not use any part of the materials on our site for commercial purposes without obtaining a license to do so from us or our licensors.</p>
                 <p>If you print off, copy or download any part of our site in breach of these terms of use, your right to use our site will cease immediately and you must, at our option, return or destroy any copies of the materials you have made.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Reliance on information posted</h2>
                 <p>Commentary and other materials posted on our site are not intended to amount to advice on which reliance should be placed. We therefore disclaim all liability and responsibility arising from any reliance placed on such materials by any visitor to our site, or by anyone who may be informed of any of its contents.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Our site changes regularly</h2>
                 <p>We update our site regularly, and may change the content at any time. If the need arises, we may suspend access to our site, or close it indefinitely. Any of the material on our site may be out of date at any given time, and we are under no obligation to update such material.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Our liability</h2>
                 <p className="mb-4">The material displayed on our site is provided without any guarantees, conditions or warranties as to its accuracy. To the extent permitted by law, we, other members of our group of companies and third parties connected to us hereby expressly exclude:</p>
                 <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>All conditions, warranties and other terms which might otherwise be implied by statute, common law or the law of equity.</li>
                    <li>Any liability for any direct, indirect or consequential loss or damage incurred by any user in connection with our site or in connection with the use, inability to use, or results of the use of our site, any websites linked to it and any materials posted on it, including, without limitation any liability for:
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>loss of income or revenue;</li>
                            <li>loss of business;</li>
                            <li>loss of profits or contracts;</li>
                            <li>loss of anticipated savings;</li>
                            <li>loss of data;</li>
                            <li>loss of goodwill;</li>
                            <li>wasted management or office time; and</li>
                        </ul>
                    </li>
                 </ul>
                 <p className="mb-4">for any other loss or damage of any kind, however arising and whether caused by tort (including negligence), breach of contract or otherwise, even if foreseeable, provided that this condition shall not prevent claims for loss of or damage to your tangible property or any other claims for direct financial loss that are not excluded by any of the categories set out above.</p>
                 <p>This does not affect our liability for death or personal injury arising from our negligence, nor our liability for fraudulent misrepresentation or misrepresentation as to a fundamental matter, nor any other liability which cannot be excluded or limited under applicable law.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Information about you and your visits to our site</h2>
                 <p>We process information about you in accordance with our Privacy Policy. By using our site, you consent to such processing and you warrant that all data provided by you is accurate.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Transactions concluded through our site</h2>
                 <p>Contracts for the supply of goods or services or information formed through our site or as a result of visits made by you are governed by our terms and conditions of supply.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Viruses, hacking and other offences</h2>
                 <p className="mb-4">You must not misuse our site by knowingly introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful. You must not attempt to gain unauthorised access to our site, the server on which our site is stored or any server, computer or database connected to our site. You must not attack our site via a denial-of-service attack or a distributed denial-of service attack.</p>
                 <p className="mb-4">By breaching this provision, you would commit a criminal offence under the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement authorities and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use our site will cease immediately.</p>
                 <p>We will not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses or other technologically harmful material that may infect your computer equipment, computer programs, data or other proprietary material due to your use of our site or to your downloading of any material posted on it, or on any website linked to it.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Linking to our site</h2>
                 <p className="mb-4">You may link to our home page, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists.</p>
                 <p className="mb-4">You must not establish a link from any website that is not owned by you.</p>
                 <p className="mb-4">Our site must not be framed on any other site, nor may you create a link to any part of our site other than the home page. We reserve the right to withdraw linking permission without notice. The website from which you are linking must comply in all respects with the content standards set out in our acceptable use policy.</p>
                 <p>If you wish to make any use of material on our site other than that set out above, please email your request to us.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Links from our site</h2>
                 <p>Where our site contains links to other sites and resources provided by third parties, these links are provided for your information only. We have no control over the contents of those sites or resources, and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Jurisdiction and applicable law</h2>
                 <p className="mb-4">The English Courts will have exclusive jurisdiction over any claim arising from, or related to, a visit to our site although we retain the right to bring proceedings against you for breach of these conditions in your country of residence or any other relevant country.</p>
                 <p>These terms of use and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the law of England and Wales.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Variations</h2>
                 <p className="mb-4">We may revise these terms of use at any time by amending this page. You are expected to check this page from time to time to take notice of any changes we made, as they are binding on you. Some of the provisions contained in these terms of use may also be superseded by provisions or notices published elsewhere on our site.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Your concerns</h2>
                 <p className="mb-6">If you have any concerns about material which appears on this site, please contact us at <a href={`mailto:${COMPANY_EMAIL}`} className="text-brand-500 font-bold hover:underline">{COMPANY_EMAIL}</a>.</p>
                 <p className="text-sm text-gray-500 italic">This policy was published 01/04/2017, and remains active until further notice.</p>
              </section>

           </div>
        </div>
      </div>
      
      <CTASection />
    </div>
  );
};