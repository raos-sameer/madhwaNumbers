const express = require("express");
const router = express.Router();
const memoryGame = require("../models/memoryGame");
//Routes
router.get("/findMemory", (req, res) => {
  memoryGame
    .find({})
    .then((data) => {
      console.log("Data :", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
});

router.get("/faqQuestionList", (req, res) => {
  console.log("In this points");
  FaqList.find({})
    .then((data) => {
      console.log("Data1 :", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
});

router.get("/faqSpecificAnswer/", (req, res) => {
  FaqAnswer.find({
    code: req.query.code,
  })
    .then((data) => {
      console.log("Data1 :", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
});
module.exports = router;
