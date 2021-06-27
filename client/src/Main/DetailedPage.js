import React, { useState } from "react";
import { Accordion, Menu, Input, Header, Icon } from "semantic-ui-react";
import ShowContent from "./ShowContent";

const DetailedPage = (props) => {
  const [activeItem, setActiveItem] = useState(
    props.detailedOutput[0].category[0].title
  );
  const [showContent, setShowContent] = useState(false);
  const [contenInfo, setContentInfo] = useState(
    props.detailedOutput[0].category[0].subCategory
  );
  return (
    <React.Fragment>
      <Header as="h2" color="teal">
        <Icon name="list" />
        <Header.Content>{props.userSelectedHeader}</Header.Content>
      </Header>
      <Menu pointing>
        {props.detailedOutput[0].category.map(({ title }, index) => (
          <Menu.Item
            name={title}
            active={activeItem === title}
            onClick={() => {
              setShowContent(true);
              setActiveItem(title);
              setContentInfo(
                props.detailedOutput[0].category[index].subCategory
              );
            }}
          />
        ))}
      </Menu>
      {showContent && <ShowContent contenInfo={contenInfo} />}
    </React.Fragment>
  );
};

export default DetailedPage;
