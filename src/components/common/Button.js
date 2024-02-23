import React from 'react';

// Define the Button component with props for customization including a variant prop
const Button = ({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  variant = 'filled' // Default variant is 'filled'
}) => {
  // Determine button style based on variant
  const baseClasses = 'px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = variant === 'outlined'
    ? 'border-purple-500 text-purple-500 bg-transparent hover:bg-purple-50 hover:text-purple-700 focus:ring-purple-500'
    : 'border-transparent text-white bg-purple-500 hover:bg-purple-700 focus:ring-purple-500';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
