import React from "react";
import axios from "axios";
import { ListGroup, ListGroupItem, Container, Row, Col } from "reactstrap";
import DetailedPage from "./DetailedPage";
import "./App.css";

import AppMenu from "./AppMenu";

class HomePage extends React.Component {
  state = {
    list: [],
    isLoading: true,
  };

  async getQuestionList() {
    const response = await fetch("/api/faqQuestionList");
    const body = await response.json();
    this.setState({
      list: body,
      isLoading: false,
    });
  }
  displayList = (questionList) => {
    if (questionList.length < 1) return null;

    return questionList.map((faq, index) => (
      <div className="faq_blocks">
        <ListGroupItem
          key={index}
          value={faq.code}
          color="success"
          tag="a"
          href="/detail"
        >
          {faq.question}
        </ListGroupItem>
      </div>
    ));
  };
  componentDidMount = () => {
    this.getQuestionList();
  };
  render() {
    const { isLoading, list } = this.state;
    if (isLoading) {
      return <div> Loading....</div>;
    }
    return (
      <div>
        <AppMenu></AppMenu>
        <p />
        <Container>
          <Row>
            <Col sm={{ size: "auto", offset: 1 }}>
              <ListGroup>{this.displayList(list)}</ListGroup>
            </Col>
            <Col sm={{ size: "auto", offset: 1 }}>
              .col-sm-auto .offset-sm-1
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
