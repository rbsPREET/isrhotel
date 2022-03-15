import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ResponsiveDateTimePickers from "./ResponsiveDateTimePickers";
import BasicSelect from "./BasicSelect";
import Country from "../components/Country";
import Input from "./Input";

const Box = (props) => (
  <Card
    sx={{
      overflow: "unset",
      minWidth: props.minWidth,
      marginTop: props.marginTop,
    }}
  >
    {props.children}
  </Card>
);

export default Box;
