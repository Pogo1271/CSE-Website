import React from 'react';
import { CTASection } from '../components/CTASection';
import { COMPANY_EMAIL } from '../data';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4 text-center">
           <div className="inline-block bg-brand-500 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Legal
           </div>
           <h1 className="text-5xl md:text-7xl font-black mb-8 text-black">Privacy <span className="text-brand-500">Policy</span></h1>
        </div>
      </div>

      {/* Content */}
      <div className="bg-offwhite py-24 border-t border-gray-100 mb-24">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="bg-white p-12 md:p-16 rounded-[2.5rem] border border-gray-100 shadow-sm text-gray-600 space-y-8 leading-relaxed">
              
              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Who we are</h2>
                 <p className="mb-4">This website is owned by Cornwall Scale & Equipment Ltd.</p>
                 <p className="mb-4">Our website address is: https://cornwallcashregisters.co.uk</p>
                 <p>The owner is committed to protecting and respecting your privacy.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">This Policy</h2>
                 <p className="mb-4">This policy (together with our terms of use and any other documents referred to therein) sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it.</p>
                 <p>For the purpose of the Data Protection Act 1998 (the Act), the data controller is the owner.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Information we may collect from you</h2>
                 <p className="mb-4">We may collect and process the following data:</p>
                 <ul className="list-disc pl-5 space-y-2">
                    <li>Information provided through a contact form on our site, including requests for further services and when you report a problem with our site. If you contact us, we may keep a record of that correspondence within our email server, offline mail storage or another external service (such as MailChimp or Gmail). External services are outside of our control and therefore will have their own policies in place.</li>
                    <li>Details of transactions you carry out through our site and of the fulfilment of your orders (where e-commerce is available).</li>
                    <li>Details of your visits to our site including, but not limited to, traffic data and location data.</li>
                 </ul>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Cookies</h2>
                 <p>Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. For detailed information on the cookies we use and the purposes for which we use them see our Cookie Policy.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Where we store your personal data</h2>
                 <p className="mb-4">The data that we collect from you, will be stored on the email system (see above).</p>
                 <p className="mb-4">Where the information is saved away from email, it will be password protected within a device (mobile, tablet or computer). This information may be held locally on the device (internal memory/hard drive) or within a password protected cloud storage solution (such as “OneDrive, iCloud or Dropbox” etc).</p>
                 <p className="mb-4">Either the device or cloud solution will be password protected, and saved information will only be used within our company, for the purposes of order fulfilment, processing of your payment details or the provision of services or support. By submitting your personal data, you agree to this transfer, storing or processing. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this privacy policy.</p>
                 <p className="mb-4">Payment transactions on our site are handled securely by an External Service Provider.</p>
                 <p className="mb-4">Where we have given you (or where you have chosen) a password which enables you to access certain parts of our site, you are responsible for keeping this password confidential. We ask you not to share a password with anyone.</p>
                 <p>Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to the site; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorised access.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Uses made of the information</h2>
                 <p className="mb-4">We use information held about you in the following ways:</p>
                 <ul className="list-disc pl-5 space-y-2">
                    <li>To ensure that content from our site is presented in the most effective manner for you and for your computer.</li>
                    <li>To provide you with information, products or services that you request from us or which we feel may interest you, where you have consented to be contacted for such purposes.</li>
                    <li>To carry out our obligations arising from any contracts entered into between you and us.</li>
                    <li>To allow you to participate in interactive features of our service, when you choose to do so.</li>
                    <li>To notify you about changes to our service.</li>
                 </ul>
                 <p className="mt-4">If you are an existing customer, we will only contact you by electronic means (e-mail or SMS) with information about goods and services similar to those which were the subject of a previous sale to you.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Disclosure of your information</h2>
                 <p className="mb-4">We may disclose your personal information to any member of our group, which means our subsidiaries, our ultimate holding company and its subsidiaries, as defined in section 1159 of the UK Companies Act 2006.</p>
                 <p className="mb-4">We may disclose your personal information to third parties:</p>
                 <ul className="list-disc pl-5 space-y-2">
                    <li>In the event that we sell or buy any business or assets, in which case we may disclose your personal data to the prospective seller or buyer of such business or assets.</li>
                    <li>If the company or substantially all of its assets are acquired by a third party, in which case personal data held by it about its customers will be one of the transferred assets.</li>
                    <li>If we are under a duty to disclose or share your personal data in order to comply with any legal obligation, or in order to enforce or apply our terms of use or terms and conditions of supply and other agreements; or to protect the rights, property, or safety of the company, our customers, or others. This includes exchanging information with other companies and organisations for the purposes of fraud protection and credit risk reduction.</li>
                 </ul>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Your Rights</h2>
                 <p className="mb-4">As default, this website does not intend to use your data for marketing purposes.</p>
                 <p>Our site may, from time to time, contain links to and from the websites of our partner networks, advertisers and affiliates. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check these policies before you submit any personal data to these websites.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Access to information</h2>
                 <p>The Act gives you the right to access information held about you. Your right of access can be exercised in accordance with the Act. Any access request may be subject to a fee of £10 to meet our costs in providing you with details of the information we hold about you.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Changes to our Privacy Policy</h2>
                 <p>Any changes we may make to our Privacy Policy in the future will be posted on this page.</p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-black mb-4">Contact</h2>
                 <p>Questions, comments and requests regarding this Privacy Policy are welcomed and should be emailed to us at <a href={`mailto:${COMPANY_EMAIL}`} className="text-brand-500 font-bold hover:underline">{COMPANY_EMAIL}</a>.</p>
              </section>

           </div>
        </div>
      </div>
      
      <CTASection />
    </div>
  );
};