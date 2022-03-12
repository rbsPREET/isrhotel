import classes from "../css/ui/SearchBarButton.module.css";

const SearchBarButton = (props) => {
  return (
    <button className={classes.btn} type="submit">
      {props.children}
    </button>
  );
};

export default SearchBarButton;
