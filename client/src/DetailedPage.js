import React, { useState } from "react";
import {
  ListGroup,
  Alert,
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import "./App.css";
const DetailedPage = (props) => {
  const showAnswer = () => {
    console.log("answer", props.showAnswer);
    const answer = props.showAnswer;
    return answer.map((category, index) => (
      <div className="detailedAnswer">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({
                active: activeTab === JSON.stringify(index),
              })}
              onClick={() => {
                toggle(JSON.stringify(index));
              }}
            >
              {category.title}
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId={JSON.stringify(index)}>
            <Row>
              <Col sm="12">
                {category.subCategory.map((eachSubCategory, index) => (
                  <div className="SubCategory">
                    <Alert color="primary">{eachSubCategory.itemName}</Alert>
                  </div>
                ))}
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    ));
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
        {props.showDetails && showAnswer()}
      </Row>
    </div>
  );
};

export default DetailedPage;
