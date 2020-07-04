const express = require("express");
const router = express.Router();
const FaqAnswer = require("../models/faqAnswer");
const FaqList = require("../models/faqList");
//Routes
router.get("/faqAnswer", (req, res) => {
  FaqAnswer.find({})
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

module.exports = router;
