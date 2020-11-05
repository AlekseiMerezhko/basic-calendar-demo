import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header";
import Router from "components/Router";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    fontFamily: `Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif`,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Router />
    </div>
  );
};

export default App;
