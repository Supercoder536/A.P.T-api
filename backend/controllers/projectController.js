const asynchandler = require("express-async-handler");
const projectSchema = require("../models/projectSchema.js");
const taskSchema = require("../models/taskSchema.js");
//@desc     Get Project
//@method   GET api/areas/:id/
//@access   Private
const getProjects = asynchandler(async (req, res) => {
  const projects = await projectSchema.find({ area: req.params.id });
  res.status(200).json({ projects });
});

//@desc     Create Project
//@method   POST api/areas/:id/
//@access   Private
const createProject = asynchandler(async (req, res) => {
  const { name, desc } = req.body;
  if (!name || !desc) {
    res.status(400);
    throw new Error("Invalid Request");
  }
  const createdProject = await projectSchema.create({
    name,
    desc,
    area: req.params.id,
  });
  res.status(200).json(createdProject);
});

//@desc     Update Project
//@method   PUT api/areas/:id/:pid
//@access   Private
const updateProject = asynchandler(async (req, res) => {
  const { name, desc } = req.body;
  if (!name || !desc) {
    res.status(400);
    throw new Error("Invalid Request");
  }
  const project = await projectSchema.findById(req.params.pid);
  if (!project) {
    res.status(400);
    throw new Error("No such project exsists");
  }
  const updatedProject = await projectSchema.findByIdAndUpdate(req.params.id, {
    name,
    desc,
  });
  res.status(200).json(updatedProject);
});

//@desc     Delete Project
//@method   DEL api/areas/:id/:pid
//@access   Private
const deleteProject = asynchandler(async (req, res) => {
  const project = await projectSchema.findById(req.params.pid);
  if (!project) {
    res.status(400);
    throw new Error("No such project exsists");
  }
  const subtasks = await taskSchema.find({ project: project._id });
  subtasks.forEach(async (subtask) => {
    await taskSchema.findByIdAndDelete(subtask._id);
  });
  const deletedProject = await projectSchema.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedProject._id);
});

module.exports = {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
};
