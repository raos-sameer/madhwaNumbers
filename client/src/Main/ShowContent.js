import React from "react";
import { Icon, List } from "semantic-ui-react";
const ShowContent = (props) => {
  return (
    <List animated size="big">
      {props.contenInfo.map(({ itemName }) => (
        <List.Item>
          <List.Content>
            <List.Header>{itemName}</List.Header>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default ShowContent;
