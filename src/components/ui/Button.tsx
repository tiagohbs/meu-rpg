import React, { ButtonHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center rounded font-medium transition-all focus:outline-none";
  
  const variantStyles = {
    primary: "bg-red-700 hover:bg-red-800 text-white shadow-md hover:shadow-lg active:shadow-sm border-2 border-red-900 focus:ring-2 focus:ring-red-500/30",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white shadow-md hover:shadow-lg active:shadow-sm border-2 border-gray-700 focus:ring-2 focus:ring-gray-500/30",
    ghost: "bg-transparent hover:bg-gray-800/30 text-gray-200 hover:text-white border-2 border-transparent hover:border-gray-700/50"
  };
  
  const sizeStyles = {
    sm: "text-sm py-1 px-3",
    md: "text-base py-2 px-4",
    lg: "text-lg py-3 px-6"
  };
  
  const widthStyles = fullWidth ? "w-full" : "";
  
  const disabledStyles = disabled || isLoading ? "opacity-70 cursor-not-allowed" : "";
  
  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${className}`}
      {...props}
    >
      {isLoading && (
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <Loader2 className="animate-spin h-4 w-4" />
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;