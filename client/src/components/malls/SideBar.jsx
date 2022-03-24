import { Button, CardActions } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ResponsiveDateTimePickers from "../../ui/ResponsiveDateTimePickers";
import Country from "../Country";
import Box from "../../ui/Box";
import { Fragment } from "react";
import FlexRow from "../../ui/FlexRow";
import FlexColumn from "../../ui/FlexColumn";
import classes from "../../css/malls/SideBar.module.css";

const SideBar = (props) => {
  // Need to add opening hours to DB (Mall Model) or create 7 days and times dynamic
  const openingHoursArr = [
    { day: "Monday", time: "9AM - 5PM" },
    { day: "Tuesday", time: "9AM - 5PM" },
    { day: "Wednesday", time: "9AM - 5PM" },
    { day: "Thursday ", time: "9AM - 5PM" },
    { day: "Friday", time: "9AM - 5PM" },
    { day: "Saturday", time: "9AM - 3PM" },
    { day: "Sunday", time: "Closed" },
  ]
  return (
    <>
      <Fragment>
        {/* Booking Card */}
        <Box maxWidth="330px">
          <FlexRow wrap allCenter justifyCenter >
            <EventAvailableIcon />
            <h3>Book {props.hotelName} Hotel</h3>
          </FlexRow>
          <hr />
          <Country customWidth="90%" inBox nameId="location" label="Location" />
          <ResponsiveDateTimePickers />
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

        {/* Opening Hours Card */}
        <Box maxWidth="330px" marginTop={5}>
          <FlexRow wrap allCenter justifyCenter >
            <AccessTimeIcon />
            <h3>Opening Hours</h3>
          </FlexRow>
          <hr />
          <CardActions>
            <FlexColumn customWidth={100}>
              {openingHoursArr?.map(item => {
                return (
                  <FlexRow key={item.day} justifyBetween className={classes.openingHours}>
                    <span>{item.day}</span>
                    <span>{item.time}</span>
                  </FlexRow>
                )
              })}
            </FlexColumn>
          </CardActions>
        </Box>
      </Fragment >
    </>
  );
};

export default SideBar;
