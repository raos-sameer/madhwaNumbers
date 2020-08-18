import React from "react";
import axios from "axios";
import {
  Col,
  Container,
  Row,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import AppMenu from "./common/AppMenu";
//import { isValidLoginDetails } from "../common/validate";
//import "./styles.css";
class OtherPage extends React.Component {
  state = {
    question: [],
    input: [],
    mapping: [],
    inputRequest: {
      code: "",
      input: [],
    },
  };
  handleSubmit = (event) => {
    let { selectedGame, input, mapping, inputRequest } = this.state;
    event.preventDefault();
    if (selectedGame === "oddManOut") {
      mapping = input.join(";");
    } else {
      mapping[0] = input.slice(0, 3).join(";");
      mapping[1] = input.slice(3, 6).join(";");
      mapping[2] = input.slice(6, 9).join(";");
      mapping[3] = input.slice(9, 12).join(";");
      mapping[4] = input.slice(12, 15).join(";");
    }
    inputRequest.input.push(mapping);
    inputRequest.code = selectedGame;
    this.submitForm(inputRequest);
  };
  submitForm = (inputRequest) => {
    const me = this;
    axios({
      url: "/memory/saveGameQuestion/",
      method: "POST",
      data: inputRequest,
    })
      .then((response) => {
        console.log("Data saved", response.data.error);
        const showMsg = response.data.error ? "error" : "success";
        me.setState({
          showText: showMsg,
        });
      })
      .catch(() => {
        console.log("Some error occurred");
      });
  };
  addOddManForm = () => {
    var indents = [];
    for (var index = 0; index < 7; index++) {
      indents.push(
        <Row>
          <Col md={4}>
            <FormGroup>
              <Input
                type="text"
                id={index}
                name={index}
                placeholder="Enter the question"
                onBlur={this.handleChange}
              />{" "}
            </FormGroup>
          </Col>
        </Row>
      );
    }
    return indents;
  };
  addMemoryForm = () => {
    var indents = [];
    var columnNo = -2;
    for (var index = 0; index < 5; index++) {
      columnNo = columnNo + 2;
      indents.push(
        <Row>
          <Col md={4}>
            <FormGroup>
              <Input
                type="text"
                id={columnNo + index}
                name={index}
                placeholder="Enter the question"
                onBlur={this.handleChange}
              />{" "}
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input
                type="text"
                id={columnNo + index + 1}
                name={index}
                placeholder="Enter the question"
                onBlur={this.handleChange}
              />{" "}
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input
                type="text"
                id={columnNo + index + 2}
                name={index}
                placeholder="Enter the answer"
                onBlur={this.handleChange}
              />{" "}
            </FormGroup>
          </Col>
        </Row>
      );
    }
    return indents;
  };
  handleChange = (event) => {
    let { input } = this.state;
    input[event.target.id] = event.target.value;
    console.log(input);
    this.setState({
      input: input,
    });
  };
  selectGame = (event) => {
    this.setState({
      selectedGame: event.target.value,
    });
  };
  render() {
    const { selectedGame } = this.state;
    return (
      <div>
        <AppMenu></AppMenu>
        <Container>
          <Row>
            <Col xs="6">
              <div className="headersection">
                <h3>Add new Question Section</h3>
                <div className="mainsection">
                  <Form>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="radio2"
                          value="memory"
                          onClick={this.selectGame}
                        />{" "}
                        Memory Game
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="radio2"
                          value="oddManOut"
                          onClick={this.selectGame}
                        />{" "}
                        Odd Man Out
                      </Label>
                    </FormGroup>

                    {selectedGame === "memory" && this.addMemoryForm()}
                    {selectedGame === "oddManOut" && this.addOddManForm()}
                    <FormGroup>
                      <Button onClick={this.handleSubmit}>Submit</Button>
                    </FormGroup>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default OtherPage;
