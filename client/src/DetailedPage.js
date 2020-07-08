import React, { useState } from "react";
import { ListGroup, Row, Col } from "reactstrap";
import "./App.css";
const DetailedPage = (props) => {
  const state = {
    showAnswerDetails: true,
    subCategory: [],
  };
  const showAnswer = () => {
    console.log("answer", props.showAnswer);
    const answer = props.showAnswer;
    //state.showAnswerDetails = false;
    return answer.map((category, index) => (
      <a
        href=""
        key={index}
        value={category.title}
        onClick={(event) => {
          event.preventDefault();
          handleClick(category);
        }}
      >
        {category.title}
      </a>
    ));
  };
  const handleClick = (category) => {
    state.showAnswerDetails = false;
    console.log(category);
    document.getElementById("DetailedAnswer").hidden = false;
    document.getElementById("DetailedAnswerTitle").hidden = false;
    document.getElementById("DetailedAnswerTitle").innerHTML =
      "<div><p/><h1>" + category.title + "</h1></div>";
    document.getElementById(
      "DetailedAnswer"
    ).innerHTML = category.subCategory.map(
      (eachSubCategory) =>
        '<div className="detailed"><p/><h3>' +
        eachSubCategory.itemName +
        "</h3><br/></div>"
    );
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
        <div className="scrollmenu">{props.showDetails && showAnswer()}</div>
        <div
          id="DetailedAnswerTitle"
          className="detailedTitle"
          hidden={state.showAnswerDetails}
        ></div>
        <div
          id="DetailedAnswer"
          className="detailed"
          hidden={state.showAnswerDetails}
        ></div>
      </Row>
    </div>
  );
};

export default DetailedPage;
