import React, { useState } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import useTasks from './hooks/useTasks';
import './App.css'; // Import App.css

function App() {
  const { tasks, addTask, updateTaskStatus, deleteTask } = useTasks();
  const [textTask, setTextTask] = useState('');

  const handleChange = (e) => {
    setTextTask(e.target.value);
  };

  const handleSubmit = (e, status) => {
    e.preventDefault();
    addTask(textTask, status); // Ajoute la tâche avec le statut choisi
    setTextTask('');
  };

  return (
    <div className="container">
      <h1 className="title">Liste de Tâches</h1>
      <TaskForm textTask={textTask} handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className="taskColumns">
        <TaskList tasks={tasks} handleStatusChange={updateTaskStatus} handleDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;
