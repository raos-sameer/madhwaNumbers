import React, { useState } from "react";
import { Accordion, Menu, Input } from "semantic-ui-react";
import ShowContent from "./ShowContent";

const level1Panels = [
  { key: "panel-1a", title: "Level 1A", content: "Level 1A Contents" },
  { key: "panel-ba", title: "Level 1B", content: "Level 1B Contents" },
];

const Level1Content = (
  <div>
    Welcome to level 1
    <Accordion.Accordion panels={level1Panels} />
  </div>
);

const level2Panels = [
  { key: "panel-2a", title: "Level 2A", content: "Level 2A Contents" },
  { key: "panel-2b", title: "Level 2B", content: "Level 2B Contents" },
];

const Level2Content = (
  <div>
    Welcome to level 2
    <Accordion.Accordion panels={level2Panels} />
  </div>
);

const rootPanels = [
  { key: "panel-1", title: "Level 1", content: { content: Level1Content } },
  { key: "panel-2", title: "Level 2", content: { content: Level2Content } },
];
const showRootPanels = (props) => {
  let rootPanels = [],
    i = 0,
    category = "";
  while (i < props.detailedOutput[0].category.length) {
    category = props.detailedOutput[0].category[i];
    rootPanels.push({
      key: "",
      title: category.title,
      content: "",
    });
    i++;
  }

  return rootPanels;
};
const showContent = () => {};
const DetailedPage = (props) => {
  const [activeItem, setActiveItem] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [contenInfo, setContentInfo] = useState(false);
  return (
    <React.Fragment>
      <Menu pointing>
        {props.detailedOutput[0].category.map(({ title }, index) => (
          <Menu.Item
            name={title}
            active={activeItem === title}
            onClick={() => {
              setShowContent(true);
              setContentInfo(
                props.detailedOutput[0].category[index].subCategory
              );
            }}
          />
        ))}
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      {showContent && <ShowContent contenInfo={contenInfo} />}
    </React.Fragment>
  );
};

export default DetailedPage;
