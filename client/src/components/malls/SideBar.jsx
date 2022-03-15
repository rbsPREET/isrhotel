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
      <Box>
        <Input
          label="Location"
          icon={<EventAvailableIcon />}
          positionIcon
          type="text"
          nameId="location"
        ></Input>
        <Country />
      </Box>

      <Box minWidth="200px" marginTop="30px">
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
          <ResponsiveDateTimePickers />
          <br />
          <BasicSelect dataOptions={props.bookingTimes} />
          <br />
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
