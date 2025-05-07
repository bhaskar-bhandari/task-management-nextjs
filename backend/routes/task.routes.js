const express = require('express');
const auth = require('../middleware/auth');
const {
  createTask, getMyTasks, getAssignedTasks, getOverdueTasks,
  updateTask, deleteTask,getAllTasks
} = require('../controllers/task.controller');
const router = express.Router();

router.get('/', auth, getAllTasks); // NEW ROUTE
router.post('/', auth, createTask);
router.get('/my-tasks', auth, getMyTasks);
router.get('/assigned', auth, getAssignedTasks);
router.get('/overdue', auth, getOverdueTasks);
router.put('/:id', auth, updateTask);
router.delete('/:id', auth, deleteTask);

module.exports = router;
