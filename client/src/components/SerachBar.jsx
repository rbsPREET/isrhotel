import SearchBarButton from "../ui/SearchBarButton";
import classes from "../css/SearchBar.module.css";
import LocationIcon from "@material-ui/icons/LocationOnOutlined";
import DatesIcon from "@material-ui/icons/DateRangeOutlined";
import PeopleIcon from "@material-ui/icons/EmojiPeopleOutlined";
const SearchBar = () => {
  return (
    <div className={classes.container}>
      <form className="">
        <div className={classes.wrapper}>
          <div className={`${classes.input} ${classes.location}`}>
            <LocationIcon />
            <div className={classes.label_input}>
              <label htmlFor="location">Location</label>
              <input
                type="text"
                className=""
                placeholder="Where are you going?"
                name="location"
                id="location"
              />
            </div>
          </div>
          <div className={`${classes.input} ${classes.dates}`}>
            <DatesIcon />
            <div className={classes.label_input}>
              <label htmlFor="dates">Dates</label>
              <input type="text" className="" name="dates" id="dates" />
            </div>
          </div>
          <div className={classes.input}>
            <PeopleIcon />
            <div className={classes.label_input}>
              <label htmlFor="guests">Guests</label>
              <input type="text" className="" name="guests" id="guests" />
            </div>
          </div>
          <SearchBarButton />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
