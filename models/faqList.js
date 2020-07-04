const mongoose = require("mongoose");

//Schema

const Schema = mongoose.Schema;
const FaqQuestionListSchema = new Schema({
  question: String,
  code: String,
  date: {
    type: String,
    default: Date.now(),
  },
});

// Model
const FaqQuestionList = mongoose.model(
  "FaqQuestionList",
  FaqQuestionListSchema
);

module.exports = FaqQuestionList;
