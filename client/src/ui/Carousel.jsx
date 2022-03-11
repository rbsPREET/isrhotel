import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { mallsData } from "../mockData";
import Mall from "../components/Mall";
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

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: 0, marginRight: "20px", zIndex: 1 }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: 0, marginLeft: "20px", zIndex: 1 }}
            onClick={onClick}
        />
    );
}

export default class CenterMode extends Component {
    render() {
        const settings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            appendDots: dots => (
                <div
                    style={{
                        padding: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <ul style={{ fontSize: "" }}> {dots} </ul>
                </div>
            ),
            dots: true
        };
        return (
            <div>
                <Slider {...settings}>
                    {mallsData.map((item) => (
                        <Mall key={item} item={item} />
                    ))}
                </Slider>
            </div >
        );
    }
}
const Carousel = () => {
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
          <Mall key={item} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
