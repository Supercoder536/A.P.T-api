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
const { protect } = require("../middleware/authMiddleware.js");

//Area Routes
router.route("/").get(protect, getAreas).post(protect, createArea);
router.route("/:id").put(protect, updateArea).delete(protect, deleteArea);

//Project Routes
router.route("/:id").get(protect, getProjects).post(protect, createProject);
router
  .route("/:id/:pid")
  .put(protect, updateProject)
  .delete(protect, deleteProject);

//Task Routes
router.route("/:id/:pid").get(protect, getTasks).post(protect, createTask);
router
  .route("/:id/:pid/:tid")
  .put(protect, updateTasks)
  .delete(protect, deleteTasks);

module.exports = router;
