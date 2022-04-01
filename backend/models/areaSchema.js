const mongoose = require("mongoose");
const areaSchema = mongoose.Schema({
  name: String,
  banner: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = mongoose.model("Area", areaSchema);
