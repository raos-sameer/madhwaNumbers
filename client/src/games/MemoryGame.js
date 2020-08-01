import React from "react";
import axios from "axios";
import "../App.css";
import "./MemoryGame.css";
import { Button, Row, Alert } from "reactstrap";

class MemoryGame extends React.Component {
  state = {
    questionAnswer: [],
    duplicateQuestionAnswer: [],
    openedCards: 0,
    score: 0,
    previouslyOpenedCard: -1,
    buttonColor: [],
    winner: [],
    showWinnerText: false,
  };
  componentDidMount = () => {
    const mapping = [
      {
        question: ["Moola Roopa Of Ashwatthama", "Moola Roopa Of Shuka"],
        answer: "Rudra",
      },
      {
        question: ["Moola Roopa Of Bheema", "Moola Roopa Of Hanuma"],
        answer: "Vaayu",
      },
      {
        question: ["Who Killed Meghadoot Asur", "Shatrughna's brother"],
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
          disabled={
            buttonColor[index] === "warning" || buttonColor[index] === "success"
          }
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
      buttonColor,
      duplicateQuestionAnswer,
      questionAnswer,
      score,
    } = this.state;
    buttonColor[index] = "warning";
    score++;
    duplicateQuestionAnswer[index] = questionAnswer[index].split(";")[0];

    setTimeout(() => {
      this.validate(index);
    }, 2000);
    this.setState({
      buttonColor: buttonColor,
      score: score,
      duplicateQuestionAnswer: duplicateQuestionAnswer,
    });
  };
  validate = (index) => {
    let {
      duplicateQuestionAnswer,
      questionAnswer,
      openedCards,
      previouslyOpenedCard,
      buttonColor,
      winner,
      showWinnerText,
    } = this.state;

    if (openedCards === 1) {
      openedCards = 0;
      if (
        questionAnswer[index].split(";")[1] ===
        questionAnswer[previouslyOpenedCard].split(";")[1]
      ) {
        buttonColor[index] = "success";
        buttonColor[previouslyOpenedCard] = "success";
        winner.push(index);
        winner.push(previouslyOpenedCard);
        if (winner.length === questionAnswer.length) {
          showWinnerText = true;
        }
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
      showWinnerText: showWinnerText,
      winner: winner,
    });
  };
  render() {
    const { score, showWinnerText } = this.state;
    return (
      <div className="arrangeButtons">
        <Row>Score: (No. of clicks): {score}</Row>
        <Row>{this.displayMatrix()}</Row>
        {showWinnerText && (
          <Row>
            <Alert color="danger">Congratulations ---- Winner</Alert>
          </Row>
        )}
      </div>
    );
  }
}

export default MemoryGame;
