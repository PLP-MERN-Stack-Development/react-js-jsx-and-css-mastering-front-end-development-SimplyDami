// src/components/Navbar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../utils/ThemeContext";

// ✅ Added default prop value for links to prevent "undefined.map" error
const Navbar = ({ links = [] }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-blue-500 dark:bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">TaskManager App</h1>
      <div className="flex items-center space-x-4">
        <ul className="flex space-x-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded transition duration-200 hover:scale-105"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
