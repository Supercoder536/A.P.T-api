const express = require("express");
const dotenv = require("dotenv").config();
const mainRouter = require("./routes/mainRouter.js");
const userRouter = require("./routes/userRouter.js");
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware.js");
const connectToDB = require("./config/db.js");

const app = express();
connectToDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/areas", mainRouter);
app.use("/api/users", userRouter);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Express Server is running on port ${port}`)
);
