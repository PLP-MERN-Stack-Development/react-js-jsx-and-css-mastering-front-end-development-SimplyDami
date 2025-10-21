// src/components/Button.jsx
import React from "react";

const Button = ({ variant = "primary", children, onClick }) => {
  let baseClass =
    "px-4 py-2 rounded font-semibold transition-all duration-200";

  let variantClass = "";
  switch (variant) {
    case "primary":
      variantClass = "bg-blue-500 text-white hover:bg-blue-600";
      break;
    case "secondary":
      variantClass = "bg-gray-300 text-gray-800 hover:bg-gray-400";
      break;
    case "danger":
      variantClass = "bg-red-500 text-white hover:bg-red-600";
      break;
    default:
      variantClass = "bg-blue-500 text-white hover:bg-blue-600";
  }

  return (
    <button className={`${baseClass} ${variantClass}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
