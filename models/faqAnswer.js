const mongoose = require("mongoose");

//Schema

const Schema = mongoose.Schema;
const FaqAnswerSchema = new Schema({
  question: String,
  code: String,
  category: [
    {
      title: String,
      subCategory: [
        {
          index: String,
          itemName: String,
        },
      ],
    },
  ],
  date: {
    type: String,
    default: Date.now(),
  },
});

// Model
const FaqAnswer = mongoose.model("FaqAnswer", FaqAnswerSchema);

module.exports = FaqAnswer;
