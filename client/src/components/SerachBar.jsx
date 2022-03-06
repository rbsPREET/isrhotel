import SearchBarButton from "../ui/SearchBarButton";
import classes from "../css/SearchBar.module.css";

const SearchBar = () => {
  return (
    <form className={classes.container}>
      <div className={classes.wrapper}>
        <div className={`${classes.input} ${classes.location}`}>
          <label htmlFor="location">Location</label>
          <input type="text" className="" placeholder="Where are you going?" name="location" id="location" />
        </div>
        <div className={`${classes.input} ${classes.dates}`}>
          <label htmlFor="dates">Dates</label>
          <input type="text" className="" name="dates" id="dates" />
        </div>
        <div className={classes.input}>
          <label htmlFor="guests">Guests</label>
          <input type="text" className="" name="guests" id="guests" />
        </div>
        <SearchBarButton />
      </div>
    </form>
  );
};

export default SearchBar;
