import React from "react";
import classes from "../../css/malls/Body.module.css";
import LocationIcon from "@material-ui/icons/LocationOnOutlined";
import StarIcon from "@material-ui/icons/Star";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import FlexRow from "../../ui/FlexRow";
import Section from "../../ui/Section";
import LabTabs from "../../ui/LabTabs";
import CardTemp from "../../ui/CardTemp";

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

  const amenities = [
    "Elevator in building",
    "Friendly workspace",
    "Instant Book",
    "Wireless Internet",
    "Free parking on premises",
    "Free Hookers",
  ];

  const bookingTimes = [
    {
      value: "9:00 am - 9:30 am",
    },
    {
      value: "10:00 am - 10:30 am",
    },
    {
      value: "11:00 am - 11:30 am",
    },
    {
      value: "13:00 pm - 13:30 pm",
    },
  ];

  let stars = [];
  for (let index = 0; index < 5; index++) {
    stars.push(<StarIcon key={index} htmlColor="gold" />);
  }

  return (
    <Section className={classes.container}>
      <div className={classes.left}>
        {/* Left side => Top */}
        <div className={classes.top}>
          <h1 className={classes.mainTitle}>Zona Hotel</h1>
          <FlexRow centerColumn>
            <LocationIcon style={{ marginLeft: "-5px" }} />
            &nbsp;
            <p className={classes.addressTitle}>
              5555 Sharmuta Street, Tel-Aviv
            </p>
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
        {/* Left side => Amenities */}
        <div className={classes.mid}>
          <h1 className={classes.title}>Amenities</h1>
          <FlexRow wrap customWidth={70}>
            {amenities.map((item) => (
              <FlexRow centerColumn customWidth={33}>
                <CheckBoxIcon htmlColor="red" /> &nbsp;
                {item}
              </FlexRow>
            ))}
          </FlexRow>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.card}>
          <CardTemp bookingTimes={bookingTimes} />
        </div>
      </div>
    </Section>
  );
};

export default Body;
