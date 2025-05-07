import React, { InputHTMLAttributes, forwardRef } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className = '', ...props }, ref) => {
    return (
      <div className="flex items-center">
        <input
          ref={ref}
          type="checkbox"
          className={`
            h-4 w-4 rounded border-gray-700 bg-gray-900 
            text-red-600 focus:ring-red-500/30 focus:ring-offset-0
            transition-all duration-200
            ${className}
          `}
          {...props}
        />
        <label 
          htmlFor={props.id} 
          className="ml-2 block text-sm text-gray-300 cursor-pointer"
        >
          {label}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;