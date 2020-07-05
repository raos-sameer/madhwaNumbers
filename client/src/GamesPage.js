import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardGroup,
  Row,
  Col,
  Alert,
} from "reactstrap";
import AppMenu from "./AppMenu";
class GamesPage extends React.Component {
  state = {
    questionList: [],
    isLoading: true,
    noOfOpenCards: 0,
    toMatch: "",
    found: false,
    openCards: [],
  };
  showClueQuestion = (button) => {
    let { openCards, noOfOpenCards } = this.state;
    button.preventDefault();
    const toggle = button.target.id;

    openCards[toggle] = true;
    this.setState({
      noOfOpenCards: noOfOpenCards + 1,
      openCards: openCards,
      toMatch: button.target.value,
    });
    this.checkForMatch(button.target.value);
  };

  checkForMatch = (value) => {
    // Assuming both open cards are wrong match
    //this.setInitialValues();
    let { noOfOpenCards, openCards, toMatch } = this.state;
    let openedCards = [];
    var me = this;
    for (var i = 0; i < 6; i++) {
      if (openCards[i]) {
        openedCards.push(i);
      }
    }

    console.log(toMatch, value, openedCards);

    if (toMatch === value) {
      console.log("matcg found");
      this.setState({
        found: true,
      });
    }
    if (noOfOpenCards === 1 && toMatch != value) {
      setTimeout(function () {
        me.setInitialValues();
      }, 2000);
    }
  };

  setInitialValues = () => {
    let openCards = [];
    for (var i = 0; i < 6; i++) {
      openCards.push(false);
    }
    this.setState({
      openCards: openCards,
    });
  };
  componentDidMount = () => {
    this.setInitialValues();
    this.getMemoryGame();
  };
  async getMemoryGame() {
    const response = await fetch("/memory/findMemory");
    const body = await response.json();

    this.setState({
      questionList: body,
      isLoading: false,
    });
  }
  getQuestionList = (questionList, rowNo) => {
    if (questionList.length < 1) return null;

    console.log(questionList);
    return questionList.map((card, index) =>
      card.category.map((clues, clueIndex) => (
        <Row sm="1">
          <Col sm="6">
            <CardGroup>
              <Card body>
                {this.state.openCards[rowNo + clueIndex] && (
                  <CardTitle>
                    {this.state.found ? clues.answer : clues[rowNo + clueIndex]}
                  </CardTitle>
                )}
                {!this.state.openCards[rowNo + clueIndex] && (
                  <Button
                    id={JSON.stringify(rowNo + clueIndex)}
                    value={clues.answer}
                    onClick={this.showClueQuestion.bind(this)}
                  >
                    Find Match
                  </Button>
                )}
              </Card>
              <Card body>
                {this.state.openCards[rowNo + clueIndex + 1] && (
                  <CardTitle>
                    {this.state.found ? clues.answer : clues[rowNo + clueIndex]}
                  </CardTitle>
                )}
                {!this.state.openCards[rowNo + clueIndex + 1] && (
                  <Button
                    id={JSON.stringify(rowNo + clueIndex + 1)}
                    value={clues.answer}
                    onClick={this.showClueQuestion.bind(this)}
                  >
                    Find Match
                  </Button>
                )}
              </Card>
            </CardGroup>
          </Col>
        </Row>
      ))
    );
  };
  render() {
    const { isLoading, questionList } = this.state;
    if (isLoading) {
      return <div> Loading....</div>;
    }
    return (
      <div>
        <AppMenu></AppMenu> <p />
        <div>
          <h3>Memore Game</h3>
          <p />
          {this.getQuestionList(questionList, 0)}
          {this.getQuestionList(questionList, 1)}
          {this.getQuestionList(questionList, 2)}
        </div>
      </div>
    );
  }
}

export default GamesPage;
