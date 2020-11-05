import React, { memo } from "react";
import AccordionSidebar from "components/AccordionSidebar";
import { makeStyles } from "@material-ui/core/styles";
import Calendar from "components/Calendar";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  demo: {
    display: "flex",
    height: "calc(100vh - 64px)",
  },
}));

const Demo = () => {
  const { events } = useSelector((state) => state.events);
  const classes = useStyles();
  return (
    <div className={classes.demo}>
      <AccordionSidebar events={events} />
      <Calendar />
    </div>
  );
};

export default memo(Demo);
