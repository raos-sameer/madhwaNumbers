const express = require("express");
const router = express.Router();
const memoryGame = require("../models/memoryGame");

const memoryMock = [
  "Moola Roopa Of Ashwatthama;Moola Roopa Of Shuka;Rudra",
  "Moola Roopa Of Bheema;Moola Roopa Of Hanuma;Vaayu",
  "Who Killed Meghadoot Asur;Shatrughna's brother;Lakshman",
  "Poorvashrama Name Vasudeva;Paajaka;Madhwacharya",
  "Son of Satyavati Devi;Veda vibhaaga Kartru;Vedavyaas",
];

//Routes
router.get("/memory", (req, res) => {
  // memoryGame
  //   .find({})
  //   .then((data) => {
  //     res.json(memoryMock);
  //   })
  //   .catch((error) => {
  //     console.log("Error:", error);
  //   });

  res.json(memoryMock);
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
