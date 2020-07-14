import React from "react";
import HomePage from "./landing/HomePage";
import DetailedPage from "./landing/DetailedPage";
import GamesPage from "./games/GamesPage";
import OtherPage from "./OtherPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/detail" exact={true} component={DetailedPage} />
            <Route path="/games" exact={true} component={GamesPage} />
            <Route path="/others" exact={true} component={OtherPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
