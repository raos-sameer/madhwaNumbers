import React, { useEffect, useState } from "react";
import { Card, Header, Icon, Message } from "semantic-ui-react";
import src from "../images/FindMatch.svg";

const Memory = (props) => {
  const [apiResponse, setApiResponse] = useState({});
  useEffect(() => {
    getGameInfo();
  }, []);
  const getGameInfo = async () => {
    const response = await fetch("/game/memory");
    const body = await response.json();

    console.log(body);
    orchestractResponse(body);
  };
  const orchestractResponse = (response) => {
    let mapping = [];
    response.map((eachItem) => {
      let question = [];
      let answer = "";
      question.push(eachItem.split(";")[0]);
      question.push(eachItem.split(";")[1]);
      answer = eachItem.split(";")[2];
      mapping.push({
        question: question,
        answer: answer,
      });
    });
    console.log(mapping);
    setApiResponse(mapping);
  };
  const intialCard = () => {
    let i = 0;
    let initialCardStatus = [];
    while (i < apiResponse.length * 2) {
      initialCardStatus.push(
        <React.Fragment>
          <Card key={i} name={i} onClick={handleClick} raised image={src}>
            {}
          </Card>
        </React.Fragment>
      );
      i++;
    }
    return initialCardStatus;
  };
  const handleClick = (event, data) => {
    console.log(data, event);
  };
  return (
    <React.Fragment>
      <Header as="h2" color="teal">
        <Icon name="game" />
        <Header.Content>{props.userSelectedHeader}</Header.Content>
      </Header>
      <Message style={{ marginLeft: "5%", width: "70%" }}>
        <Card.Group centered itemsPerRow={2}>
          {intialCard()}
        </Card.Group>
      </Message>
    </React.Fragment>
  );
};

export default Memory;
