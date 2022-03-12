import React from "react";
import classes from "../../css/malls/Body.module.css";
import LocationIcon from "@material-ui/icons/LocationOnOutlined";
import StarIcon from "@material-ui/icons/Star";
import FlexRow from "../../ui/FlexRow";
import Section from "../../ui/Section";
import LabTabs from "../../ui/LabTabs";

const Body = () => {
  const tabSections = [
    {
      title: "Overview",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis quam in felis vestibulum consequat. Ut eget est quis leo feugiat eleifend. Praesent dapibus gravida pharetra.",
    },
    {
      title: "Pricing",
      data: "test2",
    },
    {
      title: "Location",
      data: "test3",
    },
  ];
  let stars = [];
  for (let index = 0; index < 5; index++) {
    stars.push(<StarIcon key={index} htmlColor="gold" />);
  }
  return (
    <Section className={classes.container}>
      <div className={classes.left}>
        <h1 className={classes.title}>Zona Hotel</h1>
        <FlexRow centerColumn>
          <LocationIcon style={{ marginLeft: "-5px" }} />
          &nbsp;
          <p className={classes.addressTitle}>5555 Sharmuta Street, Tel-Aviv</p>
        </FlexRow>
        <FlexRow centerColumn>
          <p className={classes.stars}>{stars.map((star) => star)}</p>
          &nbsp;
          <span className={classes.addressTitle}>(10 reviews)</span>
        </FlexRow>
        <div>
          <FlexRow>
            <LabTabs tabSections={tabSections} />
          </FlexRow>
        </div>
      </div>
      <div className={classes.right}>
        <h1 className={classes.title}>Zona Hotel</h1>
      </div>
    </Section>
  );
};

export default Body;
