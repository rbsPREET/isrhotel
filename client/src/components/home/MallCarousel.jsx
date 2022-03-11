import { mallsData } from "../../mockData";
import classes from "../../css/home/MallCarousel.module.css";
import Carousel from "../../ui/Carousel";
const MallCarousel = (props) => {
  return (
    <Carousel>
      {mallsData.map((item) => (
        <div className={classes.paddingAndRelative}>
          <div className={classes.wrapper}>
            <div
              className={`${(props.borderRadius && classes.borderRadius)} ${classes.item}`}
              style={{ backgroundImage: `url('${item.img}')` }}
            >
              <div className={classes.description}>
                <h1 className={classes.title}>{item.title}</h1>
                <p className={classes.paragraph}>{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default MallCarousel;
