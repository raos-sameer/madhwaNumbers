const express = require("express");
const router = express.Router();
const MemoryGame = require("../models/memoryGame");
//Routes
router.get("/saveMemoryGame", (req, res) => {
  const data = {
    code: "easy",
    category: [
      {
        0: "Who is Ashwatthama",
        1: "Who is Durvaas Rishi",
        answer: "Rudra Dev",
      },
    ],
  };
  const newMemoryGame = new MemoryGame(data);
  newMemoryGame.save((error) => {
    if (error) {
      console.log("Save not happened", error);
    } else {
      console.log("Save successful");
    }
  });
  res.json(data);
});

module.exports = router;
