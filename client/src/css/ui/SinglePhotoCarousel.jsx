import classes from "../../css/ui/SinglePhotoCarousel.module.css";
import { Oval } from "react-loader-spinner";

const SinglePhotoCarousel = (props) => {
  return (
    <div className={classes.paddingAndRelative}>
      <div className={classes.margin}>
        {props.item && (
          <div
            className={`${props.borderRadius && classes.borderRadius} ${
              classes.item
            } ${classes.relative}`}
            style={{ backgroundImage: `url('${props.item}')` }}
          />
        ) }
      </div>
    </div>
  );
};

export default SinglePhotoCarousel;
