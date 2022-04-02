const express = require("express");
const router = express.Router();
const {
  getAreas,
  createArea,
  updateArea,
  deleteArea,
} = require("../controllers/areaController.js");
const {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController.js");
const {
  getTasks,
  createTask,
  updateTasks,
  deleteTasks,
} = require("../controllers/taskController.js");

//Area Routes
router.route("/").get(getAreas).post(createArea);
router.route("/:id").put(updateArea).delete(deleteArea);

//Project Routes
router.route("/:id").get(getProjects).post(createProject);
router.route("/:id/:pid").put(updateProject).delete(deleteProject);

//Task Routes
router.route("/:id/:pid").get(getTasks).post(createTask);
router.route("/:id/:pid/:tid").put(updateTasks).delete(deleteTasks);

module.exports = router;
