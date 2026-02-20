import React from 'react';
import { CTASection } from '../components/CTASection';
import { COMPANY_EMAIL, COMPANY_PHONE } from '../data';

export const RemoteSupportPolicyPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4 text-center">
           <div className="inline-block bg-brand-500 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Legal
           </div>
           <h1 className="text-5xl md:text-7xl font-black mb-8 text-black">Remote Support <span className="text-brand-500">Policy</span></h1>
        </div>
      </div>

      {/* Content */}
      <div className="bg-offwhite py-24 border-t border-gray-100 mb-24">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="bg-white p-12 md:p-16 rounded-[2.5rem] border border-gray-100 shadow-sm text-gray-600 space-y-8 leading-relaxed">
              
              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Who we are</h2>
                 <p className="mb-4">Remote support services are provided by Cornwall Scale & Equipment Ltd.</p>
                 <p className="mb-4">Our website address is: https://cornwallcashregisters.co.uk</p>
                 <p>Cornwall Scale & Equipment Ltd is committed to protecting the security, confidentiality, and integrity of our customers’ systems and data when providing remote support services.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Purpose of this policy</h2>
                 <p className="mb-4">This policy explains how Cornwall Scale & Equipment Ltd accesses customer equipment remotely, the safeguards we have in place, and how we ensure compliance with applicable data protection legislation, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
                 <p>This policy applies to all remote access carried out for the purpose of providing technical support, maintenance, configuration, or fault diagnosis.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Authorised remote access only</h2>
                 <p className="mb-4">We will only access customer equipment remotely when explicit authorisation has been granted by the customer.</p>
                 <p className="mb-4">Authorisation may be provided by:</p>
                 <ul className="list-disc pl-5 space-y-2">
                    <li>A direct request for support via telephone, email, or support ticket</li>
                    <li>Verbal confirmation from an authorised representative of the customer</li>
                    <li>Written confirmation via email or other agreed communication method</li>
                    <li>A pre-existing support agreement that permits remote support when requested</li>
                 </ul>
                 <p className="mt-4">We do not access customer systems without a legitimate support-related reason and appropriate authorisation.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">No unauthorised or unsolicited access</h2>
                 <p className="mb-4">Cornwall Scale & Equipment Ltd does not proactively log into, monitor, or access customer systems without the customer’s knowledge and consent.</p>
                 <p className="mb-4">We do not access customer equipment:</p>
                 <ul className="list-disc pl-5 space-y-2">
                    <li>Without a support request or prior agreement</li>
                    <li>Outside of authorised support sessions</li>
                    <li>For monitoring, surveillance, or any purpose unrelated to providing support services</li>
                 </ul>
                 <p className="mt-4">Remote access is strictly limited to legitimate technical support, maintenance, or configuration activities.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Scope and limitation of access</h2>
                 <p className="mb-4">Remote access is limited only to the systems, devices, and functions necessary to diagnose and resolve the reported issue or carry out the requested service.</p>
                 <p className="mb-4">We will not intentionally access, view, copy, or process unrelated customer data unless it is necessary to resolve a technical issue and authorised to do so.</p>
                 <p>Access is restricted to trained and authorised personnel within Cornwall Scale & Equipment Ltd.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Data protection and confidentiality</h2>
                 <p className="mb-4">Any access to customer systems is conducted in accordance with applicable data protection laws.</p>
                 <p className="mb-4">We take reasonable technical and organisational measures to ensure that:</p>
                 <ul className="list-disc pl-5 space-y-2">
                    <li>Customer data is treated as confidential</li>
                    <li>Access is restricted to authorised personnel only</li>
                    <li>Secure remote access tools are used</li>
                    <li>Data is not copied, transferred, or stored unless necessary and authorised</li>
                    <li>Any information encountered during support is handled securely</li>
                 </ul>
                 <p className="mt-4">We do not use customer data accessed during support for marketing, analytics, or any purpose unrelated to providing the requested service.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Remote access tools</h2>
                 <p className="mb-4">We may use secure third-party remote access software to provide support. These tools are designed to allow authorised remote sessions and may include security features such as encryption, session authorisation, and access controls.</p>
                 <p>Third-party software providers operate under their own privacy and security policies, which are outside of our direct control. However, we select reputable providers that meet appropriate security standards.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Customer responsibilities</h2>
                 <p className="mb-4">Customers are responsible for:</p>
                 <ul className="list-disc pl-5 space-y-2">
                    <li>Ensuring that only authorised representatives request support</li>
                    <li>Supervising remote sessions if they wish to do so</li>
                    <li>Informing us of any security policies or restrictions that apply to their systems</li>
                 </ul>
                 <p className="mt-4">Customers may terminate remote access at any time.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Record keeping</h2>
                 <p className="mb-4">We may keep internal records of support requests, including:</p>
                 <ul className="list-disc pl-5 space-y-2">
                    <li>Date and time of support</li>
                    <li>Nature of the issue</li>
                    <li>Actions taken to resolve the issue</li>
                 </ul>
                 <p className="mt-4">These records are used solely for support, maintenance, and service quality purposes.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Changes to this policy</h2>
                 <p>We may update this Remote Support Policy from time to time. Any changes will be posted on this page.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Contact</h2>
                 <p className="mb-4">Questions regarding this Remote Support Policy should be directed to:</p>
                 <p className="font-bold">Cornwall Scale & Equipment Ltd</p>
                 <p>Email: <a href={`mailto:${COMPANY_EMAIL}`} className="text-brand-500 hover:underline">{COMPANY_EMAIL}</a></p>
                 <p>Phone: <a href={`tel:${COMPANY_PHONE}`} className="text-brand-500 hover:underline">{COMPANY_PHONE}</a></p>
              </section>

           </div>
        </div>
      </div>
      
      <CTASection />
    </div>
  );
};