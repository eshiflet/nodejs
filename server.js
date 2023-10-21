const { ATLAS_USER, ATLAS_PW } = require('./config');
const URI = 'mongodb+srv://' + ATLAS_USER + ':' + ATLAS_PW + '@cluster0.7c5isvk.mongodb.net/?retryWrites=true&w=majority';
console.log('Connecting to : ' + URI);

var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  Entry = require("./TDFapi/models/TDFModel");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true });

var routes = require("./TDFapi/routes/TDFRoutes");
routes(app);

app.listen(port);

console.log("API server started on port " + port);