require("dotenv").config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const apiRouter = require("./routes/api_router");

const PORT = process.env.PORT || 5000;

const app = express();

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

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});

module.exports = app;
