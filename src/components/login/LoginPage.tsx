import React from 'react';
import LoginForm from './LoginForm';
import ParticleBackground from './ParticleBackground';
import Logo from '../ui/Logo';

const LoginPage: React.FC = () => {
  const handleLogin = (data: { username: string; password: string; rememberMe: boolean }) => {
    console.log('Login data:', data);
    // In a real application, you would handle authentication here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center px-4 sm:px-6">
      <ParticleBackground />
      
      {/* Dark overlay with subtle pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0 pointer-events-none" 
           style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.05" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")'}}></div>
      
      {/* Main content */}
      <div className="w-full max-w-md z-10">
        <div className="flex flex-col items-center mb-8">
          <Logo size="lg" className="mb-4" />
          <h1 className="text-xl sm:text-2xl text-center font-medium text-gray-200 mt-4">
            Begin Your Adventure
          </h1>
        </div>
        
        {/* Login card */}
        <div className="w-full bg-gray-900 bg-opacity-80 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-2xl border border-gray-800 transform transition-all">
          <LoginForm onSubmit={handleLogin} />
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2025 ShadowRealm RPG. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;