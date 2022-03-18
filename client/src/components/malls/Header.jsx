import React, { useEffect } from "react";
import Carousel from "../../ui/Carousel";
import { GetMall } from "../../store/mall";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import FlexRow from "../../ui/FlexRow";
import classes from "../../css/malls/Header.module.css";

const Header = (props) => {
  return props.data.img ? (
    <Carousel data={props.data.img} template="mall-page" /> // TODO: disable the dots by passing props of dots off
  ) : (
    <FlexRow className={classes.oval} center={true}>
      <Oval color="#00BFFF" height={80} width={80} />
    </FlexRow>
  );
};

export default Header;
