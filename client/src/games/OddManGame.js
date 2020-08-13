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
    return [
      {
        question: ["Yudhishthira1", "Bheema", "Arjuna", "Nakula", "Ravana"],
        answer: "Ravana",
        hint: "Yuga",
      },
      {
        question: ["Prithvi2", "Jala", "Tejas", "Vaayu", "Grahana Indriya"],
        hint: "5 Tanmaatras",
        answer: "Grahana Indriya",
      },
      {
        question: ["Shantanu", "Devaki", "Bheeshma", "Ganga Devi", "Devavrata"],
        answer: "Devaki",
        hint: "Pandu purvaja",
      },
      {
        question: [
          "Krishna",
          "Muchukunda",
          "Kaalyavana",
          "Matsya",
          "Ranachhoda",
        ],
        hint: "Bhagawat 10 Skanda",
        answer: "Matsya",
      },
      {
        question: [
          "Arjuna",
          "Drupada",
          "Draupadi",
          "Matsya-Bheda",
          "Ghatotkacha",
        ],
        answer: "Ghatotkacha",
        hint: "Swayamvara",
      },
      {
        question: ["Ghatotkacha", "Hidimba", "Krishna", "Bheema", "Hidimbi"],
        hint: "After Laakshaa Gruha",
        answer: "Krishna",
      },
      {
        question: [
          "Virat Raja",
          "Bheeshma-Pratijnya",
          "Bheema as Cook",
          "Bruhannala",
          "Kichaka",
        ],
        answer: "Bheeshma-Pratijnya",
        hint: "Ajnyaat-Vaas",
      },
      {
        question: [
          "Hanumaan",
          "Sita",
          "Chudamani",
          "Kumbhakarna",
          "Ashoka Vaatika",
        ],
        hint: "Sundarkaanda",
        answer: "Kumbhakarna",
      },
    ];
  };
  random = (length) => {
    const randomNo = Math.floor(Math.random() * length);
    return randomNo;
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
