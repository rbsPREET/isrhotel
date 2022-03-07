import SearchBarButton from "../ui/SearchBarButton";
import classes from "../css/SearchBar.module.css";
import LocationIcon from "@material-ui/icons/LocationOnOutlined";
import DatesIcon from "@material-ui/icons/DateRangeOutlined";
import PeopleIcon from "@material-ui/icons/EmojiPeopleOutlined";
import Input from "../ui/Input";
import { Country } from "./Country";


const SearchBar = () => {

  return (
    <div className={classes.container}>
      <form className="">
        <div className={classes.wrapper}>
          <div className={`${classes.input} ${classes.location}`}>
            <LocationIcon />
            <Country/>
          </div>
          <div className={`${classes.input} ${classes.dates}`}>
            <DatesIcon />
            <Input type="text" nameId="dates" label="From - To" />
          </div>
          <div className={classes.input}>
            <PeopleIcon />
            <Input type="text" nameId="guests" label="Guests" />
          </div>
          <SearchBarButton />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
