import React from 'react';
import styles from './TaskItem.module.css';

function TaskItem({ task, handleStatusChange, handleDelete }) {
  return (
    <div className={styles.taskItem}>
      <p className={styles.taskText}>{task.text}</p>
      <select
        className={styles.statusSelect}
        value={task.status}
        onChange={(e) => handleStatusChange(task.id, e.target.value)}
      >
        <option value="new">A faire</option>
        <option value="in_progress">En cours</option>
        <option value="completed">Fait</option>
      </select>
      <button className={styles.deleteButton} onClick={() => handleDelete(task.id)}>
        Supprimer
      </button>
    </div>
  );
}

export default TaskItem;
