import React from "react";
import Carousel from "../ui/Carousel";
import Section from "../ui/Section";
import TrendingDestionationSection from "./TrendingDestionationSection.jsx";
import classes from "../css/Body.module.css";
const Body = () => {
  return (
    <div>
      <Section className={classes.container} title="Trending Destinations">
        <TrendingDestionationSection />
      </Section>
      <Section container={false} title="Malls">
        <Carousel borderRadius={true} />
      </Section>
    </div>
  );
};

export default Body;
