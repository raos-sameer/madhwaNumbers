import React, { useState, useEffect } from "react";
import { Accordion, Menu, Input, Header, Icon } from "semantic-ui-react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import ShowContent from "./ShowContent";
import AppMenu from "../common/AppMenu";

const DetailedPage = () => {
  const [detailedOutput, setDetailedOutput] = useState({});
  const [showContent, setShowContent] = useState(false);
  const [contentInfo, setContentInfo] = useState("");
  const [header, setHeader] = useState("");
  const { search } = useLocation();
  const values = queryString.parse(search);
  console.log(values.code); // "top"
  useEffect(async () => {
    const response = await fetch("/api/faqSpecificAnswer?code=" + values.code);
    const body = await response.json();
    console.log(body[0]);
    setHeader(body[0].question);
    setDetailedOutput(body[0].category);
  }, []);
  return (
    <React.Fragment>
      <AppMenu />
      <Header as="h2" color="teal">
        <Icon name="list" />
        <Header.Content>{header}</Header.Content>
      </Header>
      <Menu pointing>
        {detailedOutput.length > 0 &&
          detailedOutput.map(({ title }, index) => (
            <Menu.Item
              name={title}
              //active={activeItem === title}
              onClick={() => {
                setShowContent(true);
                //setActiveItem(title);
                setContentInfo(detailedOutput[index].subCategory);
              }}
            />
          ))}
      </Menu>
      {showContent && <ShowContent contentInfo={contentInfo} />}
    </React.Fragment>
  );
};

export default DetailedPage;
