import React from "react";
import Card from "@mui/material/Card";
const Box = (props) => (
  <Card
    sx={{
      padding: "10px 15px",
      overflow: "unset",
      maxWidth: props.maxWidth,
      minWidth: props.minWidth,
      marginTop: props.marginTop,
    }}
  >
    {props.children}
  </Card>
);

export default Box;
