import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from "./pages/home";

export function Routes_() : JSX.Element {
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
    </Router>
  )
}