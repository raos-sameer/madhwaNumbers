import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import AppMenu from "./AppMenu";
const DetailedPage = (props) => {
  console.log("Props::", props);
  return (
    <div>
      <AppMenu></AppMenu>
      <p />
      <h3>Buttons </h3>
      <ListGroup>
        <ListGroupItem color="success" a href="/detail">
          Cras justo odio
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default DetailedPage;
