const express = require("express");
const router = express.Router();
const MemoryGame = require("../models/memoryGame");
//Routes
router.post("/saveGameQuestion", (req, res) => {
  console.log(req.body);
  const data = {
    code: req.body.code,
    input: req.body.input,
  };
  const newMemoryGame = new MemoryGame(data);
  newMemoryGame.push((error) => {
    if (error) {
      console.log("Save not happened", error);
    } else {
      console.log("Save successful");
    }
  });
  res.json(data);
});

module.exports = router;
