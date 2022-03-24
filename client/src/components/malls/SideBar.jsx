import { Button, CardActions } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ResponsiveDateTimePickers from "../../ui/ResponsiveDateTimePickers";
import Country from "../Country";
import Box from "../../ui/Box";
import { Fragment, useState } from "react";
import FlexRow from "../../ui/FlexRow";


const SideBar = (props) => {

  const [details, setDetails] = useState({
    location: '',
    dates: [],
    guests: {},
  });
  
  const getDetails = (name, value) => {
    switch (name) {
      case "guests":
        setDetails((prev) => {
          return {
            ...prev,
            guests: value,
          };
        });
        break;
      case "location":
        setDetails((prev) => {
          return {
            ...prev,
            location: value,
          };
        });
        break;
      case "dates":
        setDetails((prev) => {
          return {
            ...prev,
            dates: value,
          };
        });
        break;
      default:
        break;
    }
  };
  return (
    <Fragment>
      <Box maxWidth="330px">
        <FlexRow wrap allCenter>
          <EventAvailableIcon />
          <h3>Book {props.hotelName} Hotel</h3>
        </FlexRow>
        <hr />
        <Country dataValue={getDetails} customWidth="90%" inBox nameId="location" label="Location" />
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
