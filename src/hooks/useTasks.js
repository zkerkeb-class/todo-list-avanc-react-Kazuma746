import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, hasLoaded]);

  const addTask = (text, status) => {
    if (text.trim() !== '') {
      const newTask = { id: uuidv4(), text, status };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  };

  const updateTaskStatus = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return { tasks, addTask, updateTaskStatus, deleteTask };
}

export default useTasks;
