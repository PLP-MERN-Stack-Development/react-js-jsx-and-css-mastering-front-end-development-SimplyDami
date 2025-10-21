// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 text-center mt-8">
      <p>© 2025 ReactApp. All rights reserved.</p>

      {/* Navigation Links */}
      <div className="flex justify-center space-x-4 mt-3">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/tasks" className="hover:underline">
          Tasks
        </Link>
        <Link to="/posts" className="hover:underline">
          Posts
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
