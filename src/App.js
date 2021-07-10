import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";

import AppBar from "./containers/AppBar";
import Route from "./routes";

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar />
      <Route />
    </>
  );
};

export default App;
