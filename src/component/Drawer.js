import React, { useState } from "react";
import {
    Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    }
}));

function DrawerComponent() {
    const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        className="drawer-container"
      >
        <List className="drawer-list">
        <ListItem className={classes.link} button onClick={() => setOpenDrawer(false)} component={Link} to="/">
            <ListItemText primary="Home" />
         </ListItem>

          <Divider/>
           <ListItem className={classes.link} button onClick={() => setOpenDrawer(false)} component={Link} to="/tournament">
            <ListItemText primary="Tournament" />
         </ListItem>

          <Divider/>

          <ListItem className={classes.link} button onClick={() => setOpenDrawer(false)} component={Link} to="/playpals">
            <ListItemText primary="Playpals" />
         </ListItem>

          <Divider/>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
