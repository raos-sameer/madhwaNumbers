import React from "react";
import axios from "axios";
import "../App.css";
import "./MemoryGame.css";
import { Button, Row, Col, Alert } from "reactstrap";
import { Card, Header, Icon, Message, Label } from "semantic-ui-react";
import MenuPage from "../Main/Menu";

import AppMenu from "../common/AppMenu";

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
  initialise = () => {
    var response = [
      "Moola Roopa Of Ashwatthama;Moola Roopa Of Shuka;Rudra",
      "Moola Roopa Of Bheema;Moola Roopa Of Hanuma;Vaayu",
      "Who Killed Meghadoot Asur;Shatrughna's brother;Lakshman",
      "Poorvashrama Name Vasudeva;Paajaka;Madhwacharya",
      "Son of Satyavati Devi;Veda vibhaaga Kartru;Vedavyaas",
    ];
    let mapping = [];

    response.map((eachItem, index) => {
      let question = [];
      let answer = "";
      question.push(eachItem.split(";")[0]);
      question.push(eachItem.split(";")[1]);
      answer = eachItem.split(";")[2];
      mapping.push({
        question: question,
        answer: answer,
      });
    });
    return mapping;
  };
  componentDidMount = () => {
    const mapping = this.initialise();
    let questionAnswer = [];
    const duplicateQuestionAnswer = [];
    const color = [];
    mapping.map((clues) =>
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
  // {this.includeButton(index, question)}
  displayMatrix = () => {
    const { duplicateQuestionAnswer } = this.state;

    return duplicateQuestionAnswer.map((question, index) => (
      <Col xs="6" key={index}>
        <div className="btn-arrange">{this.includeButton(index, question)}</div>
      </Col>
    ));
  };
  includeButton = (index, question) => {
    const { buttonColor } = this.state;
    return (
      <Button
        color={buttonColor[index]}
        key={index}
        disabled={
          buttonColor[index] === "warning" || buttonColor[index] === "success"
        }
        value={index}
        onClick={(event) => {
          event.preventDefault();
          this.changeBtnText(index);
        }}
      >
        {question}
      </Button>
    );
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
        buttonColor[index] = buttonColor[previouslyOpenedCard] = "success";
        winner.push(index);
        winner.push(previouslyOpenedCard);
        if (winner.length === questionAnswer.length) {
          showWinnerText = true;
        }
        duplicateQuestionAnswer[index] = questionAnswer[index];
        duplicateQuestionAnswer[previouslyOpenedCard] =
          questionAnswer[previouslyOpenedCard];
      } else {
        duplicateQuestionAnswer[index] = duplicateQuestionAnswer[
          previouslyOpenedCard
        ] = "Find Match";
        buttonColor[index] = buttonColor[previouslyOpenedCard] = "info";
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
      <div>
        <AppMenu />
        <Header as="h2" color="teal">
          <Icon name="game" />
          <Header.Content>Memory Game</Header.Content>
        </Header>
        <Message style={{ marginLeft: "4%", marginRight: "14%" }}>
          <Label size="medium" color="brown" style={{ marginBottom: "3%" }}>
            Score : {score}
          </Label>

          <Row>{this.displayMatrix()}</Row>
          {showWinnerText && (
            <Row>
              <Header as="h2" color="olive">
                <Icon name="winner" />
                <Header.Content>Congratulations! You Win</Header.Content>
              </Header>
            </Row>
          )}
        </Message>
      </div>
    );
  }
}

export default MemoryGame;
