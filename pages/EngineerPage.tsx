import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, Wrench, Cloud, ExternalLink, Monitor, ShoppingCart, Key, Zap, Scale } from 'lucide-react';

const DRIVE_SECTIONS = [
    {
        title: 'Engineer Toolkit',
        description: 'Access software installers, firmware updates, technical manuals, and utility programs.',
        folderId: '1ieTkudiGzTjl4BT2L-YVuKoVUZB8TYUN',
        link: 'https://drive.google.com/drive/folders/1ieTkudiGzTjl4BT2L-YVuKoVUZB8TYUN?usp=sharing',
        icon: <Wrench size={24} />
    },
    {
        title: 'ICRTouch',
        description: 'ICRTouch related installers, manuals, and resources.',
        folderId: '1uMP51EQL8EVMC-2w-9UIGm1VNtpAhs2T',
        link: 'https://drive.google.com/drive/folders/1uMP51EQL8EVMC-2w-9UIGm1VNtpAhs2T?usp=sharing',
        icon: <Monitor size={24} />
    },
    {
        title: 'MyEpos',
        description: 'MyEpos related installers, manuals, and resources.',
        folderId: '1fySrqNA8jtLTcu9_7SWO4t_t3sX-uDFv',
        link: 'https://drive.google.com/drive/folders/1fySrqNA8jtLTcu9_7SWO4t_t3sX-uDFv?usp=sharing',
        icon: <ShoppingCart size={24} />
    },
    {
        title: 'Access',
        description: 'Access related installers, manuals, and resources.',
        folderId: '1Y5ytIvmO_TTykGOLhC8HlhLsBq9NGqew',
        link: 'https://drive.google.com/drive/folders/1Y5ytIvmO_TTykGOLhC8HlhLsBq9NGqew?usp=drive_link',
        icon: <Key size={24} />
    },
    {
        title: 'Lightspeed',
        description: 'Lightspeed related installers, manuals, and resources.',
        folderId: '1pkkPa7AHAJ_sBV6XgqVLBOwOEHkiGFF5',
        link: 'https://drive.google.com/drive/folders/1pkkPa7AHAJ_sBV6XgqVLBOwOEHkiGFF5?usp=drive_link',
        icon: <Zap size={24} />
    },
    {
        title: 'Scales',
        description: 'Scales related installers, manuals, and resources.',
        folderId: '1FWpLWX2qCJQA07AQUQ5Kw92x1NmqJlwg',
        link: 'https://drive.google.com/drive/folders/1FWpLWX2qCJQA07AQUQ5Kw92x1NmqJlwg?usp=drive_link',
        icon: <Scale size={24} />
    }
];

export const EngineerPage: React.FC = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Mock authentication check
        const isLoggedIn = sessionStorage.getItem('engineerLoggedIn') === 'true';
        if (!isLoggedIn) {
            navigate('/login');
        } else {
            setIsAuthenticated(true);
        }
    }, [navigate]);

    // Don't render content until authentication is verified
    if (!isAuthenticated) return null;

    return (
        <div className="bg-white min-h-screen flex flex-col">
            {/* Standard Header Section */}
             <div className="bg-white py-24">
                 <div className="container mx-auto px-4 text-center">
                     <div className="inline-block bg-brand-500 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                         Internal Access
                     </div>
                     <h1 className="text-5xl md:text-7xl font-black mb-8 text-black">Engineer <span className="text-brand-500">Dashboard</span></h1>
                     <p className="text-xl text-gray-500 max-w-4xl mx-auto font-light leading-relaxed">
                         A secure dashboard for our engineers, providing quick access to essential systems, internal programs, diagnostics, resources, and support tools.
                     </p>
                 </div>
             </div>

            {/* Main Content Section */}
            <div className="bg-offwhite py-24 border-t border-gray-100 mb-24 flex-grow">
                <div className="container mx-auto px-4 max-w-6xl space-y-16">
                    {DRIVE_SECTIONS.map((section, index) => (
                        <section key={index}>
                             <div className="flex items-center gap-4 mb-4">
                                <div className="h-12 w-12 rounded-2xl bg-brand-500 text-white flex items-center justify-center shadow-lg shadow-brand-500/30">
                                   {section.icon}
                                </div>
                                <h2 className="text-3xl font-black text-black">{section.title}</h2>
                             </div>
                             <p className="text-lg text-gray-500 mb-8 max-w-2xl">{section.description}</p>
                             
                            {/* Google Drive Embed */}
                            <div className="bg-white rounded-[2.5rem] border border-gray-200 shadow-xl overflow-hidden relative">
                                {/* Toolbar */}
                                <div className="bg-gray-50 border-b border-gray-200 p-4 md:px-8 flex items-center justify-between">
                                   <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                      <Cloud size={20} className="text-brand-500" />
                                      <span>Internal Resources Repository</span>
                                   </div>
                                   <a 
                                     href={section.link}
                                     target="_blank" 
                                     rel="noopener noreferrer"
                                     className="text-xs text-brand-600 hover:text-brand-700 font-bold flex items-center gap-1.5 bg-brand-50 hover:bg-brand-100 px-4 py-2 rounded-xl transition-colors"
                                   >
                                     Open in Drive <ExternalLink size={14}/>
                                   </a>
                                </div>
                                <div className="h-[350px] bg-slate-50 p-2 md:p-4">
                                    <iframe 
                                        src={`https://drive.google.com/embeddedfolderview?id=${section.folderId}#grid`} 
                                        width="100%" 
                                        height="100%" 
                                        frameBorder="0"
                                        className="w-full h-full rounded-xl bg-white shadow-sm border border-gray-200"
                                        title={`${section.title} Drive`}
                                    ></iframe>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};
