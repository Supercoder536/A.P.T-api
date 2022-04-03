const asynchandler = require("express-async-handler");
const taskSchema = require("../models/taskSchema.js");

//@desc     Get Tasks
//@method   GET api/areas/:id/:pid/
//@access   Private
const getTasks = asynchandler(async (req, res) => {
  const tasks = await taskSchema.find({ project: req.params.pid });
  res.status(200).json({ tasks });
});

//@desc     Create Task
//@method   POST api/areas/:id/:pid/
//@access   Private
const createTask = asynchandler(async (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400);
    throw new Error("Invalid Params");
  }
  const createdTask = await taskSchema.create({
    name,
    project: req.params.pid,
  });
  res.status(200).json(createdTask);
});

//@desc     Update Tasks
//@method   PUT api/areas/:id/:pid/:tid
//@access   Private
const updateTasks = asynchandler(async (req, res) => {
  const task = await taskSchema.findById(req.params.tid);
  if (!task) {
    res.status(400);
    throw new Error("No such task exsists");
  }
  const updatedTask = await taskSchema.findByIdAndUpdate(
    req.params.tid,
    req.body
  );
  res.status(200).json(updatedTask);
});

//@desc     Delete Tasks
//@method   DEL api/areas/:id/:pid/:tid
//@access   Private
const deleteTasks = asynchandler(async (req, res) => {
  const task = await taskSchema.findById(req.params.tid);
  if (!task) {
    res.status(400);
    throw new Error("No such task exsists");
  }
  const deletedTask = await taskSchema.findByIdAndDelete(req.params.tid);
  res.status(200).json(deletedTask);
});

module.exports = {
  getTasks,
  createTask,
  updateTasks,
  deleteTasks,
};
