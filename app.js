require("dotenv").config();
var express = require("express");
var path = require("path");
var logger = require("morgan");
const cors = require("cors");

const apiRouter = require("./routes/api_router");
const rateLimit = require("express-rate-limit");

var app = express();

// middleware
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(rateLimit());
if (process.env.NODE_ENV === "production") {
  // Serve static files from the React frontend app
  app.use(express.static(path.join(__dirname, "client/build")));
  // Anything that doesn't match the above, send back index.html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

// routing
app.use("/", apiRouter);

module.exports = app;
