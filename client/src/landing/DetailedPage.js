import React from "react";
import { ListGroup, Row, Col, Container } from "reactstrap";
import "../App.css";
const DetailedPage = (props) => {
  const state = {
    showAnswerDetails: true,
    subCategory: [],
  };
  const showAnswer = () => {
    const answer = props.showAnswer;
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
    document.getElementById("DetailedAnswer").hidden = false;
    document.getElementById("DetailedAnswerTitle").hidden = false;
    document.getElementById("DetailedAnswerTitle").innerHTML =
      "<h3>" + category.title + "</h3>";
    document.getElementById(
      "DetailedAnswer"
    ).innerHTML = category.subCategory
      .map((eachSubCategory) => "<h5>" + eachSubCategory.itemName + "</h5>")
      .join("");
  };
  return (
    <div className="app">
      <Row>
        <Col sm={{ size: "auto", offset: 1 }}>
          <ListGroup>{props.displayList}</ListGroup>
        </Col>
        <div className="scrollmenu">{props.showDetails && showAnswer()}</div>
        <Container>
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
        </Container>
      </Row>
    </div>
  );
};

export default DetailedPage;
