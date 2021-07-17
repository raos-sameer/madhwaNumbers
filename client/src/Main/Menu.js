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
import DetailedPage from "./DetailedPage";
import src from "../images/logo.svg";
import Memory from "../Game/Memory";
import MemoryGame from "../games/MemoryGame";
import OddManGame from "../games/OddManGame";
import TimerGame from "../games/TimerGame";
import WSTH from "../games/WSTH";
import MainPageContent from "./MainPageContent";
import AppMenu from "../common/AppMenu";
const MenuPage = () => {
  
  return (
    <React.Fragment>
      <AppMenu />
      <Message>
      <MainPageContent />
      </Message>
    </React.Fragment>
  );
};
export default MenuPage;
