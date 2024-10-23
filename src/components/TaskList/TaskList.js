import React from 'react';
import TaskColumn from '../TaskColumn/TaskColumn';
import styles from './TaskList.module.css';

function TaskList({ tasks, handleStatusChange, handleDelete }) {
  // Filtrer les tâches par statut
  const tasksByStatus = {
    new: tasks.filter((task) => task.status === 'new'),
    in_progress: tasks.filter((task) => task.status === 'in_progress'),
    completed: tasks.filter((task) => task.status === 'completed'),
  };

  return (
    <div className={styles.columnWrapper}>
      <TaskColumn 
        title="A faire" 
        tasks={tasksByStatus.new} 
        handleStatusChange={handleStatusChange}
        handleDelete={handleDelete}
      />
      <TaskColumn 
        title="En cours" 
        tasks={tasksByStatus.in_progress} 
        handleStatusChange={handleStatusChange}
        handleDelete={handleDelete}
      />
      <TaskColumn 
        title="Fait" 
        tasks={tasksByStatus.completed} 
        handleStatusChange={handleStatusChange}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default TaskList;
