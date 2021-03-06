import { Button, CardActions } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Country from "../Country";
import Box from "../../ui/Box";
import { Fragment, useState, useRef } from "react";
import FlexRow from "../../ui/FlexRow";
import FlexColumn from "../../ui/FlexColumn";
import classes from "../../css/malls/SideBar.module.css";
// Icons
import ResponsiveDateTimePickers from "../../ui/ResponsiveDateTimePickers";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const SideBar = (props) => {
  const countryRef = useRef();
  const [details, setDetails] = useState({
    location: "",
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

  // Need to add opening hours to DB (Mall Model) or create 7 days and times dynamic
  // const openingHoursArr = [
  //   { day: "Monday", time: "9AM - 5PM" },
  //   { day: "Tuesday", time: "9AM - 5PM" },
  //   { day: "Wednesday", time: "9AM - 5PM" },
  //   { day: "Thursday ", time: "9AM - 5PM" },
  //   { day: "Friday", time: "9AM - 5PM" },
  //   { day: "Saturday", time: "9AM - 3PM" },
  //   { day: "Sunday", time: "Closed" },
  // ];
  return (
    <>
      <Fragment>
        {/* Booking Card */}
        <Box maxWidth="330px">
          <FlexRow wrap allCenter justifyCenter>
            <EventAvailableIcon />
            <h3>Book {props.hotelName} Hotel</h3>
          </FlexRow>
          <hr />
          <Country
            ref={countryRef}
            dataValue={getDetails}
            customWidth="90%"
            inBox
            dataValueName="location"
            nameId="location"
            label="Location"
          />
          <ResponsiveDateTimePickers
            column
            dataValue={getDetails}
            dataValueName="dates"
            className={classes.inputTime}
          />
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
        {/* <Box maxWidth="330px" marginTop={5}>
          <FlexRow wrap allCenter justifyCenter>
            <AccessTimeIcon />
            <h3>Opening Hours</h3>
          </FlexRow>
          <hr />
          <CardActions>
            <FlexColumn customWidth={100}>
              {openingHoursArr?.map((item) => {
                return (
                  <FlexRow
                    key={item.day}
                    justifyBetween
                    className={classes.openingHours}
                  >
                    <span>{item.day}</span>
                    <span>{item.time}</span>
                  </FlexRow>
                );
              })}
            </FlexColumn>
          </CardActions>
        </Box> */}

        {/* Hotel Admin Card */}
        <Box maxWidth="330px" marginTop={5}>
          <FlexRow justifyBetween>
            <FlexColumn wrap>
              <p>Hotel Manager</p>
              <span>temp temp</span>
            </FlexColumn>
            <img src={""} alt="userIcon" />
          </FlexRow>
          <hr />
          <CardActions>
            <FlexColumn customWidth={100}>
              <div>
                <LocalPhoneOutlinedIcon />
                <span>052666666</span>
              </div>
              <div>
                <EmailOutlinedIcon />
                <span>email@email.com</span>
              </div>
              <div>
                <FacebookIcon />
                <span>Facebook</span>
              </div>
              <div>
                <LinkedInIcon />
                <span>Linkedin</span>
              </div>
              <button>
                <SendOutlinedIcon />
                Send Message
              </button>
            </FlexColumn>
          </CardActions>
        </Box>
      </Fragment>
    </>
  );
};

export default SideBar;
