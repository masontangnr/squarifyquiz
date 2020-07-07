import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import QuizBuilder from './containers/QuizBuilder';
import Quiz from './containers/Quiz'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddQuestion from './containers/AddQuestion';


function App() {
  return (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Quiz} />
        <Route path="/quizbuilder" component={QuizBuilder} />
        <Route path="/addquestion/:id" component={AddQuestion} />
      </Switch>
    </Router>
  </div>
  )
}

export default App;
