import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  calendarWrapper: {
    flexGrow: 1,
  },
}));

const Calendar = () => {
  const classes = useStyles();
  return <div className={classes.calendarWrapper}>Calendar</div>;
};

export default Calendar;
