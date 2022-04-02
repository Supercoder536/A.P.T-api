const express = require("express");
const router = express.Router();
const projectRouter = require("../routes/projectRouter.js");
const {
  getAreas,
  createArea,
  updateArea,
  deleteArea,
} = require("../controllers/areaController.js");

router.route("/").get(getAreas).post(createArea);
router.route("/:id").put(updateArea).delete(deleteArea);
router.use("/:id/projects", projectRouter);

module.exports = router;
