const mongoose = require("mongoose");

//Schema

const Schema = mongoose.Schema;
const MemoryGameSchema = new Schema({
  code: String,
  input: [],
  date: {
    type: String,
    default: Date.now(),
  },
});

// Model
const MemoryGame = mongoose.model("MemoryGame", MemoryGameSchema);

module.exports = MemoryGame;
