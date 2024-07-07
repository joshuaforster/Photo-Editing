import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void; // Make onClick optional
  to?: string; // Optional path for navigation
  href?: string; // Optional href for anchor links
  className?: string;
  type?: 'button' | 'submit' | 'reset'; // Add type attribute
}

const Button: React.FC<ButtonProps> = ({ variant, children, onClick, to, href, className = "", type = 'button' }) => {
  // Base styles for buttons
  const baseStyles = "px-4 font-bold py-2 mt-4 mb-4 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  // Styles for light mode
  const lightModePrimary = "bg-[#2A2A2A] text-white hover:bg-[#1f1f1f] focus:ring-[#1f1f1f]";
  const lightModeSecondary = "bg-white text-[#2A2A2A] hover:bg-gray-200 focus:ring-gray-200 border-2 border-[#2A2A2A]";
  
  // Styles for dark mode
  const darkModePrimary = "dark:bg-white dark:text-[#2A2A2A] dark:hover:bg-gray-200 dark:focus:ring-gray-200";
  const darkModeSecondary = "dark:bg-[#2A2A2A] dark:text-white dark:hover:bg-[#1f1f1f] dark:focus:ring-[#1f1f1f] dark:border-2 dark:border-white";

  const buttonClasses = `${baseStyles} ${variant === 'primary' ? lightModePrimary : lightModeSecondary} ${variant === 'primary' ? darkModePrimary : darkModeSecondary} ${className}`;

  // Conditionally render a Link, a, or a button based on the presence of 'to' or 'href' props
  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  } else if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={buttonClasses} onClick={onClick} type={type}>
        {children}
      </button>
    );
  }
};

export default Button;