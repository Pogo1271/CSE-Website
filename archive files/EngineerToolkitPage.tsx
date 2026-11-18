import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, Tool, FileText, AlertCircle, LogOut } from 'lucide-react';

export const EngineerToolkitPage: React.FC = () => {
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

    const handleLogout = () => {
        sessionStorage.removeItem('engineerLoggedIn');
        navigate('/login');
    };

    // Don't render content until authentication is verified
    if (!isAuthenticated) return null;

    return (
        <div className="bg-white min-h-screen">
            {/* Header / Top bar specific to the toolkit could go here */}
            <div className="bg-gray-50 border-b border-gray-200 py-6">
                <div className="container mx-auto px-4 flex justify-between items-center max-w-6xl">
                    <h1 className="text-3xl font-black text-black">Engineer Toolkit</h1>
                    <button 
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-red-500 transition-colors"
                    >
                        <LogOut size={16} /> Logout
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-6xl">
                <div className="bg-offwhite p-12 rounded-[2.5rem] border border-gray-100 text-center shadow-inner">
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
    );
};
