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
} from "reactstrap";
import AppMenu from "./common/AppMenu";
//import { isValidLoginDetails } from "../common/validate";
//import "./styles.css";
class QuestionSet extends React.Component {
  state = {
    faqSection: {},
    items: {
      question: "",
      code: "",
      category: [
        {
          title: "",
          subCategory: [
            {
              itemName: "",
            },
          ],
        },
      ],
    },
  };
  handleChange = (event) => {
    let { items } = this.state;

    if (event.target.name === "title") {
      items.category[0].title = event.target.value;
    } else if (event.target.name === "subCategory") {
      items.category[0].subCategory[event.target.id].itemName =
        event.target.value;
      items.category[0].subCategory[event.target.id].index = event.target.id;
    } else {
      items[event.target.name] = event.target.value;
    }
    this.setState({
      items: items,
    });
  };
  showitemNameTextBoxes = (event) => {
    let { items } = this.state;
    return items.category[0].subCategory.map((faq, index) => (
      <div key={index}>
        <Input
          type="text"
          name="subCategory"
          id={index}
          index={index}
          placeholder="Enter Subcategory"
          onChange={this.handleChange}
        />
      </div>
    ));
  };
  addItem = () => {
    let { items } = this.state;
    items.category[0].subCategory.push({ itemName: "" });
    this.setState({
      items: items,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { items } = this.state;
    const me = this;
    axios({
      url: "/faq/saveAnswer/",
      method: "POST",
      data: items,
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
  render() {
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
                    <FormGroup>
                      <Input
                        type="text"
                        name="code"
                        id="code"
                        placeholder="Enter Section Code (eg: avatars)"
                        onChange={this.handleChange}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Input
                        type="text"
                        name="title"
                        id="categoryTitle"
                        placeholder="Enter Category Title (eg: Mahabharata)"
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup></FormGroup>
                    <FormGroup>{this.showitemNameTextBoxes()}</FormGroup>
                    <FormGroup>
                      <Button onClick={this.addItem}>
                        Add another subCategory
                      </Button>
                    </FormGroup>

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

export default QuestionSet;
