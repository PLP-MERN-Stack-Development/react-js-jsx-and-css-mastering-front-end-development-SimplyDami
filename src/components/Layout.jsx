// src/components/Layout.jsx
import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children, links }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar links={links} />
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
