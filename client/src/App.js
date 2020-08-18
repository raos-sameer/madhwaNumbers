import React from "react";
import HomePage from "./landing/HomePage";
import DetailedPage from "./landing/DetailedPage";
import GameMenu from "./games/GameMenu";
import QuestionSet from "./QuestionSet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OtherPage from "./OtherPage";
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/detail" exact={true} component={DetailedPage} />
            <Route path="/games" exact={true} component={GameMenu} />
            <Route path="/addGameQuestion" exact={true} component={OtherPage} />
            <Route path="/others" exact={true} component={QuestionSet} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
