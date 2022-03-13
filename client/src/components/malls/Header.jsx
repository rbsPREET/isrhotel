import React, { useEffect } from "react";
import Carousel from "../../ui/Carousel";
import { GetMall } from "../../store/mall";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import FlexRow from "../../ui/FlexRow";
import classes from "../../css/malls/Header.module.css";

const Header = () => {
  const location = useLocation(); // get the mall Id from the path
  const state = useSelector((state) => state.mall);
  const dispatch = useDispatch();
  const mallId = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(GetMall(mallId));
  }, [dispatch, mallId]);

  return state.img ? (
    <Carousel data={state.img} template="mall-page" /> // TODO: disable the dots by passing props of dots off
  ) : (
    <FlexRow className={classes.oval} center>
      <Oval color="#00BFFF" height={80} width={80} />
    </FlexRow>
  );
};

export default Header;
