const asynchandler = require("express-async-handler");
const areaSchema = require("../models/areaSchema.js");
const projectSchema = require("../models/projectSchema.js");
const taskSchema = require("../models/taskSchema.js");

//@desc     Get Areas
//@method   GET api/areas
//@access   Private
const getAreas = asynchandler(async (req, res) => {
  const areas = await areaSchema.find({ user: req.user._id });
  res.status(200).json({ areas });
});

//@desc     Create Area
//@method   POST api/areas
//@access   Private
const createArea = asynchandler(async (req, res) => {
  const { name, banner } = req.body;
  if (!name || !banner) {
    res.status(400);
    throw new Error("Invalid Params");
  }
  const area = await areaSchema.create({
    name,
    banner,
    user: req.user._id,
  });
  res.status(200).json(area);
});

//@desc     Update Area
//@method   PUT api/areas/:id
//@access   Private
const updateArea = asynchandler(async (req, res) => {
  const area = await areaSchema.findById(req.params.id);
  if (!area) {
    res.status(400);
    throw new Error("No such area exsists");
  }
  if (area.user !== req.user.id) {
    res.status(400);
    throw new Error("Invalid User");
  }
  const updatedArea = await areaSchema.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  res.status(200).json(updatedArea);
});

//@desc     Delete Area
//@method   DEL api/areas/:id
//@access   Private
const deleteArea = asynchandler(async (req, res) => {
  const area = await areaSchema.findById(req.params.id);
  if (!area) {
    res.status(400);
    throw new Error("No such area exsists");
  }
  if (area.user !== req.user.id) {
    res.status(400);
    throw new Error("Invalid User");
  }
  const projects = await projectSchema.find({ area: area._id });
  projects.forEach(async (project) => {
    const tasks = await taskSchema.find({ project: project._id });
    tasks.forEach(async (task) => {
      await taskSchema.findByIdAndRemove(task._id);
    });
    await projectSchema.findByIdAndDelete(project._id);
  });
  await area.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAreas,
  createArea,
  updateArea,
  deleteArea,
};
