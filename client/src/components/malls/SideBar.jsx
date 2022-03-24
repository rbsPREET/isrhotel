import { Button, CardActions } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ResponsiveDateTimePickers from "../../ui/ResponsiveDateTimePickers";
import Country from "../Country";
import Box from "../../ui/Box";
import { Fragment } from "react";
import FlexRow from "../../ui/FlexRow";

const SideBar = (props) => {
  return (
    <Fragment>
      <Box maxWidth="330px">
        <FlexRow wrap allCenter>
          <EventAvailableIcon />
          <h3>Book {props.hotelName} Hotel</h3>
        </FlexRow>
        <hr />
        <Country customWidth="90%" inBox nameId="location" label="Location" />
        <ResponsiveDateTimePickers column />
        <CardActions>
          {/*<Link to={`/:${props._id}}/order?rooms=${props.rooms}&guests=${props.guests}`}>*/}
          <Button
            fullWidth
            style={{ backgroundColor: "red", color: "white" }}
            size="large"
            color="warning"
          >
            Share
          </Button>
          {/*</Link>*/}
        </CardActions>
      </Box>
    </Fragment>
  );
};

export default SideBar;
