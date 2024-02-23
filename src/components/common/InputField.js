import React from 'react';

// Define the InputField component with props for label, type, placeholder, value, onChange, and className
const InputField = ({ label, type = 'text', placeholder = '', value, onChange, className = '' }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label &&  <label className="block text-gray-700 text-sm font-bold mb-2" for={label}>
        {label}
      </label>}
      <input
      id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        // Tailwind CSS classes for styling the input field
        // Add your custom className for further customization
       
        className={`shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
      />
    </div>
  );
};

export default InputField;
