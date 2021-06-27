import React from "react";
import { Message, List } from "semantic-ui-react";
const ShowContent = (props) => {
  return (
    <Message>
      <List animated size="big">
        {props.contenInfo.map(({ itemName }) => (
          <List.Item>
            <List.Content>
              <List.Header>{itemName}</List.Header>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Message>
  );
};

export default ShowContent;
