// app/dashboard/page.js
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.get('http://localhost:5000/api/tasks', {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <TaskForm refreshTasks={fetchTasks} />
      <div>
        {tasks.map(task => (
          <TaskCard key={task._id} task={task} refreshTasks={fetchTasks} />
        ))}
      </div>
    </div>
  );
}
