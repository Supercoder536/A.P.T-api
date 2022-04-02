const mongoose = require("mongoose");
const connectToDB = () => {
  mongoose.connect(process.env.MONGO_URI, () =>
    console.log(`Mongo DB connected ${mongoose.connection.host}`)
  );
};
module.exports = connectToDB;
