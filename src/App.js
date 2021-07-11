import "./App.css";

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { SnackbarProvider } from "notistack";
import React from "react";

import Route from "./routes";

const useStyles = makeStyles((theme) => ({
  snackbar: {
    [theme.breakpoints.down("xs")]: {
      bottom: 90,
    },
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <SnackbarProvider
      maxSnack={10}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      classes={{
        containerRoot: classes.snackbar,
      }}
    >
      <CssBaseline />
      <Route />
    </SnackbarProvider>
  );
};

export default App;
