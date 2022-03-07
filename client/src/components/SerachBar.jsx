import SearchBarButton from "../ui/SearchBarButton";
import classes from "../css/SearchBar.module.css";
import LocationIcon from "@material-ui/icons/LocationOnOutlined";
import DatesIcon from "@material-ui/icons/DateRangeOutlined";
import PeopleIcon from "@material-ui/icons/EmojiPeopleOutlined";
import Input from "../ui/Input";
import { Country } from "./Country";

import { useEffect, useState } from "react";
import { InputRangeDates } from "../ui/InputRangeDates";

const SearchBar = () => {
  const [dates, setDates] = useState([new Date(), new Date()]);

  const calenderChangedHandler = (value) => {
    setDates(value);
  };
  useEffect(() => {
    console.log(dates);
  }, [dates]);

  return (
    <div className={classes.container}>
      <form className="">
        <div className={classes.wrapper}>
          <Country
            icon={<LocationIcon />}
            mainDiv={classes.border__right}
            className={classes.select__country}
          />
          <InputRangeDates
            icon={<DatesIcon />}
            mainDiv={classes.border__right}
            onChange={calenderChangedHandler}
            dates={dates}
            nameId="dates"
            label="Dates"
          />
          <Input
            icon={<PeopleIcon />}
            type="text"
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
