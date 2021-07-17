import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import binoculars from "../images/binoculars.svg";
import wsth from "../images/wsth.svg";
import memory from "../images/memory.svg";
import timer from "../images/timer.svg";
const MainPageContent = (props) => (
    <>
  <Card.Group itemsPerRow={2}>
    <Card>
      <Card.Content>
      <Image src={memory} size="mini" />
        <Card.Header>Memory Game</Card.Header>
        <Card.Meta>Learn and Play!</Card.Meta>
        <Card.Description>
          Open anyone of the closed cards and it will reveal a question. Match the corresponding correct
          card.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <div className="ui two buttons">
          <Button fluid basic color="green" onClick={()=> props.setUserSelectedHeader("memory")}>
            Play
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
      <Image src={binoculars} size="mini" />
        <Card.Header>Find the Odd Man Out</Card.Header>
        <Card.Meta>Know your history!</Card.Meta>
        <Card.Description>
          You will shown with question with some options. Identify the out-of-the-context option.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button fluid basic color="green" onClick={()=> props.setUserSelectedHeader("oddMan")}>
            Play
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
      <Image src={timer} size="mini" />
        <Card.Header>Simple Timer Game</Card.Header>
        <Card.Meta>You have only 10 seconds!</Card.Meta>
        <Card.Description>
          You will be given 10 seconds to answer the question. Are you ready for this challenge?!
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green" onClick={()=> props.setUserSelectedHeader("qna")}>
            Play
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
      <Image src={wsth} size="mini" />
        <Card.Header>Who said to whom</Card.Header>
        <Card.Meta>Do you know these famous lines?!</Card.Meta>
        <Card.Description>
          Do you remember these statements. Up for this?!
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green" onClick={()=> props.setUserSelectedHeader("wsth")}>
            Play
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
  </>
);

export default MainPageContent;