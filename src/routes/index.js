import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppBar from "../containers/AppBar";
import Avg from "../containers/Avg";
import Bills from "../containers/bills";
import Login from "../containers/Login";
import Main from "../containers/main";

const routes = [
  {
    path: "/",
    exact: true,
    component: Main,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/bills",
    exact: true,
    component: Bills,
  },
  {
    path: "/avg",
    exact: true,
    component: Avg,
  },
  {
    path: "/login/test3",
    component: LoginTest,
    routes: [
      {
        path: "/login/test",
        component: Login,
      },
    ],
  },
];

export default function RouteConfigExample() {
  return (
    <Router>
      <AppBar />
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

function LoginTest({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  );
}
