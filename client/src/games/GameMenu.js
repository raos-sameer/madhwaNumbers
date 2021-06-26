import React from "react";
import axios from "axios";
import "../App.css";
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  ButtonGroup,
  Button,
} from "reactstrap";
import AppMenu from "../common/AppMenu";
import MemoryGame from "./MemoryGame";
import OddManGame from "./OddManGame";
import TimerGame from "./TimerGame";

class GameMenu extends React.Component {
  state = {
    showMemoryGame: false,
    showOddManGame: false,
    showTimerGame: false,
  };
  render() {
    let { showMemoryGame, showOddManGame, showTimerGame } = this.state;
    const me = this;
    return (
      <div>
        <AppMenu></AppMenu>
        <p />
        <div className="app">
          <Row>
            {!showMemoryGame && !showOddManGame && !showTimerGame && (
              <Col sm={{ size: "auto", offset: 1 }}>
                <ButtonGroup>
                  <Button href="/memory">Memory Game</Button>
                  <Button href="/oddman">Odd man Game</Button>
                  <Button href="/timer">Timer Game</Button>
                  <Button href="/quiz">Quiz Game</Button>
                </ButtonGroup>
              </Col>
            )}
          </Row>
        </div>
      </div>
    );
  }
}
export default GameMenu;
