import { useState } from "react";
import classes from "../../css/home/SingleTrendingDestinationCard.module.css";
import FlexColumn from "../../ui/FlexColumn";

const SingleTrendingDestinationCard = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      className={classes.TrendingCard}
    >
      {" "}
      <div
        className={`${classes.backgroundImage} ${hover && classes.hover}`}
        style={{ backgroundImage: `url(${props.card.src})` }}
      ></div>
      <FlexColumn className={classes.wrapperDetails}>
        <h3 className={classes.cityName}>{props.card.cityName}</h3>
        <p className={classes.listing}>{props.card.listing} Listing</p>
      </FlexColumn>
    </div>
  );
};

export default SingleTrendingDestinationCard;
