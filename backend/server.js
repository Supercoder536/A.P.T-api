const express = require("express");
const app = express();
const areaRouter = require("./routes/areaRouter.js");
const userRouter = require("./routes/userRouter.js");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/areas", areaRouter);
app.use("/api/users", userRouter);

app.listen(port, () =>
  console.log(`Express Server is running on port ${port}`)
);
