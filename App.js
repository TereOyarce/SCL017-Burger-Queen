//import React from "react";
import { Cooking } from "./components/Cooking";
import { Inicio } from "./components/Inicio";
import { Menu } from "./components/Menu";
import { Ready } from "./components/ListOrder";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container" >
      </div>
      <Switch>

        <Route path='/menu'>
          <Menu />
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