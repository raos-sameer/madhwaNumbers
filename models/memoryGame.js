const mongoose = require("mongoose");

//Schema

const Schema = mongoose.Schema;
const MemoryGameSchema = new Schema({
  code: String,
  category: [
    {
      0: String,
      1: String,
      answer: String,
    },
  ],
  date: {
    type: String,
    default: Date.now(),
  },
});

// Model
const MemoryGame = mongoose.model("MemoryGame", MemoryGameSchema);

module.exports = MemoryGame;
