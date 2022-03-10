import React from "react";
import Mall from "./Mall";
import classes from "../css/MallsList.module.css";
import { mallsData } from "../mockData";
import { Carousel } from "@trendyol-js/react-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Section from "../ui/Section";


const MallsListSection = () => {
  return (
    <Section>
        <Carousel
          show={3}
          slide={2}
          swiping={true}
          rightArrow={<ArrowForwardIosIcon />}
          leftArrow={<ArrowBackIosNewIcon />}
          infinite={true}
          transition={2}
        >
          {mallsData.map((item) => (
            <Mall key={item} item={item} />
          ))}
        </Carousel>
     </Section>
  );
};

export default MallsListSection;
