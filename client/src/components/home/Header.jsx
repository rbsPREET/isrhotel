import SearchBar from "./SerachBar";
import classes from "../../css/home/Header.module.css";

const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <p>title title</p>
        </div>
        <div className={classes.description}>
          <p>description description</p>
        </div>
      </div>
      <SearchBar countryLabel="Choose the location you wanna stay!" />
    </div>
  );
};

export default Header;
