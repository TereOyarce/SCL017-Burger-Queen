//import React from "react";
import { Cooking } from "./components/Cooking";
import { Inicio } from "./components/Inicio";
import { Ready } from "./components/ListOrder";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Waiters } from "./components/Waiters";

function App() {
  return (
    <Router>
      <div className="container" >
      </div>
      <Switch>

        <Route path='/menu'>
          <Waiters />
        </Route>
        <Route path='/cooking'>
          <Cooking />
        </Route>
        <Route path='/ready'>
          <Ready/>
        </Route>
        <Route path='/'>
          <Inicio />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;