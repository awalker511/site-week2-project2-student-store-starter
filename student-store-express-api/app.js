const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
//const { NotFoundError } = require("./utils/error");
const storeRoute = require("./routes/store");
const db = require("./data/db.json");
const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.use("/store", storeRoute);

//Handle not found errors
// app.use((req, res, next) => {
//   return next(new NotFoundError());
// });

//get products

//GET request
app.get("./", (req, res) => {
  res.status(200);
});
module.exports = app;
