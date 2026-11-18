import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrandLogo } from '../components/BrandLogo';
import { Lock } from 'lucide-react';

export const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        
        // This is a mock login.
        // Replace this with an actual API call to your cPanel database endpoint, e.g.,
        // fetch('https://your-cpanel-hosted-api.com/login.php', { method: 'POST', body: ... })
        if (username === 'engineer' && password === 'password') {
            sessionStorage.setItem('engineerLoggedIn', 'true');
            navigate('/engineer');
        } else {
            setError('Invalid username or password. (Hint: engineer/password for demo)');
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-offwhite py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
                <div className="flex justify-center flex-col items-center mb-8">
                    <BrandLogo />
                    <h2 className="mt-8 text-center text-3xl font-black text-black">
                        Engineer Login
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-500">
                        Secure access to the toolkit
                    </p>
                </div>
                
                <form className="space-y-6" onSubmit={handleLogin}>
                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center">
                            {error}
                        </div>
                    )}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Username</label>
                            <input
                                type="text"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition bg-offwhite font-medium"
                                placeholder="Enter your username"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition bg-offwhite font-medium"
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-brand-500 text-white font-bold py-4 rounded-xl hover:bg-brand-600 transition shadow-lg shadow-brand-500/20 text-lg flex items-center justify-center gap-2"
                    >
                        <Lock size={20} />
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};
