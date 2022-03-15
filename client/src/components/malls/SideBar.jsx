import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ResponsiveDateTimePickers from "../../ui/ResponsiveDateTimePickers";
import BasicSelect from "../../ui/BasicSelect";
import Country from "../Country";
import Input from "../../ui/Input";
import Box from "../../ui/Box";
import { Fragment } from "react";

const SideBar = (props) => {
  return (
    <Fragment>
      <Box maxWidth="330px">
        <Country customWidth="90%" inBox nameId="location" label="Location" />
        <ResponsiveDateTimePickers />

      </Box>

      <Box marginTop="30px">
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
          <BasicSelect dataOptions={props.bookingTimes} />
          <BasicSelect dataOptions={props.bookingTimes} />
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            style={{ backgroundColor: "red", color: "white" }}
            size="large"
            color="warning"
          >
            Share
          </Button>
        </CardActions>
      </Box>
    </Fragment>
  );
};

export default SideBar;
