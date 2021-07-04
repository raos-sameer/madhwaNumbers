import _ from "lodash";
import React, { useState } from "react";
import {
  Table,
  Message,
  Icon,
  Header,
  Image,
  Reveal,
  Button,
  Modal,
  Divider,
  Form,
  Grid,
  Segment,
} from "semantic-ui-react";
import ShowTimer from "./ShowTimer";
import Countdown from "react-countdown";
const tableData = [
  { easy: "John", medium: 15, hard: "Male" },
  { easy: "Amber", medium: 40, hard: "Female" },
  { easy: "Leslie", medium: 25, hard: "Other" },
  { easy: "Ben", medium: 70, hard: "Male" },
];

function TimerGame() {
  const data = tableData;
  const [question, setQuestion] = useState("");
  const handleClick = (question) => {
    console.log(question);
    setQuestion(question);
  };
  const Completionist = () => <span>You are good to go!</span>;

  return (
    <React.Fragment>
      <Header as="h2" color="teal">
        <Icon name="game" />
        <Header.Content>Timer</Header.Content>
      </Header>
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column>
          <Table padded celled color="blue">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>Easy</Table.HeaderCell>
                <Table.HeaderCell>Medium</Table.HeaderCell>
                <Table.HeaderCell>Hard</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {data.map(({ medium, hard, easy }) => (
                <Table.Row key={easy}>
                  <Table.Cell
                    selectable
                    negative
                    onClick={() => handleClick(easy)}
                  >
                    <Header color="blue" as="h2" textAlign="center">
                      Reveal Question
                    </Header>
                  </Table.Cell>
                  <Table.Cell
                    selectable
                    positive
                    onClick={() => handleClick(medium)}
                  >
                    <Header color="green" as="h2" textAlign="center">
                      Reveal Question
                    </Header>
                  </Table.Cell>
                  <Table.Cell selectable onClick={() => handleClick(hard)}>
                    <Header color="grey" as="h2" textAlign="center">
                      Reveal Question
                    </Header>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Grid.Column>

        <Grid.Column verticalAlign="middle">
          {question.length > 0 && (
            <Segment>
              <ShowTimer />
              <Icon name="graduation" size="large" floated="left" />
              <p>{question}</p>
              <Header size="large" color="blue">
                <Countdown date={Date.now() + 10000}>
                  <Completionist />
                </Countdown>
              </Header>
            </Segment>
          )}
        </Grid.Column>
      </Grid>

      <Divider vertical></Divider>
    </React.Fragment>
  );
}

export default TimerGame;
