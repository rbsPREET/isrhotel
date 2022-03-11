import { useState } from "react";
import classes from "../css/ui/TrendingCard.module.css";
import FlexColumn from "./FlexColumn";

const TrendingCard = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      className={classes.TrendingCard}
    >
      <div
        className={`${classes.backgroundImage} ${hover && classes.hover}`}
        style={{ backgroundImage: `url(${props.src})` }}
      ></div>
      <FlexColumn className={classes.wrapperDetails}>
        <h3 className={classes.cityName}>{props.cityName}</h3>
        <p className={classes.listing}>{props.listing} Listing</p>
      </FlexColumn>
    </div>
  );
};

export default TrendingCard;
