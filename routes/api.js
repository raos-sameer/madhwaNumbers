const express = require("express");
const router = express.Router();
const FaqAnswer = require("../models/faqAnswer");
const FaqList = require("../models/faqList");
//Routes
router.get("/faqAnswer", (req, res) => {
  FaqAnswer.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
});

router.get("/faqQuestionList", (req, res) => {
  FaqList.find({})
    .then((data) => {
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
      res.json(data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
});
module.exports = router;
