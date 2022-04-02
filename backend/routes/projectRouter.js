const express = require("express");
const taskRouter = require("../routes/taskRouter.js");
const router = express.Router();
const {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController.js");

router.route("/").get(getProjects).post(createProject);
router.route("/:pid").put(updateProject).delete(deleteProject);
router.use("/:pid/tasks", taskRouter);

module.exports = router;
