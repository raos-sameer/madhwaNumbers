import React from "react";
import axios from "axios";
import "../App.css";
import "./MemoryGame.css";
import { Button, Row, Col } from "reactstrap";
import AppMenu from "../common/AppMenu";

class MemoryGame extends React.Component {
  state = {
    questionAnswer: [],
    duplicateQuestionAnswer: [],
    openedCards: 0,
    previouslyOpenedCard: -1,
    buttonColor: "info",
  };
  componentDidMount = () => {
    const mapping = [
      {
        question: ["Who is Ashwatthama", "Who is Shuka"],
        answer: "Rudra",
      },
      {
        question: ["Bheema", "Hanuma"],
        answer: "Vaayu",
      },
      {
        question: ["Who Killed Meghadoot Asur", "Sumitra's brother"],
        answer: "Lakshman",
      },
      {
        question: ["Poorvashrama Name Vasudeva", "Paajaka"],
        answer: "Madhwacharya",
      },
      {
        question: ["Son of Satyavati Devi", "Veda vibhaaga Kartru"],
        answer: "Vedavyaas",
      },
    ];
    let questionAnswer = [];
    const duplicateQuestionAnswer = [];
    const color = [];
    mapping.map((clues, index) =>
      clues.question.map(
        (eachClue) => (
          questionAnswer.push(eachClue + ";" + clues.answer),
          duplicateQuestionAnswer.push("Find Match"),
          color.push("info")
        )
      )
    );
    questionAnswer = this.random(questionAnswer);
    this.setState({
      questionAnswer: questionAnswer,
      duplicateQuestionAnswer: duplicateQuestionAnswer,
      buttonColor: color,
    });
  };
  random = (nums) => {
    var ranNums = [],
      i = nums.length,
      j = 0;
    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      ranNums.push(nums[j]);
      nums.splice(j, 1);
    }
    console.log(ranNums);
    return ranNums;
  };
  displayMatrix = () => {
    const { duplicateQuestionAnswer, buttonColor } = this.state;
    const me = this;
    return duplicateQuestionAnswer.map((question, index) => (
      <div className="btn-arrange">
        <Button
          color={buttonColor[index]}
          key={index}
          value={index}
          onClick={(event) => {
            event.preventDefault();
            me.changeBtnText(index);
          }}
        >
          {question}
        </Button>
      </div>
    ));
  };

  changeBtnText = (index) => {
    let {
      duplicateQuestionAnswer,
      questionAnswer,
      openedCards,
      previouslyOpenedCard,
      buttonColor,
    } = this.state;
    buttonColor[index] = "warning";
    if (openedCards === 1) {
      openedCards = 0;
      if (
        questionAnswer[index].split(";")[1] ===
        questionAnswer[previouslyOpenedCard].split(";")[1]
      ) {
        buttonColor[index] = "success";
        buttonColor[previouslyOpenedCard] = "success";
        duplicateQuestionAnswer[index] = questionAnswer[index];
        duplicateQuestionAnswer[previouslyOpenedCard] =
          questionAnswer[previouslyOpenedCard];
      } else {
        duplicateQuestionAnswer[index] = "Find Match";
        duplicateQuestionAnswer[previouslyOpenedCard] = "Find Match";
        buttonColor[index] = "info";
        buttonColor[previouslyOpenedCard] = "info";
      }
    } else {
      openedCards++;
      duplicateQuestionAnswer[index] = questionAnswer[index].split(";")[0];
    }

    this.setState({
      duplicateQuestionAnswer: duplicateQuestionAnswer,
      previouslyOpenedCard: index,
      openedCards: openedCards,
    });
  };
  render() {
    return (
      <div className="arrangeButtons">
        <Row>{this.displayMatrix()}</Row>
      </div>
    );
  }
}

export default MemoryGame;