import React, { useEffect, useState } from "react";
import {
  Dropdown,
  Menu,
  Segment,
  Dimmer,
  Loader,
  Image,
} from "semantic-ui-react";
import DetailedPage from "./DetailedPage";
import src from "../images/logo.svg";
const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [showOutput, setShowOutput] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [userSelection, setUserSelection] = useState("");
  const [userSelectedHeader, setUserSelectedHeader] = useState("");
  const [detailedOutput, setDetailedOutput] = useState({});
  useEffect(() => {
    getMenuItems();
  }, [userSelection]);

  const getMenuItems = async () => {
    if (userSelection === "") {
      const response = await fetch("/api/faqQuestionList");
      const body = await response.json();

      setMenuItems(body);
    } else {
      const response = await fetch(
        "/api/faqSpecificAnswer?code=" + userSelection
      );
      const body = await response.json();
      setShowLoader(false);
      setDetailedOutput(body);
      setShowOutput(true);
    }
  };
  const handleClick = (event, data) => {
    setShowLoader(true);
    setUserSelection(data.name);
    setUserSelectedHeader(data.children);
  };
  return (
    <React.Fragment>
      <Menu inverted color="blue" size="large">
        <Menu.Item>
          <Image src={src} size="mini" />
        </Menu.Item>
        <Dropdown text="Categories" pointing className="link item">
          <Dropdown.Menu>
            {menuItems.map(({ question, code }) => (
              <Dropdown.Item name={code} onClick={handleClick}>
                {question}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown text="Games" pointing className="link item">
          <Dropdown.Menu>
            <Dropdown.Item onClick={handleClick}>Memory Game</Dropdown.Item>
            <Dropdown.Item onClick={handleClick}>
              Find the odd man out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
      {showOutput && (
        <DetailedPage
          userSelectedHeader={userSelectedHeader}
          detailedOutput={detailedOutput}
        />
      )}
      {showLoader && (
        <Segment>
          <Dimmer active inverted>
            <Loader size="large">Loading</Loader>
          </Dimmer>
        </Segment>
      )}
    </React.Fragment>
  );
};
export default MenuPage;
