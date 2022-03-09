import SearchBarButton from "../ui/SearchBarButton";
import classes from "../css/SearchBar.module.css";
import LocationIcon from "@material-ui/icons/LocationOnOutlined";
import DatesIcon from "@material-ui/icons/DateRangeOutlined";
import PeopleIcon from "@material-ui/icons/EmojiPeopleOutlined";
import Input from "../ui/Input";
import Country from "./Country";
import InputRangeDates from "../ui/InputRangeDates";
import { useEffect, useState } from "react";
import Select from "../ui/Select";

const SearchBar = () => {
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

  useEffect(() => {
    console.log(details);
  }, [details]);

  return (
    <div className={classes.container}>
      <form className="">
        <div className={classes.wrapper}>
          <Country
            getDetails={getDetails}
            icon={<LocationIcon />}
            type="select"
            label="Location"
            nameId="location"
            placeholder="Choose the location you wanna stay!"
            mainDiv={classes.border__right}
            className={classes.select__country}
          />

          <InputRangeDates
            getDetails={getDetails}
            icon={<DatesIcon />}
            mainDiv={classes.border__right}
            nameId="dates"
            label="Dates"
          />
          <Input
            icon={<PeopleIcon />}
            type="text"
            onChange={getDetails}
            nameId="guests"
            label="Guests"
          />
          <SearchBarButton />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
