const express = require("express");
const router = express.Router();
const FaqAnswer = require("../models/faqAnswer");
const FaqList = require("../models/faqList");
//Routes
router.get("/saveQuestionList", (req, res) => {
  const data = {
    question: "Famous Avatar",
    code: "avatars",
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
    question: "Famous Avatars",
    code: "avatars",
    category: [
      {
        title: "Mahabharata",
        subCategory: [
          {
            index: "1",
            itemName: "Yudhisthira -- Yama",
          },
          {
            index: "2",
            itemName: "BheemaSena -- Vaayu",
          },
          {
            index: "3",
            itemName: "Arjuna -- Indra",
          },
          {
            index: "4",
            itemName: "Nakul -- Ashwini (Naastya)",
          },
          {
            index: "5",
            itemName: "Sahadeva -- Ashwini (Dasra)",
          },
          {
            index: "6",
            itemName: "Bheeshmachar -- Dyu Vasu",
          },
          {
            index: "7",
            itemName: "Dronachar -- Brahaspatyachar",
          },
          {
            index: "8",
            itemName: "HuHu Gandharva -- Drupada",
          },
          {
            index: "9",
            itemName: "HaHa Gandharva -- Virat",
          },
          {
            index: "10",
            itemName: "Amba -- Varaangi",
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
