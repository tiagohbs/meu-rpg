import React, { InputHTMLAttributes, forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth = false, className = '', ...props }, ref) => {
    const widthClass = fullWidth ? 'w-full' : '';
    
    return (
      <div className={`mb-4 ${widthClass}`}>
        {label && (
          <label 
            htmlFor={props.id} 
            className="block text-gray-200 text-sm font-medium mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            className={`
              block bg-gray-900/60 border-2 border-gray-700 rounded-md 
              py-2 px-4 text-white placeholder-gray-400 
              focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500
              transition-all duration-200
              ${error ? 'border-red-500' : ''}
              ${widthClass}
              ${className}
            `}
            {...props}
          />
        </div>
        {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;