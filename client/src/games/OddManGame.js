import React from "react";
import axios from "axios";
import "../App.css";
import "./MemoryGame.css";
import { Button, Row, Col, Alert } from "reactstrap";

class OddManGame extends React.Component {
  state = {
    isLoading: true,
    questionAnswer: [],
    hintText: "Hint",
    isCorrect: false,
    disableAll: false,
    score: 0,
    duplicateQuestionAnswer: [],
    openedCards: 0,
    previouslyOpenedCard: -1,
    buttonColor: [],
    winner: [],
    showWinnerText: false,
  };
  async componentDidMount() {
    const mapping = await this.initialise();
    this.OddManGameLogic(mapping.length);
    this.setState({
      questionAnswer: mapping,
      isLoading: false,
    });
  }
  OddManGameLogic = (length) => {
    const random = this.random(length);
    this.setState({
      random: random,
    });
  };
  initialise = () => {
    let response = [
      "Yudhishthira;Bheema;Arjuna;Nakula;Ravana;Ravana;Yuga",
      "Prithvi;Jala;Tejas;Vaayu;Grahana Indriya;5 Tanmaatras;Grahana Indriya",
      "Shantanu;Devaki;Bheeshma;Ganga Devi;Devavrata;Devaki;Pandu purvaja",
      "Krishna;Muchukunda;Kaalyavana;Matsya;Ranachhoda;Bhagawat 10 Skanda;Matsya",
      "Arjuna;Drupada;Draupadi;Matsya-Bheda;Ghatotkacha;Swayamvara;Ghatotkacha",
      "Ghatotkacha;Hidimba;Krishna;Bheema;Hidimbi;After Laakshaa Gruha;Krishna",
      "Virat Raja;Bheeshma-Pratijnya;Bheema as Cook;Bruhannala;Kichaka;Bheeshma-Pratijnya;Ajnyaat-Vaas",
      "Hanumaan;Sita;Chudamani;Kumbhakarna;Ashoka Vaatika;Sundarkaanda;Kumbhakarna",
    ];
    let mapping = [];

    response.map((eachItem, index) => {
      let question = [];
      let hint = "";
      let answer = "";
      question.push(eachItem.split(";")[0]);
      question.push(eachItem.split(";")[1]);
      question.push(eachItem.split(";")[2]);
      question.push(eachItem.split(";")[3]);
      question.push(eachItem.split(";")[4]);
      hint = eachItem.split(";")[5];
      answer = eachItem.split(";")[6];
      mapping.push({
        question: question,
        hint: hint,
        answer: answer,
      });
    });
    return mapping;
  };
  random = (length) => {
    return Math.floor(Math.random() * length);
  };
  // {this.includeButton(index, question)}
  displayMatrix = () => {
    const { questionAnswer, random } = this.state;

    return questionAnswer[random].question.map((question, index) => (
      <Col xs="8" key={index}>
        <div className="btn-arrange">{this.includeButton(index, question)}</div>
      </Col>
    ));
  };
  includeButton = (index, question) => {
    const {
      questionAnswer,
      buttonColor,
      disableAll,
      isCorrect,
      random,
    } = this.state;
    return (
      <Button
        color={
          isCorrect && questionAnswer[random].answer === question
            ? "success"
            : disableAll
            ? "danger"
            : buttonColor[index]
        }
        key={index}
        disabled={disableAll}
        value={index}
        onClick={(event) => {
          event.preventDefault();
          this.validateAnswer(question);
        }}
      >
        {question}
      </Button>
    );
  };

  validateAnswer = (question) => {
    let { questionAnswer, random, score } = this.state;
    const validate = question === questionAnswer[random].answer;
    score = validate ? ++score : score;
    this.setState({
      isCorrect: validate,
      score: score,
      disableAll: true,
    });
  };
  changeBtnText = () => {
    let { random, questionAnswer } = this.state;
    this.setState({
      hintText: questionAnswer[random].hint,
    });
  };

  showHint = (event) => {
    const { questionAnswer, hintText } = this.state;

    return (
      <div className="btn-arrange">
        <Button
          color="warning"
          disabled={hintText !== "Hint"}
          onClick={(event) => {
            event.preventDefault();
            this.changeBtnText();
          }}
        >
          {hintText}
        </Button>
      </div>
    );
  };
  nextQuestion = () => {
    const { questionAnswer } = this.state;
    this.OddManGameLogic(questionAnswer.length);
    this.displayMatrix();
    this.setState({
      isCorrect: false,
      disableAll: false,
      hintText: "Hint",
    });
  };
  render() {
    const { score, disableAll, isLoading } = this.state;
    if (isLoading) {
      return <div> Loading....</div>;
    }
    return (
      <div>
        <h3 className="header"> Find Odd Man Out</h3>
        <div className="arrangeButtons">
          <Row>Score: (No. of right answers): {score}</Row>
          <Row>{this.displayMatrix()}</Row>
          <Row>{this.showHint()}</Row>
          {disableAll && (
            <Row>
              <Button color="info" onClick={this.nextQuestion}>
                Next Question
              </Button>
            </Row>
          )}
        </div>
      </div>
    );
  }
}

export default OddManGame;
