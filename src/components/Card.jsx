// src/components/Card.jsx
import React from "react";

const Card = ({ title, description, children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded p-4 m-2 transition-all duration-300 hover:shadow-lg">
      <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
      {children}
    </div>
  );
};

export default Card;
