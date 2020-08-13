import React from "react";
import axios from "axios";
import "../App.css";
import { Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import AppMenu from "../common/AppMenu";
import MemoryGame from "./MemoryGame";
import OddManGame from "./OddManGame";

class GameMenu extends React.Component {
  state = {
    showMemoryGame: false,
    showOddManGame: false,
  };
  render() {
    let { showMemoryGame, showOddManGame } = this.state;
    const me = this;
    return (
      <div>
        <AppMenu></AppMenu>
        <p />
        <div className="app">
          <Row>
            {!showMemoryGame && !showOddManGame && (
              <Col sm={{ size: "auto", offset: 1 }}>
                <ListGroup>
                  <ListGroupItem
                    key="Memory"
                    color="success"
                    tag="a"
                    href=""
                    onClick={(event) => {
                      event.preventDefault();
                      me.setState({
                        showMemoryGame: true,
                      });
                    }}
                  >
                    Memory Game
                  </ListGroupItem>
                  <ListGroupItem
                    key="OddManGame"
                    color="success"
                    tag="a"
                    href=""
                    onClick={(event) => {
                      event.preventDefault();
                      me.setState({
                        showMemoryGame: false,
                        showOddManGame: true,
                      });
                    }}
                  >
                    Find Odd-Man Out
                  </ListGroupItem>
                </ListGroup>
              </Col>
            )}
            {showMemoryGame && <MemoryGame></MemoryGame>}
            {showOddManGame && <OddManGame></OddManGame>}
          </Row>
        </div>
      </div>
    );
  }
}
export default GameMenu;
