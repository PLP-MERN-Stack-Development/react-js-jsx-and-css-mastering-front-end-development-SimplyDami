// src/components/TaskManager.jsx
import React, { useState } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";
import Button from "./Button";
import Card from "./Card";

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [taskInput, setTaskInput] = useState("");
  const [filter, setFilter] = useState("All");

  // Add a new task
  const addTask = () => {
    if (!taskInput.trim()) return;
    const newTask = { id: Date.now(), text: taskInput, completed: false };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true; // All
  });

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Task Manager
      </h1>

      {/* Input & Add Button */}
      <div className="flex mb-4">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a task"
          className="flex-grow p-2 border rounded-l dark:bg-gray-700 dark:text-white"
        />
        <Button variant="primary" onClick={addTask}>
          Add
        </Button>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-between mb-4">
        {["All", "Active", "Completed"].map((f) => (
          <Button
            key={f}
            variant={filter === f ? "primary" : "secondary"}
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div>

      {/* Task List */}
      <div className="space-y-2">
        {filteredTasks.length === 0 ? (
          <p className="text-gray-700 dark:text-gray-300">No tasks found.</p>
        ) : (
          filteredTasks.map((task) => (
            <Card key={task.id} title={task.text}>
              <div className="flex justify-end space-x-2 mt-2">
                <Button
                  variant={task.completed ? "secondary" : "primary"}
                  onClick={() => toggleComplete(task.id)}
                >
                  {task.completed ? "Undo" : "Complete"}
                </Button>
                <Button variant="danger" onClick={() => deleteTask(task.id)}>
                  Delete
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskManager;
