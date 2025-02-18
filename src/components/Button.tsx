import React from "react";

type ButtonProps = {
  label: string;
  variant?: "default" | "secondary";
};

const Button: React.FC<ButtonProps> = ({ label, variant = "default" }) => {
  const baseStyles =
    "px-4 py-2 text-sm text-white rounded-lg shadow-md transition-colors duration-300 uppercase font-family-bold";
  const variants = {
    default: "bg-primary hover:bg-secondary",
    secondary: "bg-terciary text-white hover:bg-teal-500",
  };

  return (
    <button type="button" className={`${baseStyles} ${variants[variant]}`}>
      {label}
    </button>
  );
};

export default Button;
