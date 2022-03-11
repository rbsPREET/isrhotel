import React from "react";
import Section from "../../ui/Section";
import TrendingDestionationSection from "./TrendingDestionationSection.jsx";
import classes from "../../css/home/Body.module.css";
import Carousel from "../../ui/Carousel";
import { mallsData } from "../../mockData";
const Body = () => {
  return (
    <div>
      <Section className={classes.container} title="Trending Destinations">
        <TrendingDestionationSection />
      </Section>
      <Section container={false} title="Malls">
        <Carousel data={mallsData} borderRadius={true} template="home-hotels" />
      </Section>
    </div>
  );
};

export default Body;
