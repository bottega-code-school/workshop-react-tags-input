import * as React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";

const routes = [<Route exact key="home" path="/" component={Home} />];

const App = () => {
  return <Switch>{routes}</Switch>;
};

export default App;
