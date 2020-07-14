import React from "react";
import axios from "axios";
import "../App.css";
import { Button, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import AppMenu from "../common/AppMenu";
import MemoryGame from "./MemoryGame";

class GameMenu extends React.Component {
  state = {
    showMemoryGame: false,
  };
  render() {
    let { showMemoryGame } = this.state;
    const me = this;
    return (
      <div>
        <AppMenu></AppMenu>
        <p />
        <div className="app">
          <Row>
            <Col sm={{ size: "auto", offset: 1 }}>
              <ListGroup>
                <ListGroupItem
                  key="Memory"
                  color="success"
                  tag="a"
                  href=""
                  onClick={(event) => {
                    event.preventDefault();
                    showMemoryGame = true;
                    me.setState({
                      showMemoryGame: true,
                    });
                  }}
                >
                  Memory Game
                </ListGroupItem>
              </ListGroup>
            </Col>
            {showMemoryGame && <MemoryGame></MemoryGame>}
          </Row>
        </div>
      </div>
    );
  }
}
export default GameMenu;
