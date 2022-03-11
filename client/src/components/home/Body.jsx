import React from "react";
import Carousel from "../../ui/Carousel";
import Section from "../../ui/Section";
import TrendingDestionationSection from "./TrendingDestionationSection.jsx";
import classes from "../../css/home/Body.module.css";
import MallCarousel from "./MallCarousel";
const Body = () => {
  return (
    <div>
      <Section className={classes.container} title="Trending Destinations">
        <TrendingDestionationSection />
      </Section>
      <Section container={false} title="Malls">
        <MallCarousel borderRadius={true} />
      </Section>
    </div>
  );
};

export default Body;
