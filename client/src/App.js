import React from "react";
import HomePage from "./HomePage";
import DetailedPage from "./DetailedPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/detail" exact={true} component={DetailedPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
