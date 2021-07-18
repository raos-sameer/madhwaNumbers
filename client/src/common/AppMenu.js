import React, { useEffect, useState } from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";
import src from "../images/logo.svg";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
const AppMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories, shallowEqual);

  useEffect(() => {
    getMenuItems();
  }, []);
  const getMenuItems = async () => {
    if (Object.keys(categories).length === 0) {
      const response = await fetch("/api/faqQuestionList");
      const body = await response.json();
      dispatch({ type: "CATEGORY_LIST", payload: body });
      setMenuItems(body);
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
              <Dropdown.Item as="a" href={"/detailed?code=" + code}>
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
        <Menu.Item position="right">
          <Dropdown text="Change Language (Upcoming)" pointing>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>देवनागरी</Dropdown.Item>
              <Dropdown.Item>ಕನ್ನಡ</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
        <Menu.Menu></Menu.Menu>
      </Menu>
    </div>
  );
};

export default AppMenu;
