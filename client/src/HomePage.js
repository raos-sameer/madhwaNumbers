import React from "react";
import axios from "axios";
import { ListGroupItem } from "reactstrap";
import DetailedPage from "./DetailedPage";
import "./App.css";

import AppMenu from "./AppMenu";

class HomePage extends React.Component {
  state = {
    questionList: [],
    answer: [],
    isLoading: true,
    showDetails: false,
  };
  componentDidMount = () => {
    this.getQuestionList();
  };

  async getQuestionList() {
    const response = await fetch("/api/faqQuestionList");
    const body = await response.json();

    this.setState({
      questionList: body,
      isLoading: false,
    });
  }

  displayList = (questionList) => {
    if (questionList.length < 1) return null;

    return questionList.map((faq, index) => (
      <div className="faq_blocks">
        <ListGroupItem
          key={index}
          data-id={faq.code}
          color="success"
          tag="a"
          href=""
          onClick={this.showDetails.bind(this)}
        >
          {faq.question}
        </ListGroupItem>
      </div>
    ));
  };
  showDetails = (event) => {
    event.preventDefault();
    const code = event.currentTarget.dataset.id;
    this.setState({
      isLoading: true,
    });
    this.getAnswer(code);
  };
  async getAnswer(code) {
    const response = await fetch("/api/faqSpecificAnswer?code=" + code);
    const body = await response.json();

    this.setState({
      questionList: body,
      isLoading: false,
      showDetails: true,
      answer: body[0] && body[0].category,
    });

    //this.showAnswer();
  }

  render() {
    const { isLoading, questionList, showDetails, answer } = this.state;
    if (isLoading) {
      return <div> Loading....</div>;
    }
    return (
      <div>
        <AppMenu></AppMenu>
        <p />
        <DetailedPage
          displayList={this.displayList(questionList)}
          showDetails={showDetails}
          showAnswer={answer}
        ></DetailedPage>
      </div>
    );
  }
}

export default HomePage;
