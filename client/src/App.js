import React from "react";
import HomePage from "./landing/HomePage";
import DetailedPage from "./landing/DetailedPage";
import GameMenu from "./games/GameMenu";
import QuestionSet from "./QuestionSet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OtherPage from "./OtherPage";
import MemoryGame from "./games/MemoryGame";
import OddManGame from "./games/OddManGame";
import TimerGame from "./games/TimerGame";
import QuizGame from "./games/QuizGame";

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
            <Route path="/memory" exact={true} component={MemoryGame} />
            <Route path="/oddman" exact={true} component={OddManGame} />
            <Route path="/timer" exact={true} component={TimerGame} />
            <Route path="/quiz" exact={true} component={QuizGame} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
