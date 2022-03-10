import FlexRow from "../ui/FlexRow";
import Section from "../ui/Section";
import classes from '../css/TrendingDestionationSection.module.css'
const TrendingDestionationSection = (props) => {
  return (
    <Section className={classes.container} title="Trending Destinations">
      <FlexRow className={classes.top2Destinations}>
          <div>sadsa</div>
          <div>sadsa</div>
      </FlexRow>
      <FlexRow className={classes.top3Destinations}>
          <div>sadsa</div>
          <div>sadsa</div>
          <div>sadsa</div>
      </FlexRow>
    </Section>
  );
};
export default TrendingDestionationSection;
