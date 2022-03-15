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

export default function CardTemp(props) {
  return (
    <React.Fragment>
      <Card sx={{ overflow: "unset" }}>
        <Input
          label="Location"
          icon={<EventAvailableIcon />}
          positionIcon
          type="text"
          nameId="location"
        ></Input>
        <Country />
      </Card>

      <Card sx={{ minWidth: 275, marginTop: 30 }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ alignContent: "center" }}
          >
            <EventAvailableIcon />
            Booking
          </Typography>
          <hr />
          <div>
            <Typography variant="body2" color="text.secondary">
              <div>
                <ResponsiveDateTimePickers />
                <br />
                <BasicSelect dataOptions={props.bookingTimes} />
                <br />
                <BasicSelect dataOptions={props.bookingTimes} />
              </div>
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button
            fullWidth="100%"
            style={{ backgroundColor: "red", color: "white" }}
            size="large"
            color="warning"
          >
            Share
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
