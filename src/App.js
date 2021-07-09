import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";

import AppBar from "./containers/AppBar";
import Main from "./containers/main";

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar />
      <Main />
    </>
  );
};

export default App;
