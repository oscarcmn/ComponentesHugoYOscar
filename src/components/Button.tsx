import React from "react";

type ButtonProps = {
  label: string;
  variant?: "default" | "secondary";
};

const Button: React.FC<ButtonProps> = ({ label, variant = "default" }) => {
  const baseStyles =
    "px-4 py-2 font-bold text-white rounded-lg shadow-md transition-colors duration-300 uppercase tracking-lg";
  const variants = {
    default: "bg-blue-900 hover:bg-blue-700",
    secondary: "bg-teal-400 text-white hover:bg-teal-500",
  };

  return (
    <button type="button" className={`${baseStyles} ${variants[variant]}`}>
      {label}
    </button>
  );
};

export default Button;
