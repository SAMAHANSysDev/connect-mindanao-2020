import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Main from './Main';
import Admin from './Admin';
import Error404 from './Error404';

export default function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/admin-samahan-data">
          <Admin />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route component={Error404} />
      </Switch>
    </Router>
  );
}