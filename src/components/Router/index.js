import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Demo from "pages/Demo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Router = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Demo />
    </div>
  );
};

export default Router;
