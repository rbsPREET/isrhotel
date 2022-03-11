import { useState } from "react";
import FlexColumn from "../../ui/FlexColumn";
import FlexRow from "../../ui/FlexRow";
import classes from "../../css/home/SingleMallCarousel.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const SingleHotelRoomCarousel = (props) => {
  const [isLiked, setLike] = useState(false);
  const { item } = props;

  return (
    <div key={item.id} className={classes.paddingAndRelative}>
      <div className={classes.margin}>
        <div
          className={`${props.borderRadius && classes.borderRadius} ${
            classes.item
          } ${classes.relative}`}
          style={{ backgroundImage: `url('${item.img}')` }}
        >
          <FlexRow className={`${classes.spaceAround} ${classes.topRelative}`}>
            <FlexColumn className={classes.description}>
              <p className={classes.stars}>{item.stars}</p>
              <h1 className={classes.title}>{item.title}</h1>
              <p className={classes.desc}>{item.description}</p>
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
