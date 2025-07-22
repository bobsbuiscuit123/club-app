// routes/tasks.js
const router = require('express').Router();
const { listTasks, createTask, updateTask } = require('../controllers/taskController');

router.get('/', listTasks);
router.post('/', createTask);
router.put('/:id', updateTask);

module.exports = router;
