// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TaskManager from "./components/TaskManager";
import Posts from "./components/Posts";

// Simple home page
function Home() {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold text-blue-600">
        Welcome to My TaskManager App
      </h1>
      <p className="mt-4 text-gray-700">
        Explore the Task Manager App, where you input and manage your to do list using the Navbar above.
      </p>
    </div>
  );
}

function App() {
  // ✅ Define your navigation links here and pass them into Navbar
  const links = [
    { path: "/", label: "Home" },
    { path: "/tasks", label: "Tasks" },
    { path: "/posts", label: "Posts" },
  ];

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Navbar */}
        <Navbar links={links} />

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskManager />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
