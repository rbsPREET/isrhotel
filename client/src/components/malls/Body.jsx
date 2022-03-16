import React, { useEffect, useState } from "react";
import classes from "../../css/malls/Body.module.css";
import LocationIcon from "@material-ui/icons/LocationOnOutlined";
import StarIcon from "@material-ui/icons/Star";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import FlexRow from "../../ui/FlexRow";
import Section from "../../ui/Section";
import LabTabs from "../../ui/LabTabs";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { GetMall, UpdateMallReviewsStars } from "../../store/mall";
import { useLocation } from "react-router-dom";

const Body = () => {
  const location = useLocation(); // get the mall Id from the path
  const state = useSelector((state) => state.mall.information);
  const dispatch = useDispatch();
  const mallId = location.pathname.split("/")[2];

  // Redux Funcs Calls
  const handleStarsChange = (starValue) => {
    dispatch(
      UpdateMallReviewsStars({
        ...state.reviews,
        starValue,
        mallId,
      })
    );
  };

  useEffect(() => {
    dispatch(GetMall(mallId));
  }, [dispatch, mallId]);

  const tabSections = [
    {
      title: "Overview",
      data: state.description,
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

  let starsArr = [];
  let countReviews = 0;
  const reduceReviews = Object.entries(state.reviews.stars).reduce(
    (start, num) => (countReviews = countReviews + +num[1].count)
  );

  for (let index = 1; index <= 5; index++) {
    console.log(state.reviews.stars.four.value);
    if (state.reviews.stars.four.value >= index)
      starsArr.push({
        value: index,
        color: "gold",
      });
    else
      starsArr.push({
        value: index,
        color: "gray",
      });
  }
  return (
    <Section className={classes.container}>
      <div className={classes.left}>
        {/* Left side => Top */}
        <div className={classes.top}>
          <h1 className={classes.mainTitle}>{state.title} Hotel</h1>
          <FlexRow centerColumn>
            <LocationIcon style={{ marginLeft: "-5px" }} />
            &nbsp;
            <p className={classes.addressTitle}>{state.address}</p>
          </FlexRow>
          <FlexRow centerColumn>
            <p className={classes.stars}>
              {starsArr.map((star) => (
                <StarIcon
                  onClick={() => handleStarsChange(star.value)}
                  key={star.value}
                  htmlColor={star.color}
                />
              ))}
            </p>
            &nbsp;
            <span className={classes.addressTitle}>
              ({reduceReviews} reviews)
            </span>
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
            {Object.entries(state.amenities)?.map((item) => (
              <FlexRow key={item[0]} centerColumn customWidth={33}>
                {item[1].available ? (
                  <CheckBoxIcon htmlColor="green" />
                ) : (
                  <IndeterminateCheckBoxIcon htmlColor="red" />
                )}
                {item[1].text}
              </FlexRow>
            ))}
          </FlexRow>
        </div>
      </div>
      {/* Right side */}
      <div className={classes.right}>
        <div className={classes.card}>
          <SideBar hotelName={state.title} bookingTimes={bookingTimes} />
        </div>
      </div>
    </Section>
  );
};

export default Body;
