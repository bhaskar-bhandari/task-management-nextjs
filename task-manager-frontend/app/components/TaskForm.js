// app/components/TaskForm.js
'use client';

import { useState } from 'react';
import axios from 'axios';

export default function TaskForm({ refreshTasks }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate = async e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post(
      'http://localhost:5000/api/tasks',
      { title, description },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setTitle('');
    setDescription('');
    refreshTasks();
  };

  return (
    <form onSubmit={handleCreate}>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
      <button type="submit">Add Task</button>
    </form>
  );
}
