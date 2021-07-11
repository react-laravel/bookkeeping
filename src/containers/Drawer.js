import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import MoneyIcon from "@material-ui/icons/Money";
import React from "react";
import { Link as RouteLink } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();

  return (
    <div>
      <Drawer anchor="left" open={props.open} onClose={props.toggleDrawer}>
        <div
          className={classes.list}
          role="presentation"
          onClick={props.toggleDrawer}
          onKeyDown={props.toggleDrawer}
        >
          <List>
            <ListItem button component={RouteLink} to="bills">
              <ListItemIcon>
                <MoneyIcon />
              </ListItemIcon>
              <ListItemText primary="账单" />
            </ListItem>
          </List>
          <List>
            <ListItem button component={RouteLink} to="avg">
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary="月平均" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button component={RouteLink} to="tags">
              <ListItemIcon>
                <LoyaltyIcon />
              </ListItemIcon>
              <ListItemText primary="标签" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
