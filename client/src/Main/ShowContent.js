import React from "react";
import { Message, List, Table } from "semantic-ui-react";
const ShowContent = (props) => {
  return (
    <Message>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.contentInfo.map(({ itemName }) => (
            <Table.Row key={itemName}>
              <Table.Cell>{itemName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Message>
  );
};

export default ShowContent;
