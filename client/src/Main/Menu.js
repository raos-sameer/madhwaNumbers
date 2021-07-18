import React, { useState } from "react";
import { Message } from "semantic-ui-react";
import DetailedPage from "./DetailedPage";
import MainPageContent from "./MainPageContent";
import AppMenu from "../common/AppMenu";
const MenuPage = () => {
  const [showcategoryInfo, setShowCategoryInfo] = useState(true);
  const [detailedOutput, setDetailedOutput] = useState({});
  return (
    <React.Fragment>
      <AppMenu
        setDetailedOutput={setDetailedOutput}
        setShowCategoryInfo={setShowCategoryInfo}
      />
      {showcategoryInfo && (
        <Message>
          <MainPageContent />
        </Message>
      )}
      {!showcategoryInfo && <DetailedPage detailedOutput={detailedOutput} />}
    </React.Fragment>
  );
};
export default MenuPage;
