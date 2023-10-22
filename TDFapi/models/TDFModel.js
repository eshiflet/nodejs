var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EntrySchema = new Schema({
  RIDERNUMBER: {
    type: Number,
    required: "Please enter a rider bib number"
  },
  RIDERNAME: {
    type: String,
    required: "Please enter a rider name"
  },
  TEAM: {
      type: String,
      required: "Please enter a team name"
  },
  RIDERID: {
    type: String,
     required: "Please enter a rider UUID"
  },
  FINISH: {
    type: String,
    required: "Please enter the overall race rank"
  },
  s1g: {
    type: Number,
    required: "Please enter a stage 1 ranking"
  },
  s2g: {
    type: Number,
    required: "Please enter a stage 2 ranking"
  },
  s3g: {
    type: Number,
    required: "Please enter a stage 3 ranking"
  },
  s4g: {
    type: Number,
    required: "Please enter a stage 4 ranking"
  },
  s5g: {
    type: Number,
    required: "Please enter a stage 5 ranking"
  },
  s6g: {
    type: Number,
    required: "Please enter a stage 6 ranking"
  },
  s7g: {
    type: Number,
    required: "Please enter a stage 7 ranking"
  },
  s8g: {
    type: Number,
    required: "Please enter a stage 8 ranking"
  },
  s9g: {
    type: Number,
    required: "Please enter a stage 9 ranking"
  },
  s10g: {
    type: Number,
    required: "Please enter a stage 10 ranking"
  },
  s11g: {
    type: Number,
    required: "Please enter a stage 11 ranking"
  },
  s12g: {
    type: Number,
    required: "Please enter a stage 12 ranking"
  },
  s13g: {
    type: Number,
    required: "Please enter a stage 13 ranking"
  },
  s14g: {
    type: Number,
    required: "Please enter a stage 14 ranking"
  },
  s15g: {
    type: Number,
    required: "Please enter a stage 15 ranking"
  },
  s16g: {
    type: Number,
    required: "Please enter a stage 16 ranking"
  },
  s17g: {
    type: Number,
    required: "Please enter a stage 17 ranking"
  },
  s18g: {
    type: Number,
    required: "Please enter a stage 18 ranking"
  },
  s19g: {
    type: Number,
    required: "Please enter a stage 19 ranking"
  },
  s20g: {
    type: Number,
    required: "Please enter a stage 20 ranking"
  },
  s21g: {
    type: Number,
    required: "Please enter a stage 21 ranking"
  }
});

module.exports = mongoose.model("Entry", EntrySchema, "2023tdfdata");
