import SearchBarButton from "../../ui/SearchBarButton";
import classes from "../../css/home/SearchBar.module.css";
import LocationIcon from "@material-ui/icons/LocationOnOutlined";
import DatesIcon from "@material-ui/icons/DateRangeOutlined";
import PeopleIcon from "@material-ui/icons/EmojiPeopleOutlined";
import ResponsiveDateTimePickers from "../../ui/ResponsiveDateTimePickers";

import Country from "../Country";
import InputRangeDates from "../../ui/InputRangeDates";
import { useEffect, useRef, useState } from "react";
import Form from "../../ui/Form";
import Section from "../../ui/Section";
import { InputWrapper } from "../../ui/InputWrapper";
import Transition from "react-transition-group/Transition";
import GuestModal from "./GuestModal";
import Guest from "./Guest";
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {
  const location = useRef();
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    location: location.current,
    dates: "",
    guests: "",
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
        let dates = [];
        value.map((val) => {
          if (val) {
            const oldVal = val.toString().split(" ");
            const newVal = `${oldVal[1]}-${oldVal[2]}-${oldVal[3]}`;
            dates.push(newVal);
          }
        });
        setDetails((prev) => {
          return {
            ...prev,
            dates: dates,
          };
        });
        break;
      default:
        break;
    }
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(details);
    const guests = `a${details.guests.adults}c${details.guests.childrens}i${details.guests.infants}`;
    navigate(
      `../${details.location}/${details.dates[0]}+${details.dates[1]}/${guests}`
    );
  };

  return (
    <Section customWidth={props.customWidth} className={classes.container}>
      <Form onSubmit={onSubmitHandler} className={classes.wrapper}>
        <Country
          dataValue={getDetails}
          dataValueName="location"
          noBorders
          ref={location}
          icon={<LocationIcon />}
          type="select"
          label="Choose your location"
          nameId="location"
          mainDiv={classes.border__right}
        />
        <InputWrapper
          className={classes.border__right}
          icon={<DatesIcon />}
          left
        >
          <ResponsiveDateTimePickers
            dataValue={getDetails}
            dataValueName="dates"
            className={classes.inputTime}
            row
          />
        </InputWrapper>
        <Guest
          dataValue={getDetails}
          dataValueName="guests"
          icon={<PeopleIcon />}
        />

        <SearchBarButton>Book Now</SearchBarButton>
      </Form>
    </Section>
  );
};

export default SearchBar;
