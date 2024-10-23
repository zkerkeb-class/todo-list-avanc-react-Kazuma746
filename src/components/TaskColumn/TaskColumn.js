import React from 'react';
import styles from './TaskColumn.module.css';
import TaskItem from '../TaskItem/TaskItem';

function TaskColumn({ title, tasks, handleStatusChange, handleDelete }) {
  return (
    <div className={styles.columnContainer}>
      <h2 className={styles.columnTitle}>{title}</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleStatusChange={handleStatusChange}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TaskColumn;
