import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { Link as RouteLink } from "react-router-dom";

import Drawer from "./Drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignContent: "left",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <RouteLink to="/" className={classes.title}>
              <Typography variant="h6" component="a">
                {process.env.REACT_APP_NAME}
              </Typography>
            </RouteLink>
            {localStorage.userName || (
              <Button component={RouteLink} to="/login" color="inherit">
                登录
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
      <Drawer toggleDrawer={toggleDrawer} open={open} />
    </>
  );
}
