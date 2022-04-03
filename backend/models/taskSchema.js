const mongoose = require("mongoose");
const taskSchema = mongoose.Schema({
  name: String,
  status: { type: Boolean, default: false },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
});
module.exports = mongoose.model("Task", taskSchema);
