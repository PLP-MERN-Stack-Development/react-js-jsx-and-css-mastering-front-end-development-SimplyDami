// src/pages/Tasks.jsx
import React from "react";
import Layout from "../components/Layout";
import TaskManager from "../components/TaskManager";

const links = [
  { label: "Home", path: "/" },
  { label: "Tasks", path: "/tasks" },
];

const TasksPage = () => {
  return (
    <Layout links={links}>
      <TaskManager />
    </Layout>
  );
};

export default TasksPage;
