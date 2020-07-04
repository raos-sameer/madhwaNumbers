const express = require("express");
const router = express.Router();
const FaqAnswer = require("../models/faqAnswer");
const FaqList = require("../models/faqList");
//Routes
router.get("/saveQuestionList", (req, res) => {
  const data = {
    question: "Taaratamya Krama",
    code: "taaratamya",
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
        title: "Bhagwad Gita",
        subCategory: [
          {
            index: "1",
            itemName: "Gita Bhashya",
          },
          {
            index: "2",
            itemName: "Gita Tatparya",
          },
        ],
      },
      {
        title: "BrahmaSutra",
        subCategory: [
          {
            index: "1",
            itemName: "ब्रह्मसूत्रभाष्यम् ",
          },
          {
            index: "2",
            itemName: "अनुव्याख्यानम् ",
          },
          {
            index: "3",
            itemName: "न्यायविवरणम् ",
          },
          {
            index: "4",
            itemName: "अणुभाष्यम् ",
          },
        ],
      },
      {
        title: "Upanishads",
        subCategory: [
          {
            index: "1",
            itemName: "ईशावास्योपनिषद्भाष्यम् ",
          },
          {
            index: "2",
            itemName: "केनोपनिषद्भाष्यम् ",
          },
          {
            index: "3",
            itemName: "कठोपनिषद्भाष्यम् ",
          },
          {
            index: "4",
            itemName: "मुण्डकोपनिषद्भाष्यम् ",
          },
          {
            index: "5",
            itemName: "षट्प्रश्नोपनिषद्भाष्यम् ",
          },
          {
            index: "6",
            itemName: "माण्डूक्योपनिषद्भाष्यम् ",
          },
          {
            index: "7",
            itemName: "ऐतरेयोपनिषद्भाष्यम् ",
          },
          {
            index: "8",
            itemName: "तैत्तिरीयोपनिषद्भाष्यम् ",
          },
          {
            index: "9",
            itemName: "बृहदारण्यकोपनिषद्भाष्यम् ",
          },
          {
            index: "10",
            itemName: "छान्दोग्योपनिषद्भाष्यम्  ",
          },
        ],
      },
      {
        title: "BrahmaSutra",
        subCategory: [
          {
            index: "1",
            itemName: "ब्रह्मसूत्रभाष्यम् ",
          },
          {
            index: "2",
            itemName: "अनुव्याख्यानम् ",
          },
          {
            index: "3",
            itemName: "न्यायविवरणम् ",
          },
          {
            index: "4",
            itemName: "अणुभाष्यम् ",
          },
        ],
      },
      {
        title: "Prakarna Grantha",
        subCategory: [
          {
            index: "1",
            itemName: "प्रमाणलक्षणम् ",
          },
          {
            index: "2",
            itemName: "कथालक्षणम् ",
          },
          {
            index: "3",
            itemName: "उपाधिखण्डनम्  ",
          },
          {
            index: "4",
            itemName: "प्रपञ्चमिथ्यात्वानुमानखण्डनम्  ",
          },
          {
            index: "5",
            itemName: "मायावादखण्डनम्  ",
          },
          {
            index: "6",
            itemName: "तत्त्वसङ्ख्यानम्  ",
          },
          {
            index: "7",
            itemName: "तत्त्वविवेकः  ",
          },
          {
            index: "8",
            itemName: "तत्त्वोद्योतः  ",
          },
          {
            index: "9",
            itemName: "विष्णुतत्त्वविनिर्णयः  ",
          },
          {
            index: "10",
            itemName: "कर्मनिर्णयः   ",
          },
        ],
      },
      {
        title: "Mahabharata",
        subCategory: [
          {
            index: "1",
            itemName: "महाभारततात्पर्यनिर्णयः",
          },
          {
            index: "2",
            itemName: "यमकभारतम्",
          },
        ],
      },
      {
        title: "Stotras",
        subCategory: [
          {
            index: "1",
            itemName: "नरसिंहनखस्तुतिः ",
          },
          {
            index: "2",
            itemName: "द्वादशस्तोत्रम् ",
          },
          {
            index: "3",
            itemName: "कन्दुकस्तुतिः ",
          },
        ],
      },
      {
        title: "Others",
        subCategory: [
          {
            index: "1",
            itemName: "भागवततात्पर्यनिर्णयः  ",
          },
          {
            index: "2",
            itemName: "कृष्णामृतमहार्णवः  ",
          },
          {
            index: "3",
            itemName: "सदाचारस्मृतिः   ",
          },
          {
            index: "4",
            itemName: "तन्त्रसारसङ्ग्रहः   ",
          },
          {
            index: "5",
            itemName: "यतिप्रणवकल्पः   ",
          },
          {
            index: "6",
            itemName: "जयन्तीनिर्णयः   ",
          },
          {
            index: "7",
            itemName: "न्यासपद्धतिः   ",
          },
          {
            index: "8",
            itemName: "तिथिनिर्णयः   ",
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
