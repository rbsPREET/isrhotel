import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import classes from "../css/ui/Carousel.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SingleCard from "./SingleCard";

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
        {props.data.map((item) => (
          <SingleCard
            key={item.id || item._id || item.title || item}
            card={item}
            template={props.template}
            borderRadius={props.borderRadius}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
