import * as React from "react";
import Box from "./Box";
import CardMedia from "@mui/material/CardMedia";
import classes from "../css/ui/MediaCard.module.css";

export default function MediaCard() {
  return (
    <Box
      margin="0 50px"
      maxWidth="345"
      maxHeight="345"
      boxShadow="0px 0.5px 0.5px 4px rgb(0,0,0,7%)"
      className={classes.container}
    >
      <img
        style={{
          objectFit: "cover",
          width: "100px",
          height: "100px",
          margin: "10% 0",
        }}
        src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-1/254000/72-512.png"
        alt="props"
      ></img>
      <div style={{ padding: "15px 15px 24px 15px" }}>
        <h4 style={{ marginBottom: "10px" }}>Find Interesting Place</h4>
        <p>
          Proin dapibus nisl ornare diam varius tempus. Aenean a quam luctus,
          finibus tellus ut, convallis eros sollicitudin.
        </p>
      </div>
    </Box>
  );
}
