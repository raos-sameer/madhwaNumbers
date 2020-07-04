const express = require("express");
const router = express.Router();
const FaqAnswer = require("../models/faqAnswer");
const FaqList = require("../models/faqList");
//Routes
router.get("/saveQuestionList", (req, res) => {
  const data = {
    question: "Madhacharya's books",
    code: "madhwaBooks",
  };
  const newFaqQuestion = new FaqList(data);
  newFaqQuestion.save((error) => {
    if (error) {
      console.log("Save not happened", error);
    } else {
      console.log("Save successful");
    }
  });
  res.json(data);
});

router.get("/saveAnswer", (req, res) => {
  const data = {
    question: "Madhacharya's books",
    code: "madhwaBooks",
    category: [
      {
        title: "Itihaas Prasthana",
        subCategory: [
          {
            index: "1",
            itemName: "Geetabhashya",
          },
          {
            index: "2",
            itemName: "MBTN",
          },
        ],
      },
      {
        title: "Stotras",
        subCategory: [
          {
            index: "1",
            itemName: "Dwadasha Stotra",
          },
        ],
      },
    ],
  };
  const newFaqAnswer = new FaqAnswer(data);
  newFaqAnswer.save((error) => {
    if (error) {
      console.log("Save not happened", error);
    } else {
      console.log("Save successful");
    }
  });
  res.json(data);
});

module.exports = router;
