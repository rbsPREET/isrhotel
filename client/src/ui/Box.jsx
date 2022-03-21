import React from "react";
import Card from "@mui/material/Card";
const Box = (props) => (
  <Card
    className={props.className}
    sx={{
      margin:props.margin,
      padding: "10px 15px",
      overflow: "unset",
      boxShadow: props.boxShadow,
      maxHeight: props.maxHeight,
      minHiehgt: props.minHiehgt,
      maxWidth: props.maxWidth,
      minWidth: props.minWidth,
      marginTop: props.marginTop,
    }}
  >
    {props.children}
  </Card>
);

export default Box;
