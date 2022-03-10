import { useState } from "react";
import classes from "../css/TrendingCard.module.css";

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
      {props.children}
    </div>
  );
};

export default TrendingCard;
