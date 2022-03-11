
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
export default class CenterMode extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            centerPadding: '60px',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true
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
