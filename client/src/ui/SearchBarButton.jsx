import classes from "../css/ui/SearchBarButton.module.css";

const SearchBarButton = () => {
  return (
    <div>
      <button className={classes.btn} type="submit">
        Book Now
      </button>
    </div>
  );
};

export default SearchBarButton;
