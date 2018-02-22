// Same as const React = require('react')
// Have to import React library even if using JSX because of Babel transpiling.
import React from "react";
import { render } from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import Landing from "./Landing";

// Use className rather than class for class names in tags - JSX gotcha.
// No return statement due to arrow function implicit return linting.
// If anything is outside of the return statement in component - use {} and return.
const App = () => (
  <HashRouter>
    <div className="app">
      <Route exact path="/" component={Landing} />
    </div>
  </HashRouter>
);

render(<App />, document.getElementById("app"));
