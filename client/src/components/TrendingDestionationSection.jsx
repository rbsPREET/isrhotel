import FlexRow from "../ui/FlexRow";
import Section from "../ui/Section";
import classes from "../css/TrendingDestionationSection.module.css";
import TrendingCard from "../ui/TrendingCard";
import { useState } from "react";
const TrendingDestionationSection = (props) => {
  return (
    <Section className={classes.container} title="Trending Destinations">
      <FlexRow className={classes.top2Destinations}>
        <TrendingCard
          src="/assets/images/trending1.jpg"
          cityName="test"
          listing={5}
        />
        <TrendingCard
          src="/assets/images/trending1.jpg"
          cityName="test"
          listing={5}
        />
      </FlexRow>
      <FlexRow className={classes.top3Destinations}>
        <TrendingCard
          src="/assets/images/trending1.jpg"
          cityName="test"
          listing={5}
        />
        <TrendingCard
          src="/assets/images/trending1.jpg"
          cityName="test"
          listing={5}
        />
        <TrendingCard
          src="/assets/images/trending1.jpg"
          cityName="test"
          listing={5}
        />
      </FlexRow>
    </Section>
  );
};
export default TrendingDestionationSection;
