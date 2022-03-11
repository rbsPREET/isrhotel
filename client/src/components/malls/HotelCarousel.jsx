import FlexColumn from "../../ui/FlexColumn";
import FlexRow from "../../ui/FlexRow";
import classes from "../../css/home/SingleMallCarousel.module.css";

const HotelCarousel = (props) => {
    const { item } = props;

    return (
        <div key={item.id} className={classes.paddingAndRelative}>
            <div className={classes.margin}>
                <div
                    className={`${props.borderRadius && classes.borderRadius} ${classes.item
                        } ${classes.relative}`}
                    style={{ backgroundImage: `url('${item.img}')` }}
                >
                    <FlexRow className={`${classes.spaceAround} ${classes.topRelative}`}>
                        <FlexColumn className={classes.description}>
                            <h1 className={classes.title}>{item.title}</h1>
                            <p className={classes.desc}>{item.description}</p>
                        </FlexColumn>
                    </FlexRow>
                </div>
            </div>
        </div>
    );
};

export default HotelCarousel;
