// controllers/taskController.js
const Task = require('../models/Task');

async function listTasks(req, res) {
  res.json(await Task.find());
}

async function createTask(req, res) {
  const t = await Task.create(req.body);
  res.status(201).json(t);
}

async function updateTask(req, res) {
  const t = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(t);
}

module.exports = { listTasks, createTask, updateTask };
