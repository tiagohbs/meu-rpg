import React from 'react';
import { Swords } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-5xl'
  };

  const iconSizes = {
    sm: 18,
    md: 28,
    lg: 40
  };

  return (
    <div className={`flex items-center ${className}`}>
      <Swords 
        className="text-red-600 mr-2" 
        size={iconSizes[size]} 
        strokeWidth={2.5}
      />
      <span className={`font-bold ${sizeClasses[size]} text-white tracking-wider`}>
        SHADOW<span className="text-red-600">REALM</span>
      </span>
    </div>
  );
};

export default Logo;