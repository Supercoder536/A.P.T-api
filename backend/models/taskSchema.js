const mongoose = require("mongoose");
const taskSchema = mongoose.Schema({
  name: String,
  status: { type: Boolean, default: false },
  dueDate: Date,
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = mongoose.model("Task", taskSchema);
