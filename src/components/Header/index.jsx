import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { switchSidebarStatusEvent } from "actions/sidebarActions";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  colorPrimary: {
    backgroundColor: "#2667c8",
  },
}));

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSwichSidebarStatus = () => {
    dispatch(switchSidebarStatusEvent());
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.colorPrimary}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={handleSwichSidebarStatus}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Demo
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
