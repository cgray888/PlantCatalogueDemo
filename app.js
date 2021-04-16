var express = require('express');
var path = require('path');
var logger = require('morgan');
const cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// middleware
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));


app.use('/', indexRouter);
app.use('/users', usersRouter);

// test
this.router.get('/plants', function(req, res, next) {
    res.send({message: "Well done"})
});

module.exports = app;
