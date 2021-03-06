import * as React from "react";
import Box from "./Box";
import classes from "../css/ui/MediaCard.module.css";

export default function MediaCard() {
  return (
    <Box
      margin="0 50px"
      maxWidth="345"
      maxHeight="345"
      boxShadow="0px 2px 9px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
      className={classes.container}
    >
      <img
        className={classes.img}
        src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-1/254000/72-512.png"
        alt="props"
      ></img>
      <div className={classes.wrapperWords}>
        <h4 className={classes.title}>Find Interesting Place</h4>
        <p>
          Proin dapibus nisl ornare diam varius tempus. Aenean a quam luctus,
          finibus tellus ut, convallis eros sollicitudin.
        </p>
      </div>
    </Box>
  );
}
