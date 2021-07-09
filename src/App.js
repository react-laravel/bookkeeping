import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";

import AppBar from "./AppBar";
import Main from "./Main";

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
