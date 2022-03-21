import React from "react";
import Section from "../../ui/Section";
import TrendingDestionationSection from "./TrendingDestionationSection.jsx";
import classes from "../../css/home/Body.module.css";
import MallSection from "./MallSection";
import { mallsData } from "../../mockData";
import CreditsSection from "./CreditsSection";
const Body = () => {
  return (
    <div>
      <Section
        container
        className={classes.container}
        title="Trending Destinations"
      >
        <TrendingDestionationSection />
      </Section>
      <Section title="Malls">
        <MallSection data={mallsData} />
      </Section>
      <Section
        container={true}
        className={classes.container}
        title="Plan The Vacation of Your Dreams"
      >
        <CreditsSection />
      </Section>
      <Section
        container={true}
        className={classes.container}
        title="Plan The Vacation of Your Dreams"
      >
        <CreditsSection />
      </Section>
    </div>
  );
};

export default Body;
