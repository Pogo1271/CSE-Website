import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings } from 'lucide-react';

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
                     <h1 className="text-5xl md:text-7xl font-black mb-8 text-black">Engineer <span className="text-brand-500">Toolkit</span></h1>
                     <p className="text-xl text-gray-500 max-w-4xl mx-auto font-light leading-relaxed">
                         Secure dashboard for our engineers. Build out forms and database connections here to interact with your cPanel backend.
                     </p>
                 </div>
             </div>

            {/* Main Content Section */}
            <div className="bg-offwhite py-24 border-t border-gray-100 mb-24 flex-grow">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white p-12 rounded-[2.5rem] border border-gray-100 text-center shadow-sm">
                        <div className="w-20 h-20 bg-brand-50 text-brand-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Settings size={36} className="animate-spin-slow" />
                        </div>
                        <h2 className="text-2xl font-bold text-black mb-4">Toolkit Dashboard placeholder</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            This page is securely locked and can only be accessed by authenticated engineers. 
                            You can build out forms and databases connections here to interact with your cPanel backend.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
