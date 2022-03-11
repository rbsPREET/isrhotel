import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { mallsData } from "../mockData";
import Mall from "../components/Mall";

// const Carousel = () => {
//   const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "60px",
//     slidesToShow: 3,
//     speed: 500,
//   };
//   return (
//     <div>
//       <Slider {...settings}>
//         <div>
//           {mallsData.map((item) => (
//             <Mall key={item} item={item} />
//           ))}
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default Carousel;

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
