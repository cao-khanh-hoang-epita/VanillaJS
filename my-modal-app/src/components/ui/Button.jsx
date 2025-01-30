import React from 'react';

const BUTTON_VARIANTS = {
  first: 'bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/20',
  second: 'bg-violet-500 hover:bg-violet-600 shadow-lg shadow-violet-500/20',
  third: 'bg-yellow-500 hover:bg-yellow-600 shadow-lg shadow-yellow-500/20',
};

const Button = ({ variant, onClick, children }) => {
  const buttonStyle = BUTTON_VARIANTS[variant];
  
  return (
    <button
      onClick={onClick}
      className={`${buttonStyle} text-white px-6 py-2 rounded transition-all duration-200`}
    >
      {children}
    </button>
  );
};

export default Button;