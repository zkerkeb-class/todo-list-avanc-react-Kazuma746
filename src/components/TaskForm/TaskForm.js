import React, { useState } from 'react';
import styles from './TaskForm.module.css';

function TaskForm({ textTask, handleChange, handleSubmit }) {
  const [taskStatus, setTaskStatus] = useState('new'); // Utilise "new" par défaut

  const handleStatusChange = (e) => {
    setTaskStatus(e.target.value);
  };

  return (
    <form className={styles.formContainer} onSubmit={(e) => handleSubmit(e, taskStatus)}>
      <label className={styles.label}>
        Entrez votre tâche:
        <input
          className={styles.input}
          name="tache"
          value={textTask}
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
        Statut:
        <select
          className={styles.select}
          value={taskStatus}
          onChange={handleStatusChange}
        >
          <option value="new">A faire</option>
          <option value="in_progress">En cours</option>
          <option value="completed">Fait</option>
        </select>
      </label>
      <button className={styles.button} type="submit">
        Enregistrer
      </button>
    </form>
  );
}

export default TaskForm;
