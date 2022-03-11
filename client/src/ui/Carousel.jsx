import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { mallsData } from "../mockData";
import classes from "../css/Carousel.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const NextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className={classes.SampleNextArrow}
      style={{
        ...style,
        display: "block",
        right: 0,
        marginRight: "10px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon />
    </div>
  );
};

const PrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className={classes.SamplePrevArrow}
      style={{
        ...style,
        display: "block",
        left: 0,
        marginLeft: "10px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <ArrowBackIosNewIcon />
    </div>
  );
};

const Carousel = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    focusOnSelect: true,
    cssEase: "linear",
  };

  return (
    <div>
      <Slider {...settings}>
        {mallsData.map((item) => (
          <div
            className={classes.paddingAndRelative}
          >
            <div className={classes.wrapper}>
              <div className={props.borderRadius && classes.item}>
                <h1 className={classes.title}>{item.title}</h1>
                <p className={classes.description}>{item.description}</p>
                <img
                  className={
                    (props.borderRadius && classes.borderRadius) +
                    " " +
                    classes.img
                  }
                  src={item.img}
                  alt="img"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
