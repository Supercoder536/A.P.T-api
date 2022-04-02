const mongoose = require("mongoose");
const projectSchema = mongoose.Schema({
  name: String,
  desc: String,
  area: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Area",
  },
});
module.exports = mongoose.model("Project", projectSchema);
