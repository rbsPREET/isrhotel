import SearchBarButton from "../../ui/SearchBarButton";
import classes from "../../css/home/SearchBar.module.css";
import LocationIcon from "@material-ui/icons/LocationOnOutlined";
import DatesIcon from "@material-ui/icons/DateRangeOutlined";
import PeopleIcon from "@material-ui/icons/EmojiPeopleOutlined";
import Input from "../../ui/Input";
import Country from "../Country";
import InputRangeDates from "../../ui/InputRangeDates";
import { useEffect, useState } from "react";
import Form from "../../css/ui/Form";
import Section from "../../ui/Section";

const SearchBar = (props) => {
  const [details, setDetails] = useState({
    location: null,
    dates: null,
    guests: null,
  });

  const getDetails = (value, name) => {
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

  useEffect(() => {}, [details]);

  return (
    <Section customWidth={props.customWidth} className={classes.container}>
      <Form className={classes.wrapper}>
        <Country
          noBorders
          onChange={getDetails}
          icon={<LocationIcon />}
          type="select"
          label="Choose your location"
          nameId="location"
          mainDiv={classes.border__right}
        />
        <InputRangeDates
          onChange={getDetails}
          icon={<DatesIcon />}
          mainDiv={classes.border__right}
          nameId="dates"
          label={props.dates}
        />
        <Input
          icon={<PeopleIcon />}
          type="text"
          onChange={getDetails}
          nameId="guests"
          label={props.guests}
        />

        <SearchBarButton>Book Now</SearchBarButton>
      </Form>
    </Section>
  );
};

export default SearchBar;
