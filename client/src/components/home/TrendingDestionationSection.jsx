import FlexRow from "../../ui/FlexRow";
import classes from "../../css/home/TrendingDestionationSection.module.css";
import TrendingCard from "../../ui/TrendingCard";
const TrendingDestionationSection = (props) => {
  return (
    <>
      <FlexRow className={classes.top2Destinations}>
        <TrendingCard
          src="/assets/images/trending1.jpg"
          cityName="Tel Aviv"
          listing={15}
        />
        <TrendingCard
          src="/assets/images/trending1.jpg"
          cityName="Eilat"
          listing={12}
        />
      </FlexRow>
      <FlexRow className={classes.top3Destinations}>
        <TrendingCard
          src="/assets/images/trending1.jpg"
          cityName="Jerusalem"
          listing={8}
        />
        <TrendingCard
          src="/assets/images/trending1.jpg"
          cityName="Haifa"
          listing={5}
        />
        <TrendingCard
          src="/assets/images/trending1.jpg"
          cityName="Herzelia"
          listing={2}
        />
      </FlexRow>
    </>
  );
};
export default TrendingDestionationSection;