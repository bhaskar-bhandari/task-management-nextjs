// app/components/TaskCard.js
'use client';

import axios from 'axios';

export default function TaskCard({ task, refreshTasks }) {
  const handleDelete = async () => {
    const token = localStorage.getItem('token');
    await axios.delete(`http://localhost:5000/api/tasks/${task._id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    refreshTasks();
  };

  return (
    <div>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
