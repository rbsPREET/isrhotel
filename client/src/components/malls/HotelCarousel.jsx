import classes from "../../css/home/SingleMallCarousel.module.css";

const HotelCarousel = (props) => {
  return (
    <div className={classes.paddingAndRelative}>
      <div className={classes.margin}>
        {props.item ? (
          <div
            className={`${props.borderRadius && classes.borderRadius} ${
              classes.item
            } ${classes.relative}`}
            style={{ backgroundImage: `url('${props.item}')` }}
          />
        ) : (
          "asassa"
        )}
      </div>
    </div>
  );
};

export default HotelCarousel;
