import React, { useEffect, useState } from "react";
import {
  Dropdown,
  Menu,
  Segment,
  Dimmer,
  Loader,
  Image,
  Message,
} from "semantic-ui-react";
import src from "../images/logo.svg";
const AppMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  const [showInfoOutput, setShowInfoOutput] = useState(false);
  const [showGameOutput, setShowGameOutput] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [userSelection, setUserSelection] = useState("");
  const [userSelectedHeader, setUserSelectedHeader] = useState("");
  const [detailedOutput, setDetailedOutput] = useState({});
  
  
  const handleClick = (event, data) => {
    setShowLoader(true);
    setUserSelection(data.name);
    setUserSelectedHeader(data.children);
  };
  const handleGames = (event, data) => {
    setUserSelectedHeader(data.name);
    console.log(data);
    setShowInfoOutput(false);
    setShowGameOutput(true);
  };
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
      setShowInfoOutput(true);
      setShowGameOutput(false);
    }
  };
  return (
    <div>
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
            <Dropdown.Item as="a" href="/memory" name="memory">
              Memory Game
            </Dropdown.Item>
            <Dropdown.Item as="a" href="/oddMan" name="oddMan">
              Find the odd man out
            </Dropdown.Item>
            <Dropdown.Item as="a" href="/qna" name="qna">
              Question and Answer
            </Dropdown.Item>
            <Dropdown.Item as="a" href="/wsth" name="wsth">
              WSTH
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </div>
  );
};

export default AppMenu;
