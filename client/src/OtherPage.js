import React, { useState } from "react";
import {
  ListGroup,
  Alert,
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import "./App.css";
const OtherPage = (props) => {
  const showAnswer = () => {
    console.log("answer", props.showAnswer);
    const answer = props.showAnswer;
    return answer.map((category, index) => <a href="#home">Home</a>);
  };
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className="app">
      <Row>
        <Col sm={{ size: "auto", offset: 1 }}>
          <ListGroup>{props.displayList}</ListGroup>
        </Col>
        <div class="scrollmenu">{props.showDetails && showAnswer()}</div>
      </Row>
    </div>
  );
};

export default OtherPage;
