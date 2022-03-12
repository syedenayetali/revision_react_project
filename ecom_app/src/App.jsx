// import style from "./App.module.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import LoginPage from "./components/loginPage/loginPage";
import Dashboard from "./components/dashboard/dashboard";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
// 10024792036
