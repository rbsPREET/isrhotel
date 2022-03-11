import React from "react";
import Section from "../../ui/Section";
import TrendingDestionationSection from "./TrendingDestionationSection.jsx";
import classes from "../../css/home/Body.module.css";
import MallSection from "./MallSection";
const Body = () => {
  return (
    <div>
      <Section className={classes.container} title="Trending Destinations">
        <TrendingDestionationSection />
      </Section>
      <Section container={false} title="Malls">
        <MallSection />
      </Section>
    </div>
  );
};

export default Body;
