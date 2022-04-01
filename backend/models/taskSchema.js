const mongoose = require("mongoose");
const taskSchema = mongoose.Schema({
  name: String,
  status: Boolean,
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
});
module.exports = mongoose.model("Task", taskSchema);
