// src/pages/Home.jsx
import React from "react";
import Layout from "../components/Layout";
import Posts from "../components/posts";

const links = [
  { label: "Home", path: "/" },
  { label: "Tasks", path: "/tasks" },
];

const HomePage = () => {
  return (
    <Layout links={links}>
      <Posts />
    </Layout>
  );
};

export default HomePage;
