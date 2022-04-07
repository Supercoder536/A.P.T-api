const mongoose = require("mongoose");
const projectSchema = mongoose.Schema({
  name: String,
  desc: String,
  area: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Area",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = mongoose.model("Project", projectSchema);
