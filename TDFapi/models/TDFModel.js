var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EntrySchema = new Schema({
  riderfullname: {
    type: String,
    required: "Please enter a rider name"
  },
  ridernumber: {
    type: Number,
    required: "Please enter a rider bib number"
  },
  riderid: {
    type: String,
     required: "Please enter a rider UUID"
  },
  teamname: {
    type: String,
    required: "Please enter a team name"
  },
  s1: {
    type: Number,
    required: "Please enter a stage 1 ranking"
  },
  s2: {
    type: Number,
    required: "Please enter a stage 2 ranking"
  },
  s3: {
    type: Number,
    required: "Please enter a stage 3 ranking"
  },
  s4: {
    type: Number,
    required: "Please enter a stage 4 ranking"
  },
  s5: {
    type: Number,
    required: "Please enter a stage 5 ranking"
  }
});

module.exports = mongoose.model("Entry", EntrySchema, "TDF");