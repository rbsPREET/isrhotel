import { useState } from "react";
import FlexColumn from "../../ui/FlexColumn";
import FlexRow from "../../ui/FlexRow";
import classes from "../../css/home/SingleMallCarousel.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const SingleHotelRoomCarousel = (props) => {
  const [isLiked, setLike] = useState(false);
  const { item } = props;
  let stars = [];
  for (let index = 0; index < item.stars; index++) {
    stars.push(<StarIcon key={index} htmlColor="gold" />);
  }

  const generateLinkHotel = () => {
    const title = item.title.includes(" ")
      ? item.title.split(" ").join("-")
      : item.title.trim();
    const address = item.address.replace(",", "").split(" ").join("-");
    return `${title}-${address}`;
  };

  return (
    <div
      key={item.title}
      className={`${classes.paddingAndRelative}`}
      style={{ width: `${props.customWidth ? props.customWidth : "100"}%` }}
    >
      <div className={classes.margin}>
        <div
          className={`${props.borderRadius ? classes.borderRadius : ""} ${
            props.borderRadius && classes.item
          } ${!props.borderRadius && classes.itemNoBorder} ${
            classes.relative
          } `}
          style={{ backgroundImage: `url('${item.img[0]}')` }}
        >
          <FlexRow className={`${classes.spaceAround} ${classes.topRelative}`}>
            <FlexColumn className={classes.description}>
              <p className={classes.stars}>{stars.map((star) => star)}</p>
              <h1 className={classes.title}>
                <Link to={`/mall/${generateLinkHotel()}`}>{item.title} </Link>
              </h1>
              <p className={classes.desc}>
                <Link to={`/mall/${generateLinkHotel()}`}>
                  {item.description}
                </Link>
              </p>
            </FlexColumn>
            <div
              onClick={() => setLike(!isLiked)}
              className={`${classes.like} ${isLiked && classes.isLiked}`}
            >
              {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </div>
          </FlexRow>
        </div>
      </div>
    </div>
  );
};

export default SingleHotelRoomCarousel;
