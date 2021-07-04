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
import Memory from "../Game/Memory";
import MemoryGame from "../games/MemoryGame";
import OddManGame from "../games/OddManGame";
import TimerGame from "../games/TimerGame";
const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [showInfoOutput, setShowInfoOutput] = useState(false);
  const [showGameOutput, setShowGameOutput] = useState(false);
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
      setShowInfoOutput(true);
      setShowGameOutput(false);
    }
  };
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
            <Dropdown.Item name="memory" onClick={handleGames}>
              Memory Game
            </Dropdown.Item>
            <Dropdown.Item name="oddMan" onClick={handleGames}>
              Find the odd man out
            </Dropdown.Item>
            <Dropdown.Item name="timer" onClick={handleGames}>
              Timer Game
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
      {showInfoOutput && (
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
      {userSelectedHeader === "memory" && (
        <MemoryGame userSelectedHeader={userSelectedHeader} />
      )}
      {userSelectedHeader === "oddMan" && (
        <OddManGame userSelectedHeader={userSelectedHeader} />
      )}
      {userSelectedHeader === "timer" && (
        <TimerGame userSelectedHeader={userSelectedHeader} />
      )}
    </React.Fragment>
  );
};
export default MenuPage;
