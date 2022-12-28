import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
};

export const getTasks = async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
};

export const getTask = async (req, res) => {
  const task = await Task.findOne({ where: { id: req.params.id } });
  res.json(task);
};

export const updateTask = async (req, res) => {
  const task = await Task.findOne({ where: { id: req.params.id } });

  await task.update(req.body);

  res.json(task);
};

export const deleteTask = async (req, res) => {
  const task = await Task.findOne({ where: { id: req.params.id } });

  await task.destroy();

  res.json({ message: "Task deleted" });
};
