import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddTopic from './containers/AddTopic';
import Quiz from './containers/Quiz'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddQuestion from './containers/AddQuestion';
import ModalA from './containers/ModalA'


function App() {
  return (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/modal" component={ModalA} />
        <Route exact path="/addtopic" component={AddTopic} /> 
        <Route exact path="/:id" component={Quiz} />
        <Route exact path="/addquestion/:id" component={AddQuestion} />
      </Switch>
    </Router>
  </div>
  )
}

export default App;
