import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
