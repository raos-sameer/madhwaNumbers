import React from "react";
import axios from "axios";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import DetailedPage from "./DetailedPage";

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
    if (questionList.length) return null;

    console.log("questionList:", questionList);
    return questionList.map((faq, index) => (
      <div>
        <ListGroupItem color="success" tag="a" href="/detail">
          {faq.question}
        </ListGroupItem>
      </div>
    ));
  };
  redirectPage = (event) => {
    event.preventDefault();
    console.log(event.target);
    return <div>Sameer is here</div>;
  };
  componentDidMount = () => {
    //this.getQuestionList();
  };
  render() {
    const { isLoading, list } = this.state;
    if (isLoading) {
      return <div> Loading....</div>;
    }
    console.log(list);
    return (
      <div>
        <AppMenu></AppMenu>
        <p />
        <h3>Buttons </h3>
        <ListGroup>
          {list.map((faq) => (
            <Button
              key={faq.code}
              value={faq.code}
              color="primary"
              size="lg"
              block
              onClick={this.redirectPage.bind(this)}
            >
              {faq.question}
            </Button>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default HomePage;
