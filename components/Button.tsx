import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-3 font-sans font-medium transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-wider text-sm";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]",
    outline: "border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navy-900"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;